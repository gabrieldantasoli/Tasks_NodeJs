import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Home, Login, Register } from '../pages';
import { AuthContext } from '../context/authContext';


export default () => {

    const { user } = useContext(AuthContext);

    return (
        <Routes>
            
            { user != null ? 
                <Route path='/' element={<Dashboard />} /> 
                : 
                <Route path='/' element={<Home />} />
            }
            

            { user != null ? 
                <Route path='/login' element={<Dashboard />} /> 
                : 
                <Route path='/login' element={<Login />} /> 
            }

            { user != null ? 
                <Route path='/register' element={<Dashboard />} /> 
                : 
                <Route path='/register' element={<Register />} />
            }

            { user != null ? 
                <Route path='/dashboard' element={<Dashboard />} /> 
                : 
                <Route path='/dashboard' element={<Login />} /> 
            }

            <Route path='/*' element={<Home />} />
        </Routes>
    )
}