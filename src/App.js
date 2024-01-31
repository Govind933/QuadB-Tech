// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ShowList} />
        <Route path="/details/:id" component={ShowDetails} />
      </Switch>
    </Router>
  );
}

export default App;
