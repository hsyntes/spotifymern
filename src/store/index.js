import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/theme-slice";
import musicSlice from "./music/music-slice";
import userSlice from "./user/user-slice";

const store = configureStore({
  reducer: { theme: themeSlice, music: musicSlice, currentUser: userSlice },
});

export default store;
