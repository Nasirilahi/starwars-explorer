import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../../store/types";
import movieApi from "../../../services/movies";

export interface MoviesListContainer {
  moviesList: movieItem[];
  isLoading: boolean;
  isError: boolean;
  hasNextPage: boolean;
  pageNum: string;
}

export interface movieItem {
  title: string;
  director: string;
}

export const initialState: MoviesListContainer = {
  moviesList: [],
  isLoading: false,
  isError: false,
  hasNextPage: false,
  pageNum: '1',
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
        res: { results, next  },
      } = action.payload;
      let hasNextPage = false, pageNum = state.pageNum;
      if(next){
        let page = new URL(next).searchParams.get("page");
        hasNextPage = true;
        pageNum = page ? page : state.pageNum;
      }
      return {
        ...state,
        isLoading: false,
        isError: false,
        moviesList: [...state.moviesList, ...results],
        hasNextPage,
        pageNum,
      };
    },
  },
});

export const fetchMoviesList = (nextPage: string): AppThunk => async (dispatch) => {
  try {
    dispatch(moviesListSlice.actions.getMoviesStart());
    const res = await movieApi.fetchMoviesList(nextPage);
    dispatch(moviesListSlice.actions.getMoviesSuccess({ res }));
  } catch (err) {
    dispatch(moviesListSlice.actions.getMoviesFailure());
    throw err;
  }
};
