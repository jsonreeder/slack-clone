import React from 'react';

const singleMessage = ({content, sender, time}) => {

  return(
    <div className="single-message-container">
      <div className="single-message-header">
        <div className="sender">
          {sender}
        </div>
        <div className="time">
          {time}
        </div>
      </div>
      <div className="single-message-content">
        {content}
      </div>
    </div>
  );
};

const MessageHistory = () => {

  return(
    <div className="message-history-container">
      {singleMessage({
         content: "Mr. Watson",
         sender: "edison",
         time: "8:00 AM"
       })}
      {singleMessage({
         content: "Come here",
         sender: "edison",
         time: "8:01 AM"
       })}
      {singleMessage({
         content: "I want you",
         sender: "edison",
         time: "8:03 AM"
       })}
    </div>
  );
};

export default MessageHistory;
