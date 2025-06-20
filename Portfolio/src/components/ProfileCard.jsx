import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaEye,
} from "react-icons/fa";
import { useState, useEffect } from "react";

function ProfileCard() {
  const [age, setAge] = useState(null);

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

  return (
    <>
      <div className="bg-gray-300 rounded-lg p-6 flex-[2] min-w-[300px] shadow-inner shadow-gray-500">
        <div className="flex items-center space-x-6">
          <img
            src="\Profile\archer.png"
            alt="Profile"
            className="w-40 h-40 object-cover square-full border-2 border-gray-300"
          />

          <div>
            <h2 className="text-xl font-bold truncate">
              Archer Shane Bigornia
            </h2>
            <p className="text-gray-600 trucante">
              Aspiring Software Developer
            </p>
            <p className="text-gray-600 truncate">
              {age !== null ? `${age} years old` : "..."}
            </p>
            <p className="text-gray-600 truncate">+639162772331</p>
            <p className="text-gray-600 truncate">
              bigorniaarcher679@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center space-x-4">
          <a
            href="\Profile\CV_Bigornia_Archer_Shane.pdf"
            download
            className="bg-gray-700 text-white py-1 px-4 rounded-lg shadow-md hover:bg-gray-800 transition"
          >
            Download CV
          </a>
          <div className="flex space-x-3">
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
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
