import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import userReducer from './slice/userSlice';
import blogReducer from "./slice/stateSlice";
import cartReducer from "./slice/productSlice"
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
  state: blogReducer,
  cart: cartReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)