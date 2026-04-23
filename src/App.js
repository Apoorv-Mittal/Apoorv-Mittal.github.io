import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import FrontPage from './Components/FrontPage';
import Work from './Components/Work';
import Projects from './Components/Projects/Projects';
import NotFound from './Components/NotFound';
import './App.css';
import { start,unmount } from "./Components/Background";
import ReactGA from 'react-ga';

const Navigation = lazy(() => import('./Components/Navigation'));

class App extends Component {

  canvasRef = React.createRef()

  componentDidMount() {
    ReactGA.initialize('UA-100589361-2');
    start(this.canvasRef.current)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  componentWillUnmount() {
    unmount()
  }

  componentDidUpdate() {
    ReactGA.pageview(window.location.hash.substring(1))
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <canvas ref={this.canvasRef} className="background" />

          <Suspense fallback={<div>Loading...</div>}>
            <Navigation/>
          </Suspense>

          <Switch>
            <Route exact path={`/`} render={() => <FrontPage/>} />
            <Route exact path={`/Work`} render={() => <Work/>} />
            <Route exact path={`/Projects`} render={() => <Projects/>} />
            <Route exact path='*' render={() => <NotFound/>} />
          </Switch>
          
        </div>
      </HashRouter>
    );
  }
}

export default App;