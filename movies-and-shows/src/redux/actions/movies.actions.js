import {
  TOP_MOVIES_FETCH_START,
  TOP_MOVIES_FETCH_SUCCESS,
  TOP_MOVIES_FETCH_FAIL,
} from './actionTypes';

const topMoviesFetchStart = () => {
  return {
    type: TOP_MOVIES_FETCH_START,
  };
};

const topMoviesFetchSuccess = (data) => {
  return {
    type: TOP_MOVIES_FETCH_SUCCESS,
    data,
  };
};

const topMoviesFetchFail = (error) => {
  return {
    type: TOP_MOVIES_FETCH_FAIL,
    error,
  };
};

export const fetchTopMovies = () => {
  return (dispatch) => {
    dispatch(topMoviesFetchStart());
    // apiGetAllRequest(employeesUrl)
    // ovdje idu dvije linije fetch koda
    return fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=7cf5283d520db6ff54c3a9e081e893ea&language=en-US&page=1'
    )
      .then((response) => response.json())
      .then((json) => json.results)
      .then((data) => {
        dispatch(topMoviesFetchSuccess(data));
      })
      .catch((err) => dispatch(topMoviesFetchFail(err)));
  };
};
