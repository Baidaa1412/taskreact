import React, { Component } from 'react';

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Function to increment the count
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Function to decrement the count
  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default App2;
