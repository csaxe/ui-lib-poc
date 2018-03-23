import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  getRoute() {
    const browserPath = window.location.pathname;

    const [type = false, name = false] = browserPath.slice(1).split('/');

    return {type, name};
  }

  render() {
    const route = this.getRoute();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HDQC UI Lib POC</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
