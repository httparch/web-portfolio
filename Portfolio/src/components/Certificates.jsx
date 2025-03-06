import { certificates } from "./data/data";

function Certificates() {
  return (
    <>
      <div className="grid gap-2">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="flex bg-white shadow-lg p-4 rounded-lg items-center gap-4"
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="w-20 h-20 object-cover rounded-lg"
            />

            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold">{cert.name}</h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 bg-gray-500 text-white text-sm rounded-lg shadow-md hover:bg-gray-700 transition w-full text-center"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Certificates;
