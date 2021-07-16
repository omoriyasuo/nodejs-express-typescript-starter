import express from 'express';
import { homeRouter } from './home';

const routerV1 = express.Router();

routerV1.use('/home', homeRouter);

export { routerV1 };
