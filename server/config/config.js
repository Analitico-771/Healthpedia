const env = require('dotenv').config()

   const development = {
    username: process.env.REACT_APP_DATABASE_USERNAME,
    password: process.env.REACT_APP_DATABASE_PASSWORD,
    database: process.env.REACT_APP_DATABASE_USERNAME,
    host: "batyr.db.elephantsql.com",
    dialect: "postgres"
  }

  const JWT_SECRET = process.env.REACT_APP_SECRETS;
  

exports.development = development;
exports.JWT_SECRET = JWT_SECRET;