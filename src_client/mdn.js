import React from "react";
import ReactDOM from "react-dom";
import CounterButton from "./components/mdn/counterButton";
import HelloReact from "./components/mdn/HelloReact";

export class Mdn extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>CounterButton</h2>
          <CounterButton />
        </div>
        <div>
          <h2>HelloReact</h2>
          <HelloReact subject="React" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Mdn />, document.getElementById("app"));
