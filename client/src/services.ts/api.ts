export async function getUserRepo(formData: FormData) {
    const username = formData.get('username')
    const data = await fetch(`http://localhost:8000/search?username=${username}`);
    return data
  }