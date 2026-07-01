export default function Header() {
    return (
        <header className="w-full px-4 py-2 sm:py-4 flex items-center bg-[#161B22]">
            <h1 className="text-white font-bold w-24 sm:w-full sm:text-xl md:text-2xl">Github Repo Explorer</h1>
            <div className="flex gap-2 ml-auto">
                <button className="bg-[#F59E0B] hover:bg-[#FBBF24] text-[#ffffff] font-bold px-4 py-1 rounded-lg">Saved</button>
                <button className="bg-[#7C3AED] hover:bg-[#8B5CF6] text-[#ffffff] font-bold px-4 py-1 rounded-lg">Login</button>
            </div>
        </header>
    )
}