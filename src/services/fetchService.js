import axios from "../utils/axios"


export const fetchMoviesData = async (sourceURL) => {
    const resp = await axios.get(sourceURL)
    return resp
}

