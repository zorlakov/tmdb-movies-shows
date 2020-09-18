import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopShows } from '../../redux/actions/index';
import CardCollection from '../../components/card-collection/card-collection.component';
import './homepage.styles.css';
import Loader from 'react-loader-spinner';

const HomePage = (props) => {
  const { data, loading } = props;
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
          type='Puff'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={2000}
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
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchTopShows })(HomePage);
