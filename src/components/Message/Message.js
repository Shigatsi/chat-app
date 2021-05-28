import React from "react";
import ReactEmoji from "react-emoji";

import "./Message.css";

function Message({ message, name }) {
  let isCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (message.user === trimmedName) {
    isCurrentUser = true;
  }

  return (
    <div
      className={`message ${isCurrentUser ? "message_type_current-user" : ""}`}
    >
      <b className="message__author">{message.user}</b>
      <p className="message__date">{message.date}</p>
      <p className="message__text">{ReactEmoji.emojify(message.text)}</p>
      <hr />
    </div>
  );
}

export default Message;
