import * as React from "react";
import s from './app.module.scss'
import { Counter } from "../../components/counter/counter";
import { CircleComponent } from "../../components/circle/circle";
import { useState } from "react";
import { Slider } from "../../components/slider/slider";
const App = () => {

  const[numbers,setNumbers] = useState([1998,2010])


 return( <div className={s.app} style={{ marginTop: '300px', marginLeft: '100px' }}>
   <button onClick={()=>{
     setNumbers([1999,1986])

   }}>change</button>



   <button onClick={()=>{
     setNumbers([2000,2005])

   }}>change2</button>

   <button onClick={()=>{
     setNumbers([1996,2003])

   }}>change2</button>


   <button onClick={()=>{
     setNumbers([1985,2030])

   }}>change2</button>

    <CircleComponent numPoints={8} />
    <Counter leftNumber={numbers[0]} rightNumber={numbers[1]} />
   <Slider/>
  </div>)
};

export default App;
