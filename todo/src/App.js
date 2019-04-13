import React, { Component } from 'react';

import Todos from './components/Todos';

class App extends Component {
  state = {
    color: ''
  };
  changeColor = colorName => {
    this.setState({color: colorName});
  }
  render() { 
    return(
      <div className="App">
        {this.state.color === 'light' &&
          <div className="color-light">
            <Todos changeColor={this.changeColor} color={this.state.color} />
          </div>
        }
        { this.state.color === 'bright' &&
          <div className="color-bright">
            <Todos changeColor={this.changeColor} color={this.state.color} />
          </div>
        }
        { (this.state.color !== 'light' || 'bright') &&
          <div className="color-dark">
            <Todos changeColor={this.changeColor} color={this.state.color} />
          </div>
        }
      </div>
    )
  }
}

export default App;
