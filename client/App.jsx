import React, { Component} from 'react';
import { BrowserRouter, Switch, Routes, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Profile from './components/profile.jsx';

/** WHAT I NEED ON THE FRONT END
 * A basic home page for signing in. So I'll need two inputs for entering a username/password, and two buttons (sign in, create account)
 * There can also be a page for creating an account that the user will be redirected to upon clicking the create account button
 * 
 * Most importantly, a third page that will host all the information the user is looking for. On this page, I want to serve data stored in the database
 * and allow for the user to add or remove games. So it will need an input field for adding games, and each game should have a "finished/delete" option
 * next to it.
 */

// class App extends Component {
//     render(){
//         return (
//           <Homepage/>
//           );
//     }
// }
// const routes = createBrowserRouter([{path : '/', element: <Login/>}, {path : '/signup', element: <Signup/>}, {path : '/profile', element: <Profile/>} ]);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
    // <RouterProvider value={routes} />
  )
}

export default App;