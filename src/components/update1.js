import React, { Component } from "react";
export class Update1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  async fetchEmail() {
    const res = await fetch(`https://reqres.in/api/users/${this.props.userId}`);
    const result = await res.json();
    console.log(result);
    this.setState({ email: result.data.email });
  }
  async componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("component updated");
    if (prevProps.userId !== this.props.userId) {
      console.log("Triggered");
      await this.fetchEmail();
    }
  }
  async componentDidMount() {
    this.fetchEmail();
  }

  render() {
    return <h1>Email: {this.state.email}</h1>;
  }
}
