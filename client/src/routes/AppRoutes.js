import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Home, Login, Register } from '../pages';


export default () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}