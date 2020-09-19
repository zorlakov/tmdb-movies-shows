import {
  TOP_MOVIES_FETCH_START,
  TOP_MOVIES_FETCH_SUCCESS,
  TOP_MOVIES_FETCH_FAIL,
  MOVIE_DETAILS_FETCH_START,
  MOVIE_DETAILS_FETCH_SUCCESS,
  MOVIE_DETAILS_FETCH_FAIL,
  SET_MOVIE_SEARCH_QUERY_SUCCESS,
} from './actionTypes';

import { API_KEY, URL_MOVIE_DETAILS, URL_MOVIE_LIST } from '../../utils/api';

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
