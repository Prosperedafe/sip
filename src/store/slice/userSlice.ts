import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
    login: (state) => {
      state.isAuthenticated = true
    },
     logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout, login } = userSlice.actions;
export default userSlice.reducer;

