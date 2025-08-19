import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Airbnb Clone",
    description: "A full-stack clone built with Node.js, Express, and EJS with booking functionality.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "#",
    image: "https://via.placeholder.com/400x250" // replace with real screenshot
  },
  {
    title: "Weather App",
    description: "Weather forecast app using OpenWeather API with real-time updates.",
    tech: ["React", "Tailwind", "API"],
    link: "#",
    image: "https://via.placeholder.com/400x250"
  },
  {
    title: "File Sharing App",
    description: "A LimeWire-inspired MERN stack app with file preview & media streaming.",
    tech: ["MERN", "Socket.io"],
    link: "#",
    image: "https://via.placeholder.com/400x250"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          🚀 My Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 text-xs rounded-full shadow-md">
                  {project.tech[0]}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
