import { combineReducers } from "redux";
import { currentMovieReducer, moviesReducer } from "./movieReducers";

const reducers = combineReducers({
    moviesList: moviesReducer,
})

export default reducers