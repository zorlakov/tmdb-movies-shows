import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchShowDetails, fetchMovieDetails } from '../../redux/actions/index';
import Details from '../../components/details/details.component';
import './show-details.styles.css';

const DetailsPage = (props) => {
  const { fetchShowDetails, fetchMovieDetails } = props;
  const movie = props.movie;
  const show = props.show;
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

  return (
    <div>
      {props.location.state.item.name ? (
        <Details item={props.location.state.item} show={show} />
      ) : (
        <Details item={props.location.state.item} movie={movie} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
    show: state.shows.show,
  };
};

export default connect(mapStateToProps, {
  fetchShowDetails,
  fetchMovieDetails,
})(DetailsPage);
