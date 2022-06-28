import { ActionTypes } from "../constants/action-types";

const initialMoviesState = []

export const moviesReducer = (state = initialMoviesState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return { ...state, movies: payload }
        default:
            return state
    }
}

export const sidebarReducer = (state=false, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_OPEN_SIDEBAR:
            return payload
        default:
            return state
    }
}