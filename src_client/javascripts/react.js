import React from "react";
import ReactDOM from "react-dom";
import '../stylesheets/style.css';
import { Clock } from './components/react/Clock';
import { ListName } from './components/react/ListName';
import { TicTacToe } from './components/react/TicTacToe';
import { Toggle } from './components/react/Toggle';

export class ReactElements extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <ListName />
        <TicTacToe />
        <Toggle />
      </div>
    );
  }
}

ReactDOM.render(<ReactElements />, document.getElementById("app"));
