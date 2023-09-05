import React from 'react';
import image from "../../imgs/manage.png"

//IMPORTANDO O CSS
import './home.css';

export default () => {

    return (
        <section className='home'>
            <div className="landing">
                <div className="info">
                    <img src={image} alt="jssj" />
                    <h1>Manage Your Tasks</h1>
                    <p>Organiza all your to-do's in lists and projects. Color tag them to set priorities and categories.</p>
                </div>
                <div className="buttons">
                    <a href='/login' className='a_button'>Login</a>
                    <a href='/register' className='a_button'>Register</a>
                </div>
            </div>
            
        </section>
    )
}