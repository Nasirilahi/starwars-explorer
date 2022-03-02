import { Action, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "./rootReducer";
import { AppState, AppDispatch } from "./types";

export const store = configureStore({
  reducer: rootReducer,
});

// Export a hook that can be reused to resolve types
export const useAppDispatch = (): ThunkDispatch<AppState, void, Action> =>
  useDispatch<AppDispatch>();
