import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 4.0 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 4.0 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 4.0 } },
};

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        
        {/* Section Title */}
        <motion.div
          className="flex flex-col w-full mb-20"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I developed a Frontend web application using React, Tailwind, and Parcel, showcasing my skills in building robust and scalable solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-1/2 w-full p-4"
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex relative h-64 rounded-lg overflow-hidden">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
