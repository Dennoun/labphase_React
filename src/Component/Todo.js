// Todo.js
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo, toggleCompletion } from '../action';
import "./Todo.css";

const Todo = ({ id, todo, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo);

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  const toggleTask = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();
    dispatch(updateTodo(id, task));
    setIsEditing(false);
  };

  const handleChange = (evt) => {
    setTask(evt.target.value);
  };

  const handleToggle = () => {
    dispatch(toggleCompletion(id));
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input
            type="text"
            value={task}
            name="task"
            onChange={handleChange}
          />
          <button>SAVE</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          className={completed ? "Todo-task completed" : "Todo-task"}
          onClick={handleToggle}
        >
          {todo}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleTask}>
            <i className="fa fa-pen" />
          </button>
          <button onClick={handleRemove}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
    );
  }

  return <div>{result}</div>;
};

export default Todo;
