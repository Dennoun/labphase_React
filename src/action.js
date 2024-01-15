// action.js
export const addTodo = (newTodo) => ({
    type: 'ADD_TODO',
    payload: newTodo,
  });
  
  export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    payload: id,
  });
  
  export const updateTodo = (id, updatedTodo) => ({
    type: 'UPDATE_TODO',
    payload: { id, updatedTodo },
  });
  
  export const toggleCompletion = (id) => ({
    type: 'TOGGLE_COMPLETION',
    payload: id,
  });
  
  export const toggleFilter = (filter) => ({
    type: 'TOGGLE_FILTER',
    payload: filter,
  });
  
  
  
  