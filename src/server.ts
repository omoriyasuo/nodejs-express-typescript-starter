import { app } from './app';
import { port } from './config';
import { Logger } from './core/logger';

app
  .listen(port, () => {
    Logger.info(`server running on port : ${port}`);
  })
  .on('error', (error) => Logger.error(error));
