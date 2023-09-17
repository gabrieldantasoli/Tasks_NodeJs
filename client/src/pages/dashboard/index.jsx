import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { AuthContext } from '../../context/authContext';

//IMPORTANDO O CSS
import './dashboard.css';
import DashboardHeader from '../../components/dashboardHeader';

export default () => {

    const [types, setTypes] = useState([]);
    const [currentLink, setCurrentLink] = useState("all");

    const { user, dispatch } = useContext(AuthContext);

    const handleGetTypes = async () => {
        const res = await axios.get(`https://task-codex-2.onrender.com/type_tasks/${user._id}`);
        const data = res.data;

        for (let index in data) {
            const type = await axios.get(`https://task-codex-2.onrender.com/user_tasks/count/${user._id}/${data[index]._id}`);
            data[index].len = type.data;
        }

        setTypes(data);
    }

    const handleLogout = async (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        dispatch({ type: "LOGOUT" });
    }

    useEffect(() => {
        handleGetTypes();
    }, []);

    return (
        <section className='dashboardHeader'>
            <div className="header">
                <ul>
                    <li onClick={(e) => setCurrentLink("all")} className={currentLink == "all" ? "active" : ""}>
                        Dashboard
                    </li>

                    {
                        Array.isArray(types) &&
                        types.map((type, index) => (
                            <li 
                                key={index} className={currentLink == type.type_of ? "active" : ""}>
                                <span>{type.type_of}</span> <span style={{"backgroundColor": type.color}}>{type.len}</span>
                            </li>
                        ))
                    }

                </ul>

                <button onClick={handleLogout} className='log'>LogOut</button>
            </div>
            { currentLink == "all" ? <DashboardHeader /> : ""}
            
        </section>
    )
}
