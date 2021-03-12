import React from "react";
// import "./TodoListItem.css";
import styled from "styled-components";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  // const handleRemove = () => onRemovePressed(todo.text);
  const handleRemove = () => onRemovePressed(todo.id);
  // const handleCompleted = () => onCompletedPressed(todo.text);
  const handleCompleted = () => onCompletedPressed(todo.id);
  // Styled based on condition
  const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning
  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>Created at:&nbsp;{new Date(todo.createdAt).toLocaleDateString()}</p>
      <ButtonsContainer>
        {todo.isCompleted ? null : (
          <CompletedButton onClick={handleCompleted}>
            Mark As Completed
          </CompletedButton>
        )}
        <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
      </ButtonsContainer>
    </Container>
  );
};

export default TodoListItem;

// Styled Components
const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;
const TodoItemContainerWithWarning = styled(TodoItemContainer)`
  border-bottom: ${(props) =>
    new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
      ? "none"
      : "2px solid red"};
`;
const ButtonsContainer = styled.div`
  postion: absolute;
  right: 12px;
  bottom: 12px;
`;
const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;
const CompletedButton = styled(Button)`
  background-color: #22ee22;
  color: #fff999;
`;
const RemoveButton = styled(Button)`
  background-color: #ee2222;
  color: #fff;
  margin-left: 8px;
`;