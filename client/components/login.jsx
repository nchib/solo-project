import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [button, setClick] = useState(false);
 

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            fetch("/api", {
                headers: {"Content-Type": 'application/json'},
                method: 'POST',
                body: JSON.stringify({username: username, password: password})
            })
            .then (data => data.json())
            .then (data => {

                console.log(data);
                // redirect(data.redirect)
                window.location.href = `${window.location.href.split('/')[0]}/profile`
            })
            // .then (() => {navigate(data.redirect)})
        } catch(error) { console.log(error)};
    }
    const navigate = useNavigate();

    function handleClickSignup() {
        navigate('/signup');
    }

    function handleClickLogin(){
        navigate('/profile');
    }

    // if (button) {
    //     return (
    //      <Navigate to='signup'/>
    //     )
    // };

    return (
    <>
        <header>
           <h1>Home Page!!</h1> 
        </header>
        
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username here" id="user" name="user" />
            <label>Password</label>
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="**************" id="password" name="password" />
        </form>
            <button onClick={handleClickLogin}>Log in</button>

   
        <button onClick={handleClickSignup}>
            Don't have an account? Click here to sign up.</button>
        {/* <button onClick={() => setClick(true)}>Don't have an account? Click here to sign up.</button> */}

    </>
    )
}

export default Login;