import * as React from "react";

import { Counter } from "../../components/counter/counter";
import { useState } from "react";
import { Blok } from "../blok/blok";
import { Circle } from "../circle/circle";

const App = () => {

  const dates = [
    [2015, 2022],
    [1990, 2000],
    [1995, 2006],
    [2005, 2007],
    [1986, 2030],
    [1992, 1997]
  ];

  const [numbers, setNumbers] = useState(dates[0]);


  return (<div>
    <Blok numPoints={6} />
    {/*<Circle numPoints={6} dates={dates} setNumbers={setNumbers} numbers={numbers}/>*/}
  </div>);
};

export default App;
