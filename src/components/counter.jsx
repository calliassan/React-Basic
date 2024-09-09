import React from "react";
import "../App.css";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + this.props.diff,
    });
    console.log(this.state.count);
    console.log(this.props);
  }
  decrement() {
    this.setState({
      count: this.state.count - this.props.diff,
    });
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.increment()}>+{this.props.diff}</button>
        <button onClick={() => this.decrement()}>-{this.props.diff}</button>
      </div>
    );
  }
}
export default Counter;
