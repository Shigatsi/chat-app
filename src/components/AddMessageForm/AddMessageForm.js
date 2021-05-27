import React from "react";

import "./AddMessageForm.css";
function AddMessageForm({ message, setMessage, sendMessage }) {
  return (
    <div className="message-form">
      <textarea
        className="msg__textarea"
        onChange={(e) => setMessage(e.currentTarget.value)}
        value={message}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      ></textarea>
      <button className="msg__send-btn" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default AddMessageForm;
