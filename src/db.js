import {
  PG_DATABASE,
  PG_HOST,
  PG_PASSWORD,
  PG_PORT,
  PG_USER,
} from "./config.js";

import pg from "pg";

export const pool = new pg.Pool({
  port: PG_PORT,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  user: PG_USER,
});
