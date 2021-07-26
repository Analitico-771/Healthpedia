const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3001
const path = require('path');

const apiKey = process.env.REACT_APP_API_KEY;
const secrets = process.env.REACT_APP_SECRETS;

app.use(express.static(path.join(__dirname, '/public')))

app.use(require('./routes/favorites'));

app.use(require('./routes/authentication'));

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})
