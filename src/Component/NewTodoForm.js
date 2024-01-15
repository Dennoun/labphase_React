// NewTodoForm.js
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../action';
import { v4 as uuidv4 } from "uuid";
import "./NewTodoForm.css";

const NewTodoForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleChange = (evt) => {
    setTask(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newTask = { task, id: uuidv4(), completed: false };
    dispatch(addTodo(newTask));
    setTask("");
  };

  return (
    <div>
      <form className="NewTodoForm" onSubmit={handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          placeholder="New Task"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
