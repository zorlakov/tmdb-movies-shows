import {
  TOP_MOVIES_FETCH_START,
  TOP_MOVIES_FETCH_SUCCESS,
  TOP_MOVIES_FETCH_FAIL,
  MOVIE_DETAILS_FETCH_START,
  MOVIE_DETAILS_FETCH_SUCCESS,
  MOVIE_DETAILS_FETCH_FAIL,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  data: [],
  movie: [],
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

    default:
      return state;
  }
};
