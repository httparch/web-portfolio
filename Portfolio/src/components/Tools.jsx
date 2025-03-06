import { tools } from "./data/data";

function Tools() {
  return (
    <div className="bg-gray-300 rounded-lg shadow-inner shadow-gray-500">
      <h3 className="text-lg font-semibold text-center mb-4">
        Languages & Tools
      </h3>
      <div className="grid grid-cols-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg transition duration-200 ease-in hover:bg-white"
          >
            <img src={tool.imgSrc} alt={tool.name} className="w-12 h-12" />
            <p className="text-xs text-gray-600 mt-1">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
