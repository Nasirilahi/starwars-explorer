import { combineReducers } from '@reduxjs/toolkit';
import {peopleListSlice} from '../domains/PeopleList/redux/PeopleListSlice';
import {planetsListSlice} from '../domains/Planet/redux/PlanetListSlice';
import {moviesListSlice} from '../domains/Movies/redux/MoviesListSlice';
import { appSlice } from '../app/redux/appSlice';

// need to use combineReducers to get the type of rootReducer
const rootReducer = combineReducers({
  [moviesListSlice.name]: moviesListSlice.reducer,
  [peopleListSlice.name]: peopleListSlice.reducer,
  [planetsListSlice.name]: planetsListSlice.reducer,
  [appSlice.name]: appSlice.reducer,
});

export default rootReducer;