import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    music: {
      id: null,
      source: null,
    },
  },
  reducers: {
    setSelectedMusic(state, action) {
      const { payload } = action;

      state.music = payload;

      return state;
    },
  },
});

export const musicSliceActions = musicSlice.actions;
export default musicSlice.reducer;
