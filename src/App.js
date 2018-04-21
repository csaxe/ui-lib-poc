import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Loadable from 'react-loadable';

const getCurrentComponent = ({items, name}) => {
  return ((items && name) 
    ? Loadable({
      loader: () => import(`./components/${items.join('/')}/${name}/${name}.example.js`),
      loading() {
        return <div>Loading ...</div>
      }
    })
    : () => (<p>Set the path to see a component</p>));
};

class App extends Component {
  getRoute() {
    const browserPath = window.location.pathname;

    const items = browserPath.slice(1).split('/');

    const name = items.pop();


    return {items, name};
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
