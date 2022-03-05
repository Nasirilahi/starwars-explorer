import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../../store/types";
import planetsApi from "../../../services/planets";

export interface PlanetListContainer {
  planetsList: planetItem[];
  isLoading: boolean;
  isError: boolean;
  hasNextPage: boolean;
  pageNum: string;
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
  hasNextPage: false,
  pageNum: '1',
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
        planetsList: [...state.planetsList, ...results],
        hasNextPage,
        pageNum,
      };
    },
  },
});

export const fetchPlanetsList = (nextPage: string): AppThunk => async (dispatch) => {
  try {
    dispatch(planetsListSlice.actions.getPlanetsStart());
    const res = await planetsApi.fetchPlanetsList(nextPage);
    dispatch(planetsListSlice.actions.getPlanetsSuccess({ res }));
  } catch (err) {
    dispatch(planetsListSlice.actions.getPlanetsFailure());
    throw err;
  }
};
