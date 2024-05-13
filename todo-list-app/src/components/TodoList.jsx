import React from "react";

const TodoList = ({todos, setTodos, setEdit}) => {

    const handleComplete = ({id}) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? {...todo, completed: !todo.completed} : todo;
            })
        )
    };

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEdit(findTodo);
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter( todo => todo.id !== id));
    };

    return (
        <ul>
            {todos.map((todo) => (
                <li className="list" key={todo.id}>
                    <input type="text"
                     value={todo.title}
                     className={`task${todo.completed ? "-complete" : ""}`}
                     onChange={(event) => event.preventDefault()} />
                    <div>
                        <button
                         className="button-complete task-button"
                         onClick={() => handleComplete(todo)}>
                            <span className="material-symbols-outlined">
                                check_circle
                            </span>
                        </button>
                        <button
                         className="button-edit task-button"
                         onClick={() => handleEdit(todo)}>
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