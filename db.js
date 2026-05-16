import pg from "pg";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.test",
});

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
