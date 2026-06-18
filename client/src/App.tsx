import Search from "./components/search";
import RepoResults from "./components/RepoResults";
import { useState } from "react";

function App() {
  const [error, setError] = useState(false)
  const [showRepo, setShowRepo] = useState(false)
  const [repoCount, setRepoCount] = useState(0)

  async function searchRepos(formData: FormData) {
    const username = formData.get('username')
    const data = await fetch(`http://localhost:8000/search?username=${username}`);
    const dataJson = await data.json();

    if (data.status === 404) {
      setError(true)
      setShowRepo(false)
    } else if (data.status === 200) {
      setShowRepo(true)
      setRepoCount(dataJson.length)
    }

    console.log(dataJson);
  }

  return (
    <div className=" flex flex-col items-center">
      <Search searchRepos={searchRepos} error={error}/>
      {showRepo && <RepoResults repoCount={repoCount}/>}
    </div>
  );
}

export default App;
