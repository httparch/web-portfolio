import { _GetRecentTrack, _SpotifyGetAccessToken } from "./data/api-controller";
import { useEffect, useState } from "react";

function SpotifyCard() {
  const [track, setTrack] = useState(null);
  useEffect(() => {
    const fetchRecentTrack = async () => {
      try {
        const response = await fetch(
          "https://spotify-server-nn33.onrender.com/api/my-recent-tracks"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        if (data?.items?.length > 0) {
          const recent = data.items[0];
          setTrack({
            name: recent.track.name,
            artist: recent.track.artists[0].name,
            albumArt: recent.track.album.images[0].url,
            playedAt: recent.played_at,
          });
        } else {
          console.warn("No recently played tracks found.");
        }
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };
    fetchRecentTrack();
  }, []);

  const formatTimeAgo = (isoTime) => {
    const playedDate = new Date(isoTime);
    const now = new Date();
    const diffMs = now - playedDate;
    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "Just now";
  };

  return (
    <>
      {" "}
      <div className="bg-gray-300 rounded-lg p-4 flex items-center shadow-inner shadow-gray-500">
        <img
          src={track?.albumArt || "/Profile/BL.png"}
          alt="Song Cover"
          className="w-12 h-12 rounded-md object-cover"
        />

        <div className="flex flex-col ml-3 justify-center">
          <p className="text-xs text-gray-400">🎵 Last Listened:</p>
          <div className="w-full overflow-hidden whitespace-nowrap">
            <p className="text-sm text-black font-medium animate-marquee ">
              {track ? `"${track.name}" - ${track.artist}` : "Loading track..."}
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {" "}
            {track ? formatTimeAgo(track.playedAt) : ""}
          </p>
        </div>
      </div>
    </>
  );
}

export default SpotifyCard;
