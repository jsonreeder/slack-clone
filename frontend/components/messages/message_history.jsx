import React from 'react';

const singleMessage = ({body, username, createdAt}, idx) => {
  const date = new Date(createdAt);
  const hours24 = date.getHours();
  const hours12 = hours24 % 12;
  const amPm = (hours24<12 ? 'AM' : 'PM');
  const minutes = date.getMinutes();
  const minutesPadded = (minutes>9 ? '' : '0') + minutes;
  const time = `${hours24}:${minutesPadded} ${amPm}`;

  return(
    <div key={idx} className="single-message-container">
      <div className="single-message-header">
        <div className="sender">
          {username}
        </div>
        <div className="time">
          {time}
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
