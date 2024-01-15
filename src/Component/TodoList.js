// TodoList.js
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { toggleFilter } from "../action";
import "./TodoList.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  //const state = useSelector((state) => state)

  //console.log(state)

  
  
  
  
  

  const filteredTodos = todos.todos.filter((todo) => {
    
    if (todos.filter === "completed") {
      return todo.completed;
    } else if (todos.filter === "incomplete") {
      return !todo.completed;
    }
    
    return todo; // show all when filter is set to "all"
  });

  //console.log(filteredTodos)

  const todoComponents = filteredTodos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      todo={todo.task}
      completed={todo.completed}
    />
  ));

  return (
    <div className="TodoList">
      <h1>
        TODO LIST ! <span> Lab Phase Project.</span>
      </h1>
      <div>
        <label>
          <select
            className="filter"
            value={filter}
            onChange={(e) => dispatch(toggleFilter(e.target.value))}
          >
            <option value="all">All</option>
            <option className="completed" value="completed">
              Completed
            </option>
            <option className="incompleted" value="incomplete">
              Incomplete
            </option>
          </select>
        </label>
      </div>
      <ul>{todoComponents}</ul>
      <NewTodoForm />
    </div>
  );
};

export default TodoList;
