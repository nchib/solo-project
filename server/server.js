const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const dotenv = require('dotenv').config()
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

// const profileRouter = require('./routes/profileRouter');


const userController = require('./controllers/userController');
const listController = require('./controllers/listController');

mongoose.connect(process.env.URI)
.then(() => {console.log('connected to database')})
.catch((error) => {console.log(error)})

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET, POST, DELETE, PATCH',
    allowedHeaders: 'Content-Type',
    credentials: true
  }

app.use(morgan('tiny'))
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/build', express.static(path.join(__dirname, '../build')));

// app.post('/signupTest', (req, res) =>{
//     console.log(req.body);
//     res.status(200).send('hello');
// })

//Our landing page GET request. When loading the server, this is the first page that appears. Since it is returning the index.html, I need the script running
//there to have all the things a home page needs. 
app.get('/api', (req, res) => {
    console.log('sending GET request');
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

// app.post('/api',userController.verifyUser, (req, res)=>{
//   console.log('Attempting to sign in...');
//   return res.redirect('/api/profile');
// })

//serve the signup page when redirected to it.
app.get('/api/signup', (req, res)=> {
    console.log('directing to /signup page')
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
})


app.post('/api/signup', userController.createUser, (req, res) => {
    // what should happen here on successful sign up?
    //on successful signup, the user should be redirected to the main page of the app
    console.log('Redirecting to ' + res.locals.url);
    res.status(200).json({redirect: res.locals.url});
  });

app.get('/api/profile', listController.getGames, (req, res) => {
    console.log(`Line 65 of server.js: ${typeof res.locals.list} ${res.locals.list}`);
    return res.status(200).send(res.locals.list);
})

app.post('/api/profile', listController.addGames, (req, res) =>{
  console.log('Adding game to list...')
  return res.status(200);
  // .send(res.locals.gameList);
})

app.listen(PORT,() => {console.log(`server is listening on PORT ${PORT}`)} );