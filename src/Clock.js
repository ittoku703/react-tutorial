import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // lifeciycle method
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // call method if Clock component is deleted from DOM
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
        <h1>Clock</h1>
        <p>{this.state.date.toLocaleString()}</p>
      </div>
    );
  }
}
