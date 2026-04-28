import React, { useState } from "react";
import axios from "axios";

function FormBox(){
  const [form,setForm]=useState({
    doctor:"",
    product:"",
    outcome:""
  });

  const save = async () => {
    await axios.post("http://127.0.0.1:8000/log-interaction", {
      text: `${form.doctor} ${form.product} ${form.outcome}`
    });

    alert("Saved!");
  };

  return(
    <div>
      <h3>Manual Form</h3>

      <input placeholder="Doctor"
        onChange={(e)=>setForm({...form,doctor:e.target.value})}
      /><br/>

      <input placeholder="Product"
        onChange={(e)=>setForm({...form,product:e.target.value})}
      /><br/>

      <input placeholder="Outcome"
        onChange={(e)=>setForm({...form,outcome:e.target.value})}
      /><br/>

      <button onClick={save}>Save</button>
    </div>
  );
}

export default FormBox;
