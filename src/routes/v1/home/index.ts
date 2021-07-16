import express from 'express';
import { SuccessMessageResponse } from '../../../core/apiResponse';

const homeRouter = express.Router();

homeRouter.get('/', (request, response, next) => {
  return new SuccessMessageResponse('success response').send(response);
});

export { homeRouter };
