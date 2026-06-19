export function RepoCard() {
    return (
        <div className="my-4 w-72 sm:w-105 md:w-135 lg:w-175 lg:flex lg:justify-between bg-[#151d29] border border-[#30363d] rounded-lg">
            <div className="text-center flex flex-col gap-2 my-2 lg:py-2">
                <h1 className="text-[#2f81f7] text-xl font-bold">Octocat / hello world</h1>
                <p className="text-[#8b949e] text-sm px-4">thses are a bunch of words that will describe a github repo</p>
                <p className="text-[#7d8590] text-sm">Language: Typescript</p>
            </div>
            <div className="text-center flex flex-col gap-2 mb-2 lg:py-4 lg:pr-4">
                <p className="text-[#e6edf3] font-medium">⭐ 1.3k stars</p>
                <a className="text-[#58a6ff]" href="https://github.com/octocat/Hello-World">View on Github ↗</a>
            </div>
        </div>
    )
}