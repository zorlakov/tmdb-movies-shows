import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopShows, fetchShowSearch } from '../../redux/actions/index';
import CardCollection from '../../components/card-collection/card-collection.component';
import './homepage.styles.css';
import Loader from 'react-loader-spinner';

const HomePage = (props) => {
  const { data, loading } = props;
  const { fetchTopShows, fetchShowSearch } = props;
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
          type='Grid'
          color='#FFFFF'

          //   timeout={2000}
        />
      ) : (
        <CardCollection items={list.shows} />
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

export default connect(mapStateToProps, { fetchTopShows, fetchShowSearch })(
  HomePage
);
