import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

// IMPORTANDO O CSS
import './addTypeTask.css';
import axios from 'axios';

export default () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const cores = ["#FF5733", "#FFA833", "#FFD433", "#db45fd", "#33FF57", "#33FFA8", "#33FFD4", "#33A8FF", "#3362FF", "#3333FF", "#6B33FF", "#9333FF", "#D433FF", "#FF33D4", "#FF33A8", "#FF3362"];

  const [typeOf, setTypeOf] = useState("");
  const [color, setColor] = useState(cores[0]); // Inicialize com a primeira cor

  const createTypeTask = async (e) => {
    e.preventDefault();

    try {
        const typeTask = {
          user: user._id,
          type_of: typeOf,
          color: color,
        };

        const res = await axios.post(`https://task-codex-2.onrender.com/type_tasks`, typeTask);
        toast.success("Type of task created!");
        navigate("/dashboard");
    } catch (err) {
        toast.error(err.message);
    }
  };

  return (
    <section className='addTypeTask'>
      <h2>Add Type Of Task</h2>
      <form>
        <label htmlFor='type'>Type Of Task: </label>
        <input type='text' name='type' id='type' value={typeOf} onChange={(e) => setTypeOf(e.target.value)} placeholder='Ex: Trabalho' />

        <br />
        <span>Color:</span>
        <div className='color-picker'>
          {cores.map((cor, index) => (
            <div
              key={index}
              className={`color-box ${color === cor ? 'selected' : ''}`}
              style={{ backgroundColor: cor }}
              onClick={() => setColor(cor)}
            ></div>
          ))}
        </div>
        <button onClick={createTypeTask}>Create Type Of Task</button>
      </form>
    </section>
  );
};
