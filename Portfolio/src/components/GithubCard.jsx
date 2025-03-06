function GitHubCard() {
  return (
    <>
      {" "}
      <div className="bg-white shadow-xl rounded-lg py-4">
        <p className="text-xs text-gray-600">Github Contribution</p>
        <div className="overflow-x-auto whitespace-nowrap border border-gray-300 rounded-lg p-1">
          <img
            src="http://ghchart.rshah.org/01731f/httparch"
            alt="GitHub Contributions"
            className="min-w-[800px] h-auto rounded-lg"
          />
        </div>
        <p className="text-xs text-gray-400">© Github Chart API</p>
      </div>
    </>
  );
}

export default GitHubCard;
