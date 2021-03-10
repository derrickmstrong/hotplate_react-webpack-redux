import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const handleRemove = () => onRemovePressed(todo.text);
  const handleCompleted = () => onCompletedPressed(todo.text);

  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {todo.isCompleted ? null : (
          <button className="completed-button" onClick={handleCompleted}>
            Mark As Completed
          </button>
        )}
        <button className="remove-button" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
