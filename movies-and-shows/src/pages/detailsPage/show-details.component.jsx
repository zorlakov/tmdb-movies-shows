import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchShowDetails,
  fetchMovieDetails,
  fetchMovieTrailer,
} from '../../redux/actions/index';
import Details from '../../components/details/details.component';
import './show-details.styles.css';

const DetailsPage = (props) => {
  const { fetchShowDetails, fetchMovieDetails, fetchMovieTrailer } = props;
  const movie = props.movie;
  const show = props.show;
  const movieTrailerUrl = props.movieTrailer;
  useEffect(() => {
    if (props.location.state.item.name) {
      fetchShowDetails(props.location.state.item.id);
    } else {
      fetchMovieDetails(props.location.state.item.id);
      fetchMovieTrailer(props.location.state.item.id);
    }
  }, [
    fetchShowDetails,
    fetchMovieDetails,
    props.location.state.item.id,
    props.location.state.item.name,
    fetchMovieTrailer,
  ]);

  return (
    <div>
      {props.location.state.item.name ? (
        <Details item={props.location.state.item} show={show} />
      ) : (
        <Details
          item={props.location.state.item}
          movie={movie}
          trailerUrl={movieTrailerUrl}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
    show: state.shows.show,
    movieTrailer: state.movies.movieTrailerUrl[0],
  };
};

export default connect(mapStateToProps, {
  fetchShowDetails,
  fetchMovieDetails,
  fetchMovieTrailer,
})(DetailsPage);
