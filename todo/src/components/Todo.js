import React from 'react';

const Todo = props => {
    return(
        <div className='todo'>
            <div className='todo-content'>
                <h4 className={props.todo.completed ? 'todo-bullet-completed' : 'todo-bullet'}>※</h4>
                <h4 className={props.todo.completed ? 'todo-text-completed' : 'todo-text'} onClick={props.onClick}>{props.todo.value}</h4>
            </div>
            <p>✘</p>
        </div>
    )
};

export default Todo;