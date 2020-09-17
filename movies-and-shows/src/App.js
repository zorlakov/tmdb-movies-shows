import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import Header from '../src/components/header/header.component';
import MoviesPage from '../src/pages/moviesPage/movies.component';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/movies' component={MoviesPage} />
      </Switch>
    </div>
  );
}

export default App;
