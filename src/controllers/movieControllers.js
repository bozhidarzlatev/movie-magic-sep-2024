import {Router} from 'express';
import movieService from '../services/movieService.js';
import castService from '../services/castService.js';

const router = Router();

function toArray(documents) {
    return documents.map(document => document.toObject())
}

router.get('/create' , (req, res) => {
    res.render('movies/create', )
});

router.post('/create' , async    (req, res) => {
    const movieData = req.body;

    await movieService.create(movieData);
    res.redirect('/');
});

router.get('/search' , async (req, res) => {
    const query = req.query;
    const movies = await movieService.getAll(query)

    res.render('home' , {isSearch: true, movies: toArray(movies), query});
})

router.get('/:movieId/details' , async  (req, res) => {
    const movieId = req.params.movieId
    const movie = await movieService.getOne(movieId).lean();

    //Prepare view data
    movie.ratingView = getRatingViewData(movie.rating)

    res.render('movies/details', {movie})
});

// router.get('/movies/:movieId/details' , async  (req, res) => {
//     const movieId = req.params.movieId
//     const movie = await movieService.getOne(movieId);

//     //Prepare view data
//     movie.ratingView = getRatingViewData(movie.rating)

//     res.render('movies/details', {movie})
// });

router.get('/:movieId/attach', async (req, res) => {
    const movie = await movieService.getOne(req.params.movieId).lean();
    const casts = await castService.getAll().lean();
    res.render('movies/attach', {movie, casts})
});

router.post('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;

    await movieService.attach(movieId, castId)

    res.redirect(`/movies/${movieId}/details`)
    
});


// function getRatingViewData(rating) {
//     if(!Number.isInteger(rating)) {
//         return 'n\\a'
//     }

//     return '&#x2605;'.repeat(rating)
// }

export default router;