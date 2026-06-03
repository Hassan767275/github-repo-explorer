export default function Search() {
    return (
        <div className="m-4 text-center">
            <input className="text-[#e6edf3] bg-[#161b22] border-[#30363d] rounded-lg mr-4 pl-4 py-1" type='text' placeholder="search a github repo"></input>
            <button className="bg-[#238636] text-[#e6edf3] px-4 py-1 rounded-lg font-bold" >Search</button>
        </div>
    )
}