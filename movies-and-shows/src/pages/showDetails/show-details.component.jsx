import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchShowDetails, fetchMovieDetails } from '../../redux/actions/index';
import Details from '../../components/details/details.component';
import './show-details.styles.css';

const ShowDetailsPage = (props) => {
  const { fetchShowDetails, fetchMovieDetails } = props;

  useEffect(() => {
    if (props.location.state.item.name) {
      fetchShowDetails(props.location.state.item.id);
    } else {
      fetchMovieDetails(props.location.state.item.id);
    }
  }, [
    fetchShowDetails,
    fetchMovieDetails,
    props.location.state.item.id,
    props.location.state.item.name,
  ]);

  return <Details item={props.location.state.item} />;
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps, {
  fetchShowDetails,
  fetchMovieDetails,
})(ShowDetailsPage);
