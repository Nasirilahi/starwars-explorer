import { combineReducers } from '@reduxjs/toolkit';

import { counterSlice } from '../features/counter/counterSlice';
import {peopleListSlice} from '../domains/PeopleList/redux/PeopleListSlice';


// need to use combineReducers to get the type of rootReducer
const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
  [peopleListSlice.name]: peopleListSlice.reducer,
});

export default rootReducer;