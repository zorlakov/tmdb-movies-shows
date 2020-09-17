import {
  TOP_SHOWS_FETCH_START,
  TOP_SHOWS_FETCH_SUCCESS,
  TOP_SHOWS_FETCH_FAIL,
} from './actionTypes';

const topShowsFetchStart = () => {
  return {
    type: TOP_SHOWS_FETCH_START,
  };
};

const topShowsFetchSuccess = (data) => {
  return {
    type: TOP_SHOWS_FETCH_SUCCESS,
    data,
  };
};

const topShowsFetchFail = (error) => {
  return {
    type: TOP_SHOWS_FETCH_FAIL,
    error,
  };
};

export const fetchTopShows = () => {
  return (dispatch) => {
    dispatch(topShowsFetchStart());
    // apiGetAllRequest(employeesUrl)
    // ovdje idu dvije linije fetch koda
    return fetch(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=7cf5283d520db6ff54c3a9e081e893ea&language=en-US&page=1'
    )
      .then((response) => response.json())
      .then((json) => json.results)
      .then((data) => {
        dispatch(topShowsFetchSuccess(data));
      })
      .catch((err) => dispatch(topShowsFetchFail(err)));
  };
};
