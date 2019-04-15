import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo, deleteTodo, clearCompleted } from '../actions';

import Todo from './Todo';

class Todos extends React.Component {
    state = {
        todoValue: '',
        filterMenu: false,
        colorMenu: false,
        todos: []
    };
    addTodo = e => {
        e.preventDefault();
        if(this.state.todoValue !== '') {
            this.props.addTodo(this.state.todoValue);
            this.setState({ todoValue: '' });
        }
    }
    handleChanges = e => this.setState({ todoValue: e.target.value });

    toggleButtons = type => {
        if(type === 'filter'){
            this.setState({ filterMenu: !this.state.filterMenu });
        } else if(type === 'color') {
            this.setState({ colorMenu: !this.state.colorMenu });
        }
    }
    // onClickHandler = (value) => {
    //     console.log(value);
    // }
   
    render(props) {
        return (
            <div className='todos'>
                <header className={`header-${this.props.color}`}>
                    <h1>REDUX <span>TODO</span></h1>
                    <form onSubmit={this.addTodo}>
                        <input onChange={this.handleChanges} value={this.state.todoValue} placeholder='Add todo' required />
                        <button className={`btn-${this.props.color}`}>Add</button>
                    </form>
                </header>

                <div className='main-window'>
                    <div className='side-menu'>
                        <div className='menu'>
                            <button className={`btn-${this.props.color}`} onClick={() => this.toggleButtons('filter')}>Filter</button>
                            { this.state.filterMenu && 
                                <div className='menu-options'>
                                    <button className={`btn-${this.props.color} choose-option`} onClick={() => this.onClickHandler('all')}>ALL</button>
                                    <button className={`btn-${this.props.color} choose-option`} onClick={() => this.onClickHandler('completed')}>COMPLETED</button>
                                    <button className={`btn-${this.props.color} choose-option`} onClick={() => this.onClickHandler('active')}>ACTIVE</button>
                                </div>
                            }
                        </div>
                        
                        <div className='color-mode menu'>
                            <button className={`btn-${this.props.color}`} onClick={() => this.toggleButtons('color')}>Color mode</button>
                            { this.state.colorMenu && 
                                <div className='menu-options'>
                                    <button className={`btn-${this.props.color} choose-option`} onClick={() => this.props.changeColor('dark')}>DARK</button>
                                    <button className={`btn-${this.props.color} choose-option`} onClick={() => this.props.changeColor('light')}>LIGHT</button>
                                    <button className={`btn-${this.props.color} choose-option`} onClick={() => this.props.changeColor('bright')}>BRIGHT</button>
                                </div>
                            }
                        </div>
                    </div>
                
                    <div className={`todo-list ${this.props.color}`}>
                        {this.props.todos.length === 0 && <p className='no-todo-text'>Your have NOTHING to do...</p>}
                        {this.props.todos.map((todo) => (
                            <Todo todo={todo} key={todo.id} onClick={() => this.props.toggleTodo(todo.id)} deleteTodo={() => this.props.deleteTodo(todo.id)} color={this.props.color} />
                        ))}
                        <button className={this.props.todos.length > 0 ? `btn-${this.props.color} clear` : 'btn-hidden'} onClick={() => this.props.clearCompleted()}>Clear completed</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo, clearCompleted })(Todos);