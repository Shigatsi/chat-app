import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Messages.css";

import Message from "../Message/Message";

function Messages({ messages, name }) {
  return (
    <ScrollToBottom>
      <div className="messages" style={{ height: "400px", overflowY: "auto" }}>
        {messages.map((m, index) => (
          <Message message={m} key={index} name={name} />
        ))}
      </div>
    </ScrollToBottom>
  );
}

export default Messages;
