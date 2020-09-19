import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopShows } from '../../redux/actions/index';
import CardCollection from '../../components/card-collection/card-collection.component';
import './homepage.styles.css';
import Loader from 'react-loader-spinner';

const HomePage = (props) => {
  const { data, loading, showSearchResults, showSearchQuery } = props;
  const { fetchTopShows } = props;
  let list = [];

  useEffect(() => {
    fetchTopShows();
  }, [fetchTopShows]);

  list = data;

  return (
    <div className='cards'>
      {loading ? (
        <Loader
          className='loader'
          type='ThreeDots'
          color='#FFFFF'

          //   timeout={2000}
        />
      ) : showSearchQuery.length > 2 ? (
        /*     showSearchResults ? (
          <CardCollection items={showSearchResults} />
        ) : (
          <div className='no-results'>
            {' '}
            <h1>NO RESULTS</h1>{' '}
          </div>
        ) */
        <CardCollection items={showSearchResults} />
      ) : (
        <CardCollection items={list.shows.data} />
      )}
      {/* 
      {loading ? (
        <Loader
          className='loader'
          type='Grid'
          color='#FFFFF'

          //   timeout={2000}
        />
      ) : (
        <CardCollection items={list.shows.data} />
      )} */}
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
