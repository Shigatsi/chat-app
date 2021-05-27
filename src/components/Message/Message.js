import React from "react";

import "./Message.css";

function Message({ message, name }) {
  const [currentUserMessage, setCurrentUserMessage] = React.useState(false);

  if (message.user === name.trim().toLowerCase()) {
    // setCurrentUserMessage(true);
    console.log(message.user, name.trim().toLowerCase());
  }

  return (
    <div className="message">
      <b className="message__author">{message.user}</b>
      <p className="message__date">{message.date}</p>
      <p className="message__text">{message.text}</p>
      <hr />
    </div>
  );
}

export default Message;
