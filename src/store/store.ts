import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./API/usersApi";
import userSlice from "./userSlice";

export const rootReducer = combineReducers({
  userSlice,
  [usersApi.reducerPath]: usersApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
