import { createPool } from "mysql2/promise";
import { DATABASE, HOST, PASSWORD, PORT, USER } from "./config";

export const pool = createPool({
  database: DATABASE,
  password: PASSWORD,
  host: HOST,
  user: USER,
  port: PORT,
})