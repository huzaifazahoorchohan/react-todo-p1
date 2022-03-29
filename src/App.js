import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/app.css";

function App() {
  const [todo, setTodo] = useState([]);
  const addTodo = (e) => {
    setTodo([e, ...todo]);
  };

  const deleteTodos = (updatedTodos) => {
    setTodo(updatedTodos);
  };

  return (
    <div className="app-container">
      <TodoForm addTodo={addTodo} />
      <TodoList todo={todo} deleteTodos={deleteTodos} />
    </div>
  );
}

export default App;
