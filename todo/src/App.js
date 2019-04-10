import React, { Component } from 'react';

import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>REDUX TODO</h1>
        <Todos />
        {/* 
        <Navigation />
        <AddTodo />
        <Todos />
        */}
      </div>
    );
  }
}

export default App;
