import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import Todo from './Todo';

class Todos extends React.Component {
    state = {
        todoValue: ''
    };
    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoValue);
        this.setState({ todoValue: '' });
    }

    handleChanges = e => this.setState({ todoValue: e.target.value });

    render(props) {
        return (
            <div className='todos'>
                <form onSubmit={this.addTodo}>
                    <input onChange={this.handleChanges} value={this.state.todoValue} placeholder='Add todo'/>
                    <button>Add Todo</button>
                </form>
                {this.props.todos.map((todo, index) => (
                    <div className='todo-list'>
                        <Todo todo={todo} key={index} />
                    </div>
                ))}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo })(Todos);