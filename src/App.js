import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main"

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Calculator</h1>
        </div>
      <div className="mainDiv">
      <Main/>
      </div>
      </div>
    );
  }
}

export default App;
