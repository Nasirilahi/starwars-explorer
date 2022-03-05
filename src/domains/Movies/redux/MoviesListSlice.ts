import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../../store/types";
import movieApi from "../../../services/movies";

export interface MoviesListContainer {
  moviesList: movieItem[];
  isLoading: boolean;
  isError: boolean;
}

export interface movieItem {
  title: string;
  director: string;
}

export const initialState: MoviesListContainer = {
  moviesList: [],
  isLoading: false,
  isError: false,
};

export const moviesListSlice = createSlice({
  name: "moviesList",
  initialState,
  reducers: {
    getMoviesStart: (state) => ({
      ...state,
      isLoading: true,
      isError: false,
    }),
    getMoviesFailure: (state) => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
    getMoviesSuccess: (state, action) => {
      const {
        res: { results },
      } = action.payload;
      return {
        ...state,
        isLoading: false,
        isError: false,
        moviesList: results,
      };
    },
  },
});

export const fetchMoviesList = (): AppThunk => async (dispatch) => {
  try {
    dispatch(moviesListSlice.actions.getMoviesStart());
    const res = await movieApi.fetchMoviesList();
    dispatch(moviesListSlice.actions.getMoviesSuccess({ res }));
  } catch (err) {
    dispatch(moviesListSlice.actions.getMoviesFailure());
    throw err;
  }
};
