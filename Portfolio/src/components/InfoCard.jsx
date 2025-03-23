import React, { useState } from "react";

function InfoCard() {
  const [isShrunk, setIsShrunk] = useState(true);

  return (
    <>
      <div
        className={`bg-gray-300 rounded-lg p-4 shadow-inner shadow-gray-500 transition-all duration-300 ${
          isShrunk ? "h-40 overflow-hidden" : "h-auto"
        }`}
      >
        <h3 className="text-lg font-semibold text-center mb-4">To You</h3>

        <p className="text-gray-700 leading-relaxed">
          If you’re reading this, then time has moved forward, and life has
          taken you on a journey of growth. As of today, I am a{" "}
          <strong className="text-gray-700">
            Bachelor of Science in Information Technology
          </strong>{" "}
          student at{" "}
          <strong className="text-gray-700">
            Polytechnic University of the Philippines
          </strong>
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          I have always been drawn to{" "}
          <strong className="text-gray-700">Game Development</strong> and{" "}
          <strong className="text-gray-700">Web Development</strong>, you like
          to build stuff. But beyond that, I have always been an artist at
          heart—drawing and painting whenever inspiration strikes.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Music has also been a part of me. I’ve played instruments like the{" "}
          <strong className="text-gray-700">banduria</strong> and{" "}
          <strong className="text-gray-700">guitar</strong>, and lately, I’ve
          found myself enjoying the process of writing songs. And of course,
          gaming has always been there—whether it’s{" "}
          <strong className="text-gray-700">Dota</strong>,{" "}
          <strong className="text-gray-700">ML</strong>, name it, I always
          strive to excel in the things I enjoy.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          I hope that wherever you are now, you haven’t lost the passion and
          curiosity that brought you here. Keep creating, keep learning, and
          most importantly—keep enjoying the things that make you who you are.
          The road ahead may not always be clear, but if there’s one thing I
          know, it’s that you’ve always found a way to turn your passions into
          something meaningful.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed text-right">
          - Your past self
        </p>
      </div>

      <button
        onClick={() => setIsShrunk(!isShrunk)}
        className=" py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
      >
        {isShrunk ? "Open the letter" : "Seal it"}
      </button>
    </>
  );
}

export default InfoCard;
