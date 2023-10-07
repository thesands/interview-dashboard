import './TodoApp.css';
import { useState, useEffect } from 'react';

class Todo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

function TodoForm({ todos, setTodos }) {
  const [newItem, setNewItem] = useState('');

  function submitNewTodo(e) {
    e.preventDefault();
    console.log(`submitting new value ${newItem}`);
    const newTodo = new Todo(3, newItem);
    setTodos([...todos, newTodo]);
    setNewItem('');
  }

  return (
    <form
      className="todoForm"
      onSubmit={(e) => {
        submitNewTodo(e);
      }}>
      <div className="todoInputBox">
        <input
          className="todoInput"
          type="text"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button className="submitButton">Submit</button>
      </div>
    </form>
  );
}

function TodoList({ setTodos, todos }) {
  function deleteTodo(completedTodo) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== completedTodo.id;
    });
    setTodos(newTodos);
  }

  return (
    <div className="todoList">
      {todos.map(function (todo, index) {
        return (
          <TodoItem
            key={index}
            todo={todo}
            deleteTodo={() => {
              deleteTodo(todo);
            }}
          />
        );
      })}
    </div>
  );
}

function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="todo">
      <p>{todo.title}</p>
      <button
        className="completeButton"
        onClick={() => {
          deleteTodo(todo);
        }}>
        Complete
      </button>
    </div>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoTest1 = new Todo(1, 'pet cats');
    const todoTest2 = new Todo(2, 'play aoe');
    const todoTest3 = new Todo(3, 'learn react');
    setTodos([todoTest1, todoTest2, todoTest3]);
  }, []);

  return (
    <div className="todo-app">
      <h2>To Do List</h2>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoApp;
