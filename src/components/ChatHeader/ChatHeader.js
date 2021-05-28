import React from "react";

import "./ChatHeader.css";
import onlineIcon from "../../images/online_icon.svg";
import closeIcon from "../../images/close_btn.svg";

function ChatHeader({ room }) {
  return (
    <div className="chat-header">
      <img
        className="chat-header__online-icon"
        src={onlineIcon}
        alt="online icon green color"
      ></img>
      <h3 className=" chat-header__title">room: {room}</h3>
      <a href="/" className="chat-header__close">
        <img
          className="chat-header__close-icon"
          src={closeIcon}
          alt="close icon "
        ></img>
      </a>
    </div>
  );
}

export default ChatHeader;
