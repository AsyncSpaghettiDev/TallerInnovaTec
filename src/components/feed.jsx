import React, { useState } from "react";
import './feed.css';
import Task from './task';

const Feed = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Finish CSS',
            description: 'Improve the css presentation of the project',
            location: 'PC'
        }
    ]);
    const [form, setForm] = useState([]);

    const saveTask = () => {
        let copy = [...tasks];
        form.id = Date.now();
        copy.push(form)
        setTasks(copy);
    }

    const clearAll = () => {
        console.log("button clicked");
        // tasks = [];
        setTasks([]);
    }

    const onDelete = (id) => {
        console.log("Eliminando ", id);
        // eliminar la tarea con id = id
        let copy = tasks.filter(t => t.id !== id);
        setTasks(copy);
    }

    const handleOnChange = (e) => {
        let copy = { ...form };
        copy[e.target.name] = e.target.value;
        setForm(copy);
        //setForm
    }
    return (
        <div className="feed-page">
            <h3>Your pending tasks</h3>
            <div className="padre">
                <div className="lista">
                    <h5>You have {tasks.length} pending tasks</h5>
                    <button className="btn btn-sm btn-danger" onClick={clearAll}>Clear All</button>
                    <hr />

                    {tasks.map((t, i) => <Task key={i} info={t} onDelete={onDelete}/> )}

                </div>
                <div className="captura">
                    <h4>Create new Task</h4>
                    <div className="form">
                        <div className="control">
                            <label>Title</label>
                            <input name="title" onChange={handleOnChange} type="text" />
                        </div>

                        <div className="control">
                            <label>Description</label>
                            <input name="description" onChange={handleOnChange} type="text" />
                        </div>

                        <div className="control">
                            <label>Location</label>
                            <input name="location" onChange={handleOnChange} type="text" />
                        </div>

                        <button className="btn btn-block btn-dark" onClick={saveTask}>Save Task</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed;