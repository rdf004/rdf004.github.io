import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import About from './Components/About';
import Work from './Components/Work';
import Projects from './Components/Projects';
import Books from './Components/Books';
import Resume from './Components/Resume';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/projects" component={Projects} />
        <Route path="/books" component={Books} />
        <Route path="/resume" component={Resume} />
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
