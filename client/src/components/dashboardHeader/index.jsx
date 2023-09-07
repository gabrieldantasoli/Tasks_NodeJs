import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { AuthContext } from '../../context/authContext';

//IMPORTANDO O CSS
import './dashboardHeader.css';

export default ({currentLink}) => {

    const [types, setTypes] = useState([]);

    const { user, dispatch } = useContext(AuthContext);

    const handleGetTypes = async () => {
        const res = await axios.get(`/type_tasks/${user._id}`);
        const data = res.data;

        for (let index in data) {
            const type = await axios.get(`/user_tasks/count/${user._id}/${data[index]._id}`);
            data[index].len = type.data;
            console.log(data[index]);
        }

        setTypes(data);
    }

    const handleLogout = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
    }

    useEffect(() => {
        handleGetTypes();
    }, []);

    return (
        <section className='dashboardHeader'>
            <ul>
                <li className={currentLink == "all" ? "active" : ""}>Dashboard</li>

                {
                    types.map((type, index) => (
                        <li key={index}><span>{type.type_of}</span> <span style={{"background-color": type.color}}>{type.len}</span></li>
                    ))
                }
            </ul>

            <button onClick={handleLogout}>LogOut</button>
        </section>
    )
}