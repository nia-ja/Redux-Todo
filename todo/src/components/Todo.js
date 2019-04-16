import React from 'react';

const Todo = props => {
    return(
        <div className={`todo ${props.color}`}>
            <div className='todo-content' onClick={props.onClick}>
                {!props.todo.completed && <h4 className={`todo-bullet ${props.color}`}>※</h4>}
                {props.todo.completed && <h4 className={`todo-bullet-completed ${props.color}`}>✔︎</h4>}
                <h4 className={props.todo.completed ? `todo-text-completed ${props.color}` : `todo-text ${props.color}`}>{props.todo.value}</h4>
            </div>
            <p className={props.color} onClick={props.deleteTodo}>✘</p>
        </div>
    )
};

export default Todo;