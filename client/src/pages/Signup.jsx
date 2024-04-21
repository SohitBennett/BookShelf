
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
// import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // const handleRegister = (e) => {
    //     // Handle registration logic here
    //     e.preventDefault()
    //     axios.post('http://localhost:3001/register', {name,email, password})
    //     .then(result => console.log(result))
    //     navigate('/login')
    //     .catch(err=> console.log(err))
    // };

    const handleLogin = () => {
        // Handle login logic here
        console.log('Login clicked');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form style={{ background: '#f4f4f4', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                <button onClick={handleLogin} style={{ background: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', marginRight: '10px' }}>Register</button>
                

                <Link to="/login" onClick={handleLogin} style={{ background: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>Login</Link>
                </form>
        </div>
    );
}

export default Signup;

//made a change in line 51 changing handleregister -> handleLogin