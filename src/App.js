import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './myPhoto.jpg';
import './App.css';

const Frontpage = () => (
  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Building awesome software!
          </p>
        </header>
      </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={`/`} render={ (routerProps) => < Frontpage/>} />
      </div>
      
    );
  }
}

export default App;
