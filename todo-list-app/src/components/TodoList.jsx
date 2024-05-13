import React from "react";

const TodoList = ({todos, setTodos}) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                return item.id === todo.id ? {...item, completed: !item.completed} : item;
            })
        )
    };

    const handleDelete = ({id}) => {
        setTodos(todos.filter( todo => todo.id !== id));
    };

    return (
        <ul>
            {todos.map((todo) => (
                <li className="list" key={todo.id}>
                    <input type="text"
                     value={todo.title}
                     className="row"
                     onChange={(event) => event.preventDefault()} />
                    <div>
                        <button
                         className="button-complete task-button"
                         onClick={() => handleComplete(todo)}>
                            <span className="material-symbols-outlined">
                                check_circle
                            </span>
                        </button>
                        <button className="button-edit task-button">
                            <span className="material-symbols-outlined">
                                edit_square
                            </span>
                        </button>
                        <button
                         className="button-delete task-button"
                         onClick={() => handleDelete(todo)} >
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;