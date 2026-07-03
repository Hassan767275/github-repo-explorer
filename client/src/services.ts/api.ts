import type { UserInfo } from "../type";

export async function getUserRepo(username: string) {
  const data = await fetch(`http://localhost:8000/search?username=${username}`);
  return data;
}

export function sendUserInfo({ username, email, password }: UserInfo) {
  fetch("http://localhost:8000/auth/register", {
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
}
