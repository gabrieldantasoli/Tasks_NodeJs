import React from 'react'
import './index.css'

const index = () => {
    return <div className='main'>
        <div className='taskPage'>
            <h2 className='title'>{todo.task_name} - <small>({todo.type_task})</small>
                <button type="button" className='removeButton'>x</button>
            </h2> 
            <div className='todo'>
                <p className='taskDesc'>{todo.task_description}</p> 
                <p>Priority: {todo.task_priority}</p>
                <p>Delivery date: {todo.task_delivery_date}</p>
                <p>Completion percentage: {todo.task_complete_porcent}</p>
                <p>Obs.: {todo.task_obs}</p>
            </div>
            <div className='todoForm'>
                <h2>Atualizar tarefa:</h2>
                <form>
                    <input type="text" placeholder="Enter the title" />
                    <input type="date" placeholder="Enter the date" />
                    <select>
                        <option value="">Select a category</option>
                        <option value="Category1">Category1</option>
                        <option value="Category2">Category2</option>
                    </select>
                    <input type="text" placeholder="Task description" />
                    <input type="text" placeholder="Observations (sepparated by comma)" />
                    <input type="number" placeholder="Priority" min="1" max="10" />
                    <input type="number" placeholder="Completion percentage" min="0" max="100" />
                    <button type="submit" className="submit">Atualizar tarefa</button>
                </form> 
            </div>
        </div>
    </div> 
}

export default index
