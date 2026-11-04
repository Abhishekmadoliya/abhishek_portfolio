import { useState, useRef, forwardRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Palette,
  Server,
  Wrench,
  Atom,
  Zap,
  Code,
  Layout,
  Wind,
  Database,
  Flame,
  GitBranch,
  Box,
  Terminal,
  Layers,
  Cpu,
  Monitor,
  PenTool,
  Plus,
  Cloud,
  Sparkles,
  Bot,
  Radio,
  FileCode2,
  Workflow,
  Network,
} from "lucide-react";

/* ─────── Skill Data matching Resume ─────── */
const skillCategories = [
  {
    id: "ai",
    label: "AI & LLM Systems",
    icon: Sparkles,
    color: "#d4772c",
    skills: [
      { name: "LangChain", level: 92, icon: Bot },
      { name: "OpenAI API", level: 95, icon: Sparkles },
      { name: "RAG & Vector Search", level: 90, icon: Database },
      { name: "Multi-Agent GD Systems", level: 88, icon: Network },
      { name: "WebRTC Audio Pipeline", level: 85, icon: Radio },
      { name: "Deepgram Nova-3 STT", level: 87, icon: Radio },
      { name: "Prompt Engineering", level: 95, icon: FileCode2 },
      { name: "Stable Diffusion / FLUX", level: 80, icon: Palette },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Palette,
    color: "#2563eb",
    skills: [
      { name: "React.js", level: 95, icon: Atom },
      { name: "Next.js (SSR / App Router)", level: 90, icon: Zap },
      { name: "JavaScript (ES6+)", level: 95, icon: Code },
      { name: "TypeScript", level: 85, icon: Code },
      { name: "Tailwind CSS", level: 92, icon: Wind },
      { name: "Redux Toolkit", level: 88, icon: Layers },
      { name: "HTML5 / Semantic DOM", level: 95, icon: Layout },
      { name: "Framer Motion", level: 86, icon: Sparkles },
    ],
  },
  {
    id: "backend",
    label: "Backend & Realtime",
    icon: Server,
    color: "#0d9488",
    skills: [
      { name: "Node.js", level: 92, icon: Cpu },
      { name: "Bun", level: 85, icon: Zap },
      { name: "Express.js", level: 90, icon: Server },
      { name: "FastAPI & Python", level: 84, icon: Cpu },
      { name: "Socket.io", level: 88, icon: Radio },
      { name: "BullMQ Job Queues", level: 87, icon: Workflow },
      { name: "RESTful API Design", level: 94, icon: Network },
    ],
  },
  {
    id: "devops",
    label: "Databases & Cloud",
    icon: Cloud,
    color: "#7c3aed",
    skills: [
      { name: "MongoDB Atlas Vector Search", level: 90, icon: Database },
      { name: "PostgreSQL & MySQL", level: 82, icon: Database },
      { name: "Redis", level: 88, icon: Database },
      { name: "AWS (EC2)", level: 84, icon: Cloud },
      { name: "Google Cloud (GCP)", level: 80, icon: Cloud },
      { name: "Docker", level: 82, icon: Box },
      { name: "Nginx & Linux VPS", level: 85, icon: Terminal },
      { name: "Git, GitHub & Vercel", level: 94, icon: GitBranch },
      { name: "n8n Automation", level: 80, icon: Workflow },
    ],
  },
];

/* ─────── Floating Constellation Dots ─────── */
const ConstellationDots = () => {
  const dots = [
    { x: "8%", y: "15%", size: 3, delay: 0 },
    { x: "92%", y: "12%", size: 2, delay: 0.5 },
    { x: "15%", y: "85%", size: 2.5, delay: 1 },
    { x: "88%", y: "80%", size: 3, delay: 1.5 },
    { x: "50%", y: "8%", size: 2, delay: 0.8 },
    { x: "75%", y: "50%", size: 2, delay: 2 },
    { x: "5%", y: "50%", size: 2.5, delay: 1.2 },
    { x: "30%", y: "92%", size: 2, delay: 0.3 },
    { x: "70%", y: "92%", size: 3, delay: 1.8 },
  ];

  return (
    <>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            backgroundColor: "#d4772c",
          }}
          animate={{
            opacity: [0.15, 0.45, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

/* ─────── Marquee Ribbon ─────── */
const MarqueeRibbon = () => {
  const allSkills = skillCategories.flatMap((c) => c.skills);
  const ribbonItems = [...allSkills, ...allSkills];

  return (
    <div className="relative w-full overflow-hidden py-6 my-10">
      {/* Gradient fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #f5f0e8, transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #f5f0e8, transparent)",
        }}
      />

      <div className="marquee-track flex items-center gap-10 whitespace-nowrap">
        {ribbonItems.map((skill, i) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 flex-shrink-0 opacity-45 hover:opacity-100 transition-opacity duration-300"
            >
              <IconComponent size={16} strokeWidth={2} style={{ color: "#d4772c" }} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#333",
                  letterSpacing: "0.02em",
                }}
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ─────── Skill Card ─────── */
const SkillCard = ({ skill, categoryColor, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const IconComponent = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-300 cursor-default"
        style={{
          backgroundColor: isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
          boxShadow: isHovered
            ? "0 6px 20px rgba(0,0,0,0.05)"
            : "none",
          border: `1px solid ${isHovered ? "#e0dbd1" : "rgba(224, 219, 209, 0.5)"}`,
        }}
      >
        {/* Icon */}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
          style={{
            backgroundColor: isHovered ? `${categoryColor}15` : "#e8e2d5",
          }}
        >
          <IconComponent
            size={18}
            strokeWidth={2.2}
            style={{
              color: isHovered ? categoryColor : "#666",
            }}
          />
        </div>

        {/* Name + Level */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              {skill.name}
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: categoryColor,
              }}
            >
              {skill.level}%
            </span>
          </div>

          {/* Progress bar */}
          <div
            className="h-[3px] rounded-full overflow-hidden"
            style={{ backgroundColor: "#e2dcce" }}
          >
            <motion.div
              className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : {}}
              transition={{
                duration: 1,
                delay: index * 0.04 + 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                backgroundColor: categoryColor,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────── Category Panel ─────── */
const CategoryPanel = ({ category, isActive, onClick, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const IconComponent = category.icon;

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, x: -15 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={onClick}
      className="group flex items-center gap-3.5 w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
      style={{
        backgroundColor: isActive ? "#ffffff" : "transparent",
        border: `1px solid ${isActive ? "#e0dbd1" : "transparent"}`,
        boxShadow: isActive ? "0 4px 20px rgba(0,0,0,0.04)" : "none",
      }}
    >
      {/* Active line */}
      {isActive && (
        <motion.div
          layoutId="activeCategoryPill"
          className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full"
          style={{ backgroundColor: category.color }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300"
        style={{
          backgroundColor: isActive ? `${category.color}15` : "#e8e2d5",
          color: isActive ? category.color : "#666",
        }}
      >
        <IconComponent size={18} strokeWidth={isActive ? 2.5 : 2} />
      </div>

      <div className="flex flex-col">
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            fontWeight: isActive ? 700 : 500,
            color: isActive ? "#1a1a1a" : "#777",
          }}
        >
          {category.label}
        </span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            color: "#aaa",
          }}
        >
          {category.skills.length} competencies
        </span>
      </div>

      <div
        className="ml-auto flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold"
        style={{
          backgroundColor: isActive ? `${category.color}15` : "#e8e2d5",
          color: isActive ? category.color : "#888",
        }}
      >
        {category.skills.length}
      </div>
    </motion.button>
  );
};

/* ─────── Main Skills Component ─────── */
const Skills = forwardRef((props, ref) => {
  const [activeCategory, setActiveCategory] = useState("ai");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const activeData =
    skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];
  const ActiveIcon = activeData.icon;

  const totalSkills = skillCategories.reduce(
    (acc, c) => acc + c.skills.length,
    0
  );

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      id="skills"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      <ConstellationDots />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 bg-[#e8e2d5] border border-[#d8d0c0]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] animate-pulse" />
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[11px] font-bold text-[#555] uppercase tracking-wider"
            >
              {totalSkills}+ Production Tools & Technologies
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.8rem] md:text-[3.6rem] font-normal leading-tight"
          >
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: "#1a1a1a",
              }}
            >
              My{" "}
            </span>
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: "#d4772c",
                fontStyle: "italic",
              }}
            >
              toolkit
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "#777",
              maxWidth: "500px",
              margin: "12px auto 0",
              lineHeight: 1.7,
            }}
          >
            The specialized stack I use to build robust full-stack software,
            intelligent AI agents, and high-concurrency systems.
          </motion.p>
        </div>

        {/* Marquee Ribbon */}
        <MarqueeRibbon />

        {/* Side-by-Side Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-8 lg:gap-12 mt-6">
          {/* Left Category Selector */}
          <div className="flex flex-col gap-2">
            {skillCategories.map((category, i) => (
              <CategoryPanel
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                index={i}
              />
            ))}

            <div className="mt-5 px-4 text-left">
              <p
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "17px",
                  color: "#888",
                }}
              >
                Constantly expanding to modern AI APIs & architectures ⚡
              </p>
            </div>
          </div>

          {/* Right Skills Grid */}
          <div className="relative">
            {/* Category header */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-3 mb-6 pb-3 border-b border-[#e0dbd1]"
              >
                <ActiveIcon size={20} style={{ color: activeData.color }} />
                <span
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "22px",
                    color: "#1a1a1a",
                  }}
                >
                  {activeData.label}
                </span>
                <div
                  className="ml-auto px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: `${activeData.color}15`,
                    color: activeData.color,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {activeData.skills.length} core tools
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Skills grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {activeData.skills.map((skill, i) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    categoryColor={activeData.color}
                    index={i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 32s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
});

export default Skills;
