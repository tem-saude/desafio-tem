import { Router } from 'express';
import {
  getClass, createClass, updateClass, deleteClass,
} from '../controllers/class.controler';

const routes = Router();

routes.get('/class', getClass);
routes.post('/class', createClass);
routes.put('/class/:id', updateClass);
routes.delete('/class/:id', deleteClass);

export default routes;
