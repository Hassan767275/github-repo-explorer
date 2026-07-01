import type { repoCard } from "../type"

export default function RepoCard({name, description, language, stargazers_count, html_url}: repoCard) {
    return (
        <div className="my-4 w-72 sm:w-105 md:w-135 lg:w-175 lg:flex lg:justify-between bg-[#151d29] border border-[#30363d] rounded-lg">
            <div className="text-left flex flex-col gap-2 my-2 px-4 lg:py-2">
                <h1 className="text-[#2f81f7] text-xl font-bold">{name}</h1>
                <p className="text-[#8b949e] text-sm ">{description ? description : "There is no description for this repo"}</p>
                <p className="text-[#7d8590] text-sm">Language: {language}</p>
            </div>
            <div className="text-center flex flex-col gap-2 mb-2 lg:py-4 lg:pr-4">
                <p className="text-[#e6edf3] font-medium">⭐ {stargazers_count} {stargazers_count === 1 ? "star" : "stars"}</p>
                <a className="text-[#58a6ff]" href={html_url} target="_blank">View on Github ↗</a>
            </div>
        </div>
    )
}