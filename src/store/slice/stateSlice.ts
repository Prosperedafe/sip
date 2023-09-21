import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blogTab: "all",
    drinkId: 1
};

const userSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setBlogTab: (state, action) => {
      state.blogTab = action.payload
    },
    setDrinkId: (state, action) => {
      state.drinkId = action.payload
    },
  },
});

export const { setBlogTab, setDrinkId } = userSlice.actions;
export default userSlice.reducer;

