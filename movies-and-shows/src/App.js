import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import Header from '../src/components/header/header.component';
import MoviesPage from '../src/pages/moviesPage/movies.component';
import MovieDetailsPage from '../src/pages/movieDetails/movie-details.component';
import ShowDetailsPage from '../src/pages/showDetails/show-details.component';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header className='sticky-header' />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/movies' component={MoviesPage} />
        <Route exact path='/movieDetails/:id' component={MovieDetailsPage} />
        <Route exact path='/showDetails/:id' component={ShowDetailsPage} />
        <Route
          name='details'
          exact
          path='/details/:id'
          component={ShowDetailsPage}
        />
      </Switch>
    </div>
  );
}

export default App;
