import React from "react";
import logo from "../assets/react.svg";
import skills from "../assets/image.png"; // Assuming you have a skills image
import reactimg from "../assets/React.webp"; // Assuming you have a react logo
// import reactimg from "../assets/React.webp"; // Assuming you have a react logo
import nodeimg from "../assets/1174925.webp"; // Assuming you have a node.js logo
import mongodbimg from "../assets/mongodb-logo.webp";
import javascriptimg from "../assets/JavaScript-logo.png"; // Assuming you have a javascript logo
import sqllogo from "../assets/sql.webp"; // Assuming you have a SQL logo
import expresslogo from "../assets/express.png"; // Assuming you have an Express.js logo

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#39353D] text-white gap-4 p-6 md:p-20">
      <img 
        className="w-[150px] md:w-[200px] animate-float" 
        src={logo} 
        alt="Welcome to My Portfolio" 
      />
      <h1 className="text-2xl md:text-3xl font-bold mt-4 text-center">
        Hi, I am <br /> Abhishek Madoliya A <br />
        passionate <span className="text-[#C94CA6] animate-pulse">Full-Stack-Developer</span>
      </h1>

      <p className="text-gray-400 mt-2 max-w-[600px] text-center px-4 md:px-0">
        I am a passionate Full Stack Developer specializing in the MERN stack
        (MongoDB, Express.js, React, Node.js), eager to apply my skills in a
        professional setting. As a fresher, I am actively seeking internship
        opportunities to gain hands-on experience and contribute to real-world
        projects. I am driven by a strong desire to learn, grow, and collaborate
        with industry professionals. My enthusiasm for coding and
        problem-solving, combined with my academic knowledge, makes me a quick
        learner and a dedicated team player. Let's work together to build
        innovative solutions!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <a 
          href="mailto:your.email@example.com" 
          className="bg-[#C94CA6] text-white px-6 py-2 rounded-md hover:bg-[#A83B8F] transition duration-300 text-center"
          aria-label="Contact Me via Email"
        >
          Contact Me
        </a>
        <a 
          href="/path-to-your-resume.pdf" 
          className="bg-[#39353D] text-white px-6 py-2 rounded-md border border-[#C94CA6] hover:bg-[#C94CA6] hover:text-white transition duration-300 text-center"
          aria-label="Download Resume"
          download
        >
          Download Resume
        </a>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#BFBFBF] mb-8">Tech Stack</h2>
        <div className="bg-[#2A2A2A] rounded-xl p-8 shadow-2xl">
          <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <li className="group">
              <div className="w-14 h-14 bg-[#333333] rounded-lg flex items-center justify-center transform hover:scale-110 transition duration-300 hover:bg-[#414141]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />
              </div>
            </li>
            <li className="group">
              <div className="w-14 h-14 bg-[#333333] rounded-lg flex items-center justify-center transform hover:scale-110 transition duration-300 hover:bg-[#414141]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
              </div>
            </li>
            <li className="group">
              <div className="w-14 h-14 bg-[#333333] rounded-lg flex items-center justify-center transform hover:scale-110 transition duration-300 hover:bg-[#414141]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8" />
              </div>
            </li>
            <li className="group">
              <div className="w-14 h-14 bg-[#333333] rounded-lg flex items-center justify-center transform hover:scale-110 transition duration-300 hover:bg-[#414141]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />
              </div>
            </li>
            <li className="group">
              <div className="w-14 h-14 bg-[#333333] rounded-lg flex items-center justify-center transform hover:scale-110 transition duration-300 hover:bg-[#414141]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8" />
              </div>
            </li>
            <li className="group">
              <div className="w-14 h-14 bg-[#333333] rounded-lg flex items-center justify-center transform hover:scale-110 transition duration-300 hover:bg-[#414141]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-8 h-8 brightness-200" />
              </div>
            </li>
            <li className="group">
              <div className="w-14 h-14 bg-[#333333] rounded-lg flex items-center justify-center transform hover:scale-110 transition duration-300 hover:bg-[#414141]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8" />
              </div>
            </li>
            <li className="group">
              <div className="w-14 h-14 bg-[#333333] rounded-lg flex items-center justify-center transform hover:scale-110 transition duration-300 hover:bg-[#414141]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-8 h-8" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
   

export default Hero;
