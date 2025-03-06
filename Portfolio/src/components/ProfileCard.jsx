import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaEye,
} from "react-icons/fa";

function ProfileCard() {
  return (
    <>
      <div className="bg-gray-300 rounded-lg p-6 flex-[2] min-w-[300px] shadow-inner shadow-gray-500">
        <div className="flex items-center space-x-6">
          <img
            src="../src/assets/Profile/archer.png"
            alt="Profile"
            className="w-40 h-40 object-cover square-full border-2 border-gray-300"
          />

          <div>
            <h2 className="text-xl font-bold truncate">
              Archer Shane Bigornia
            </h2>
            <p className="text-gray-600 trucante">Software Developer</p>
            <p className="text-gray-600 truncate">22 years old</p>
            <p className="text-gray-600 truncate">+639162772331</p>
            <p className="text-gray-600 truncate">
              bigorniaarcher679@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center space-x-4">
          <a
            href="../src/assets/Profile/CV_Bigornia_Archer_Shane_D.pdf"
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
        <img
          src="../src/assets/cat2.gif"
          alt="Cat Animation"
          className="absolute top-2/5 left-100 transform -translate-x-1/2 w-25 h-25"
        />
      </div>
    </>
  );
}

export default ProfileCard;
