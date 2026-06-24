import Search from "./components/search";
import RepoResults from "./components/RepoResults";
import { useState } from "react";
import { getUserRepo } from "./services.ts/api";
import { RepoCard } from "./components/RepoCard";
import type { Repo } from "./type";

function App() {
  const [error, setError] = useState(false);
  const [showRepo, setShowRepo] = useState(false);
  const [repoCount, setRepoCount] = useState(0);
  const [repoInfo, setRepoInfo] = useState<Repo[]>([]);
  console.log(repoInfo);

  async function searchRepos(formData: FormData) {
    const username = formData.get("username") as string;
    const data = await getUserRepo(username);
    const dataJson = await data.json();

    if (data.status === 404) {
      setError(true);
      setShowRepo(false);
    } else if (data.status === 200) {
      setError(false)
      setShowRepo(true);
      setRepoCount(dataJson.length);
      setRepoInfo(dataJson);
    }
  }

  return (
    <div className=" flex flex-col items-center">
      <Search searchRepos={searchRepos} error={error} />
      {showRepo && <RepoResults repoCount={repoCount} />}
      {showRepo && repoInfo.map(({id, name, description, language, stargazers_count, html_url}) => (
        <RepoCard key={id} name={name} description={description} language={language} stargazers_count={stargazers_count} html_url={html_url}/>
      ))}
    </div>
  );
}

export default App;
