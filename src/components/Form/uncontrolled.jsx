import React from "react";

class Uncontrolledform extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.fullName.value);
  }
  handlenamevalidation(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="fullName"
              autoComplete="off"
              onChange={this.handlenamevalidation}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default Uncontrolledform;
