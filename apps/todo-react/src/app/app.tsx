import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;