import { beforeAll, beforeEach, afterAll } from "vitest";
import { pool } from "./db.js";
import { setupTestDB } from "./setupTestDB.js";

beforeAll(async () => {
  await setupTestDB();
});

beforeEach(async () => {
  await pool.query(
    "TRUNCATE TABLE todos RESTART IDENTITY CASCADE"
  );
});

afterAll(async () => {
  await pool.end();
});
