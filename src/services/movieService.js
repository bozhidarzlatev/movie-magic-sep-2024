import Movie from "../models/Movie.js";

const getAll = async (query = {}) => {
    let movies = await Movie.find();
    
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

const create = (movie) => Movie.create(movie);

const getOne = (movieId) => Movie.findById(movieId).lean();




export default {
    getAll,
    create,
    getOne
}

