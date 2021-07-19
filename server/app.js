const express = require('express');
const app = express();
const PORT = 3001
const dotenv = require('dotenv').config();

const apiKey = process.env.REACT_APP_API_KEY;
const secrets = process.env.REACT_APP_SECRETS;



app.use(require('./routes/authentication'));

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})


// const jwt = require('jwt-simple');



// let userInfo = {
//     id: '12345',
//     userName : 'Veronica', 
//     email: 'me@me.com'
// }

// const token = (user) => {
    
//     let timestamp = new Date().getTime();

//     return jwt.encode({sub: user.id, name: user.userName, iat: timestamp}, "lasdkj;flsajl;dfjal;sdjfl;askjdfl;ksajdl;kfs")
// }

// let tokenID = token(userInfo);

// console.log(tokenID);

// console.log(jwt.decode(tokenID, "lasdkj;flsajl;dfjal;sdjfl;askjdfl;ksajdl;kfs"));