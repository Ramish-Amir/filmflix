import { combineReducers } from "redux";
import { moviesReducer } from "./movieReducers";

const reducers = combineReducers({
    moviesList: moviesReducer
})

export default reducers