import { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build an app", done: false },
  ]);

  console.log("Rendering with todos: ", todos);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: "Deploy to production",
      done: false,
    };
    setTodos([...todos, newTodo]);
    // or
    // setTodos(todos.concat(newTodo));
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          //   todo.done = !todo.done;
          // or
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={{ textDecoration: todo.done ? "line-through" : "none" }}
              >
                {todo.text}
              </span>
              <button onClick={() => toggleDone(todo.id)}>
                {todo.done ? "Undo" : "Done"}
              </button>
              <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};
