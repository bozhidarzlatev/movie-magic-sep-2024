import {Router} from 'express';

const router = Router();

const movies = [
    {
        id: 1,    
        title: 'Jungle Cuise',
        imageUrl: '/img/jungle-cruise.jpeg',
        genre: 'Adventure',
        description: 'Dreaming about saving countless lives and having another'
    } ,     
    {
        id: 2,    
        title: 'Durzost i krasota',
        imageUrl: '/img/the-little-mermaid.jpg',
        genre: 'Madafaka',
        description: 'Rumenee vurni mi parite'
    },     
    {
        id: 3,    
        title: 'Shouto na Citiridis',
        imageUrl: '/img/home-alone.jpeg',
        genre: 'Tragediq',
        description: 'DA si beshe sedql u komedi kluba'
    }
]

router.get('/', (req, res) => {
    res.render(`home`, {movies} )
});

router.get('/about', (req, res) => {
    res.render(`home/about`)
});

export default router