import React from "react";
import ReactDOM from "react-dom";
import "../stylesheets/style.css";
import { TicTacToe } from "./components/TicTacToe";
import { ListName } from "./components/ListName";
import { Clock } from "./components/Clock";
import { Toggle } from "./components/toggle";
import { Button } from "./components/Button";

export class Contents extends React.Component {
  render() {
    return (
      <div>
        <TicTacToe />
        <ListName />
        <Clock />
        <Toggle />
        <Button />
      </div>
    )
  }
}

ReactDOM.render(<Contents />, document.getElementById("app"));
