import React from "react";
import { Link } from "react-router-dom";

import "./JoinForm.css";

const Join = () => {
  const [name, seName] = React.useState("");
  const [room, setRoom] = React.useState("");

  const handleChangeUserName = (event) => {
    seName(event.target.value);
  };
  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  return (
    <form className="join-form">
      <h1 className="join-form__title">Join to Chat</h1>
      <input
        name="Name"
        className="join-form__input"
        type="text"
        required
        value={name}
        placeholder="Name"
        onChange={handleChangeUserName}
      />
      <input
        name="Room"
        className="join-form__input"
        type="text"
        required
        value={room}
        placeholder="Room"
        onChange={handleChangeRoom}
      />
      <Link to={`/chat?name=${name}&room=${room}`}>
        <button
          disabled={!name || !room}
          className={`join-form__button ${
            !name || !room ? "join-form__button_type_disabled" : null
          }`}
        >
          Sign in
        </button>
      </Link>
    </form>
  );
};

export default Join;
