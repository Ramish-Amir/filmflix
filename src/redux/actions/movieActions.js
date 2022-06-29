import { ActionTypes } from "../constants/action-types";

export const setMovies = (movies) => {
    return {
        type: ActionTypes.SET_MOVIES,
        payload: movies
    }
}

export const setError = (error) => {
    return {
        type: ActionTypes.SET_ERROR,
        payload: error
    }
}

export const setOpenSidebar = (isOpen) => {
    return {
        type: ActionTypes.SET_OPEN_SIDEBAR,
        payload: isOpen
    }
}