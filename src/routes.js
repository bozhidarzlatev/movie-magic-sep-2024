import {Router} from 'express';

import homeContollers from './controllers/homeControllers.js';

const router = Router();

router.use(homeContollers);

export default router;