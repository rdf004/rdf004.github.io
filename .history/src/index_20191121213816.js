import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import About from './Components/About';
import Work from './Components/Work';
import Projects from './Components/Projects';
import Design from './Components/Design';
import Books from './Components/Books';
import Resume from './Components/Resume';
import Case1 from './Components/Case1';
import * as serviceWorker from './serviceWorker';
import { Redirect } from 'react-router';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/projects" component={Projects} />
        <Route path="/design" component={Design} />
        <Route path="/books" component={Books} />
        <Route path="/resume" component={Resume} />
        <Route path="/case1" component={Case1} />
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
