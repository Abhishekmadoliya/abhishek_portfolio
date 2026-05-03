import { forwardRef } from "react";
import { motion } from "framer-motion";
import logo from "../assets/profile.jpeg";
import resumePdf from "../assets/abhishek_madoliya_resume.pdf";

const Hero = forwardRef((props, ref) => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.9, delay, ease: "easeOut" },
  });

  return (
    <section
      ref={ref}
      className="min-h-screen relative"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      {/* Main content area — two-column grid */}
      <div
        className="max-w-[1100px] mx-auto px-8 md:px-12 lg:px-16"
        style={{ paddingTop: "140px" }}
      >
        {/* Top row: greeting (left) + tagline (right) — on the same baseline */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-x-12">
          {/* ======== LEFT COLUMN ======== */}
          <div className="flex flex-col items-start">
            {/* Greeting — handwritten font */}
            <motion.p
              {...fadeUp(0.1)}
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "26px",
                fontWeight: 500,
                color: "#3a3a3a",
                lineHeight: 1.3,
              }}
            >
              Hi, I'm Abhishek Madoliya
            </motion.p>

            {/* Decorative curved stroke — like the bracket/arc in reference */}
            <motion.div {...fadeIn(0.3)} className="mt-3 mb-2">
              <svg
                width="20"
                height="40"
                viewBox="0 0 20 40"
                fill="none"
              >
                <path
                  d="M12 2 C10 12, 4 18, 6 36"
                  stroke="#3a3a3a"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Profile Image Flip Card — animated on hover */}
            <motion.div
              {...fadeUp(0.25)}
              className="relative mt-1 group [perspective:1200px] cursor-pointer z-10"
              style={{
                width: "clamp(220px, 28vw, 320px)",
                height: "clamp(260px, 34vw, 380px)",
              }}
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.1)]">
                {/* Front Side: Profile Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl [backface-visibility:hidden] shadow-lg ring-1 ring-black/5">
                  <img
                    src={logo}
                    alt="Abhishek Madoliya"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    style={{ filter: "grayscale(10%) contrast(1.05)" }}
                  />
                  {/* Decorative glass overlay indicator */}
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-[10px] font-semibold tracking-widest uppercase shadow-sm border border-white/30">
                    Hover to Flip
                  </div>
                </div>

                {/* Back Side: Resume PDF Preview */}
                <div className="absolute inset-0 w-full h-full bg-[#fdfdfd] rounded-3xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#e0dbd1] shadow-2xl">
                  <div className="w-full h-full flex flex-col">
                    {/* Minimalist Top Bar for PDF */}
                    <div className="absolute top-0 left-0 w-full h-8 bg-[#f5f0e8]/80 backdrop-blur-sm border-b border-[#e0dbd1] flex items-center justify-between px-3 z-10">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                      </div>
                      <span className="text-[9px] font-medium text-[#c75a2a] uppercase tracking-tighter">My Resume</span>
                    </div>

                    <div className="flex-1 w-full relative pt-8 h-full">
                      <iframe
                        src={`${resumePdf}#toolbar=0&view=FitW&navpanes=0`}
                        className="w-full h-full border-none pointer-events-auto"
                        style={{ width: "100%", height: "100%" }}
                        title="Resume Preview"
                      />
                    </div>

                    {/* Footer label */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-[#f5f0e8] px-5 py-2 rounded-full text-[11px] font-semibold shadow-lg border border-white/10 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] animate-pulse" />
                      Resume Preview
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ======== RIGHT COLUMN ======== */}
          <div className="flex flex-col items-start mt-8 md:mt-0">
            {/* Tagline — same vertical position as greeting */}
            <motion.p
              {...fadeUp(0.15)}
              style={{ lineHeight: 1.4 }}
            >
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#d4772c",
                }}
              >
                Full-Stack Developer
              </span>
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "#3a3a3a",
                  marginLeft: "8px",
                }}
              >
                focused on
              </span>
            </motion.p>

            {/* Big Skill Words — large stacked serif typography */}
            <div className="flex flex-col mt-6" style={{ gap: "2px" }}>
              {/* Word 1 — Empathy equivalent: "Innovation" */}
              <motion.h1
                {...fadeUp(0.3)}
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(48px, 7vw, 88px)",
                  fontWeight: 400,
                  color: "#1a1a1a",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Innovation
              </motion.h1>

              {/* Word 2 — Visuals equivalent: "Scalability" (italic, orange, with icon) */}
              <motion.div
                {...fadeUp(0.45)}
                className="flex items-center"
                style={{ gap: "8px" }}
              >
                {/* Small decorative icon — like the cat doodle */}
                <span
                  style={{
                    fontSize: "clamp(32px, 4.5vw, 56px)",
                    lineHeight: 1,
                    opacity: 0.75,
                  }}
                >
                  ⚡
                </span>
                <span
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "clamp(48px, 7vw, 88px)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "#d4772c",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Scalability
                </span>
              </motion.div>

              {/* Word 3 — Intention equivalent: "Performance" */}
              <motion.h1
                {...fadeUp(0.6)}
                className="relative"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(48px, 7vw, 88px)",
                  fontWeight: 400,
                  color: "#1a1a1a",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Performance

                {/* Floating decorative dot — like in reference, near the right */}
                <motion.span
                  className="absolute"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#4a4a4a",
                    opacity: 0.35,
                    right: "-20px",
                    top: "15px",
                  }}
                  animate={{
                    opacity: [0.25, 0.5, 0.25],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.h1>
            </div>

            {/* Brief description — subtle, below the big words */}
            <motion.p
              {...fadeIn(0.75)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "#888",
                lineHeight: 1.7,
                maxWidth: "420px",
                marginTop: "32px",
              }}
            >
              Building robust, scalable web applications with the MERN stack.
              Passionate about clean code, seamless user experience, and turning ideas into
              impactful digital products.
            </motion.p>

            {/* CTA Buttons — minimal, matching the aesthetic */}
            <motion.div
              {...fadeUp(0.85)}
              className="flex flex-wrap items-center gap-4 mt-6"
            >
              <button
                onClick={props.onClickContact}
                className="cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#f5f0e8",
                  backgroundColor: "#1a1a1a",
                  border: "none",
                  borderRadius: "50px",
                  padding: "12px 28px",
                  letterSpacing: "0.02em",
                }}
              >
                Say Hello
              </button>
              <a
                href="https://docs.google.com/document/d/1sh3prDiykcmYL0LLwXZNYbQcyoXgKeHi2umn5qfGJsA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#4a4a4a",
                  border: "1px solid #bbb",
                  borderRadius: "50px",
                  padding: "12px 28px",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
              >
                View Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
});

export default Hero;
