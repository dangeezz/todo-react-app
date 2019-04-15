import React from 'react';

const Emoji = (props) => (
  <span role="img" aria-labelledby={props.name}>
    {props.icon}
  </span>
);

Emoji.defaultProps = {
  name: "emoji"
};

export default Emoji;
