import React from 'react';

function Greeting(props) {
  return <li>{props.name}</li>
}

export class ListName extends React.Component {
  render() {
    return (
      <ul>
        <Greeting name="Sara" />
        <Greeting name="Mike" />
        <Greeting name="Kaz-" />
      </ul>
    )
  }
}
