require('dotenv').config()
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const tokenKey = process.env.JWT_TOKEN

// function to create jwt token
const createToken = (id) => {
  return jwt.sign({ id }, tokenKey, { expiresIn: '1h' });
}

// register new user
exports.register = async(req, res) =>{
  let {name, email, password} = req.body

  // hash password
  const salt = await bcrypt.genSalt()
  password = await bcrypt.hash(password, salt);

  User.create({
    name,
    email,
    password
  })
  .then(user => {
    // create authentication token
    const token = createToken(user.id)

    // send response with the token
    res.status(200).json({
      "message": "User registered successfully",
      "access-token": token,
    })
  }).catch(err => {
    res.status(400).json({
      "message": err.message
    })
  })
}

// user login
exports.login = async(req,res)=>{
  const {email, password} = req.body;

  // find user bby email
  const user = await User.findOne({email: email})
  if (user){
    // compare password
    const passwordIsValid = await bcrypt.compare(password, user.password)

    if (passwordIsValid){
      // create access token
      const token = createToken(user.id)

      // send response with token
      res.status(200).json({
        "message": "User Logged in",
        "access-token": token
      })
    } else {
      res.status(200).json({
        "message": "Login crdentials incorrect"
      })
    }
  } else {
    res.status(200).json({
      "message": "Login crdentials incorrect"
    })
  }
}