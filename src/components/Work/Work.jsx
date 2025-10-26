import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[10vw] md:px-[7vw] lg:px-[16vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg md:text-xl font-medium">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 md:h-56 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3 text-sm md:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs md:text-sm font-semibold text-purple-500 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl relative overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Close Button moved here, relative to modal container */}
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple-500 transition-colors duration-300 z-50"
        >
          &times;
        </button>

        <div className="flex flex-col items-center">
          {/* Image */}
          <div className="w-full flex justify-center bg-gray-900 px-4 pt-4">
            <motion.img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-56 md:h-64 object-contain rounded-xl shadow-2xl"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Project Details */}
          <div className="p-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {selectedProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#251f38] text-xs md:text-sm font-semibold text-purple-500 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
              <motion.a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-[150px] bg-gray-800 text-gray-400 py-2 rounded-xl text-center font-semibold text-sm md:text-base shadow-md"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #8b5cf6" }}
                transition={{ duration: 0.3 }}
              >
                Code
              </motion.a>
              <motion.a
                href={selectedProject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-[150px] bg-purple-600 text-white py-2 rounded-xl text-center font-semibold text-sm md:text-base shadow-md"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #a78bfa" }}
                transition={{ duration: 0.3 }}
              >
                Live
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default Work;
