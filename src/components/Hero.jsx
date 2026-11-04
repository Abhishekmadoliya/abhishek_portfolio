import { forwardRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, ExternalLink, Sparkles, ArrowUpRight, Eye } from "lucide-react";
import logo from "../assets/profile.jpeg";
import resumePdf from "../assets/abhishek_madoliya_resume.pdf";

const Hero = forwardRef(({ onClickContact, onClickProjects, onOpenResume }, ref) => {
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
      id="about"
      className="min-h-screen relative flex flex-col justify-between"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#d4772c]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#4a7c59]/5 blur-3xl pointer-events-none" />

      {/* Main content area — two-column grid */}
      <div
        className="max-w-[1180px] w-full mx-auto px-6 md:px-12 lg:px-16"
        style={{ paddingTop: "135px" }}
      >
        {/* Top Badges */}
        <motion.div
          {...fadeUp(0.05)}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#e0dbd1] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[12px] font-semibold text-[#1a1a1a] tracking-tight"
            >
              Available for Projects & Consulting
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#d4772c]/10 border border-[#d4772c]/20 text-[#d4772c]">
            <Sparkles size={13} />
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[12px] font-semibold tracking-tight"
            >
              Founder @ Cloudvyn & TaxSolver
            </span>
          </div>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.25fr] gap-x-12 lg:gap-x-16 items-start">
          {/* ======== LEFT COLUMN ======== */}
          <div className="flex flex-col items-start">
            {/* Greeting */}
            <motion.p
              {...fadeUp(0.1)}
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "28px",
                fontWeight: 600,
                color: "#1a1a1a",
                lineHeight: 1.2,
              }}
            >
              Hi, I'm Abhishek Madoliya
            </motion.p>

            {/* Sub-tagline */}
            <motion.p
              {...fadeUp(0.18)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: "#777",
                marginTop: "4px",
              }}
            >
              AI Full Stack Engineer • Builder • Service Provider
            </motion.p>

            {/* Decorative stroke */}
            <motion.div {...fadeIn(0.25)} className="mt-2 mb-3">
              <svg width="24" height="34" viewBox="0 0 24 34" fill="none">
                <path
                  d="M16 2 C14 12, 4 16, 8 32"
                  stroke="#d4772c"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Profile Flip Card with Click to View Resume Section */}
            <motion.div
              {...fadeUp(0.25)}
              onClick={onOpenResume}
              title="Click to view full resume section"
              className="relative mt-1 group [perspective:1400px] cursor-pointer z-10 w-full max-w-[320px]"
              style={{
                height: "clamp(300px, 36vw, 400px)",
              }}
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side: Profile Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl [backface-visibility:hidden] shadow-xl ring-1 ring-black/5 bg-[#e8e2d5]">
                  <img
                    src={logo}
                    alt="Abhishek Madoliya"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "contrast(1.04)" }}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs font-semibold tracking-wide">Abhishek Madoliya</p>
                      <p className="text-[11px] text-white/80">New Delhi, India</p>
                    </div>
                    <div className="bg-[#d4772c] hover:bg-white hover:text-[#1a1a1a] px-3 py-1 rounded-full text-white text-[10px] font-bold tracking-wider uppercase border border-white/30 shadow-md transition-colors flex items-center gap-1">
                      Click for Resume ↗
                    </div>
                  </div>
                </div>

                {/* Back Side: Resume Preview */}
                <div className="absolute inset-0 w-full h-full bg-[#fdfdfd] rounded-3xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#e0dbd1] shadow-2xl flex flex-col justify-between">
                  {/* Top Bar for PDF */}
                  <div className="w-full h-9 bg-[#f5f0e8] border-b border-[#e0dbd1] flex items-center justify-between px-3 z-10">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <span className="text-[10px] font-bold text-[#d4772c] uppercase tracking-wider">
                      Resume Preview
                    </span>
                  </div>

                  <div className="flex-1 w-full relative">
                    <iframe
                      src={`${resumePdf}#toolbar=0&view=FitW&navpanes=0`}
                      className="w-full h-full border-none pointer-events-none"
                      title="Abhishek Madoliya Resume"
                    />
                  </div>

                  {/* Big Click-to-Expand Overlay */}
                  <div className="p-3 bg-white border-t border-[#e0dbd1] flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-[#d4772c] flex items-center gap-1">
                      <Eye size={12} /> Click to expand section
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#1a1a1a] text-white text-[10px] font-semibold">
                      Open Full View ↗
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ======== RIGHT COLUMN ======== */}
          <div className="flex flex-col items-start mt-8 md:mt-0">
            {/* Tagline */}
            <motion.p {...fadeUp(0.15)} style={{ lineHeight: 1.4 }}>
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "26px",
                  fontWeight: 600,
                  color: "#d4772c",
                }}
              >
                Full-Stack Engineer & Founder
              </span>
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "26px",
                  fontWeight: 500,
                  color: "#3a3a3a",
                  marginLeft: "8px",
                }}
              >
                crafting with
              </span>
            </motion.p>

            {/* Big Stacked Serif Typography */}
            <div className="flex flex-col mt-4" style={{ gap: "2px" }}>
              <motion.h1
                {...fadeUp(0.28)}
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(46px, 6.8vw, 84px)",
                  fontWeight: 400,
                  color: "#1a1a1a",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Innovation
              </motion.h1>

              <motion.div
                {...fadeUp(0.4)}
                className="flex items-center"
                style={{ gap: "10px" }}
              >
                <span
                  style={{
                    fontSize: "clamp(32px, 4.5vw, 54px)",
                    lineHeight: 1,
                  }}
                  className="animate-pulse"
                >
                  ⚡
                </span>
                <span
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "clamp(46px, 6.8vw, 84px)",
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

              <motion.h1
                {...fadeUp(0.52)}
                className="relative"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(46px, 6.8vw, 84px)",
                  fontWeight: 400,
                  color: "#1a1a1a",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Performance
                {/* Floating dot */}
                <motion.span
                  className="absolute"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#d4772c",
                    right: "-18px",
                    top: "16px",
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              {...fadeIn(0.65)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                color: "#666",
                lineHeight: 1.75,
                maxWidth: "480px",
                marginTop: "24px",
              }}
            >
              I architect and ship modern full-stack web applications, custom AI agents,
              and intelligent automations. From real-time WebRTC voice pipelines at{" "}
              <strong className="text-[#1a1a1a] font-semibold">Cloudvyn</strong> to
              tax reconciliation RAG systems at{" "}
              <strong className="text-[#1a1a1a] font-semibold">TaxSolver</strong>, I turn complex ideas into robust, production-ready software.
            </motion.p>

            {/* Quick Metrics Bar */}
            <motion.div
              {...fadeUp(0.75)}
              className="grid grid-cols-3 gap-4 w-full max-w-[460px] mt-6 py-4 px-5 rounded-2xl bg-white/70 border border-[#e0dbd1]/80 shadow-xs"
            >
              <div>
                <p
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                  className="text-2xl font-normal text-[#1a1a1a]"
                >
                  3+
                </p>
                <p className="text-[11px] font-medium text-[#777] uppercase tracking-wider">
                  Shipped SaaS
                </p>
              </div>
              <div className="border-x border-[#e0dbd1] px-4">
                <p
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                  className="text-2xl font-normal text-[#d4772c]"
                >
                  600+
                </p>
                <p className="text-[11px] font-medium text-[#777] uppercase tracking-wider">
                  Users & Candidates
                </p>
              </div>
              <div>
                <p
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                  className="text-2xl font-normal text-[#1a1a1a]"
                >
                  100%
                </p>
                <p className="text-[11px] font-medium text-[#777] uppercase tracking-wider">
                  Production Delivery
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.85)}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <button
                onClick={onClickContact}
                className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-[#1a1a1a] hover:bg-[#d4772c] text-[#f5f0e8] px-7 py-3 rounded-full text-[14px] font-medium tracking-wide flex items-center gap-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Let's Talk Business
              </button>

              <button
                onClick={onClickProjects}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 border border-[#1a1a1a]/30 hover:border-[#d4772c] hover:text-[#d4772c] text-[#1a1a1a] px-6 py-3 rounded-full text-[14px] font-medium tracking-wide flex items-center gap-2 bg-transparent"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                View Works <ArrowDown size={14} />
              </button>

              <button
                onClick={onOpenResume}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 bg-[#d4772c]/10 hover:bg-[#d4772c] text-[#d4772c] hover:text-white border border-[#d4772c]/30 px-6 py-3 rounded-full text-[14px] font-semibold tracking-wide flex items-center gap-1.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                View Resume <ArrowUpRight size={14} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="w-full flex justify-center pb-8 pt-12">
        <button
          onClick={onClickProjects}
          className="group flex flex-col items-center gap-2 text-[#888] hover:text-[#d4772c] transition-colors cursor-pointer"
          aria-label="Scroll to projects"
        >
          <span
            style={{ fontFamily: "'Caveat', cursive", fontSize: "16px" }}
            className="tracking-wide"
          >
            Explore selected works
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-[#1a1a1a]/20 group-hover:border-[#d4772c] flex items-start justify-center p-1 transition-colors">
            <motion.div
              className="w-1.5 h-2.5 rounded-full bg-[#d4772c]"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </button>
      </div>
    </section>
  );
});

export default Hero;
