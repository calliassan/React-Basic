import React from "react";
export class Uncontrolled1 extends React.Component {
  handleChange(event) {
    console.log(event.target.value);
  }
  handleSubmit(event) {
    event.preventDefault();

    console.log(event.target.fullName.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Form
            <input
              type="text"
              name="fullName"
              id="fullName"
              onChange={this.handleChange}
            />
            <input type="submit" value="submit" />
          </label>
        </form>
      </div>
    );
  }
}
