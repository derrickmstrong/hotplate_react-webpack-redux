import React from "react";
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

export default App;
