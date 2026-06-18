import Search from "./components/search";
import { useState } from "react";

function App() {
  const [error, setError] = useState(false)

  async function searchRepos(formData: FormData) {
    const username = formData.get('username')
    const data = await fetch(`http://localhost:8000/search?username=${username}`);
    const dataJson = await data.json();

    if (data.status === 404) {
      setError(true)
    }

    console.log(dataJson);
  }

  return (
    <>
      <Search searchRepos={searchRepos} error={error}/>
    </>
  );
}

export default App;
