# GitHub Repo Explorer

Search any GitHub username to see their public repos, then save the ones you like to your account. Built as a full-stack TypeScript app with JWT authentication.

## Features

- **Search repos**: enter a GitHub username and see their public repositories
- **Repo details**: name, description, stars, language, and a link to each repo
- **Accounts**: register and log in, with passwords hashed using bcrypt
- **Favorites**: save and remove repos from your profile (login required)
- **Error handling**: loading states and clear messages when a user isn't found or the API fails

## How it works

```
React client → GitHub API (search)
React client → Express API (auth + favorites) → PostgreSQL
```

The frontend fetches repos straight from the GitHub API. Login and favorites go through the Express backend, which issues a JWT on login. Middleware checks that token on every `/user` route, so only logged-in users can save or view favorites.

## API

| Method | Route | Description |
| ------ | ----- | ----------- |
| POST | `/auth/register` | Create an account |
| POST | `/auth/login` | Log in and get a JWT |
| GET | `/user/favorites` | Get your saved repos |
| POST | `/user/favorites` | Save a repo |
| DELETE | `/user/favorites/:id` | Remove a saved repo |

## Tech stack

- **Frontend:** React, TypeScript, Vite, React Router, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL
- **Auth:** JWT, bcrypt

## Running it locally

You'll need Node.js 18+ and a PostgreSQL database.

```bash
git clone https://github.com/Hassan767275/github-repo-explorer.git
cd github-repo-explorer
```

Create a `.env` file in `server/`:

```
DB_USER=postgres
DB_HOST=localhost
DB_NAME=repo_explorer
DB_PASSWORD=your_password
DB_PORT=5432
ACCESS_TOKEN_SECRET=your_secret
```

Then run the server and client:

```bash
cd server && npm install && npm run dev
cd client && npm install && npm run dev
```
