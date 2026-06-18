import type { RepoCount } from "../type"

export default function RepoResults({repoCount}: RepoCount) {
    return (
        <div className="w-72 sm:w-105 md:w-134 lg:w-173">
            <div className="text-white flex items-center gap-4">
                <h1 className="text-2xl font-bold">Repositories</h1>
                <p className="text-[#E5E7EB] bg-[#111827] px-4 border border-[#1F2937] rounded-2xl">{repoCount} Results</p>
            </div>
        </div>
    )
}