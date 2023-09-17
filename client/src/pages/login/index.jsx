import React, { useContext, useState } from 'react';
import Logo from "../../imgs/login.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/authContext';
import { toast } from 'react-toastify';

//IMPORTANDO O CSS
import './login.css';

export default () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const info = {
                "username": username,
                "password": password
            }
            const res = await axios.post("https://task-codex-2.onrender.com/auth/login", info);
            
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/dashboard")
            toast.success("You are logged in!")
        } catch (err) {
            toast.error("Usuário não encontrado(a) !");
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    }
    

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
                    <h3>Login</h3>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Username' />
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
                    <button onClick={handleLogin}>login</button>
                </form>
                <hr />
                <p>Don't have an account? <a href="/register">register</a></p>
            </div>
        </section>
    )
}