import React from 'react';

const singleMessage = ({body, sender, time}, idx) => {

  return(
    <div key={idx} className="single-message-container">
      <div className="single-message-header">
        <div className="sender">
          {sender}
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

const MessageHistory = () => {
  const messageHistory = [
    {
      body: "Mr. Watson",
      sender: "edison",
      time: "8:00 AM"
    },
    {
      body: "Come here",
      sender: "edison",
      time: "8:01 AM"
    },
    {
      body: "I want you",
      sender: "edison",
      time: "8:03 AM"
    },
    {
        body: "He led no armies into battle, he conquered no countries, and he enslaved no peoples... Nonetheless, he exerted a degree of power the magnitude of which no warrior ever dreamed. His name still commands a respect as sweeping in scope and as world-wide as that of any other mortal - a devotion rooted deep in human gratitude and untainted by the bias that is often associated with race, color, politics, and religion.",
        sender: "edison",
        time: "8:05 AM"
      },
  ];

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
