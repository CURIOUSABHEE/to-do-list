import React, { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoListComp from "./components/TodoListComp";

function App() {
  const [inputVal, setInputVal] = useState(" ");
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }
  function addTask() {
    if (setInputVal != " ") {
      setTodos((prevTask) => [...prevTask, inputVal]);
      setInputVal(" ");
    }
  }
  console.log(todos);
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTask={addTask}
      />
      <TodoListComp todos={todos} />
    </main>
  );
}

export default App;
