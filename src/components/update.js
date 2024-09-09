import React, { Component } from "react";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }
  async fetchEmail() {
    const response = await fetch(
      `https://reqres.in/api/users/${this.props.userId}`
    );
    const result = await response.json();
    console.log(result);
    this.setState({ email: result.data.email });
  }
  async componentDidUpdate(prevProps, prevState) {
    console.log("component Updated");
    // this.fetchEmail();
    if (prevProps.userId !== this.props.userId) {
      console.log("Triggered");
      await this.fetchEmail();
    }
  }
  async componentDidMount() {
    this.fetchEmail();
  }
  render() {
    console.log("props", this.props);
    return <h1>Email:{this.state.email}</h1>;
  }
}
export default Update;
