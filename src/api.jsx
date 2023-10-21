/* eslint-disable no-undef */
import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async() => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)

    return movie.data.results;
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data.results;
}