import {
  TOP_SHOWS_FETCH_START,
  TOP_SHOWS_FETCH_SUCCESS,
  TOP_SHOWS_FETCH_FAIL,
  SHOW_DETAILS_FETCH_START,
  SHOW_DETAILS_FETCH_SUCCESS,
  SHOW_DETAILS_FETCH_FAIL,
} from './actionTypes';

import { API_KEY, URL_SHOW_DETAILS, URL_SHOW_LIST } from '../../utils/api';

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

const showDetailsFetchStart = () => {
  return {
    type: SHOW_DETAILS_FETCH_START,
  };
};

const showDetailsFetchSuccess = (data) => {
  return {
    type: SHOW_DETAILS_FETCH_SUCCESS,
    data,
  };
};

const showDetailsFetchFail = (error) => {
  return {
    type: SHOW_DETAILS_FETCH_FAIL,
    error,
  };
};

export const fetchTopShows = () => {
  let url = URL_SHOW_LIST + API_KEY;
  return (dispatch) => {
    dispatch(topShowsFetchStart());
    return fetch(url)
      .then((response) => response.json())
      .then((json) => json.results)
      .then((data) => {
        dispatch(topShowsFetchSuccess(data));
      })
      .catch((err) => dispatch(topShowsFetchFail(err)));
  };
};

export const fetchShowDetails = (id) => {
  let url = URL_SHOW_DETAILS + id + API_KEY;
  return (dispatch) => {
    dispatch(showDetailsFetchStart());
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(showDetailsFetchSuccess(data));
      })
      .catch((err) => dispatch(showDetailsFetchFail(err)));
  };
};
