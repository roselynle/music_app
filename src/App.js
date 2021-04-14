import React from 'react';

import * as Pages from './pages';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
     <>
        <Switch>
           <Route exact path="/" component={Pages.Homepage} />
           <Route path="/about" component={Pages.About} />
           <Route path="/lyrics" component={Pages.Lyrics} />
           <Route component={Pages.NotFound} />
        </Switch>
     </>
    );
}

export default App;
