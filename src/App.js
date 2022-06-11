import React from "react";
import Grid from "./Grid";
import "./App.css"

const App = ()=>{
  return(
    <div className="backgrd">
      <div className="heading">Tic Tac Toe</div>
      <Grid/>
    </div>
  );
}

export default App;