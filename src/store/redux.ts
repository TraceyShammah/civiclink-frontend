import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Loader/SetLoader";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;