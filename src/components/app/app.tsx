import * as React from "react";
import { useState } from "react";
import { Blok } from "../blok/blok";

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
  </div>);
};

export default App;
