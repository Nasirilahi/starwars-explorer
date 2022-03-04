import { combineReducers } from '@reduxjs/toolkit';
import {peopleListSlice} from '../domains/PeopleList/redux/PeopleListSlice';
import { appSlice } from '../app/redux/appSlice';

// need to use combineReducers to get the type of rootReducer
const rootReducer = combineReducers({
  [peopleListSlice.name]: peopleListSlice.reducer,
  [appSlice.name]: appSlice.reducer,
});

export default rootReducer;