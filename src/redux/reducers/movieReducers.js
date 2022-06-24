import { ActionTypes } from "../constants/action-types";

const initialMoviesState = [
    // {
    //     title: 'New movie',
    //     media_type: 'movie',
    //     id: 'asdfa'
    // }
]

export const moviesReducer = (state = initialMoviesState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return { ...state, movies: payload }
        default:
            return state
    }
}