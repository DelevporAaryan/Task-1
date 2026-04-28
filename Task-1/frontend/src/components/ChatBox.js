import React, { useState } from "react";
import axios from "axios";

function ChatBox() {
  const [text, setText] = useState("");

  const send = async () => {
    await axios.post("http://127.0.0.1:8000/log-interaction", { text });
    alert("Interaction Logged!");
  };

  return (
    <div>
      <h3>Chat Interface</h3>
      <textarea onChange={(e) => setText(e.target.value)} />
      <br />
      <button onClick={send}>Send</button>

  {data && (
  <div style={{ marginTop: "10px", border: "1px solid #ccc", padding: "10px" }}>
    <h4>Extracted Data</h4>
    <p><b>Doctor:</b> {data.doctor}</p>
    <p><b>Product:</b> {data.product}</p>
    <p><b>Outcome:</b> {data.outcome}</p>
  </div>
)}
    </div>
  );
}

export default ChatBox;
