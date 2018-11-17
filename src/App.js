import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FrontPage from './Components/FrontPage';
import Container from 'react-bootstrap/lib/Container';
import './App.css';


class App extends Component {
  render() {
    console.log(this.state);
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
      <Container className="App">
        <Route exact path={`/`} render={ (routerProps) => < FrontPage/>} />
      </Container>
      
    );
  }
}

export default App;
