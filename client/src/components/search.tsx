export default function Search({ searchRepos, error }: any) {
  return (
    <form className="m-4 flex justify-center" action={searchRepos}>
      <input
        className={`text-[#e6edf3] bg-[#161b22] border-2 rounded-lg mr-4 pl-4 py-1 sm:w-80 md:w-110 lg:w-150 ${error ? `placeholder-red-900 border-red-900` : `border-[#30363d]`}`}
        type="text"
        name='username'
        placeholder={error ? "Please enter a valid username" : "search a github repo"}
      ></input>
      <button className="bg-[#238636] text-[#e6edf3] px-4 py-1 rounded-lg font-bold">
        Search
      </button>
    </form>
  );
}
