import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopMovies } from '../../redux/actions/index';
import CardCollection from '../../components/card-collection/card-collection.component';
import './movies.styles.css';
import Loader from 'react-loader-spinner';

const MoviesPage = (props) => {
  const { data, loading } = props;
  const { fetchTopMovies } = props;
  let list = [];
  useEffect(() => {
    fetchTopMovies();
  }, [fetchTopMovies]);

  list = data;

  return (
    <div className='cards'>
      {loading ? (
        <Loader
          type='Puff'
          color='#00BFFF'
          height={100}
          width={100}
          //  timeout={2000}
        />
      ) : (
        <CardCollection items={list.movies} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchTopMovies })(MoviesPage);
