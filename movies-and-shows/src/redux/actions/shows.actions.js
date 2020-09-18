import {
  TOP_SHOWS_FETCH_START,
  TOP_SHOWS_FETCH_SUCCESS,
  TOP_SHOWS_FETCH_FAIL,
  SHOW_DETAILS_FETCH_START,
  SHOW_DETAILS_FETCH_SUCCESS,
  SHOW_DETAILS_FETCH_FAIL,
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
  return (dispatch) => {
    dispatch(topShowsFetchStart());
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

export const fetchShowDetails = (id) => {
  return (dispatch) => {
    dispatch(showDetailsFetchStart());
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=7cf5283d520db6ff54c3a9e081e893ea&language=en-US&append_to_response=7cf5283d520db6ff54c3a9e081e893ea`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(showDetailsFetchSuccess(data));
      })
      .catch((err) => dispatch(showDetailsFetchFail(err)));
  };
};
