import React from "react";
import "./App.css";

function App() {
  return (
    <main>
      <h1>To Do List</h1>

      <div className="input-container">
        <input placeholder="Add a Task" />
        <button> + </button>
      </div>
    </main>
  );
}

export default App;
