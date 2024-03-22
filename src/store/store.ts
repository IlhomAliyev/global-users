import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./API/usersApi";
import dataSlice from "./slices/dataSlice";
import usersSlice from "./slices/usersSlice";

export const rootReducer = combineReducers({
  usersSlice,
  dataSlice,
  [usersApi.reducerPath]: usersApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
