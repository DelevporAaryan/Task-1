import React,{useState} from "react";
import axios from "axios";

function Table(){
  const [data,setData]=useState([]);

  const load=async()=>{
    const res=await axios.get("http://127.0.0.1:8000/interactions");
    setData(res.data);
  };

  return(
    <div>
      <h3>Interactions</h3>
      <button onClick={load}>Load</button>

      <table border="1">
        <tr>
          <th>Doctor</th>
          <th>Product</th>
          <th>Outcome</th>
        </tr>

        {data.map(d=>(
          <tr key={d.id}>
            <td>{d.doctor}</td>
            <td>{d.product}</td>
            <td>{d.outcome}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
