import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopMovies } from '../../redux/actions/index';
import CardCollection from '../../components/card-collection/card-collection.component';
import Loader from 'react-loader-spinner';

import './moviesPage.styles.css';

const MoviesPage = (props) => {
  const { data, loading, movieSearchResults, movieSearchQuery } = props;
  const { fetchTopMovies } = props;
  let list = [];
  useEffect(() => {
    fetchTopMovies();
    window.scrollTo(0, 0);
  }, [fetchTopMovies]);

  list = data;

  return (
    <div className='cards'>
      <div className='headline'>
        {window.location.pathname === '/movies' ? (
          <h1>TOP 10 MOVIES</h1>
        ) : (
          <h1>TOP 10 TV SHOWS</h1>
        )}
      </div>
      {loading ? (
        <Loader className='loader' type='ThreeDots' color='#FFFFFF' />
      ) : movieSearchQuery.length > 2 ? (
        <CardCollection
          items={movieSearchResults}
          count={movieSearchResults.length}
        />
      ) : (
        <CardCollection items={list.movies.data} count={10} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
    loading: state.movies.loading,
    movieSearchQuery: state.movies.movieSearchQuery,
    movieSearchResults: state.movies.movieSearchResults,
    showSearchQuery: state.shows.showSearchQuery,
  };
};

export default connect(mapStateToProps, { fetchTopMovies })(MoviesPage);
