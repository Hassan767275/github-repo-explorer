import type { UserInfo, repoCard } from "../type";
import { useNavigate } from "react-router-dom";

export async function getUserRepo(username: string) {
  const data = await fetch(`http://localhost:8000/search?username=${username}`);
  return data;
}

export async function sendUserInfo({ username, email, password }: UserInfo) {
  const response = await fetch("http://localhost:8000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  return response;
}

export async function sendUserLoginInfo(
  usernameOrEmail: String,
  password: String,
) {
  const response = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      usernameOrEmail,
      password,
    }),
  });

  return response;
}

export async function saveRepo({name, description, language, stargazers_count, html_url}: repoCard) {
  const accessToken = localStorage.getItem("accessToken")

  const response = await fetch("http://localhost:8000/user/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      name,
      description,
      language,
      stargazers_count,
      html_url,
    }),
  });

  return response
}
