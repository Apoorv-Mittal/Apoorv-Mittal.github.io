import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import FrontPage from './Components/FrontPage';
import Work from './Components/Work';
import Projects from './Components/Projects/Projects';
import NotFound from './Components/NotFound';
import CMSC433 from './Components/CMSC433/CMSC433';
import CMSC420 from './Components/CMSC420/CMSC420';
import CMSC320 from './Components/CMSC320/CMSC320';
import CMSC330 from './Components/CMSC330/CMSC330';
import './App.css';
import { start,unmount } from "./Components/Background";
import withTracker from './Components/withTracker';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-100589361-2');

const Navigation = lazy(() => import('./Components/Navigation'));

class App extends Component {

  componentDidMount() {
    let canvas = this.refs.canvas
    console.log(canvas)
    start(canvas)
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentWillUnmount() {
    unmount()
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <canvas ref="canvas" className="background" />

          <Suspense fallback={<div>Loading...</div>}>
            <Navigation/>
          </Suspense>

          <Switch>
            <Route exact path={`/`} render={withTracker(FrontPage)} />
            <Route exact path={`/Work`} render={withTracker(Work)} />
            <Route exact path={`/CMSC433`} render={withTracker(CMSC433)} />
            <Route exact path={`/CMSC420`} render={withTracker(CMSC420)} />
            <Route exact path={`/CMSC320`} render={withTracker(CMSC320)} />
            <Route exact path={`/CMSC330`} render={withTracker(CMSC330)} />
            <Route exact path={`/Projects`} render={withTracker(Projects)} />
            <Route exact path='*' render={withTracker(NotFound)} />

          </Switch>
          
        </div>
      </HashRouter>
    );
  }
}

export default App;