import React from 'react';

const Hello = ({ message }) => (<div>Hello {message}</div>);
const Welcome = ({ msg }) => (<Hello message={msg} />);

export {
    Welcome,
};