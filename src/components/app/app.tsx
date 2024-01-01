import * as React from "react";

import s from "./app.module.scss"
import CircleComponent from "../circle/circle";
const App = () => (
  <div className="app" style={{marginTop:'200px'}}>
    <CircleComponent numPoints={8} />
  </div>
);

export default App;
