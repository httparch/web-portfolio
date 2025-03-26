import { useState } from "react";
import Projects from "./Projects.jsx";
import Certificates from "./Certificates.jsx";
import { projects } from "./data/data.js";
import Artworks from "./Artworks";

function LeftContainer() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="flex flex-col space-y-5 w-full h-full">
      {/* Tabs */}
      <div className="flex bg-gray-500 rounded-md p-1 border border-gray-300 shadow-inner shadow-gray-700">
        <div className="flex space-x-1">
          {["projects", "certificates", "artworks"].map((tab) => (
            <button
              key={tab}
              className={`px-5 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? "bg-white"
                  : "bg-gray-500 text-white cursor-pointer"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content Panel */}
      <div className="bg-gray-400 rounded-lg p-4 flex-1 overflow-hidden shadow-inner shadow-gray-600">
        {activeTab === "projects" ? (
          <div className="space-y-4 h-full overflow-y-auto custom-scrollbar p-3 pb-3">
            <Projects projects={projects} />
          </div>
        ) : activeTab === "certificates" ? (
          <Certificates />
        ) : (
          <Artworks />
        )}
      </div>
    </div>
  );
}

export default LeftContainer;
