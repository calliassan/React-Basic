import React, { component } from "react";
export class Mount1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  async componentDidMount() {
    const res = await fetch("https://reqres.in/api/users/1");
    const result = await res.json();
    console.log(result);
    this.setState({
      email: result.data.email,
    });
  }
  render() {
    return this.state.email ? (
      <h1>Email: {this.state.email}</h1>
    ) : (
      <h1>Loading.....</h1>
    );
  }
}
