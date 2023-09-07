import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    registrationDetails: null,
  },
  reducers: {
    saveRegistrationDetails: (state, action) => {
      state.registrationDetails = action.payload;
    },
  },
});

export const { saveRegistrationDetails } = userSlice.actions;
export default userSlice.reducer;
