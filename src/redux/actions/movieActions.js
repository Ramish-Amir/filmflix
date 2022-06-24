import { ActionTypes } from "../constants/action-types";

export const setMovies = (movies) => {
    return {
        type: ActionTypes.SET_MOVIES,
        payload: movies
    }
}