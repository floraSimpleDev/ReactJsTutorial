import {React, useEffect} from "react";
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, todos, setTodos, edit, setEdit}) => {

    const inputChange = (event) => {
        setInput(event.target.value);0
    };

    const updateTodo = (title, editTodo) => {
        const newTodo = todos.map( todo => 
            todo.id === editTodo.id ? { ...editTodo, title }: todo
        );
        setTodos(newTodo);
        setEdit(null);
    };

    useEffect(() => {
        if (edit) {
            setInput(edit.title);
        } else {
            setInput("");
        }
    }, [edit, setInput]);

    const formSubmit = (event) => {
        event.preventDefault();
        if (edit) {
            updateTodo(input, edit);
        } else {
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput("");
        }
    };

    return (
        <form autoComplete="off" onSubmit={formSubmit}>
            <input
             type="text"
             placeholder="Input a task..."
             className="task-input"
             value={input} required
             onChange={inputChange}
            />
            <button className="add-button" type="submit">
                {edit ? "OK" : "Add"}
            </button>
        </form>
    );
};

export default Form;