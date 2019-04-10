import React from 'react';

const Todo = props => {
    return(
        <h4 className='todo'>{props.todo.value}</h4>
    )
};

export default Todo;