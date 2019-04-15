import React, { Component, Fragment } from 'react';
import Greeting from './Greeting';
import Clock from './Clock';
import LogNameForm from './LogNameForm';

class OtherComponents extends Component {

  render() {
    return (
      <Fragment>
        <Greeting text="React" />
        <Clock />
        <LogNameForm />
      </Fragment>
    );
  }

}

export default OtherComponents;
