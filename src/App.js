import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import TodoList from "./todos/TodoList";
import styled from 'styled-components'

const App = () => {
  return (
    <AppContainer className="App">
      <TodoList /> 
    </AppContainer>
  );
};

export default hot(module)(App);

// Styled Components
const AppContainer = styled.div`
margin: 1rem;
font-family: Arial, Helvetica, sans-serif;
color: #222222;
width: 100vw;
height: 100vh;
`;