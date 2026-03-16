import { config } from 'dotenv'

config();

export const PORT = process.env.PORT;
export const HOST = process.env.DB_HOST;
export const USER = process.env.DB_USER;
export const PASSWORD = process.env.DB_PASSWORD;
export const DATABASE = process.env.DB_NAME;
export const JWT_SECRET = process.env.JWT_SECRET
