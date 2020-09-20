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
          color='#FFFFFF'

          //   timeout={2000}
        />
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
