import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/theme-slice";
import musicSlice from "./music/music-slice";

const store = configureStore({
  reducer: { theme: themeSlice, music: musicSlice },
});

export default store;
