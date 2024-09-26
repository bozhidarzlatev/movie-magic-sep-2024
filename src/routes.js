import {Router} from 'express';

import homeContollers from './controllers/homeControllers.js';
import movieContollers from './controllers/movieControllers.js';

const router = Router();

router.use(homeContollers);
router.use('/movies', movieContollers);
router.all('*', (req, res) =>{
    res.render('404')
})


export default router;