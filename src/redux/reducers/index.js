import { combineReducers } from "redux";
import { errorReducer, moviesReducer, sidebarReducer } from "./movieReducers";

const reducers = combineReducers({
    moviesList: moviesReducer,
    errorOccured: errorReducer,
    isOpenSidebar: sidebarReducer
})

export default reducers