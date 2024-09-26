import movieData from "../data/movieData.js";
import uniqid from 'uniqid'

const getAll = async (query = {}) => {
    let movies = await movieData.getMovies();
    
    if (query.search) {
        movies = movies.filter(movie => movie.title.toLowerCase().includes(query.search.toLowerCase()))
    }

    if (query.genre) {
        movies = movies.filter(movie => movie.genre.toLowerCase() ===query.genre.toLowerCase())
    }

    if (query.year) {
        movies = movies.filter(movie => movie.year === query.year)
    }

    return movies;
};

const create = (movie) => {
    movie.rating = Number(movie.rating)
    movie.id = uniqid();
    movieData.create(movie);
};

const getOne = async (movieId) => {
    const movie = await movieData.getMovies();
    const resultMovie = movie.find(movie => movie.id === movieId);

    return resultMovie;
}



export default {
    getAll,
    create,
    getOne
}

