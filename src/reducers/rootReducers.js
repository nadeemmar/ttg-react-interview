import { combineReducers } from 'redux';

import TodoReducer from '../views/Todo/reducers';

const appReducers = combineReducers({
  todo: TodoReducer,
});

const rootReducers = (state, action) => {
  // Handle general reducers
  return appReducers(state, action);
};

export default rootReducers;
