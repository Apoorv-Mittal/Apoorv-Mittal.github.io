import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FrontPage from './Components/FrontPage'
import './App.css';


class App extends Component {
  render() {
    console.log(this.state);
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
      <div className="App">
        <Route exact path={`/`} render={ (routerProps) => < FrontPage/>} />
      </div>
      
    );
  }
}

export default App;
