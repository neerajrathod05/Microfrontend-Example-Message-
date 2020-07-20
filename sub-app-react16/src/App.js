import React, { Component } from 'react';
import './App.css';
import {ReceiveMsg} from "./ReceiveMsg";
import './styles/bootstrap/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReceiveMsg/>
      </div>
    );
  }
}

export default App;
