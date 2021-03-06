import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopShows } from '../../redux/actions/index';
import CardCollection from '../../components/card-collection/card-collection.component';
import Loader from 'react-loader-spinner';

import './homePage.styles.css';

const HomePage = (props) => {
  const { data, loading, showSearchResults, showSearchQuery } = props;
  const { fetchTopShows } = props;
  let list = [];

  useEffect(() => {
    fetchTopShows();
    window.scrollTo(0, 0);
  }, [fetchTopShows]);

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
      ) : showSearchQuery.length > 2 ? (
        <CardCollection
          items={showSearchResults}
          count={showSearchResults.length}
        />
      ) : (
        <CardCollection items={list.shows.data} count={10} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
    showSearchQuery: state.shows.showSearchQuery,
    showSearchResults: state.shows.showSearchResults,
    loading: state.shows.loading,
  };
};

export default connect(mapStateToProps, { fetchTopShows })(HomePage);
