import React, { useState, useEffect } from 'react';
import { useNavigate, redirect } from 'react-router-dom';

const Signup = () => {
    const [username, createUsername] = useState('');
    const [password, createPassword] = useState('');
    const [email, setEmail] = useState('');



    // const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            fetch("/api/signup", {
                headers: {"Content-Type": 'application/json'},
                method: 'POST',
                body: JSON.stringify({email: email, username: username, password: password})
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


    return (
    <>
        <header>
            <h1>Sign Up</h1>
        </header>
        <form onSubmit={handleSubmit}>
            <label for="Email">Email Address</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="suggestion@mail.com" id="user" name= {username} />
            <label for="Username">Username</label>
            <input value={username} onChange={(e) => createUsername(e.target.value)} placeholder="Enter desired username here" id="user" name= "user" />
            <label for="Password">Password</label>
            <input value={password} type="password" onChange={(e) => createPassword(e.target.value)} placeholder="**************" id="password" name= "password" />
            <button>Sign up</button>
        </form>

    </>
    )
}

export default Signup;