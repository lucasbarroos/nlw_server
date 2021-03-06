import { Router } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// Route to items
routes.get('/items', itemsController.index);

// Route to points
routes.post('/points', pointsController.store);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

export default routes; 