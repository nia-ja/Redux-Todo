import React from 'react';

const Todo = props => {
    return(
        <div className='todo'>
            <div className='todo-content'>
                <h4 className='todo-bullet'>※</h4>
                <h4 className='todo-text' onClick={props.onClick} style={props.todo.completed ? {textDecoration: 'line-through', color: 'rgb(44, 44, 44)'} : {textDecoration: 'none', color: 'white'} }>{props.todo.value}</h4>
            </div>
            <p>✘</p>
        </div>
    )
};

export default Todo;