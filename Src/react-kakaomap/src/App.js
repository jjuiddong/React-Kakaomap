import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Map}></Route>      
    </div>
  );
}

export default App;
