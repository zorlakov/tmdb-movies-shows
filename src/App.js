import React from 'react';
import HomePage from './pages/homepage/homePage';
import Header from '../src/components/header/header.component';
import MoviesPage from '../src/pages/moviesPage/moviesPage';
import DetailsPage from './pages/detailsPage/detailsPage';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header className='sticky-header' />
      <Switch>
        <Redirect exact from='/' to='/shows' />

        <Route exact path='/shows' component={HomePage} />
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
