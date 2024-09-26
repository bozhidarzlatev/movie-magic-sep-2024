import {Router} from 'express';

import homeContollers from './controllers/homeControllers.js';
import movieContollers from './controllers/movieControllers.js';

const router = Router();

router.use(homeContollers);
router.use('/movies', movieContollers);

export default router;