import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../../store/types";

const selectors = {
    moviesListSelector: createSelector(
        ({moviesList}: AppState) =>  moviesList.moviesList,
        (moviesList) => moviesList,
    ),
    isLoading: createSelector(
        ({ peopleList }: AppState) => peopleList.isLoading,
        (isLoading) => isLoading
      ),
      isError: createSelector(
        ({ peopleList }: AppState) => peopleList.isError,
        (isError) => isError
      ),
};

export default selectors;
