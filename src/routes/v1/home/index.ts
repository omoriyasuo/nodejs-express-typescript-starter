import express from 'express';
import { SuccessMessageResponse } from '../../../core/apiResponse';

const homeRouter = express.Router();

homeRouter.get('/', (request, response) => {
  return new SuccessMessageResponse('success response').send(response);
});

export { homeRouter };
