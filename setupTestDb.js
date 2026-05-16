import { pool } from "./db";

export async function setupTestDb() {
  await pool.query('CREATE TABLE IF NOT EXISTS todo (id SERIAL PRIMARY KEY,title TEXT NOT NULL,description TEXT NOT NULL)');
}
