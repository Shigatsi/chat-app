import React from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";
import Messages from "../Messages/Messages";
import ChatHeader from "../ChatHeader/ChatHeader";
import AddMessageForm from "../AddMessageForm/AddMessageForm";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const ENDPOINT = "localhost:5000";

  React.useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name: name, room: room });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  React.useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);
  return (
    <section className="chat">
      <ChatHeader room={room} />
      <Messages messages={messages} name={name} date={messages.date} />
      <AddMessageForm
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </section>
  );
};

export default Chat;
