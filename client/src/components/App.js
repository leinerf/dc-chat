import React, { Component } from 'react';
import './App.css';
import Sidebar from "./Sidebar"
import Main from "./Main"
import {BrowserRouter as Router,} from "react-router-dom";

const hello = (props) => {
  return function(){props.history.push("/")}
}

const App = (props) => {
    return (
          <Router>
            <div className="App">
              <div id="sidebar-section">
                <Sidebar />
              </div>
              <div id="main">
                <Main {...props}/>
              </div>
            </div>
          </Router>
    );
}

export default App;
