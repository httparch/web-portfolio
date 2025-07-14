import { useState } from "react";
import { motion } from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa";

function Projects({ projects }) {
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const statusColors = {
    Done: "bg-green-500",
    "In Progress": "bg-yellow-500",
    "To Improve": "bg-red-500",
  };

  return (
    <>
      {projects.map((project) => {
        const isExpanded = expandedProject === project.id;

        return (
          <motion.div
            key={project.id}
            initial={{ height: "auto" }}
            animate={{ height: isExpanded ? "auto" : "160px" }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-4 flex gap-4 overflow-hidden shadow-xl"
          >
            <div
              className="w-1/3 relative cursor-pointer group"
              onClick={() => setSelectedImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-lg transition group-hover:opacity-80"
              />

              <div className="absolute bottom-0 left-0 w-full px-2 py-1 flex justify-end items-center backdrop-blur-sm bg-white/30 rounded-b-lg gap-2">
                <a
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-blue-500"
                >
                  <FaGithub
                    size={18}
                    className="text-gray-700 hover:scale-125 transition"
                  />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-blue-500"
                >
                  <FaLink
                    size={18}
                    className="text-gray-700 hover:scale-125 transition"
                  />
                </a>
              </div>
            </div>

            <div className="w-3/3 flex flex-col">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold truncate">
                    {project.title}
                  </h3>

                  <span
                    className={`text-white text-xs font-semibold px-2 py-1 rounded ${
                      statusColors[project.status] || "bg-gray-400"
                    }`}
                  >
                    {project.status}
                  </span>

                  <div className="flex items-center gap-1 flex-wrap">
                    {project.Tools?.map((tool, index) => (
                      <img
                        key={index}
                        src={tool}
                        alt={`Tool ${index}`}
                        className="w-6 h-6 "
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500">{project.role}</p>

              <p className="text-gray-600 mt-2">
                {isExpanded
                  ? project.description
                  : `${project.description.slice(0, 100)}...`}
              </p>

              <button
                className="text-gray-500 mt-2 text-sm text-left font-bold cursor-pointer"
                onClick={() =>
                  setExpandedProject(isExpanded ? null : project.id)
                }
              >
                {isExpanded ? "Hide" : "Read full description"}
              </button>
            </div>
          </motion.div>
        );
      })}

      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white p-4 rounded-lg shadow-xl">
            <img
              src={selectedImage}
              alt="Expanded"
              className="max-w-[60vw] max-h-[60vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
