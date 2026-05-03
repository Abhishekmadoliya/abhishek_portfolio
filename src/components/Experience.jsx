import { useRef, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Rocket,
  Code,
  Cpu,
  Globe,
  Zap,
  CheckCircle2
} from "lucide-react";

/* ─────── Experience Data ─────── */
const experiences = [
  {
    id: 1,
    company: "Cloudvyn",
    role: "Founder & Full Stack Developer",
    location: "Remote, India",
    duration: "Oct 2025 – Present",
    type: "Full-time",
    description: "Built and launched Cloudvyn, an AI-powered interview platform that conducts realistic voice and video mock interviews for job seekers and automates candidate screening for companies — supporting both Hindi and English.",
    highlights: [
      "Architected end-to-end WebRTC-based voice and video interview engine with real-time AI feedback",
      "Built LLM-powered resume analysis and automated job matching pipeline using LangChain and OpenAI API",
      "Implemented RAG pipelines for context-aware interview question generation",
      "Managed full production infrastructure on GCP — Cloud Run, VPS/Linux, Docker, and TURN/STUN setup",
      "Grew organic traffic through an SEO content pipeline with Next.js SSR and BullMQ automation"
    ],
    stack: ["React.js", "Next.js", "Node.js", "FastAPI", "MongoDB", "LangChain", "OpenAI API", "WebRTC", "Docker", "GCP"],
    color: "#d4772c",
    isFounder: true,
    certificateLink: "https://www.cloudvyn.com/"
  },
  {
    id: 2,
    company: "TechThaastu Pvt. Ltd.",
    role: "Full Stack Developer",
    location: "On-site",
    duration: "Oct 2025 – Present",
    type: "Full-time",
    description: "Developing and maintaining robust full-stack web applications serving internal tools and client platforms.",
    highlights: [
      "Built responsive React.js + Tailwind CSS components, improving page load performance by ~20%",
      "Designed and implemented RESTful APIs for authentication and data processing using Node.js/Express",
      "Integrated LLM-powered features using OpenAI / LangChain for content generation and summarization",
      "Optimized MongoDB queries and backend logic, improving API response time by ~25%",
      "Implemented AI-based automation workflows, reducing manual processing time significantly"
    ],
    stack: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "LangChain", "OpenAI"],
    color: "#4a7c59"
  },
  {
    id: 3,
    company: "GeeksforGeeks",
    role: "MERN Stack Developer Intern",
    location: "Remote",
    duration: "Feb 2025 – May 2025",
    type: "Internship",
    description: "Successfully completed an intensive internship focused on building scalable e-commerce infrastructure.",
    highlights: [
      "Built a full-featured MERN eCommerce application with product management and cart functionality",
      "Developed secure REST APIs with Express.js and MongoDB, implementing JWT-based authentication",
      "Utilized Redux and Context API for efficient global state management",
      "Followed best coding practices and optimized database queries for performance",
      "Integrated third-party APIs/services to enhance application functionality"
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "JWT", "Context API"],
    color: "#5a6acf",
    certificateLink: "https://media.geeksforgeeks.org/certificates/1746014012/a80f3b13487420018649c5fed1f0d7ec.pdf"
  }
];

/* ─────── Experience Card Component ─────── */
const ExperienceCard = ({ exp, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative mb-24 last:mb-0 pl-8 md:pl-0">
      {/* Timeline Connector Dot (Desktop) */}
      <div className="absolute left-[-4px] md:left-1/2 md:translate-x-[-50%] top-0 hidden md:block">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-4 h-4 rounded-full bg-[#f5f0e8] border-2 z-10"
          style={{ borderColor: exp.color }}
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.2 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute inset-[-4px] rounded-full animate-ping"
          style={{ backgroundColor: exp.color }}
        />
      </div>

      <div className={`flex flex-col md:flex-row gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Left Side: Metadata (Date & Company) */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
        >
          <div className="flex flex-col">
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: exp.color,
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}
              className="mb-2"
            >
              {exp.duration}
            </span>
            <h3
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(24px, 3vw, 32px)",
                color: "#1a1a1a",
                lineHeight: 1.1
              }}
              className="mb-1"
            >
              {exp.company}
            </h3>
            <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
              <MapPin size={14} className="text-[#888]" />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#888" }}>
                {exp.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#bbb]" />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#888" }}>
                {exp.type}
              </span>
            </div>

            {/* Tech Stack Bubbles (Desktop) */}
            <div className={`flex flex-wrap gap-2 mt-4 hidden md:flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
              {exp.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full border border-[#e0dbd1] bg-white/50 text-[11px] font-semibold text-[#666]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content Card */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-[1.2] relative"
        >
          <div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#e0dbd1]/60 relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500"
          >
            {/* Background Accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] transition-transform duration-700 group-hover:scale-125"
              style={{ color: exp.color }}
            >
              {exp.isFounder ? <Rocket size={128} /> : <Briefcase size={128} />}
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <h4
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1a1a1a"
                  }}
                >
                  {exp.role}
                </h4>
                {exp.certificateLink && (
                  <a
                    href={exp.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-[#f5f0e8] transition-colors text-[#d4772c]"
                    title="View Certificate"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14.5px",
                  color: "#666",
                  lineHeight: 1.7
                }}
                className="mb-8"
              >
                {exp.description}
              </p>

              <div className="space-y-4">
                {exp.highlights.map((point, i) => (
                  <div key={i} className="flex gap-4 group/item">
                    <div className="mt-1.5 flex-shrink-0">
                      <CheckCircle2 size={16} className="transition-colors duration-300 group-hover/item:text-[#d4772c]" style={{ color: `${exp.color}80` }} />
                    </div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13.5px",
                        color: "#4a4a4a",
                        lineHeight: 1.5
                      }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile Only: Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-8 md:hidden">
                {exp.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-full border border-[#e0dbd1] bg-[#f5f0e8]/50 text-[10px] font-semibold text-[#666]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Handwritten Note */}
          {exp.id === 1 && (
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="absolute -bottom-10 -right-4 hidden lg:block"
            >
              <p style={{ fontFamily: "'Caveat', cursive", fontSize: "18px", color: "#d4772c" }}>
                My most ambitious venture! 🚀
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

/* ─────── Main Experience Component ─────── */
const Experience = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={(node) => {
        containerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      id="experience"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      <div className="max-w-[1150px] mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#d4772c",
                letterSpacing: "0.2em",
                textTransform: "uppercase"
              }}
              className="block mb-4"
            >
              My Career Path
            </span>
            <h2 className="text-[2.8rem] md:text-[3.5rem] font-normal leading-tight">
              <span style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}>Professional </span>
              <span style={{ fontFamily: "'DM Serif Display', serif", color: "#d4772c", fontStyle: "italic" }}>Journey</span>
            </h2>
          </motion.div>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical Line Connector (Desktop) */}
          <div className="absolute left-[0px] md:left-1/2 md:translate-x-[-50%] top-0 bottom-0 w-[1px] bg-[#e0dbd1] opacity-60" />

          {/* Experience Cards */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "#888",
              marginBottom: "16px"
            }}
          >
            Looking for a dedicated Full Stack Developer?
          </p>
          <a
            href="mailto:abhishekmadoliya@gmail.com"
            className="inline-flex items-center gap-2 group"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "24px",
                color: "#1a1a1a",
                borderBottom: "1px solid #d4772c"
              }}
              className="transition-all duration-300 group-hover:text-[#d4772c]"
            >
              Let's build something together
            </span>
            <span className="text-[#d4772c] transform transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-64 h-64 rounded-full bg-[#d4772c] opacity-[0.02] blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 rounded-full bg-[#4a7c59] opacity-[0.02] blur-3xl" />
      </div>
    </section>
  );
});

export default Experience;
