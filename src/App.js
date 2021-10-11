import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { Posts } from "./components/Posts";


const App = () => {
  return (
    <div className="App">
      <h1>Posts</h1>
      <Posts />
    </div>
  );
};

export default hot(module)(App);
