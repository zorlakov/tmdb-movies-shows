import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import Header from '../src/components/header/header.component';
import MoviesPage from '../src/pages/moviesPage/movies.component';
import DetailsPage from './pages/detailsPage/details.component';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header className='sticky-header' />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/movies' component={MoviesPage} />
        <Route
          name='details'
          exact
          path='/details/:id'
          component={DetailsPage}
        />
      </Switch>
    </div>
  );
}

export default App;
