import React from 'react';
// import components from react router dom
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import components and pages to use
import Nav from './components/Nav';
import Home from './pages/Home';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/saved" component={Saved}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;