import movieData from "../data/movieData.js";

const getAll = () => movieData.getMovies();
console.log(getAll());

export default {
    getAll
}

