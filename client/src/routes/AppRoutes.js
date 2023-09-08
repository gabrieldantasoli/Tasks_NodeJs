import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AddTypeTask, Dashboard, Home, Login, Register } from '../pages';
import { AuthContext } from '../context/authContext';
import AddTask from '../pages/addTask';


export default () => {

    const { user } = useContext(AuthContext);

    return (
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/login' element={<Login />} /> 

            <Route path='/register' element={<Register />} />

            { user != null ? 
                <Route path='/dashboard' element={<Dashboard />} /> 
                : 
                <Route path='/dashboard' element={<Login />} /> 
            }

            { user != null ? 
                <Route path='/dashboard/add_type_task' element={<AddTypeTask />} /> 
                : 
                <Route path='/dashboard/add_type_task' element={<Login />} /> 
            }

            { user != null ? 
                <Route path='/dashboard/add_task' element={<AddTask />} /> 
                : 
                <Route path='/dashboard/add_task' element={<Login />} /> 
            }


            <Route path='/*' element={<Home />} />
        </Routes>
    )
}