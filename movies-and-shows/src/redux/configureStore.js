import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import thunk from 'redux-thunk';

import { showsReducer } from './reducers/index';

const rootReducer = combineReducers({
  shows: showsReducer,
});

const middleWares = [logger];

const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, ...middleWares))
  );
};

export default configureStore;
