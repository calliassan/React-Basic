import React, { Component } from "react";

class StockData extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: 0, value: null };
  }
  //   componentDidMount() {
  //     this.timerId = setInterval(() => this.getStockData(), 2000);
  //   }
  render() {
    console.log("component render");
    return (
      <div>
        IBM stock value:{this.state.value && <span>{this.state.value}</span>}
      </div>
    );
  }
}

export default StockData;
