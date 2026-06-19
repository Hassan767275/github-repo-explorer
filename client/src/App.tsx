import Search from "./components/search";
import RepoResults from "./components/RepoResults";
import { useState } from "react";
import { getUserRepo } from "./services.ts/api";
import { RepoCard } from "./components/RepoCard";

function App() {
  const [error, setError] = useState(false)
  const [showRepo, setShowRepo] = useState(false)
  const [repoCount, setRepoCount] = useState(0)

  async function searchRepos(formData: FormData) {
    const username = formData.get("username") as string
    const data = await getUserRepo(username)
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
      <RepoCard />
    </div>
  );
}

export default App;
