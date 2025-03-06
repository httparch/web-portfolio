function SpotifyCard() {
  return (
    <>
      {" "}
      <div className="bg-gray-300 rounded-lg p-4 flex items-center shadow-inner shadow-gray-500">
        <img
          src="../src/assets/Profile/BL.png"
          alt="Song Cover"
          className="w-12 h-12 rounded-md object-cover"
        />

        <div className="flex flex-col ml-3 justify-center">
          <p className="text-xs text-gray-400">🎵 Last Listened:</p>
          <div className="w-full overflow-hidden whitespace-nowrap">
            <p className="text-sm text-black font-medium animate-marquee ">
              Blinding Lights" - The Weeknd • "Blinding Lights" - The Weeknd •
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
        </div>
      </div>
    </>
  );
}

export default SpotifyCard;
