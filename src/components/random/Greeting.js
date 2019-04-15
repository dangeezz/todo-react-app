import React from 'react';
import Emoji from './Emoji';

const Greeting = (props) => (
  <div className="is-size-1">
    <Emoji icon="👋" name="wave" />
    Hello { props.text }
  </div>
);

export default Greeting;
