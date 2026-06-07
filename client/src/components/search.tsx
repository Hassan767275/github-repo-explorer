export default function Search() {
    async function searchRepos(e: any) {
        e.preventDefault()
        const data = await fetch('http://localhost:8000/search')
        const dataJson = await data.json()
        console.log(dataJson)
    }

  return (
    <form className="m-4 flex justify-center" onSubmit={searchRepos}>
      <input
        className="text-[#e6edf3] bg-[#161b22] border-[#30363d] rounded-lg mr-4 pl-4 py-1 sm:w-80 md:w-110 lg:w-150"
        type="text"
        placeholder="search a github repo"
      ></input>
      <button className="bg-[#238636] text-[#e6edf3] px-4 py-1 rounded-lg font-bold">
        Search
      </button>
    </form>
  );
}
