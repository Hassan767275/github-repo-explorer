import { pool } from "./db.js";

async function createUserTable() {
    await pool.query(
        `CREATE TABLE IF NOT EXISTS UserTable (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            username TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL
        )`
    )
}

await createUserTable()