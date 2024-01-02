import * as React from "react";

import { Counter } from "../../components/counter/counter";
import { useState } from "react";
const App = () => {

  const[numbers,setNumbers] = useState([1998,2010])


 return( <div style={{ marginTop: '300px', marginLeft: '100px' }}>
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

    {/*<CircleComponent numPoints={3} />*/}
    <Counter leftNumber={numbers[0]} rightNumber={numbers[1]} />
  </div>)
};

export default App;
