import React, { Component } from 'react';
import Emoji from './Emoji';

class LogNameForm extends Component {
  state = {
    value: '',
  }

  handleInput = e => {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-one-third">
          <label className="label" htmlFor="name">
            Name <Emoji name="person" icon="🧑" />
          </label>
          
          <input
            id="name"
            className="input"
            type="text"
            value={this.state.value}
            onInput={this.handleInput}
          />
        </div>
      </div>
    );
  }
}

export default LogNameForm;
