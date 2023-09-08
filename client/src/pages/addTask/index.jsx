import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../context/authContext.js";
import {toast} from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//IMPORTANDO O CSS
import '../addTypeTask/addTypeTask.css';

export default () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [types, setTypes] = useState([]);

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskPriority, setTaskPriority] = useState(1);
    const [taskDateDelivery, setTaskDateDelivery] = useState('');
    const [taskObs, setTaskObs] = useState('');
    const [taskCompletePorcent, setTaskCompletePorcent] = useState(0);
    const [selectedType, setSelectedType] = useState('');

    const handleTypeChange = (e) => {
        console.log(e.target.value);
        setSelectedType(e.target.value);
    };

    const handleGetTypes = async () => {
        try {
          const res = await axios.get(`/type_tasks/${user._id}`);
          const data = res.data;
      
          let dict = {};
          for (let index in data) {
            dict[data[index]._id] = [data[index].color, data[index].type_of];
          }
      
          setTypes(dict);
        } catch (error) {
          console.error("Erro ao buscar tipos de tarefas:", error);
        }
    };
    
    const handleCreateTask = async (e) => {
        e.preventDefault();
        const task = {
            "user": user._id,
            "type_task": selectedType,
            "task_name": taskName,
            "task_description": taskDescription,
            "task_priority": taskPriority,
            "task_date_delivery": taskDateDelivery,
            "task_obs": taskObs.split(","),
            "task_complete_porcent": taskCompletePorcent
        }

        try {
            const res = axios.post(`/user_tasks`, task);
            toast.success("Task Created Successfuly!");
            navigate("/dashboard");
        } catch (err) {
            toast.error("Something Went Wrong!");
        }
    };

    useEffect(() => {
        handleGetTypes(); 
    }, []);

    return (
        <section className='addTypeTask'>
            <h2>Add Task</h2>

            <form>
                <label htmlFor=""></label>

                {/* Task Type Dropdown */}
                <div>
                    <label htmlFor="task_type">Task Type:</label>
                    <select
                        id="task_type"
                        value={selectedType}
                        onChange={handleTypeChange}
                        required
                    >
                        <option value="" disabled>Select a Task Type</option>
                        {Object.keys(types).map((typeId) => (
                            <option key={typeId} value={typeId}>
                                {types[typeId][1]}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                <label htmlFor="task_name">Task Name:</label>
                <input
                    type="text"
                    id="task_name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    required
                />
                </div>
                <div>
                <label htmlFor="task_description">Task Description:</label>
                <input
                    type="text"
                    id="task_description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    required
                />
                </div>
                <div>
                <label htmlFor="task_priority">Task Priority (1-10):</label>
                <input
                    type="number"
                    id="task_priority"
                    value={taskPriority}
                    onChange={(e) => setTaskPriority(e.target.value)}
                    required
                    min="1"
                    max="10"
                />
                </div>
                <div>
                <label htmlFor="task_date_delivery">Task Delivery Date: (yyyy-mm-dd)</label>
                <input
                    type="text"
                    id="task_date_delivery"
                    value={taskDateDelivery}
                    onChange={(e) => setTaskDateDelivery(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="task_obs">Task Observations (comma-separated):</label>
                <input
                    type="text"
                    id="task_obs"
                    value={taskObs}
                    onChange={(e) => setTaskObs(e.target.value)}
                    required
                />
                </div>
                <div>
                <label htmlFor="task_complete_porcent">
                    Task Completion Percentage (0-100):
                </label>
                <input
                    type="number"
                    id="task_complete_porcent"
                    value={taskCompletePorcent}
                    onChange={(e) => e.target.value > 100 ? setTaskCompletePorcent(100) : setTaskCompletePorcent(e.target.value)}
                    required
                    min="0"
                    max="100"
                />
                </div>
                
                <button onClick={handleCreateTask}>Create Task</button>
            </form>
        </section>
    )
}