import React, { useState } from "react";
import axios from "axios";

function InteractionList() {
  const [data, setData] = useState([]);

  const load = async () => {
    const res = await axios.get("http://127.0.0.1:8000/interactions");
    setData(res.data);
  };

  return (
    <div>
      <h3>Interactions</h3>
      <button onClick={load}>Load</button>

      {data.map((d) => (
        <div key={d.id}>
          <p>
            {d.doctor} | {d.product} | {d.outcome}
          </p>
        </div>
      ))}
    </div>
  );
}

export default InteractionList;
