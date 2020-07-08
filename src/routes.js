import { Router } from 'express';
import pongController from './controller/pongController';

const routes = new Router();

routes.get('/ping', pongController.get);

export default routes;