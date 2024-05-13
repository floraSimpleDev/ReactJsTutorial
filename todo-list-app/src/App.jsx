import React, {useState} from 'react'
import Header from './components/Header'
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css'

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  
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
          />
        </section>
        <article>
          <TodoList
           todos = {todos} 
           setTodos = {setTodos} 
           setEdit = {setEdit}/>
        </article>
      </section>
    </main>
  );
};

export default App
