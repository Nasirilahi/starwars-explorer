import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../../store/types";
import peopleApi from "../../../services/people";

export interface PeopleListContainer {
  poepleList: peopleItem[];
  isLoading: boolean;
  isError: boolean;
  hasNextPage: boolean;
  pageNum: string;
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
  hasNextPage: false,
  pageNum: '1',
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
        res: { results, next },
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
        poepleList: [...state.poepleList, ...results],
        hasNextPage,
        pageNum,
      };
    },
  },
});

export const fetchPeopleList = (nextPage: string): AppThunk => async (dispatch) => {
  try {
    dispatch(peopleListSlice.actions.getPeopleStart());
    const res = await peopleApi.fetchPeopleList(nextPage);
    dispatch(peopleListSlice.actions.getPeopleSuccess({ res }));
  } catch (err) {
    dispatch(peopleListSlice.actions.getPeopleFailure());
    throw err;
  }
};
