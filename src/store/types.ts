import { Action, ThunkAction } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';
import { store } from "./";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppState = ReturnType<typeof rootReducer>;
