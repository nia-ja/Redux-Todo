import React from 'react';

const Todo = props => {
    return(
        <div className='todo'>
            <div className='todo-content' onClick={props.onClick}>
                <h4 className={props.todo.completed ? 'todo-bullet-completed' : 'todo-bullet'}>※</h4>
                <h4 className={props.todo.completed ? 'todo-text-completed' : 'todo-text'}>{props.todo.value}</h4>
            </div>
            <p onClick={props.deleteTodo}>✘</p>
        </div>
    )
};

export default Todo;