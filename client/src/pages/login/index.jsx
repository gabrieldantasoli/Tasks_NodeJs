import React, { useState } from 'react';
import Logo from "../../imgs/manage.png"
//IMPORTANDO O CSS
import './login.css';

export default () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section className='auth'>
            <div className="info">
                <h2>NAME_LOGO</h2>
                <img src={Logo} alt='logo' />
            </div>
            <div className="authForm">
                <form action="POST">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} value={username} />
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </form>
                <hr />
                <p>Already have an accoubt? <a href="/register">register</a></p>
            </div>
        </section>
    )
}