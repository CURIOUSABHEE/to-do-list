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
      <div className="container">
        <div className="todo">
          <p>Go to the gym</p>
          <div className="actions">
            <input type="checkbox" />
            <button> Delete </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
