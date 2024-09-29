import express from 'express';
import routes from './routes.js';
import handlebarInit from './config/handlebarsinit.js';
import expressInit from './config/expressinit.js';

const app = express();

handlebarInit(app)
expressInit(app)

app.use(routes)

app.listen(5000, () => console.log('Server is listening on http://localhost:5000'))