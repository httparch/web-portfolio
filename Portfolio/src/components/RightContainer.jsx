import { useState } from "react";
import Profile from "./Profile.jsx";
import OtherInfo from "./OtherInfo.jsx";

function RightContainer() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex flex-col space-y-5 w-full">
      <div className="flex bg-gray-500 rounded-md p-1 border border-gray-300 shadow-inner shadow-gray-700">
        <div className="flex space-x-1">
          <button
            className={`px-5 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === "profile"
                ? "bg-white"
                : "bg-gray-500 text-white cursor-pointer"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`px-5 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === "other"
                ? "bg-white"
                : "bg-gray-500 text-white cursor-pointer"
            }`}
            onClick={() => setActiveTab("other")}
          >
            Other Information
          </button>
        </div>
      </div>

      {activeTab === "profile" ? <Profile /> : <OtherInfo />}
    </div>
  );
}

export default RightContainer;
