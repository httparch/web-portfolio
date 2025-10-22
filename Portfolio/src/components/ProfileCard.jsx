import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHouseUser,
  FaEye,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

function ProfileCard() {
  const hasCounted = useRef(false);
  const [age, setAge] = useState(null);
  const [pageViews, setPageViews] = useState(0);
  const [visits, setVisits] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const birthDate = new Date("2002-03-25");
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }, []);

  useEffect(() => {
    if (hasCounted.current) return;
    const type =
      sessionStorage.getItem("visit") === null //if first time buksan yung app, sessionstorage will be null, then ipapasang type is
        ? "type=visit-pageview" //visit-page
        : "type=pageview";

    updateCounter(type);

    sessionStorage.setItem("visit", "true");
    hasCounted.current = true;
  }, []);

  const updateCounter = async (type) => {
    try {
      const res = await fetch(
        `https://spotify-server-nn33.onrender.com/api/page-views?${type}` //dito magcacall, then on the server side , ireread yung
      ); //ginawa kong json file, then send object value as res
      const data = await res.json();
      setPageViews(data.pageViews || 0);
      setVisits(data.visits || 0);
    } catch (err) {
      console.error("Error updating counter:", err);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000)
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    return num;
  };

  return (
    <>
      <div className="bg-gray-300 rounded-lg p-4 sm:p-6 shadow-inner shadow-gray-500 w-full">
        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
          <img
            src={
              isHovered
                ? "\\Profile\\archer-hover.jpg"
                : "\\Profile\\archer.jpg"
            }
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover border-2 border-gray-300 self-center sm:self-start transition duration-300 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold">
              Archer Shane Bigornia
            </h2>
            <p className="text-gray-600">Aspiring Software Developer</p>
            <p className="text-gray-600">
              {age !== null ? `${age} years old` : "..."}
            </p>
            <p className="text-gray-600 break-all">+639162772331</p>
            <p className="text-gray-600 break-all">
              bigorniaarcher679@gmail.com
            </p>
          </div>
        </div>

        {/* Buttons and Socials */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <a
            href="\Profile\Bigornia_Archer_Shane.pdf"
            download
            className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md text-center hover:bg-gray-800 transition"
          >
            Download CV
          </a>

          <div className="flex justify-center sm:justify-start gap-4">
            <a
              href="https://www.facebook.com/Potchiatgrey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-gray-700 text-xl hover:scale-150 transition" />
            </a>
            <a
              href="https://www.instagram.com/mr_hermiittt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-gray-700 text-xl hover:scale-150 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/archer-shane-bigornia-a40b75291/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-700 text-xl hover:scale-150 transition" />
            </a>
            <a
              href="https://github.com/httparch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-800 text-xl hover:scale-150 transition" />
            </a>
          </div>

          <div className="flex justify-center sm:justify-end items-center gap-3">
            <div className="flex items-center gap-1">
              <FaEye className="text-gray-800 text-xl" />
              <span className="text-gray-700 text-sm font-medium">
                {formatNumber(pageViews)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FaHouseUser className="text-gray-700 text-xl" />
              <span className="text-gray-700 text-sm font-medium">
                {formatNumber(visits)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
