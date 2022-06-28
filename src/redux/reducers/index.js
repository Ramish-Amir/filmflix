import { combineReducers } from "redux";
import { moviesReducer, sidebarReducer } from "./movieReducers";

const reducers = combineReducers({
    moviesList: moviesReducer,
    isOpenSidebar: sidebarReducer
})

export default reducers