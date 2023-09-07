import React, { useState } from 'react';
import Logo from "../../imgs/register.png"
//IMPORTANDO O CSS
import '../login/login.css';

export default () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section className='auth'>
            <div className="info">
                <a href="/">
                    <h2>Quick Note</h2>
                </a>
                <a href="/">
                    <img src={Logo} alt='logo' />
                </a>
                
            </div>
            <div className="authForm">
                <form action="POST">
                    <h3>Register</h3>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Username' />
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
                    <button>register</button>
                </form>
                <hr />
                <p>Already have an account? <a href="/login">login</a></p>
            </div>
        </section>
    )
}