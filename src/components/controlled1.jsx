import React from "react";
export class Controlled1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
    };
  }
  handlechange(e) {
    console.log(e.target.value);
    this.setState({
      fullName: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target.fullName.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Controlled Form
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={(e) => this.handlechange(e)}
            />
          </label>
          <input type="submit" value="submit" />
        </form>

        {this.state.fullName.length <= 4 ? (
          <p className="error">Name should be of length more than 4</p>
        ) : null}
      </div>
    );
  }
}
