import fs from 'fs';
import path from 'path';
import winston from 'winston';
import { environment, logDirectory } from '../config';

let directory = logDirectory;
if (!directory) directory = path.resolve('logs');

// create directory if it is not present
if (!fs.existsSync(directory)) {
  // Create the directory if it does not exist
  fs.mkdirSync(directory);
}

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const logLevel = environment === 'development' ? 'debug' : 'warn';

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'blue',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

const getToday = () => {
  return new Date().toISOString().slice(0, 10);
};

const transports = [
  new winston.transports.Console(),
  // levelがerrorのときは別ファイルに切り出す
  new winston.transports.File({
    filename: `logs/error/${getToday()}.log`,
    level: 'error',
  }),
  new winston.transports.File({ filename: `logs/${getToday()}.log` }),
];

export const Logger = winston.createLogger({
  level: logLevel,
  levels,
  format,
  transports,
});
