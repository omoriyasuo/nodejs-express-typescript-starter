import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { corsUrl, environment } from './config';
import { ApiError, InternalError, NotFoundError } from './core/apiError';
import { Logger } from './core/logger';
import { routerV1 } from './routes/v1';

// どこにもcatchされずにprocessまで来てしまったエラーをcatch
process.on('uncaughtException', (error) => {
  Logger.error(error);
});

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(
  express.urlencoded({
    limit: '10mb',
    extended: true,
    parameterLimit: 50_000,
  }),
);
app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

// Routes
app.use('/v1', routerV1);

// catch 404 and forward to error handler
app.use((request: Request, response: Response, next: NextFunction) => {
  Logger.error(`${request.url} is requested, but not found`);
  next(new NotFoundError());
});

// Middleware Error Handler
app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof ApiError) {
    ApiError.handle(error, response);
  } else {
    if (environment === 'development') {
      Logger.error(error);
      return response.status(500).send(error.message);
    }
    ApiError.handle(new InternalError(), response);
  }
});

export { app };
