import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchShowDetails,
  fetchMovieDetails,
  fetchMovieTrailer,
  fetchShowTrailer,
} from '../../redux/actions/index';
import Details from '../../components/details/details.component';
import './details.styles.css';

const DetailsPage = (props) => {
  const {
    fetchShowDetails,
    fetchMovieDetails,
    fetchMovieTrailer,
    fetchShowTrailer,
  } = props;
  const movie = props.movie;
  const show = props.show;
  const movieTrailerUrl = props.movieTrailer;
  const showTrailerUrl = props.showTrailer;
  useEffect(() => {
    if (props.location.state.item.name) {
      fetchShowDetails(props.location.state.item.id);
      fetchShowTrailer(props.location.state.item.id);
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
    fetchShowTrailer,
  ]);

  return (
    <div>
      {props.location.state.item.name ? (
        <Details
          item={props.location.state.item}
          show={show}
          trailerUrl={showTrailerUrl}
        />
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
    showTrailer: state.shows.showTrailerUrl[0],
  };
};

export default connect(mapStateToProps, {
  fetchShowDetails,
  fetchMovieDetails,
  fetchMovieTrailer,
  fetchShowTrailer,
})(DetailsPage);
