import ShowsActionTypes from './shows.types';

const INITIAL_STATE = {
  data: [],
};

const showsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShowsActionTypes.FETCH_TOP_SHOWS_START:
      return {
        ...state,
      };
    case ShowsActionTypes.FETCH_TOP_SHOWS_SUCCESS:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

export default showsReducer;
