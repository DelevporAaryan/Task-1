import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import FormBox from "./components/FormBox";
import Table from "./components/Table";

function App() {
  const [mode, setMode] = useState("chat");

  return (
    <div style={{ padding: 20 }}>
      <h1>AI CRM Dashboard</h1>

      <button onClick={() => setMode("chat")}>Chat</button>
      <button onClick={() => setMode("form")}>Form</button>

      {mode === "chat" ? <ChatBox /> : <FormBox />}

      <hr />
      <Table />
    </div>
  );
}

export default App;
