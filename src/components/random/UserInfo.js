import React from 'react';
import Avatar from './Avatar';

const UserInfo = ({ user }) => (
  <div className="user-info">
    <Avatar user={ user } />
    <div className="user-info-name">{ user.name }</div>
  </div>
);

export default UserInfo;
