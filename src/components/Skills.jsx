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
  Cloud
} from "lucide-react";

/* ─────── Skill Data ─────── */
const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Palette,
    color: "#d4772c",
    skills: [
      { name: "React", level: 90, icon: Atom },
      { name: "Next.js", level: 80, icon: Zap },
      { name: "JavaScript", level: 92, icon: Code },
      { name: "TypeScript", level: 75, icon: Code },
      { name: "HTML5", level: 95, icon: Layout },
      { name: "CSS3", level: 90, icon: Layers },
      { name: "Tailwind", level: 88, icon: Wind },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    color: "#4a7c59",
    skills: [
      { name: "Node.js", level: 88, icon: Cpu },
      { name: "Express", level: 85, icon: Server },
      { name: "MongoDB", level: 82, icon: Database },
      { name: "PostgreSQL", level: 70, icon: Database },
      { name: "Firebase", level: 78, icon: Flame },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    icon: Wrench,
    color: "#5a6acf",
    skills: [
      { name: "Git", level: 88, icon: GitBranch },
      { name: "Docker", level: 65, icon: Box },
      { name: "VS Code", level: 92, icon: Monitor },
      { name: "GCP", level: 75, icon: Cloud },
      { name: "Linux", level: 70, icon: Terminal },
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
    { x: "95%", y: "40%", size: 2, delay: 0.6 },
  ];

  return (
    <>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            backgroundColor: "#d4772c",
          }}
          animate={{
            opacity: [0.15, 0.45, 0.15],
            scale: [1, 1.5, 1],
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
  const ribbonItems = [...allSkills, ...allSkills]; // duplicate for seamless loop

  return (
    <div className="relative w-full overflow-hidden py-6 my-12">
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
              className="flex items-center gap-3 flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <IconComponent size={18} strokeWidth={2} style={{ color: "#4a4a4a" }} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#4a4a4a",
                  letterSpacing: "0.03em",
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
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComponent = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-500 cursor-default"
        style={{
          backgroundColor: isHovered ? "#ffffff" : "transparent",
          boxShadow: isHovered
            ? "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)"
            : "none",
          border: `1px solid ${isHovered ? "#e0dbd1" : "transparent"}`,
        }}
      >
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
          style={{
            backgroundColor: isHovered
              ? `${categoryColor}12`
              : "#e0dbd1",
          }}
        >
          <IconComponent
            size={20}
            strokeWidth={2.5}
            style={{
              color: isHovered ? categoryColor : "#888",
              transition: "color 0.3s ease",
            }}
          />
        </div>

        {/* Name + Level */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              {skill.name}
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: categoryColor,
              }}
            >
              {skill.level}%
            </motion.span>
          </div>

          {/* Progress bar */}
          <div
            className="h-[3px] rounded-full overflow-hidden"
            style={{ backgroundColor: "#e0dbd1" }}
          >
            <motion.div
              className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : {}}
              transition={{
                duration: 1.2,
                delay: index * 0.06 + 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                backgroundColor: isHovered ? categoryColor : "#bbb",
                transition: "background-color 0.4s ease",
              }}
            />
          </div>
        </div>

        {/* Hover glow */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute -inset-px rounded-2xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                background: `radial-gradient(200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${categoryColor}08, transparent 60%)`,
              }}
            />
          )}
        </AnimatePresence>
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
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group flex items-center gap-4 w-full text-left px-6 py-5 rounded-2xl transition-all duration-500 cursor-pointer relative overflow-hidden"
      style={{
        backgroundColor: isActive ? "#ffffff" : "transparent",
        border: `1px solid ${isActive ? "#e0dbd1" : "transparent"}`,
        boxShadow: isActive
          ? "0 4px 20px rgba(0,0,0,0.04)"
          : "none",
      }}
    >
      {/* Active indicator line */}
      {isActive && (
        <motion.div
          layoutId="activeCategoryLine"
          className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-r-full"
          style={{ backgroundColor: category.color }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      <div
        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          backgroundColor: isActive ? `${category.color}10` : "#e8e3da",
          color: isActive ? category.color : "#888",
        }}
      >
        <IconComponent size={20} strokeWidth={isActive ? 2.5 : 2} />
      </div>

      <div className="flex flex-col">
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            fontWeight: isActive ? 700 : 500,
            color: isActive ? "#1a1a1a" : "#888",
            transition: "all 0.3s ease",
          }}
        >
          {category.label}
        </span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            color: "#bbb",
          }}
        >
          {category.skills.length} skills
        </span>
      </div>

      {/* Skill count badge */}
      <div
        className="ml-auto flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300"
        style={{
          backgroundColor: isActive ? `${category.color}15` : "#e8e3da",
          color: isActive ? category.color : "#aaa",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 700,
        }}
      >
        {category.skills.length}
      </div>
    </motion.button>
  );
};

/* ─────── Main Skills Component ─────── */
const Skills = forwardRef((props, ref) => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const activeData = skillCategories.find((c) => c.id === activeCategory);
  const ActiveIcon = activeData.icon;

  // Count total skills
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

      <div className="max-w-[1150px] mx-auto px-6 relative z-10">
        {/* ─── Section Header ─── */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              backgroundColor: "#e8e3da",
              border: "1px solid #d8d3ca",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] animate-pulse" />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {totalSkills}+ Technologies
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.8rem] md:text-[3.5rem] font-normal leading-tight"
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
              fontSize: "14px",
              fontWeight: 400,
              color: "#888",
              lineHeight: 1.7,
              maxWidth: "460px",
              margin: "16px auto 0",
            }}
          >
            Technologies and tools I use to bring ideas to life — from
            pixel-perfect interfaces to robust backend systems.
          </motion.p>
        </div>

        {/* ─── Marquee Ribbon ─── */}
        <MarqueeRibbon />

        {/* ─── Main Content: Side-by-Side Layout ─── */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Left: Category Selector */}
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

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-6 px-6"
            >
              <div
                className="flex items-center gap-3"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "16px",
                  color: "#bbb",
                }}
              >
                <Plus size={16} strokeWidth={2.5} style={{ color: "#d4772c", opacity: 0.5 }} />
                Always learning more...
              </div>
            </motion.div>
          </div>

          {/* Right: Skills Grid */}
          <div className="relative">
            {/* Category title header */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 mb-6 pb-4"
                style={{ borderBottom: "1px solid #e0dbd1" }}
              >
                <ActiveIcon size={22} style={{ color: activeData.color }} />
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
                  className="ml-auto px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${activeData.color}12`,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: activeData.color,
                  }}
                >
                  {activeData.skills.length} skills
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Skills list */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
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

            {/* Bottom decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="mt-8 h-px origin-left"
              style={{
                background:
                  "linear-gradient(to right, #d4772c40, #e0dbd140, transparent)",
              }}
            />
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-20 flex justify-center">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]"
          />
        </div>
      </div>

      {/* ─── Marquee CSS Animation ─── */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
});

export default Skills;
