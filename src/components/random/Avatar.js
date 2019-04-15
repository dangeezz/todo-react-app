import React from 'react';

const Avatar = ({ user }) => (
  <img className="avatar" src={user.avatarUrl} alt={user.name} />
);

export default Avatar;
