import React from "react";
export class Counter1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, name: this.props.name };
  }
  increment() {
    this.setState({ count: this.state.count + this.props.diff });
  }
  decrement() {
    this.setState({ count: this.state.count - this.props.diff });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button id="inc" onClick={() => this.increment()}>
          +
        </button>
        <button id="dec" onClick={() => this.decrement()}>
          -
        </button>
      </div>
    );
  }
}
