import { combineReducers } from 'redux';

// import all reducers here
import optionsReducer from './optionsReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  options: optionsReducer
});

export default reducers;
