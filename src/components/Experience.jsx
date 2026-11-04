import { useRef, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  MapPin,
  ExternalLink,
  Rocket,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Calendar,
} from "lucide-react";

/* ─────── Experience Data from Resume ─────── */
const experiences = [
  {
    id: 1,
    company: "Cloudvyn & TaxSolver",
    role: "Founder & Lead Engineer",
    location: "Remote / New Delhi",
    duration: "Oct 2025 – Present",
    type: "Founder & Full-Time",
    isFounder: true,
    description:
      "Architected, built, and launched two production SaaS platforms solo from zero to active paid users: Cloudvyn (real-time AI voice interview platform) and TaxSolver (GST reconciliation engine with RAG).",
    highlights: [
      "Scaled Cloudvyn to 600+ registered candidates, 450+ completed interview sessions, and 50+ multi-agent GD simulations.",
      "Engineered real-time voice pipeline with WebRTC, Deepgram Nova-3 STT (with VAD), and Cloudflare Workers AI TTS.",
      "Designed an urgency-scored turn-taking algorithm for multi-agent GD simulations over Socket.io.",
      "Built TaxSolver's GSTR-2B reconciliation engine using O(n) Map-based matching with Fuse.js fuzzy fallback and paise-normalized amounts.",
      "Created RAG pipeline over CBIC circulars using MongoDB Atlas Vector Search and Voyage AI embeddings.",
      "Integrated Razorpay subscription middleware, BullMQ cron jobs for tier downgrades, and deployed on AWS EC2 & GCP.",
    ],
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Bun",
      "FastAPI",
      "LangChain",
      "WebRTC",
      "Deepgram",
      "MongoDB Atlas",
      "BullMQ",
      "AWS EC2",
    ],
    color: "#d4772c",
    link: "https://cloudvyn.com/",
  },
  {
    id: 2,
    company: "TechThaastu Pvt. Ltd.",
    role: "Full Stack Developer",
    location: "On-site / Hybrid",
    duration: "Oct 2025 – Present",
    type: "Full-Time",
    isFounder: false,
    description:
      "Developing high-throughput MERN applications, architecting reusable component libraries, and implementing LLM-powered automation workflows.",
    highlights: [
      "Built MERN applications with a reusable React and Tailwind CSS component library, improving page load performance by 20%.",
      "Designed REST APIs for authentication, user management, and data processing; optimized MongoDB queries, cutting API response time by 25%.",
      "Shipped LLM-powered content generation and intelligent search using OpenAI and LangChain, saving 20 seconds of manual processing per request.",
      "Debugged production issues and delivered fixes through Git/GitHub and Agile sprints, boosting overall system reliability.",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "LangChain",
      "OpenAI",
      "Git",
    ],
    color: "#2563eb",
  },
  {
    id: 3,
    company: "GeeksforGeeks",
    role: "MERN Stack Developer Intern",
    location: "Remote",
    duration: "Feb 2025 – May 2025",
    type: "Internship",
    isFounder: false,
    description:
      "Completed intensive hands-on development building scalable e-commerce infrastructure with production security and state management.",
    highlights: [
      "Built a full-featured MERN e-commerce application with JWT authentication and role-based access.",
      "Implemented Redux Toolkit and Context API for seamless client-side state synchronizations.",
      "Integrated third-party payment and product catalog APIs with robust error boundaries.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "JWT"],
    color: "#0d9488",
    certificateLink:
      "https://media.geeksforgeeks.org/certificates/1746014012/a80f3b13487420018649c5fed1f0d7ec.pdf",
  },
  {
    id: 4,
    company: "openCMS (Open Collective Dev)",
    role: "Open Source Contributor",
    location: "Global Community",
    duration: "2025 – Present",
    type: "Open Source",
    isFounder: false,
    description:
      "Contributing to openCMS, part of a self-hosted open-source software suite (openCRM, openCMS, openChat) developed with the Open Collective Dev community.",
    highlights: [
      "Contributed modular content management backend endpoints and collection schemas.",
      "Collaborated on responsive dashboard UI components and developer documentation.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Open Source"],
    color: "#ea580c",
    certificateLink: "https://github.com/opencollective-dev/openCMS",
  },
];

/* ─────── Experience Card Component ─────── */
const ExperienceCard = ({ exp, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative mb-20 last:mb-0 pl-6 md:pl-0">
      {/* Timeline Node Dot (Desktop) */}
      <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 hidden md:block">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-4 h-4 rounded-full bg-[#f5f0e8] border-2 z-10"
          style={{ borderColor: exp.color }}
        />
        <div
          className="absolute inset-[-4px] rounded-full animate-ping opacity-20"
          style={{ backgroundColor: exp.color }}
        />
      </div>

      <div
        className={`flex flex-col md:flex-row gap-6 md:gap-14 ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Left Side: Metadata */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`flex-1 ${
            index % 2 === 0 ? "md:text-right" : "md:text-left"
          }`}
        >
          <div className="flex flex-col">
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: exp.color,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
              className="mb-1"
            >
              {exp.duration}
            </span>

            <h3
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(22px, 2.8vw, 30px)",
                color: "#1a1a1a",
                lineHeight: 1.15,
              }}
              className="mb-1"
            >
              {exp.company}
            </h3>

            <div
              className={`flex items-center gap-2 mb-3 ${
                index % 2 === 0 ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <MapPin size={13} className="text-[#888]" />
              <span
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#777" }}
              >
                {exp.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#bbb]" />
              <span
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#777" }}
              >
                {exp.type}
              </span>
            </div>

            {/* Desktop Tech Tags */}
            <div
              className={`flex flex-wrap gap-1.5 mt-3 hidden md:flex ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              }`}
            >
              {exp.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-full border border-[#e0dbd1] bg-white/70 text-[11px] font-medium text-[#555]"
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
          initial={{ opacity: 0, x: index % 2 === 0 ? 25 : -25 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-[1.25] relative"
        >
          <div className="bg-white rounded-3xl p-7 md:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#e0dbd1] hover:shadow-lg transition-all duration-400 relative overflow-hidden">
            {/* Background icon watermark */}
            <div
              className="absolute top-2 right-2 opacity-[0.04] pointer-events-none"
              style={{ color: exp.color }}
            >
              {exp.isFounder ? <Rocket size={100} /> : <Briefcase size={100} />}
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#1a1a1a",
                    }}
                  >
                    {exp.role}
                  </h4>
                  {exp.isFounder && (
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[#d4772c]/10 text-[#d4772c] text-[10px] font-bold uppercase tracking-wider">
                      Self-Initiated Startup
                    </span>
                  )}
                </div>

                {exp.certificateLink && (
                  <a
                    href={exp.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-[#f5f0e8] text-[#d4772c] transition-colors"
                    title="View Verification / Repo"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "#555",
                  lineHeight: 1.65,
                }}
                className="mb-6"
              >
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {exp.highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: exp.color }}
                    />
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                        color: "#444",
                        lineHeight: 1.55,
                      }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-6 md:hidden">
                {exp.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-full border border-[#e0dbd1] bg-[#f5f0e8] text-[10px] font-medium text-[#555]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ─────── Main Experience Component ─────── */
const Experience = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

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
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
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
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
              className="block mb-3"
            >
              Career Path & Foundations
            </span>
            <h2 className="text-[2.8rem] md:text-[3.6rem] font-normal leading-tight">
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  color: "#1a1a1a",
                }}
              >
                Professional{" "}
              </span>
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  color: "#d4772c",
                  fontStyle: "italic",
                }}
              >
                Journey
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-[0px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#e0dbd1]" />

          {/* Experience Cards */}
          <div>
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-[800px] mx-auto bg-white rounded-3xl p-8 border border-[#e0dbd1] shadow-xs flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#d4772c]/10 text-[#d4772c] flex items-center justify-center flex-shrink-0">
            <GraduationCap size={30} />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <span className="text-[11px] font-bold text-[#d4772c] uppercase tracking-wider">
              Academic Background
            </span>
            <h4
              style={{ fontFamily: "'DM Serif Display', serif" }}
              className="text-xl text-[#1a1a1a] mt-0.5"
            >
              Bachelor of Computer Applications (BCA)
            </h4>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-xs text-[#666] mt-1"
            >
              Indira Gandhi National Open University (IGNOU) • Graduating 2026 • CGPA: 7.13
            </p>
          </div>
          <div className="px-4 py-2 rounded-full bg-[#f5f0e8] text-xs font-semibold text-[#1a1a1a] border border-[#e0dbd1]">
            Computer Science
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "#888",
              marginBottom: "12px",
            }}
          >
            Looking for a dependable Full-Stack / AI Engineer?
          </p>
          <a
            href="mailto:abhishekmadoliya@gmail.com"
            className="inline-flex items-center gap-2 group cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "24px",
                color: "#1a1a1a",
                borderBottom: "1px solid #d4772c",
              }}
              className="transition-colors group-hover:text-[#d4772c]"
            >
              Let's build something extraordinary together
            </span>
            <span className="text-[#d4772c] transform transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
});

export default Experience;
