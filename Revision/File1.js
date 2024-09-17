import React, { Component } from 'react';

// Parent Component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Doe',
      age: 25
    };
  }

  updateAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <button onClick={this.updateAge}>Increase Age</button>
        {/* Passing state as props to the child component */}
        <ChildComponent name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}

// Child Component
const ChildComponent = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default App;
