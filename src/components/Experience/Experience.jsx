import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[10vw] md:px-[8vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white"
        >
          EXPERIENCE
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-purple-500 mx-auto mt-4 rounded-full"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 mt-4 text-lg font-semibold"
        >
          A collection of my work experience and the roles I have taken in various organizations.
        </motion.p>
      </div>

      {/* Experience Timeline */}
      <div className="relative flex flex-col items-center">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`relative flex flex-col sm:flex-row items-center mb-20 w-full ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Line Connector (only between cards) */}
            {index < experiences.length - 1 && (
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "6rem" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="hidden sm:block absolute left-1/2 top-full transform -translate-x-1/2 w-[3px] bg-white z-0 rounded-full"
              ></motion.div>
            )}

            {/* Experience Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
              className={`relative w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900/90 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] z-20 ${
                index % 2 === 0
                  ? "sm:mr-[12rem] sm:ml-auto"
                  : "sm:ml-[12rem] sm:mr-auto"
              }`}
            >
              {/* Company Info */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-relaxed">{experience.desc}</p>

              {/* Skills */}
              {experience.skills && (
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="bg-[#8245ec] text-gray-100 px-3 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400/50"
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
