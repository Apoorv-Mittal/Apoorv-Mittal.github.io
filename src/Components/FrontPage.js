import React, { Component, lazy, Suspense } from 'react';
import logo from './myPhoto.jpg';
import 'font-awesome/css/font-awesome.min.css';
import Container from 'react-bootstrap/lib/Container';
import resume from './Resume.pdf'
import { start,unmount } from "./Background"

const Timeline = lazy(() => import('./Timeline'));



class FrontPage extends Component {

  componentDidMount() {
    let canvas = this.refs.canvas
    console.log(canvas)
    start(canvas)
  }

  componentWillUnmount() {
    unmount()
  }


  render() {
    return (
      
      <React.Fragment>
        
        <canvas ref="canvas" className="background"></canvas>
        
        <Container className="App-Inside">
          <img src={logo} className="Pic" alt="Myself" />
          <p>
            Building beautiful and awesome software!
          </p>
          <div>
            <a href ={ resume } >
              <i className="fa fa-file-pdf-o fa-2x"/>
            </a>
            <a href ="https://github.com/Apoorv-Mittal" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github fa-2x"/>
            </a>
            <a href="https://www.linkedin.com/in/apoorv-mittal/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-2x" />
            </a>
          </div>
        </Container>

        <Suspense fallback={<div>Loading...</div>}>
          <Timeline />
        </Suspense>

      </React.Fragment>
        

          
        
      
    );
  }
}

export default FrontPage;
