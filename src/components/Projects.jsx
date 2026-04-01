import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Laptop, Smartphone, Github } from "lucide-react";
import fileshareimg from "../assets/14-Best-File-Sharing-Apps-for-Bu.jpg";
import ecoming from "../assets/84_ecommerce.webp";
import re_pdf from "../assets/pdfresearch.jpeg";

const projects = [
  {
    title: "Cloudvyn AI Interview Platform",
    site: "cloudvyn.com",
    year: "2026",
    categories: ["AI", "SaaS", "MERN"],
    platforms: ["desktop", "mobile"],
    status: "Active",
    link: "https://cloudvyn.com/",
    github: "https://github.com/Abhishekmadoliya/cloudvyn-ai-interview",
    image: fileshareimg,
    bgColor: "#e0e7ff",
    description: "AI-powered mock interview platform with voice, video, and real-time behavioral analysis for candidates.",
    summary: "Building a next-gen interview system that simulates real recruiters using AI-driven voice and evaluation models.",
    myPart: ["Full-Stack Development", "AI Integration", "Voice + Video System", "System Design"],
    impact: "Created a scalable AI interview ecosystem helping freshers practice real-world interviews with automated feedback, improving preparation efficiency and confidence."
  },
  {
    title: "AI Feed - Automated Blog Engine",
    site: "cloudvyn.com/ai-feed",
    year: "2026",
    categories: ["AI", "Content", "Automation"],
    platforms: ["desktop", "mobile"],
    status: "Active",
    link: "https://cortex.cloudvyn.com/",
    github: "https://github.com/Abhishekmadoliya/ai-feed",
    image: ecoming,
    bgColor: "#f0e7ff",
    description: "AI-driven automated blogging platform generating high-CTR, SEO-optimized content daily.",
    summary: "Designing a fully automated content engine that researches, generates, and publishes blogs with minimal human input.",
    myPart: ["AI Content Pipeline", "SEO Optimization", "Automation System", "Frontend UI"],
    impact: "Enabled consistent content publishing with AI, boosting organic reach potential and reducing manual blogging effort by over 90%."
  }
];

const CatIllustration = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="mx-auto mb-4 scale-110">
    <path d="M20 60 C20 40, 25 35, 30 35 C35 35, 40 40, 40 60 L60 60 C60 40, 65 35, 70 35 C75 35, 80 40, 80 60 Z" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 35 L30 25 C30 22, 28 20, 25 20 C22 20, 20 22, 20 25 L20 35" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M70 35 L70 25 C70 22, 72 20, 75 20 C78 20, 80 22, 80 25 L80 35" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M80 60 C90 60, 95 50, 95 40 C95 30, 90 25, 85 25" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M45 45 C50 42, 55 42, 60 45 L60 48 C55 51, 50 51, 45 48 Z" fill="#d4772c" stroke="#1a1a1a" strokeWidth="1" />
    <path d="M60 46 L65 44 L65 48 Z" fill="#d4772c" stroke="#1a1a1a" strokeWidth="1" />
    <circle cx="35" cy="45" r="1" fill="#1a1a1a" />
    <circle cx="65" cy="45" r="1" fill="#1a1a1a" />
    <path d="M90 65 L100 62 L100 68 Z" fill="#4a4a4a" />
    <path d="M105 65 L115 62 L115 68 Z" fill="#4a4a4a" />
  </svg>
);

const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="projects" className="py-24" style={{ backgroundColor: "#f5f0e8" }}>
      <div className="max-w-[1150px] mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <CatIllustration />
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[2.8rem] md:text-[3.5rem] font-normal leading-tight"
          >
            <span style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}>Selected </span>
            <span style={{ fontFamily: "'DM Serif Display', serif", color: "#d4772c", fontStyle: "italic" }}>works</span>
          </motion.h2>
        </div>

        {/* Project Grid — 2 columns match reference density */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group flex flex-col cursor-pointer transition-transform duration-500"
            >
              {/* TOP AREA: Image and Hover Button */}
              <div
                className="relative h-[340px] rounded-t-[1.8rem] overflow-hidden flex items-center justify-center p-0 transition-shadow duration-500 hover:shadow-xl"
                style={{ backgroundColor: project.bgColor || "#e0e7e6" }}
              >
                {/* Image / Mockup */}
                <div className="w-full h-full p-10 flex items-center justify-center">
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Floating "View case study" Button — Centered overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out bg-black/5">
                   <div 
                    onClick={() => window.open(project.link, "_blank")}
                    className="bg-[#d4772c] text-[#f5f0e8] px-6 py-2.5 rounded-full text-[13px] font-bold tracking-tight shadow-2xl transform transition-all duration-300 hover:scale-110 hover:bg-[#1a1a1a]"
                   >
                     View case study
                   </div>
                </div>

                {/* Shipped Badge */}
                {project.status === "Shipped" && (
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-[#2c7a2c] text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    Shipped
                  </div>
                )}
              </div>

              {/* BOTTOM AREA: Info and Breakdown */}
              <div className="bg-[#fbfaf7] rounded-b-[1.8rem] p-10 pt-8 flex flex-col shadow-sm border border-[#e0dbd1]/30">
                {/* Meta Row: Website | Year | Device Icons */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[#888] text-[13px] font-medium tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {project.site} | {project.year}
                  </span>
                  <div className="flex items-center gap-3 text-[#1a1a1a]/30">
                    {project.platforms.includes("desktop") && <Laptop size={14} strokeWidth={2.5} />}
                    {project.platforms.includes("mobile") && <Smartphone size={14} strokeWidth={2.5} />}
                  </div>
                </div>

                {/* Categories */}
                <div className="flex gap-2 items-center mb-4">
                   <span className="text-[#d4772c] text-[11px] font-bold uppercase tracking-[0.1em]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                     {project.categories.join(" • ")}
                   </span>
                </div>

                {/* Project Headline and Summary */}
                <h3 className="text-[1.75rem] leading-[1.2] text-[#1a1a1a] mb-4" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
                  {project.description}
                </h3>
                <p className="text-[#888] text-[13px] leading-[1.6] mb-10 max-w-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {project.summary}
                </p>

                {/* Two-Column Footer Breakdown: My part & The Impact */}
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#e0dbd1]/40">
                  {/* Column 1: My Part */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[#1a1a1a] text-[12px] font-bold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>My part</h4>
                    <ul className="flex flex-col gap-1">
                      {project.myPart.map((item, i) => (
                        <li key={i} className="text-[#666] text-[11px] leading-relaxed flex items-center gap-2">
                           <span className="w-1 h-[1px] bg-[#d4772c]/40" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: The Impact */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[#1a1a1a] text-[12px] font-bold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>The Impact</h4>
                    <p className="text-[#666] text-[11px] leading-[1.6]">
                       {project.impact}
                    </p>
                  </div>
                </div>

                {/* Bottom Source Code Link */}
                <a 
                  href={project.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 self-end text-[11px] text-[#bbb] hover:text-[#d4772c] transition-colors flex items-center gap-1.5"
                >
                  <Github size={11} /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-24 flex justify-center">
          <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
        </div>
      </div>
    </section>
  );
});

export default Projects;
