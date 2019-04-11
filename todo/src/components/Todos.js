import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo } from '../actions';

import Todo from './Todo';

class Todos extends React.Component {
    state = {
        todoValue: ''
    };
    addTodo = e => {
        e.preventDefault();
        if(this.state.todoValue !== '') {
            this.props.addTodo(this.state.todoValue);
            this.setState({ todoValue: '' });
        }
    }
    handleChanges = e => this.setState({ todoValue: e.target.value });
   
    render(props) {
        return (
            <div className='todos'>
                <header>
                    <h1>REDUX <span>TODO</span></h1>
                    <form onSubmit={this.addTodo}>
                        <input onChange={this.handleChanges} value={this.state.todoValue} placeholder='Add todo'/>
                        <button>Add</button>
                    </form>
                </header>
                <div className='todo-list'>
                    {this.props.todos.map((todo) => (
                        <Todo todo={todo} key={todo.id} onClick={() => this.props.toggleTodo(todo.id)} />
                    ))}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleTodo })(Todos);