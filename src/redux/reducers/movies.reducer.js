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
  FETCH_MOVIE_TRAILER_START,
  FETCH_MOVIE_TRAILER_SUCCESS,
  FETCH_MOVIE_TRAILER_FAIL,
} from '../actions/actionTypes';

import { setSearchQueryUtil } from './utils';

const INITIAL_STATE = {
  data: [],
  movie: [],
  movieSearchQuery: '',
  movieSearchResults: [],
  movieTrailerUrl: '',
  loading: false,
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOP_MOVIES_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case TOP_MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case TOP_MOVIES_FETCH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case MOVIE_DETAILS_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        movie: action.data,
        loading: false,
      };

    case MOVIE_DETAILS_FETCH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case SET_MOVIE_SEARCH_QUERY_SUCCESS:
      return {
        ...state,
        movieSearchQuery: setSearchQueryUtil(action.data),
        loading: false,
      };
    case SEARCH_MOVIES_START:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        movieSearchResults: action.data,
        loading: false,
      };
    case SEARCH_MOVIES_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case FETCH_MOVIE_TRAILER_START:
      return {
        ...state,
      };
    case FETCH_MOVIE_TRAILER_SUCCESS:
      return {
        ...state,
        movieTrailerUrl: action.data,
      };
    case FETCH_MOVIE_TRAILER_FAIL:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
