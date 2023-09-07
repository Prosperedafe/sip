// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './slice/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if needed
});

export default rootReducer;
