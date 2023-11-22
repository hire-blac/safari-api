require('dotenv').config()
const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  console.log(token);
  next()
  
  res.status(401).json({
    "error": "Unauthorized"
  }) 
}

module.exports = isAuthenticated;