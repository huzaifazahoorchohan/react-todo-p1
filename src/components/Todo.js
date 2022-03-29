import React from "react";
import "../styles/app.css";
import { FaTrash, FaEdit } from "react-icons/fa";

function Todo(props) {
  const deleteHandle = () => {
    props.deleteTodo(props.id);
  };

  return (
    <div className="todo-item">
      <h4>{props.todo}</h4>
      <div className="todo-icons">
        <FaTrash color="red" className="icon delete" onClick={deleteHandle} />
        <FaEdit color="green" className="icon edit" />
      </div>
    </div>
  );
}

export default Todo;
