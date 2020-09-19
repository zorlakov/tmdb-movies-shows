import {
  TOP_SHOWS_FETCH_START,
  TOP_SHOWS_FETCH_SUCCESS,
  TOP_SHOWS_FETCH_FAIL,
  SHOW_DETAILS_FETCH_START,
  SHOW_DETAILS_FETCH_SUCCESS,
  SHOW_DETAILS_FETCH_FAIL,
  SET_SHOW_SEARCH_QUERY_SUCCESS,
  SEARCH_SHOWS_START,
  SEARCH_SHOWS_SUCCESS,
  SEARCH_SHOWS_FAIL,
} from '../actions/actionTypes';

import { setSearchQueryUtil } from './utils';

const INITIAL_STATE = {
  data: [],
  show: [],
  showSearchQuery: '',
  showSearchResults: [],
  loading: false,
};

export const showsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOP_SHOWS_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case TOP_SHOWS_FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case TOP_SHOWS_FETCH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case SHOW_DETAILS_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case SHOW_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        show: action.data,
        loading: false,
      };
    case SHOW_DETAILS_FETCH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case SET_SHOW_SEARCH_QUERY_SUCCESS:
      return {
        ...state,
        showSearchQuery: setSearchQueryUtil(action.data),
        loading: false,
      };
    case SEARCH_SHOWS_START:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SHOWS_SUCCESS:
      return {
        ...state,
        showSearchResults: action.data,
        loading: false,
      };
    case SEARCH_SHOWS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
