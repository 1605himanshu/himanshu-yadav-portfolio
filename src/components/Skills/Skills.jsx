// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
      <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various
        projects and experiences.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap justify-center gap-8">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.03}
          transitionSpeed={800}
          gyroscope={true}
          className="w-full sm:w-[46%] lg:w-[45%]"
        >
          <div
            className="bg-gray-900 backdrop-blur-md px-8 py-10 rounded-2xl border border-gray-700 
            shadow-[0_0_25px_2px_rgba(130,69,236,0.3)] hover:shadow-[0_0_30px_3px_rgba(130,69,236,0.4)] transition-all duration-300"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-8 text-center">
              {category.title}
            </h3>

            {/* Circular Skill Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center text-center group"
                >
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center 
                    bg-gray-800 border border-gray-700 shadow-inner group-hover:border-[#8245ec] 
                    group-hover:shadow-[0_0_15px_rgba(130,69,236,0.6)] transition-all duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <span className="mt-3 text-sm sm:text-base text-gray-300 font-medium group-hover:text-[#8245ec] transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
