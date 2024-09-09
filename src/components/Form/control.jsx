import React from "react";

class Controlledform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
    };
  }
  handlenameChange(e) {
    console.log(e.target.value);
    this.setState({
      fullName: e.target.value,
    });
  }
  handlesubmit(e) {
    e.preventDefault();
    console.log(this.state.fullName);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handlesubmit(e)}>
          <label>
            Name:
            <input
              type="text"
              name="fullName"
              autoComplete="off"
              value={this.state.fullName}
              onChange={(e) => this.handlenameChange(e)}
            />
          </label>
          <p className="error">
            {this.state.fullName.length <= 4 ? "Name length shall be >4" : null}
          </p>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default Controlledform;
