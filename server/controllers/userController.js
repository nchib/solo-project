const User = require('../models/userModel');

const userController = {};

/**Middlewares needed:
 * Getting all of the users in the db
 * Creating a user
 * Verifying a user
 */

userController.getAllUsers = (req, res, next) => {
    User.find({}, (err, users) => {
      // if a database error occurs, call next with the error message passed in
      // for the express global error handler to catch
      if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
      
      // store retrieved users into res.locals and move on to next middleware
      res.locals.users = users;
      return next();
    });
  };
  
  /**
  * createUser - create and save a new User into the database.
  */
  userController.createUser = (req, res, next) => {
    //users are an object that contain three properties: an email, a username and a password
    console.log(`Request body email is ${req.body.email}`);
    console.log(`Request body username is ${req.body.username}`);
    console.log(`Request body password is ${req.body.password}`);

    //if the request body does not have a truthy value (string is empty), invoke an error
    //Note: DO NOT ADD AN ERROR ARGUMENT TO THE FUNCTION, THIS BREAKS THE CODE
    //JUST PASS LITERALLY ANYTHING ELSE INTO THE NEXT STATEMENT
    // if (!req.body.username || !req.body.password) {
    //   console.log(req.body);
    //   res.locals.url = '/signup?e=' + encodeURIComponent('Incorrect username or password');
    //   return next();
    //   // return next('error');
    //   // return next({log: 'error in user controller', 
    //   //   message: { err: 'userController.createUser: ERROR: Incorrect data received' }})
    // }
  
    //make use of our imported User from userModel to add the information posted by the request
    //into our database of users
  
    User.create({
      email: req.body.email,
      username: req.body.username, 
      password: req.body.password
    })
      .then(() => res.locals.url = '/profile')
      .then(() => console.log('User has been saved to database.'))
      .then(() => next())
  };
  
  /**
  * verifyUser - Obtain username and password from the request body, locate
  * the appropriate user in the database, and then authenticate the submitted password
  * against the password stored in the database.
  */
  userController.verifyUser = (req, res, next) => {
    // write code here
    //store the req.body (which should be an object) in a new constant, then use User.find
    //to compare the username in the req.body to usernames stored in the database.
    const credentials = req.body;
    console.log(`Request body is currently: ${req.body}`);
    
    //User.find expects an object as an argument. Code breaks if it is not an object
    User.findOne({ username: credentials.username })
      .then ((user) => {
        if (user == null || user.password !== credentials.password){
          //redirect to /signup if the user doesn't exist
          res.locals.url = '/signup';
        }
        else {
          console.log(user);
          res.locals._id = user._id.toString();
          res.locals.url = '/profile';
        }
      })
      //reminder: if using asynchronous functions, the next() must be part of said function using .then.
      //otherwise, it will skip everything since it is synchronous
      .then (() => next());
  };


  // userController.deleteAllUsers = (req, res, next) => {
  //   User.deleteMany({})
  //   .then (() => next())
  // }




  
  module.exports = userController;
  

