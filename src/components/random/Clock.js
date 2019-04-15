import React, { Component } from 'react';

class Clock extends Component {
  state = {
    date: new Date(),
  }

  componentWillMount() {
    this.tid = setInterval(() => {
      this.tick();
    });
  }

  componentWillUnmount() {
    clearInterval(this.tid);
  }

  tick = () => {
    this.setState({date: new Date()});
  }

  render() {
    const { date } = this.state;
    return <div>{ date.toLocaleTimeString() }</div>;
  }
}

export default Clock;
