import React from "react";

import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/login-form/LoginForm";
import ChatFeed from "./components/chat-feed/ChatFeed";

import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
