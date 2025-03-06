import { useState } from "react";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import "./App.css";

function App() {
  return (
    <div className="fixed inset-0 flex bg-gray-200 overflow-hidden">
      <div className="flex-2/9 bg-white p-5 overflow-hidden">
        <RightContainer />
      </div>

      <div className="flex-1/3 bg-white p-5 overflow-hidden">
        <LeftContainer />
      </div>
    </div>
  );
}

export default App;
