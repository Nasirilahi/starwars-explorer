import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../../store/types";
import planetsApi from "../../../services/planets";

export interface PlanetListContainer {
  planetsList: planetItem[];
  isLoading: boolean;
  isError: boolean;
}

export interface planetItem {
  name: string;
  terrain: string;
  population: string;
}

export const initialState: PlanetListContainer = {
  planetsList: [],
  isLoading: false,
  isError: false,
};

export const planetsListSlice = createSlice({
  name: "planetsList",
  initialState,
  reducers: {
    getPlanetsStart: (state) => ({
      ...state,
      isLoading: true,
      isError: false,
    }),
    getPlanetsFailure: (state) => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
    getPlanetsSuccess: (state, action) => {
      const {
        res: { results },
      } = action.payload;
      return {
        ...state,
        isLoading: false,
        isError: false,
        planetsList: results,
      };
    },
  },
});

export const fetchPlanetsList = (): AppThunk => async (dispatch) => {
  try {
    dispatch(planetsListSlice.actions.getPlanetsStart());
    const res = await planetsApi.fetchPlanetsList();
    dispatch(planetsListSlice.actions.getPlanetsSuccess({ res }));
  } catch (err) {
    dispatch(planetsListSlice.actions.getPlanetsFailure());
    throw err;
  }
};
