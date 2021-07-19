const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


const bcrypt = require('bcryptjs');  //encryption
const db = require('../models'); //access to users model
// const config = require('../secrets'); //give access to jwt secret
const env = require('../config/config')


/**
 * Local Strategy
 */

let options = {
    usernameField: 'email'
}
let localLogin = new LocalStrategy(options, async (email, password, done)=>{
    try{
        //check to see if email is in our db 

        let records = await db.users.findAll({where: {email: email}}); //array of objects [{}, {}]

        if(records !== null){
            //email was found, check password

            bcrypt.compare(password, records[0].password, (err, isMatch)=>{
                //check if error
                if(err){
                    return done(err);
                }

                //mismatch passwords
                if(!isMatch){
                    return done(null, false)
                }

                //valid user

                return done(null, records[0])
            })
        }
        else{
            // no email found, exit with error
            return done(null, false)
        }
    }
    catch(error){
        //can't access db
        return done(error)
    }

})


/**
 * JWT Strategy
 */

let jwtOptions = {
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey: env.JWT_SECRET,
    passReqToCallback: true
}

let jwtLogin = new JwtStrategy(jwtOptions, async (req, payload, done)=>{
   
    console.log(req.headers.authorization);
    try{
        
        let user = await db.users.findByPk(payload.sub);

        
        if(user){
            //success
           
            done(null, user)
        }
        else{
            //user wasn't found 
           
            done(null, false)
        }

    }
    catch(err){
        console.log('break 4');
        return done(error)
    }
})

passport.use(localLogin);
passport.use(jwtLogin);