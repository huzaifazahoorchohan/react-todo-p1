import React, { useState } from "react";
import "../styles/app.css";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  function handleToAddTodo() {
    if (!input || /^\s*$/.test(input)) {
      alert("Write something...");
    } else {
      props.addTodo(input);
    }
    setInput("");
  }
  return (
    <div>
      <h2 className="todo-heading">Todo App</h2>
      <div className="todo-form">
        <input
          type="text"
          value={input}
          name="text"
          placeholder="Add your todo here..."
          onChange={handleOnChange}
          autoComplete="off"
          maxLength="50"
        />
        <button onClick={handleToAddTodo}>ADD</button>
      </div>
    </div>
  );
}

export default TodoForm;
