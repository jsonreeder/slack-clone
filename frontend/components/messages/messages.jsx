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

const sidebar = (username, signOut) => {
  return(
    <div className="sidebar-container">
      {userInfo(username, signOut)}
    </div>
  );
};

const home = () => {
  return(
    <div className="home-container">
      <h1 className="forum-name">#general</h1>
    </div>
  );
};

const Message = ({ currentUser, signOut }) => (
  <div className="messages-container">
    {sidebar(currentUser.username, signOut)}
  </div>
);

export default Message;
