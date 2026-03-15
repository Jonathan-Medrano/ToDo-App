import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || 3306
export const HOST = process.env.DB_HOST || "localhost"
export const USER = process.env.DB_USER || "root"
export const PASSWORD = process.env.DB_PASSWORD || ""
export const DATABASE = process.env.DB_NAME || "api_crud"
