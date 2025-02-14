import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "../features/teacherSlice";
import playlistReducer from "../features/playlistSlice";
import videoReducer from "../features/videoSlice"
const store = configureStore({
  reducer: {
    teacher: teacherReducer,
    playlists:playlistReducer,
    video : videoReducer,
  },
});

export default store;
