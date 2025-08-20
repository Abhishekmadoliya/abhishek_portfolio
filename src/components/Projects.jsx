import {forwardRef} from "react";
import { motion } from "framer-motion";
import fileshareimg from "../assets/14-Best-File-Sharing-Apps-for-Bu.jpg"; // replace with actual image path
import ecoming from "../assets/84_ecommerce.webp"



const projects = [
  {
    title: "Property Reservation System",
    description: "A full-stack application for managing property bookings and reservations.",
    tech: ["MERN", "Node.js", "Express", "MongoDB", "React", "Tailwind", "cloudinary"],
    link: "https://property-reservation-system.vercel.app/",
    image: "https://abhishekmadoliya.github.io/Abhishek-Madoliya-Personal-Portfoilio/assets/Property-Management-System.webp" // replace with real screenshot
  },
  {
    title: "File Sharing Application",
    description: "A file sharing application with real-time collaboration features.",
    tech: ["MERN", "React", "Tailwind", "Node.js", "cloudinary", "MongoDB", "Express.js"],
    link: "https://file-sharing-cyan.vercel.app/",
    image: fileshareimg
  },
  {
    title: "Ecommerce Platform",
    description: "An e-commerce platform with user authentication, product management, and payment integration.",
    tech: ["MERN", "Node.js","React.js","Tailwind","cloudinary", "Redux","MongoDB","Express.js"],
    link: "https://ecommerce-mern-6o4x.vercel.app/",
    image: ecoming
  },
   {
    title: "Blog Application",
    description: "A blog application with user authentication, post management, and comments.",
    tech: ["MERN", "Node.js","React.js","Tailwind","cloudinary", "Redux","MongoDB","Express.js"],
    link: "https://blog-application-mern-ma2s.vercel.app/",
    image: "https://abhishekmadoliya.github.io/Abhishek-Madoliya-Personal-Portfoilio/assets/blog-image.png"
  }
];

const Projects = forwardRef((props, ref) => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-[#38343C]" ref={ref}>
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
});

export default Projects;
