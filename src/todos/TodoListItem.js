import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed }) => {
  const handleClick = () => onRemovePressed(todo.text);

  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button className="complted-button">Mark As Completed</button>
        <button className="remove-button" onClick={handleClick}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
