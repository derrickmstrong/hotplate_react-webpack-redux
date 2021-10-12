import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { Posts } from "./components/Posts";
import { Users } from "./components/Users";


const App = () => {
  return (
    <div className="App">
      <h1>Posts</h1>
      <Posts />
      <h1>Users</h1>
      <Users />
    </div>
  );
};

export default hot(module)(App);
