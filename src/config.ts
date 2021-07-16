// Mapper for environment variables
import dotenv from 'dotenv';

dotenv.config();

export const environment = process.env.NODE_ENV || '';
export const port = process.env.PORT || '';

// export const database = {
//   name: process.env.DB_NAME || '',
//   host: process.env.DB_HOST || '',
//   port: process.env.DB_PORT || '',
//   user: process.env.DB_USER || '',
//   password: process.env.DB_USER_PWD || '',
// };

export const corsUrl = process.env.CORS_URL || '';

// export const tokenInfo = {
//   accessTokenValidityDays: Number.parseInt(
//     process.env.ACCESS_TOKEN_VALIDITY_SEC || '0',
//   ),
//   refreshTokenValidityDays: Number.parseInt(
//     process.env.REFRESH_TOKEN_VALIDITY_SEC || '0',
//   ),
//   issuer: process.env.TOKEN_ISSUER || '',
//   audience: process.env.TOKEN_AUDIENCE || '',
// };

export const logDirectory = process.env.LOG_DIR || '';
