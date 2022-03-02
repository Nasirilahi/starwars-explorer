import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../../store/types";

const selectors = {
    peopleListSelector: createSelector(
        ({peopleList}: AppState) =>  peopleList.poepleList,
        (poepleList) => poepleList,
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
