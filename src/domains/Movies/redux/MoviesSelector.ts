import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../../store/types";

const selectors = {
  moviesListSelector: createSelector(
    ({ moviesList }: AppState) => moviesList.moviesList,
    (moviesList) => moviesList
  ),
  isLoading: createSelector(
    ({ moviesList }: AppState) => moviesList.isLoading,
    (isLoading) => isLoading
  ),
  isError: createSelector(
    ({ moviesList }: AppState) => moviesList.isError,
    (isError) => isError
  ),
  nextPage: createSelector(
    ({ moviesList }: AppState) => moviesList.pageNum,
    (nextPage) => nextPage
  ),
  hasNextPage: createSelector(
    ({ moviesList }: AppState) => moviesList.hasNextPage,
    (hasNextPage) => hasNextPage
  ),
};

export default selectors;
