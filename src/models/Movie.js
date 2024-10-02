import { Schema, model, Types } from "mongoose";

const movieShema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre:  {
        type: String,
        required: true
    },
    director:  {
        type: String,
        required: true
    },
    year: Number,
    rating: Number,
    description: String,
    imageUrl: String,
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }]
});

const Movie = model('Movie', movieShema );

export default Movie;