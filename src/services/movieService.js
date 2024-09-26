import movieData from "../data/movieData.js";
import uniqid from 'uniqid'

const getAll = () => movieData.getMovies();

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

