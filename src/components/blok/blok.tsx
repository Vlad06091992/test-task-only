import { CircleComponent } from "../circle/circle";
import { Counter } from "../counter/counter";
import { useState } from "react";

export const Blok = () => {
  const[numbers,setNumbers] = useState([2000,2005])
  return (
    <div>
      <div style={{marginLeft:'200px'}}>
      <CircleComponent numPoints={6}/>
      </div>
      {/*<Counter leftNumber={numbers[0]} rightNumber={numbers[1]} />*/}
    </div>
  )
}
