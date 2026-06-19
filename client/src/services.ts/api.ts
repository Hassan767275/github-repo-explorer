export async function getUserRepo(username: string) {
    const data = await fetch(`http://localhost:8000/search?username=${username}`);
    return data
  }