import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
          <p className="mb-6 text-gray-400">
            Have a project in mind or an opportunity you'd like to discuss? 
            Feel free to reach out! I'm always open to new challenges and collaborations. 
            You can contact me via email at <span className="font-semibold text-indigo-200">abhishekmadoliya@gmail.com</span> or connect with me on <a href="https://www.linkedin.com/in/abhishek-madoliya-540847273/" className =" font-semibold text-indigo-200" target="_blank" rel="noopener noreferrer">LinkedIn</a>. 
            Let's make something great together!


          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-400" />
              <span>abhishekmadoliya@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-400" />
              <span>+91 9310069214</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-indigo-400" />
              <span>New Delhi, India</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-5 mt-6">
            <a href="https://github.com/Abhishekmadoliya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-madoliya-540847273/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Linkedin size={22} />
            </a>
            
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-800 rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Send me a message</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white font-medium"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
    </footer>
  );
}
