import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../../store/types";

const selectors = {
    planetsListSelector: createSelector(
        ({planetsList}: AppState) => planetsList.planetsList,
        (planetsList) => planetsList,
    ),
    isLoading: createSelector(
        ({ planetsList }: AppState) => planetsList.isLoading,
        (isLoading) => isLoading
      ),
      isError: createSelector(
        ({ planetsList }: AppState) => planetsList.isError,
        (isError) => isError
      ),
};

export default selectors;
