import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { AuthContext } from '../../context/authContext';
import './index.css'

export default ({type}) => {

    const [tasks, setTasks] = useState([]);
    const [types, setTypes] = useState({});

    const { user } = useContext(AuthContext);

    const getUserTasks = async () => {
        const res = await axios.get(`/user_tasks/${user._id}`);
        console.log(res.data);
        setTasks(res.data);
    }

    const handleGetTypes = async () => {
        try {
          const res = await axios.get(`/type_tasks/${user._id}`);
          const data = res.data;
      
          let dict = {};
          for (let index in data) {
            dict[data[index]._id] = data[index].color;
          }
          console.log(dict);
      
          setTypes(dict);
        } catch (error) {
          console.error("Erro ao buscar tipos de tarefas:", error);
        }
      };
      

    useEffect(() => {
        getUserTasks();   
        handleGetTypes(); 
    }, []);

    return (
        <section className='dashboardItem'>
            <header>
                <h2>Dashboard</h2>
                <div className='task_buttons'>
                    <a href='/dashboard/add_type_task'>Add Type Of TAsk</a>
                    <a href='/dashboard/add_task'>New Task</a>
                </div>
                <hr />
            </header>
            { tasks.length == 0 ? <p className='center'>Nenhuma task encontrada! Adicione Alguma.</p> : ""}
            <div className="tasks">
                {
                    tasks.map((item, index) => (

                        <a href={`/dashboard/task_page/${item._id}`}>
                            <div key={index} className="taskItem">
                                <p className='name' style={{"backgroundColor": types[item.type_task]}}>{item.task_name}</p>
                                <p>Delivery: {item.task_date_delivery}</p>
                                <p>Priority: {item.task_priority}/10</p>
                                <p>Complete: {item.task_complete_porcent}%</p>
                            </div>
                        </a>
                        

                    ))
                }
            </div>
        </section>
    )
}
