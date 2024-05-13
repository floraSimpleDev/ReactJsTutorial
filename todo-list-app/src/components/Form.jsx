import React from "react";
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, todos, setTodos}) => {

    const inputChange = (event) => {
        setInput(event.target.value);
    };

    const formSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
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
                Add
            </button>
        </form>
    );
};

export default Form;