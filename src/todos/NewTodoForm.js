import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    const isDuplicateText = todos.some((todo) => todo.text === inputValue);
    if (!isDuplicateText) {
      onCreatePressed(inputValue);
      setInputValue("");
    }
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
      <button className="new-todo-button" onClick={handleClick}>
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
