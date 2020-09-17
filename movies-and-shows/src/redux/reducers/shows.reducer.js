import {
  TOP_SHOWS_FETCH_START,
  TOP_SHOWS_FETCH_SUCCESS,
  TOP_SHOWS_FETCH_FAIL,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  data: [],
};

export const showsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOP_SHOWS_FETCH_START:
      return {
        ...state,
      };
    case TOP_SHOWS_FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case TOP_SHOWS_FETCH_FAIL:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
