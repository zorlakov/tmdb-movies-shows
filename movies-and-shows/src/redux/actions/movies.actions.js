import {
  TOP_MOVIES_FETCH_START,
  TOP_MOVIES_FETCH_SUCCESS,
  TOP_MOVIES_FETCH_FAIL,
  MOVIE_DETAILS_FETCH_START,
  MOVIE_DETAILS_FETCH_SUCCESS,
  MOVIE_DETAILS_FETCH_FAIL,
  SET_MOVIE_SEARCH_QUERY_SUCCESS,
  SEARCH_MOVIES_START,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAIL,
} from /*   SEARCH_MOVIES_UPDATE,
 */ './actionTypes';

import {
  API_KEY,
  URL_MOVIE_DETAILS,
  URL_MOVIE_LIST,
  URL_MOVIES_SEARCH,
  URL_QUERY,
} from '../../utils/api';

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

const movieDetailsFetchStart = () => {
  return {
    type: MOVIE_DETAILS_FETCH_START,
  };
};

const movieDetailsFetchSuccess = (data) => {
  return {
    type: MOVIE_DETAILS_FETCH_SUCCESS,
    data,
  };
};

const movieDetailsFetchFail = (error) => {
  return {
    type: MOVIE_DETAILS_FETCH_FAIL,
    error,
  };
};

export const setMovieSearchQuery = (data) => {
  return {
    type: SET_MOVIE_SEARCH_QUERY_SUCCESS,
    data,
  };
};
/* 
export const updateMovieSearch = (data) => {
  return {
    type: SEARCH_MOVIES_UPDATE,
    data,
  };
};
 */
const moviesSearchFetchStart = () => {
  return {
    type: SEARCH_MOVIES_START,
  };
};

const moviesSearchFetchSuccess = (data) => {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    data,
  };
};

const moviesSearchFetchFail = (error) => {
  return {
    type: SEARCH_MOVIES_FAIL,
    error,
  };
};

export const fetchMovieSearch = (query) => {
  let url = URL_MOVIES_SEARCH + API_KEY + URL_QUERY + query;
  return (dispatch) => {
    dispatch(moviesSearchFetchStart());
    return fetch(url)
      .then((response) => response.json())
      .then((json) => json.results)
      .then((data) => {
        dispatch(moviesSearchFetchSuccess(data));
      })
      .catch((err) => dispatch(moviesSearchFetchFail(err)));
  };
};

export const fetchTopMovies = () => {
  let url = URL_MOVIE_LIST + API_KEY;
  return (dispatch) => {
    dispatch(topMoviesFetchStart());
    return fetch(url)
      .then((response) => response.json())
      .then((json) => json.results)
      .then((data) => {
        dispatch(topMoviesFetchSuccess(data));
      })
      .catch((err) => dispatch(topMoviesFetchFail(err)));
  };
};

export const fetchMovieDetails = (id) => {
  let url = URL_MOVIE_DETAILS + id + API_KEY;
  return (dispatch) => {
    dispatch(movieDetailsFetchStart());
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(movieDetailsFetchSuccess(data));
      })
      .catch((err) => dispatch(movieDetailsFetchFail(err)));
  };
};
