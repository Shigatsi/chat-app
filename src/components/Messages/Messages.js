import React from "react";
import "./Messages.css";

import Message from "../Message/Message";

function Messages({ messages, name }) {
  return (
    <div className="messages" style={{ height: "400px", overflowY: "auto" }}>
      {messages.map((m, index) => (
        <Message message={m} key={index} name={name} />
      ))}
    </div>
  );
}

export default Messages;
