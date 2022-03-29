import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  const todo = props.todo;

  const deleteTodo = (id) => {
    const updatedTodos = todo.filter((val, index) => {
      return index !== id;
    });
    props.deleteTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      {todo.length < 1 ? (
        <h3 style={{ textAlign: "center" }}>You have no todos right now</h3>
      ) : (
        <h4>Your todos...</h4>
      )}
      {todo.map((item, index) => {
        return (
          <Todo key={index} todo={item} deleteTodo={deleteTodo} id={index} />
        );
      })}
    </div>
  );
}

export default TodoList;
