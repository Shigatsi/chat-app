import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import JoinForm from "./components/JoinForm/JoinForm";
import Chat from "./components/Chat/Chat";

const App = () => {
  React.useEffect(() => {
    document.title = "ChatApp";
  }, []);

  return (
    <Switch>
      <Route path="/" exact component={JoinForm} />
      <Route path="/chat" component={Chat} />
    </Switch>
  );
};

export default App;
