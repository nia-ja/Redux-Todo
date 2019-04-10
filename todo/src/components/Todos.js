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
                <header>
                    <h1>REDUX <span>TODO</span></h1>
                    <form onSubmit={this.addTodo}>
                        <input onChange={this.handleChanges} value={this.state.todoValue} placeholder='Add todo'/>
                        <button>Add</button>
                    </form>
                </header>
                <div className='todo-list'>
                    {/* <h2>Your todos:</h2> */}
                    {this.props.todos.map((todo, index) => (
                        <Todo todo={todo} key={index} />
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

export default connect(mapStateToProps, { addTodo })(Todos);