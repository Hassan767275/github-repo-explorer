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

async function createSavedReposTable() {
    await pool.query(
        `CREATE TABLE IF NOT EXISTS SavedRepos (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            user_id INT REFERENCES Usertable(id),
            repo_name TEXT NOT NULL,
            description TEXT NOT NULL,
            language TEXT NOT NULL,
            stargazers_count INT NOT NUll,
            html_url TEXT NOT NULL
        )`
    )
}

await createUserTable()
await createSavedReposTable()