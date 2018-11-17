import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FrontPage from './Components/FrontPage';
import Container from 'react-bootstrap/lib/Container';
import './App.css';


class App extends Component {
  render() {
    return (
      <Container className="App">
        <Route exact path={`/`} render={ (routerProps) => < FrontPage/>} />
      </Container>
      
    );
  }
}

export default App;
