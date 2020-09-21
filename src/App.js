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
      <Switch>
        <Redirect exact from='/' to='/shows' />
        <Route
          exact
          path='/shows'
          render={() => (
            <div>
              <Header />
              <HomePage />
            </div>
          )}
        />
        <Route
          exact
          path='/movies'
          render={() => (
            <div>
              <Header />
              <MoviesPage />
            </div>
          )}
        />
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
