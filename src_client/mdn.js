import React from "react";
import ReactDOM from "react-dom";
import CounterButton from "./components/mdn/counterButton";
import HelloReact from "./components/mdn/HelloReact";
import ToDoApp from "./components/mdn/ToDo/App.jsx";

export class Mdn extends React.Component {
  render() {
    return (
      <div>
        <div className="conter-button">
          <h2>CounterButton</h2>
          <CounterButton />
        </div>
        <div className="hello-react">
          <h2>HelloReact</h2>
          <HelloReact subject="React" />
        </div>
        <div className="to-do-app">
          <h2>ToDoApp</h2>
          <ToDoApp />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Mdn />, document.getElementById("app"));
