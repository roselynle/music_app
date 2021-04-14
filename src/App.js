import React from 'react';

import { Homepage, About, Lyrics } from './pages';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
     <>
        <Switch>
           <Route exact path="/" component={Homepage} />
           <Route path="/about" component={About} />
           <Route path="/lyrics" component={Lyrics} />
        </Switch>
     </>
    );
}

export default App;
