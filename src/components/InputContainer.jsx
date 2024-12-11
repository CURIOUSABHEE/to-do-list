import React from "react";

function InputContainer({ inputVal, writeTodo, addTask }) {
  return (
    <div>
      <div className="input-container">
        <input placeholder="Add a Task" value={inputVal} onChange={writeTodo} />
        <button onClick={addTask}> + </button>
      </div>
    </div>
  );
}

export default InputContainer;
