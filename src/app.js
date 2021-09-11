import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import { TicTacToe } from './TicTacToe';
import { ListName } from './ListName';
import { Clock } from './Clock';
import { Toggle } from './toggle';
import { Button } from './Button';

async function getComponent() {
  const div = document.createElement('div');
  const p = document.createElement('p');
}

export class App extends React.Component {
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

ReactDOM.render(<App />, document.getElementById("app"));
