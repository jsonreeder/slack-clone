import React from 'react';
import { Link } from 'react-router';

const userInfo = (username, signOut) => {
  const formattedName = username[0].toUpperCase() + username.slice(1);
  return(
    <ul className="user-info">
      <li className="name">{formattedName}</li>
      <li>@{username}</li>
      <li><button onClick={signOut}>Sign out</button></li>
    </ul>
  );
};

const welcome = (currentUser, signOut) => (
  <div className="messages-container">
    <div className="sidebar-container">
      {userInfo(currentUser.username, signOut)}
    </div>
  </div>
);

const Message = ({ currentUser, signOut }) => (
  welcome(currentUser, signOut)
);

export default Message;
