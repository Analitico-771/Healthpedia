const express = require('express');
const router = express.Router();
//db
const db = require('../models');
// const env = require ('dotenv').config();
const env = require('../config/config')
//body-parser
router.use(express.urlencoded({extended: false})) //scrape email and password form request header
router.use(express.json())
//encryption
const bcrypt = require('bcryptjs'); //used to encrypt passwords
//jwt
const jwt = require('jwt-simple');
//passport
const passport = require('passport');
require('../auth/index'); //import all of passport auth stuff
let requireLogin = passport.authenticate('local', {session: false});
let requireJwt = passport.authenticate('jwt', {session: false})
/**
 * This function returns a jwt
*/
const token = (user) => {
    let timestamp = new Date().getTime();  //current time
    return jwt.encode({sub: user.id, iat: timestamp}, env.JWT_SECRET)
}
router.get('/', (req, res) => {
    res.send('home page')
})
router.get('/checkAuth', requireJwt, (req, res) => {
    res.send('success')
})
/**
 * signing up or logging in with credentials
 */
router.post('/login', requireLogin, (req, res) => {
    //send a token back to client
    res.json({token: token(req.user)})
    
})
/**
 * new registration. someone is signing up for your site
 */
router.post('/register', async (req, res) => {
    //collect information
    //body-parser to parse off of header
    // email, password
    let email = req.body.email;
    //encrypt the password
    let password = bcrypt.hashSync(req.body.password, 8)
    //add to database  - if email already exists, then don't insert
    //on success 
        //send back json web token 
        //place the newly created db record id on token
    try{
        let records = await db.users.findAll({where:  {email: email}});
        if(records.length === 0){
            //unique user, so add to db
            let user = await db.users.create({email: email, password: password});
            let jwtToken = token(user);
            return res.json({token: jwtToken})
        }
        else {
            //email was found in our db, return an error
            return res.status(422).send({error: 'Email already exits'})
        }
    }
    catch(error){
        //send back error, can't access database
        return res.status(423).send({error: `Can't access database`})
    }
})
module.exports = router;