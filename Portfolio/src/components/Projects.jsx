import { useState } from "react";
import { motion } from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa";

function Projects({ projects }) {
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
              className="w-1/3 cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition"
              />
            </div>

            <div className="w-3/3 flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={project.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    <FaGithub
                      size={20}
                      className="text-gray-600 text-xl hover:scale-150 transition"
                    />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    <FaLink
                      size={20}
                      className="text-gray-600 text-xl hover:scale-150 transition"
                    />
                  </a>
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
