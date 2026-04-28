import React, { useState } from "react";
import axios from "axios";

function ChatBox() {
  const [text, setText] = useState("");
  const [editable, setEditable] = useState(null);

  // 🔥 Step 1: AI extraction
  const send = async () => {
    const res = await axios.post("http://127.0.0.1:8000/log-interaction", {
      text,
    });

    setEditable(res.data);
  };

  // 🔥 Step 2: Confirm save
  const save = async () => {
    await axios.post("http://127.0.0.1:8000/log-interaction", {
      text: editable.summary,
    });

    alert("Saved Successfully!");
    setEditable(null);
    setText("");
  };

  return (
    <div>
      <h3>Chat Interface</h3>

      <textarea
        placeholder="Type interaction..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />
      <button onClick={send}>Send</button>

      {editable && (
        <div style={{ marginTop: "10px", border: "1px solid #ccc", padding: "10px" }}>
          <h4>Review & Edit</h4>

          <p>Doctor:</p>
          <input
            value={editable.doctor || ""}
            onChange={(e) =>
              setEditable({ ...editable, doctor: e.target.value })
            }
          />

          <p>Product:</p>
          <input
            value={editable.product || ""}
            onChange={(e) =>
              setEditable({ ...editable, product: e.target.value })
            }
          />

          <p>Outcome:</p>
          <input
            value={editable.outcome || ""}
            onChange={(e) =>
              setEditable({ ...editable, outcome: e.target.value })
            }
          />

          <br /><br />
          <button onClick={save}>✅ Confirm & Save</button>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
