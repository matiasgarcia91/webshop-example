import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
