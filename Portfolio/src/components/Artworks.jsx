import { useState } from "react";
import { artworkData } from "./data/data";

function Artworks() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredArtworks =
    activeFilter === "all"
      ? artworkData
      : artworkData.filter((art) => art.category === activeFilter);

  return (
    <div className="flex flex-col space-y-2 h-full">
      <div className="flex justify-center space-x-3 bg-gray-400 p-2 rounded-lg ">
        {["all", "painting", "pixel", "portrait"].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
              activeFilter === filter
                ? "bg-gray-600 text-white"
                : "bg-gray-400 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full overflow-y-auto custom-scrollbar p-3">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((art, index) => (
            <div
              key={index}
              className="relative w-full h-64 bg-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={art.src}
                alt={`Artwork ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No artworks found.</p>
        )}
      </div>
    </div>
  );
}

export default Artworks;
