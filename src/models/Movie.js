import { Schema, model} from "mongoose";

const movieShema = new Schema({
    title: String,
    genre: String,
    director: String,
    year: Number,
    rating: Number,
    description: String,
    imageUrl: String,
});

const Movie = model('Movie', movieShema );

export default Movie