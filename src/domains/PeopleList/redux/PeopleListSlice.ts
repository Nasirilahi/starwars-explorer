import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../../store/types";
import peopleApi from "../../../services/people";

export interface PeopleListContainer {
  poepleList: peopleItem[];
  isLoading: boolean;
  isError: boolean;
}

export interface peopleItem {
  name: string;
  gender: string;
  height: string;
  birth_year: string;
  mass: string;
  hair_color: string;
  skin_color: string;
}

export const initialState: PeopleListContainer = {
  poepleList: [],
  isLoading: false,
  isError: false,
};

export const peopleListSlice = createSlice({
  name: "peopleList",
  initialState,
  reducers: {
    getPeopleStart: (state) => ({
      ...state,
      isLoading: true,
      isError: false,
    }),
    getPeopleFailure: (state) => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
    getPeopleSuccess: (state, action) => {
      const {
        res: { results },
      } = action.payload;
      return {
        ...state,
        isLoading: false,
        isError: false,
        poepleList: results,
      };
    },
  },
});

export const fetchPeopleList = (): AppThunk => async (dispatch) => {
  try {
    dispatch(peopleListSlice.actions.getPeopleStart());
    const res = await peopleApi.fetchPeopleList();
    dispatch(peopleListSlice.actions.getPeopleSuccess({ res }));
  } catch (err) {
    dispatch(peopleListSlice.actions.getPeopleFailure());
    throw err;
  }
};
