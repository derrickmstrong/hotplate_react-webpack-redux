import React, { useState } from "react";
import './NewTodoForm.css'

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = () => {
    setInputValue(e.target.value);
  };
  return (
    <div className="new-todo-form">
      <input
        type="text"
        className="new-todo-input"
        value={inputValue}
        placeholder="Enter Todo"
        onChange={handleInput}
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
