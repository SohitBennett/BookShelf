import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
// import axios from 'axios'
// import { useHistory } from 'react-router-dom';



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    // const history = useHistory();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // const handleLogin = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:3001/login', {email, password})
    //     .then(result => {
    //         console.log(result)
    //         if(result.data === "Success"){
    //             // history.push('/home', { email: email });
    //             navigate('/home')
                
    //         }
    //     })
    //     .catch(err=> console.log(err))
        
    // };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form style={{ background: '#f4f4f4', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                <button onClick={handlePasswordChange} style={{ background: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', width: '100%' }}>Login</button>

            </form>
        </div>
    );
}

export default Login;

//made a change in line 46 changing handleLogin -> handlePasswordChange