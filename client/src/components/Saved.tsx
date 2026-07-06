import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SavedRepos from "./SavedRepos";
import type { repos } from "../type";

export default function Saved() {
  const navigate = useNavigate();
  const [savedRepos, setSavedRepos] = useState<repos[]>([]);

  useEffect(() => {
    async function getFavorites() {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/user/favorites", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 403) {
          navigate("/login");
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();
        setSavedRepos(data);
      } catch (err) {
        console.error(err);
      }
    }

    getFavorites();
  }, [navigate]);

  function removeRepo(repoName: string) {
    setSavedRepos((prevRepos) =>
      prevRepos.filter((repo) => repo.repo_name !== repoName),
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Saved Repositories
      </h1>

      {savedRepos.length === 0 ? (
        <p className="text-center text-gray-400">No saved repositories.</p>
      ) : (
        savedRepos.map((repo) => (
          <SavedRepos
            key={repo.id}
            repo_name={repo.repo_name}
            description={repo.description}
            language={repo.language}
            stargazers_count={repo.stargazers_count}
            html_url={repo.html_url}
            onDelete={removeRepo}
          />
        ))
      )}
    </div>
  );
}
