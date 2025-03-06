import React, { useState, useEffect } from "react";

function TimeCard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-300 text-gray-600 font-semibold py-1 px-4 rounded-lg shadow-inner shadow-gray-500 w-full flex items-center space-x-30">
      <span>
        {currentTime.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
      <span className="text-green-700 font-semibold">
        {currentTime.toLocaleTimeString()}
      </span>
    </div>
  );
}

export default TimeCard;
