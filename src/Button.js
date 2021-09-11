import React from 'react';
import MaterialButton from '@material-ui/core/Button';

export class Button extends React.Component {
  render() {
    return (
      <MaterialButton variant="contained" color="primary">
        Hello World
      </MaterialButton>
    );
  }
}
