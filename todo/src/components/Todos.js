import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo, deleteTodo, clearCompleted } from '../actions';

import Todo from './Todo';

class Todos extends React.Component {
    state = {
        todoValue: '',
        filter: false
    };
    addTodo = e => {
        e.preventDefault();
        if(this.state.todoValue !== '') {
            this.props.addTodo(this.state.todoValue);
            this.setState({ todoValue: '' });
        }
    }
    handleChanges = e => this.setState({ todoValue: e.target.value });
    toggleFilters = e => {
        e.preventDefault();
        this.setState({ filter: !this.state.filter });
    }
   
    render(props) {
        console.log(this.state.filter);
        return (
            <div className='todos'>
                <header>
                    <h1>REDUX <span>TODO</span></h1>
                    <form onSubmit={this.addTodo}>
                        <input onChange={this.handleChanges} value={this.state.todoValue} placeholder='Add todo' required />
                        <button className='btn'>Add</button>
                    </form>
                </header>

                <div className="filters">
                    <button className='btn' onClick={this.toggleFilters}>Filter</button>
                    {this.state.filter &&  <button className="btn choose-filter">ALL</button>}
                    {this.state.filter && <button className="btn choose-filter">COMPLETED</button>}
                    {this.state.filter &&  <button className="btn choose-filter">ACTIVE</button> }
                </div>
                
                <div className='todo-list'>
                    {this.props.todos.map((todo) => (
                        <Todo todo={todo} key={todo.id} onClick={() => this.props.toggleTodo(todo.id)} deleteTodo={() => this.props.deleteTodo(todo.id)} />
                    ))}
                </div>
                <button className={this.props.todos.length > 0 ? 'btn clear' : 'btn-hidden'} onClick={() => this.props.clearCompleted()}>Clear completed</button>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo, clearCompleted })(Todos);