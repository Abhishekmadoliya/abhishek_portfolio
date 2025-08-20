import {forwardRef} from "react";
import { motion } from "framer-motion";
import logo from "../assets/profile.jpeg";
import pdf from "../assets/Abhishek_Madoliya_Resume.pdf";
import Contact from "./footer/Contact";




const Hero = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#2C2A34] via-[#39353D] to-[#1F1C22] text-white gap-8 px-6 md:px-20 pt-28 pb-5">

      {/* Logo */}
      <motion.img
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[120px] md:w-[180px] lg:w-[220px] animate-bounce-slow rounded-full shadow-lg cover "
        src={logo}
        alt="Welcome to My Portfolio"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-3xl md:text-5xl font-bold mt-4 text-center leading-snug"
      >
        Hi, I am <br />
        <span className="text-[#C94CA6]">Abhishek Madoliya</span> <br />
        a passionate{" "}
        <span className="bg-gradient-to-r from-[#C94CA6] to-[#6A5ACD] bg-clip-text text-transparent animate-pulse">
          Full-Stack Developer
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-300 mt-4 max-w-2xl text-center text-sm md:text-base lg:text-lg leading-relaxed"
      >
        I am a passionate Full Stack Developer specializing in the MERN stack
        (MongoDB, Express.js, React, Node.js). As a fresher, I’m eager to gain
        hands-on experience and contribute to real-world projects. My enthusiasm
        for coding, problem-solving, and collaboration makes me a quick learner
        and a dedicated team player. Let’s build innovative solutions together!
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6"
      >
        <a
          href="mailto:your.email@example.com"
          className="px-6 py-3 rounded-md bg-gradient-to-r from-[#C94CA6] to-[#6A5ACD] text-white font-medium shadow-md hover:opacity-90 transition duration-300 text-center"
          onClick={props.onClickContact}
        >
          Contact Me
        </a>
        <a
          href={pdf}
          download
          className="px-6 py-3 rounded-md border border-[#C94CA6] text-[#C94CA6] hover:bg-[#C94CA6] hover:text-white font-medium transition duration-300 text-center"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-14 flex flex-col items-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[#BFBFBF] mb-8">
          🚀 Tech Stack
        </h2>
        <div className="bg-[#2A2A2A] rounded-2xl p-8 shadow-2xl">
          <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {[
              { src: "javascript/javascript-original.svg", alt: "JavaScript" },
              { src: "react/react-original.svg", alt: "React" },
              { src: "html5/html5-original.svg", alt: "HTML5" },
              { src: "nodejs/nodejs-original.svg", alt: "Node.js" },
              { src: "css3/css3-original.svg", alt: "CSS3" },
              { src: "express/express-original.svg", alt: "Express.js" },
              { src: "mongodb/mongodb-original.svg", alt: "MongoDB" },
              { src: "mysql/mysql-original.svg", alt: "MySQL" },
            ].map((tech, i) => (
              <li key={i} className="group">
                <div className="w-14 h-14 bg-[#333333] rounded-xl flex items-center justify-center transform hover:scale-110 transition duration-300 hover:bg-gradient-to-r from-[#C94CA6] to-[#6A5ACD]">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}`}
                    alt={tech.alt}
                    className="w-8 h-8 filter drop-shadow-md"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
});

export default Hero;
