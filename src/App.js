import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Loadable from 'react-loadable';

const getCurrentComponent = ({type, name}) => {
  return (type && name) 
    ? Loadable({
      loader: () => import(`./components/${type}/${name}/${name}.example.js`),
      loading() {
        return <div>Loading ...</div>
      }
    })
    : null;
};

class App extends Component {
  getRoute() {
    const browserPath = window.location.pathname;

    const [type = false, name = false] = browserPath.slice(1).split('/');

    return {type, name};
  }

  render() {
    const route = this.getRoute();
    const CurrentComponent = getCurrentComponent(route);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HDQC UI Lib POC</h1>
        </header>
        <CurrentComponent />
      </div>
    );
  }
}

export default App;
