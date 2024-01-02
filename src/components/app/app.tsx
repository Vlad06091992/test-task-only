import * as React from "react";

import s from "./app.module.scss"
import CircleComponent from "../circle/circle";
import { Counter } from "../../components/counter/counter";
import { useState } from "react";
const App = () => {

  const[from,setFrom] = useState(10)
  const[to,setTo] = useState(20)

 return( <div style={{ marginTop: '300px', marginLeft: '100px' }}>
   <button onClick={()=>{
     setTo(100)
     setFrom(1000)
   }}>from</button>
   <button onClick={()=>{
     setTo(1000)
     setFrom(100)
   }}>to</button>
    <CircleComponent numPoints={3} />
    <Counter from={from} to={to} />
  </div>)
};

export default App;
