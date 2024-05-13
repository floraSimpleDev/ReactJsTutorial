import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css'

const App = () => {

  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  const [edit, setEdit] = useState(null);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  return (
    <main className="container">
      <section className="app-wrapper">
        <nav>
          <Header />
        </nav>
        <section>
          <Form
           input = {input}
           setInput = {setInput}
           todos = {todos}
           setTodos = {setTodos}
           edit = {edit}
           setEdit = {setEdit}
          />
        </section>
        <article>
          <TodoList
           todos = {todos} 
           setTodos = {setTodos} 
           edit = {edit}
           setEdit = {setEdit}/>
        </article>
      </section>
    </main>
  );
};

export default App
