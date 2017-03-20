import React from 'react';

const singleMessage = ({body, username, createdAt}, idx) => {

  return(
    <div key={idx} className="single-message-container">
      <div className="single-message-header">
        <div className="sender">
          {username}
        </div>
        <div className="time">
          {createdAt}
        </div>
      </div>
      <div className="single-message-content">
        {body}
      </div>
    </div>
  );
};

const MessageHistory = ({ history }) => {
  let messageHistory = [];
  if (history) {
    messageHistory = history;
  }

  return(
    <div className="message-history-container">
      {
        messageHistory.map((message, idx) => (
          singleMessage(message, idx)
        ))
      }
    </div>
  );
};

export default MessageHistory;
