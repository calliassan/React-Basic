import React from "react";
export class StockData1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entry: 0, value: null };
  }
  componentDidMount() {
    // this.timerId = setInterval(() => this.getStockData(), 2000);
  }
  getStockData = async () => {
    const res = await fetch();
    //   "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAYS&symbol=IBM&interval=5min&apikey=demo"
    const result = await res.json();
    const value = Object.values(result["Time Series (5min)"])[this.state.entry][
      "4. close"
    ];
    console.log("value", value);
  };
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    console.log("component render");
    return (
      <div>
        IBM Stock value{this.state.value && <span>{this.state.value}</span>}
      </div>
    );
  }
}
