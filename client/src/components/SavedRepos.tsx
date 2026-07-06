import type { repos } from "../type";

type SavedReposProps = Pick<
  repos,
  "repo_name" | "description" | "language" | "stargazers_count" | "html_url"
>;

export default function SavedRepos({repo_name, description, language, stargazers_count, html_url,}: SavedReposProps) {
    const accessToken = localStorage.getItem("accessToken")
    async function deleteRepo() {
        const response = await fetch("http://localhost:8000/user/favorites", {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        const responseJson = response.json()
        console.log(responseJson)
    }

  return (
    <div className="max-w-5xl mx-auto mb-6 bg-[#161b22] border border-[#30363d] rounded-xl p-6 shadow-lg flex justify-between items-start">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-blue-400">{repo_name}</h2>

        <p className="text-gray-300 mt-3">
          {description ?? "No description provided."}
        </p>

        <div className="flex gap-8 mt-5 text-gray-400">
          <p>
            <span className="font-semibold text-white">Language:</span>{" "}
            {language}
          </p>

          <p>
            <span className="font-semibold text-white">⭐ Stars:</span>{" "}
            {stargazers_count}
          </p>
        </div>

        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-blue-400 hover:underline"
        >
          View Repository →
        </a>
      </div>

      <button className="bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-lg font-semibold" onClick={deleteRepo}>
        Delete
      </button>
    </div>
  );
}
