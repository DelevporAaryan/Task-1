import React from "react";
import ChatBox from "./components/ChatBox";
import InteractionList from "./components/InteractionList";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>AI CRM HCP Module</h1>
      <ChatBox />
      <InteractionList />
    </div>
  );
}

export default App;
