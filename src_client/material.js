import React from "react";
import ReactDOM from 'react-dom';
import { Button } from './components/material/Button';
import SignIn from './components/material/SignIn';

export class Material extends React.Component {
  render() {
    return (
      <div>
        <Button />
        <SignIn />
      </div>
    );
  }
}

ReactDOM.render(<Material />, document.getElementById('app'));