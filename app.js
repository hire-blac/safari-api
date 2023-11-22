require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const specieRoutes = require('./routes/specieRoutes')
const AnimalRoutes = require('./routes/AnimalRoutes')
const userRoutes = require('./routes/userRoutes')

// create express app
const app = express()

// environment variables
const db_url = process.env.DB_URL  // database url gotten from .env
const port = process.env.PORT || 3000  // database url gotten from .env

// connect to database
mongoose.connect(db_url)
.then(()=>{
  console.log("successfully connected to the database");
  // start up server to listen for requests
  app.listen(port, ()=>{
    console.log(`Server listening on port ${port} ...`);
  })
})
.catch((err)=>{
  console.log(err.message);
})

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// routes
app.get('/', (req, res)=>{
  res.json({
    message: "Welcome to our Safari API"
  })
})

app.use(userRoutes);
app.use(specieRoutes);
app.use(AnimalRoutes);