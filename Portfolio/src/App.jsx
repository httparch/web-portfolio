import { useState } from "react";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import "./App.css";

function App() {
  return (
    <div className="fixed inset-0 bg-gray-200 overflow-hidden">
      {/* Wrapper: Scrollable only on small screens */}
      <div className="flex flex-col md:flex-row h-full md:h-screen overflow-y-auto md:overflow-hidden">
        {/* RightContainer - top on small, left on desktop (40%) */}
        <div className="w-full md:w-[45%] bg-white p-5">
          <RightContainer />
        </div>

        {/* LeftContainer - bottom on small, right on desktop (60%) */}
        <div className="w-full md:w-[55%] bg-white p-5">
          <LeftContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
