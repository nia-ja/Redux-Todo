import React, { Component } from 'react';

import Todos from './components/Todos';

class App extends Component {
  state = {
    color: ''
  }
  changeColor(colorName) {
    this.setState({color: colorName})
  }
  render() {
    return (
      <div className="App">
        <Todos changeColor={this.changeColor} />
      </div>
    );
  }
}

export default App;
