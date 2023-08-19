import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "current-user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      const { payload } = action;

      state.currentUser = payload;

      return state;
    },
  },
});

export const currentUserSliceActions = currentUserSlice.actions;
export default currentUserSlice.reducer;
