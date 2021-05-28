import React from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";
import Messages from "../Messages/Messages";
import ChatHeader from "../ChatHeader/ChatHeader";
import AddMessageForm from "../AddMessageForm/AddMessageForm";
import SideBar from "../SideBar/SideBar";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [users, setUsers] = React.useState([]);
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

  React.useEffect(() => {
    socket.on("roomData", (data) => {
      setUsers(data.users);
    });
  }, [users]);

  console.log(users);
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  return (
    <section className="chat">
      <ChatHeader room={room} />
      <SideBar users={users} />
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
