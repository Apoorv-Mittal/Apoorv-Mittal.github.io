import React, { Component } from 'react';
import logo from '../myPhoto.jpg';
import 'font-awesome/css/font-awesome.min.css';
import Container from 'react-bootstrap/lib/Container';
import resume from './Resume.pdf'

class FrontPage extends Component {
  render() {
    return (

        <Container className="App-Back">
        
          <img src={logo} className="Pic" alt="Myself" />
          <p>
            Building beautiful and awesome software!
          </p>
          <div>
            <a href ={ resume } >
              <i className="fa fa-file-pdf-o fa-2x"></i>
            </a>
            <a href ="https://github.com/Apoorv-Mittal" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/apoorv-mittal/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-2x" ></i>
            </a>
          </div>

          
        </Container>
      
    );
  }
}

export default FrontPage;
