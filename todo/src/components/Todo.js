import React from 'react';

const Todo = props => {
    return(
        <div className='todo'>
            <div className='todo-content'>
                <h4 className='todo-bullet'>※</h4>
                <h4 className='todo-text'>{props.todo.value}</h4>
            </div>
            <p>✘</p>
        </div>
    )
};

export default Todo;