// store.js (assuming you have a store)
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // Add middleware and other configurations as needed
});

export default store;
