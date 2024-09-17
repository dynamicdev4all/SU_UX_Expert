class UserProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = { age: props.initialAge };
    }
  
    increaseAge = () => {
      this.setState({ age: this.state.age + 1 });
    };
  
    render() {
      return (
        <div>
          <h1>{this.props.name}</h1>
          <p>Age: {this.state.age}</p>
          <button onClick={this.increaseAge}>Increase Age</button>
        </div>
      );
    }
  }
  
  // Usage
  <UserProfile name="John Doe" initialAge={25} />
  