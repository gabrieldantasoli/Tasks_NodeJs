import React, { useContext, useEffect, useState } from 'react'
import './index.css';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default () => {
    const [todo, setTodo] = useState({});
    const [type, setType] = useState({});

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

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const removeTask = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.delete(`/user_tasks/${id}`);
            navigate("/dashboard")
            toast.success("A tarefa foi deletada!")
            
        } catch (error) {
            toast.error("A tarefa não foi deletada!");
        }
    }

    const handleUpdateTask = async (e) => {
        e.preventDefault();
        const task1 = {
            "user": user._id,
            "type_task": type._id,
            "task_name": taskName,
            "task_description": taskDescription,
            "task_priority": taskPriority,
            "task_date_delivery": taskDateDelivery,
            "task_obs": taskObs.split(","),
            "task_complete_porcent": taskCompletePorcent
        }
        console.log(task1);

        try {
            const res = axios.put(`/user_tasks/${id}`, task1);
            toast.success("Task Created Successfuly!");
            navigate(`/dashboard/`);
        } catch (err) {
            toast.error("Something Went Wrong!");
        }
    };

    const getData = async () => {
        const res = await axios.get(`/user_tasks/${user._id}/${id}`);
        const data = res.data;

        const id1 = data[0].type_task;

        const res1 = await axios.get(`/type_tasks/${user._id}/${id1}`);

        setType(res1.data[0])
        setTodo(data[0]);
    }

    useEffect(() => {
        getData();
    }, []);
    
    return <div className='main'>
        <div className='taskPage'>
            <h2 className='title'>{todo.task_name} - <small>({type.type_of})</small>
                <button type="button" className='removeButton' onClick={removeTask}>x</button>
            </h2> 
            <div className='todo'>
                <p className='taskDesc'>{todo.task_description}</p> 
                <p>Priority: {todo.task_priority} / 10</p>
                <p>Delivery date: {todo.task_date_delivery}</p>
                <p>Completion percentage: {todo.task_complete_porcent} %</p>
                <p>Observações:</p>
                {todo.task_obs && todo.task_obs.length > 0 ? (
                    todo.task_obs.map((element, index) => (
                        <p key={index}>{element}</p>
                    ))
                ) : (
                    <p>No observations available</p>
                )}

            </div>
            <div className='todoForm'>
                <h2>Atualizar tarefa:</h2>
                <form>
                    <input
                        type="text"
                        id="task_name"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="Enter the title"
                        required
                    />
                    <input
                        type="text"
                        id="task_date_delivery"
                        value={taskDateDelivery}
                        onChange={(e) => setTaskDateDelivery(e.target.value)}
                        placeholder="Enter the date: yyyy/mm/dd"
                    />
                    <select>
                        <option value=""disabled>Select a category</option>
                        <option value="Category1">{type.type_of} </option>
                    </select>
                    <input
                        type="text"
                        id="task_description"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        required
                        placeholder="Task description"
                    />
                    <input
                        type="text"
                        id="task_obs"
                        value={taskObs}
                        onChange={(e) => setTaskObs(e.target.value)}
                        required
                        placeholder="Observations (sepparated by comma)"
                    />
                    <input
                        type="number"
                        id="task_priority"
                        value={taskPriority}
                        onChange={(e) => setTaskPriority(e.target.value)}
                        required
                        min="1"
                        max="10"
                        placeholder="Completion priority"
                    />
                    <input
                        type="number"
                        id="task_priority"
                        value={taskCompletePorcent}
                        onChange={(e) => setTaskCompletePorcent(e.target.value)}
                        required
                        min="1"
                        max="100"
                        placeholder="Completion percentage"
                    />
                    <button onClick={handleUpdateTask}>Atualizar tarefa</button>
                </form> 
            </div>
        </div>
    </div> 
}
