import React, { Component } from 'react';
import logo from '../myPhoto.jpg';

class FrontPage extends Component {
  render() {
    return (

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Building awesome software!
          </p>
        </div>
      
    );
  }
}

export default FrontPage;
