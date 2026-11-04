import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  FileDown,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  CheckCircle2,
  FileText,
  Eye,
  Sparkles,
  GraduationCap,
  Briefcase,
  Code2,
  Cpu,
} from "lucide-react";
import resumePdf from "../assets/abhishek_madoliya_resume.pdf";

const ResumeSection = ({ onBack }) => {
  const [viewMode, setViewMode] = useState("document"); // "document" | "pdf"

  // Keyboard shortcut: Escape returns to portfolio
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onBack();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onBack]);

  const googleDocUrl =
    "https://docs.google.com/document/d/1sh3prDiykcmYL0LLwXZNYbQcyoXgKeHi2umn5qfGJsA/edit?usp=sharing";

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen py-24 md:py-28 relative"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Top Floating Control Bar */}
        <div className="sticky top-20 z-30 mb-8 p-3.5 md:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#e0dbd1] shadow-md flex flex-wrap items-center justify-between gap-4">
          {/* Back button */}
          <button
            onClick={onBack}
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] hover:bg-[#d4772c] text-white text-xs font-semibold transition-all duration-300 shadow-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </button>

          {/* Mode toggle (Document vs PDF) */}
          <div className="flex items-center p-1 rounded-full bg-[#f5f0e8] border border-[#e0dbd1] text-xs font-semibold">
            <button
              onClick={() => setViewMode("document")}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === "document"
                  ? "bg-white text-[#1a1a1a] shadow-xs"
                  : "text-[#666] hover:text-[#1a1a1a]"
              }`}
            >
              Document View
            </button>
            <button
              onClick={() => setViewMode("pdf")}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === "pdf"
                  ? "bg-white text-[#1a1a1a] shadow-xs"
                  : "text-[#666] hover:text-[#1a1a1a]"
              }`}
            >
              PDF Viewer
            </button>
          </div>

          {/* External Actions */}
          <div className="flex items-center gap-2">
            <a
              href={resumePdf}
              download="Abhishek_Madoliya_Resume.pdf"
              className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#f5f0e8] text-[#1a1a1a] text-xs font-semibold border border-[#e0dbd1] transition-colors shadow-2xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <FileDown size={13} className="text-[#d4772c]" /> Download PDF
            </a>

            <a
              href={googleDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#f5f0e8] text-[#1a1a1a] text-xs font-semibold border border-[#e0dbd1] transition-colors shadow-2xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Google Doc <ExternalLink size={12} className="text-[#888]" />
            </a>
          </div>
        </div>

        {/* ============================================================== */}
        {/* VIEW 1: HIGH-FIDELITY EDITORIAL DOCUMENT VIEW                  */}
        {/* ============================================================== */}
        {viewMode === "document" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#e0dbd1] shadow-lg text-[#1a1a1a]">
            {/* Header / Name & Contact Info */}
            <div className="text-center pb-8 border-b border-[#e0dbd1]">
              <span className="text-[11px] font-bold text-[#d4772c] uppercase tracking-widest block mb-1">
                Curriculum Vitae
              </span>
              <h1
                style={{ fontFamily: "'DM Serif Display', serif" }}
                className="text-4xl sm:text-5xl md:text-6xl text-[#1a1a1a] font-normal tracking-tight"
              >
                ABHISHEK MADOLIYA
              </h1>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-lg font-semibold text-[#d4772c] mt-1"
              >
                AI Full Stack Engineer & Founder
              </p>

              {/* Contact meta row */}
              <div
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs text-[#555] mt-4 font-medium"
              >
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#d4772c]" /> Badarpur, New Delhi 110044
                </span>
                <span className="text-[#ccc] hidden sm:inline">•</span>
                <a
                  href="tel:+919310069214"
                  className="flex items-center gap-1.5 hover:text-[#d4772c] transition-colors"
                >
                  <Phone size={13} className="text-[#d4772c]" /> +91 9310069214
                </a>
                <span className="text-[#ccc] hidden sm:inline">•</span>
                <a
                  href="mailto:abhishekmadoliya@gmail.com"
                  className="flex items-center gap-1.5 hover:text-[#d4772c] transition-colors"
                >
                  <Mail size={13} className="text-[#d4772c]" /> abhishekmadoliya@gmail.com
                </a>
              </div>

              {/* Links */}
              <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-[#1a1a1a] mt-3">
                <a
                  href="https://www.linkedin.com/in/abhishek-madoliya-540847273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#0077b5] hover:underline"
                >
                  <Linkedin size={13} /> LinkedIn
                </a>
                <span className="text-[#ccc]">•</span>
                <a
                  href="https://github.com/Abhishekmadoliya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#d4772c] transition-colors"
                >
                  <Github size={13} /> GitHub
                </a>
                <span className="text-[#ccc]">•</span>
                <span className="inline-flex items-center gap-1 text-[#d4772c]">
                  <Globe size={13} /> Portfolio
                </span>
              </div>
            </div>

            {/* Section: SUMMARY */}
            <div className="py-8 border-b border-[#e0dbd1]">
              <h2
                style={{ fontFamily: "'DM Serif Display', serif" }}
                className="text-xl font-normal text-[#1a1a1a] uppercase tracking-wider mb-3 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#d4772c]" /> Executive Summary
              </h2>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[14.5px] text-[#444] leading-relaxed"
              >
                Full Stack Engineer with 1+ years of production experience building MERN and AI
                powered applications. Shipped three LLM products end to end:{" "}
                <strong className="text-[#1a1a1a] font-semibold">Cloudvyn</strong> (AI interview
                prep, 600+ registered candidates),{" "}
                <strong className="text-[#1a1a1a] font-semibold">TaxSolver</strong> (GST
                reconciliation with a RAG-based AI agent) and{" "}
                <strong className="text-[#1a1a1a] font-semibold">SketchLoop AI</strong>{" "}
                (prompt-to-code platform). Strong in Next.js, Node.js, FastAPI, LangChain, OpenAI
                API, vector search, real-time systems (WebRTC, Socket.io) and cloud deployment
                (AWS, GCP, Docker).
              </p>
            </div>

            {/* Section: SKILLS */}
            <div className="py-8 border-b border-[#e0dbd1]">
              <h2
                style={{ fontFamily: "'DM Serif Display', serif" }}
                className="text-xl font-normal text-[#1a1a1a] uppercase tracking-wider mb-4 flex items-center gap-2"
              >
                <Cpu size={18} className="text-[#d4772c]" /> Technical Competencies
              </h2>

              <div
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs"
              >
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e0dbd1]">
                  <p className="font-bold uppercase tracking-wider text-[#d4772c] text-[11px] mb-1.5">
                    AI / LLM & Real-Time
                  </p>
                  <p className="text-[#444] leading-relaxed">
                    LangChain, OpenAI API, RAG, Vector Search, Multi-Agent Systems, Deepgram Nova-3,
                    WebRTC Audio, Prompt Engineering, Stable Diffusion / FLUX
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e0dbd1]">
                  <p className="font-bold uppercase tracking-wider text-[#d4772c] text-[11px] mb-1.5">
                    Frontend Engineering
                  </p>
                  <p className="text-[#444] leading-relaxed">
                    React.js, Next.js (SSR / App Router), TypeScript, JavaScript (ES6+), Redux
                    Toolkit, Tailwind CSS, HTML5, CSS3, Framer Motion
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e0dbd1]">
                  <p className="font-bold uppercase tracking-wider text-[#d4772c] text-[11px] mb-1.5">
                    Backend & Queues
                  </p>
                  <p className="text-[#444] leading-relaxed">
                    Node.js, Bun, Express.js, FastAPI, Python, REST APIs, Socket.io, BullMQ, Redis
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e0dbd1]">
                  <p className="font-bold uppercase tracking-wider text-[#d4772c] text-[11px] mb-1.5">
                    Databases & Cloud DevOps
                  </p>
                  <p className="text-[#444] leading-relaxed">
                    MongoDB Atlas Vector Search, PostgreSQL, MySQL, Redis, Docker, AWS (EC2), GCP,
                    Nginx, Linux VPS, Git, GitHub, Vercel, n8n
                  </p>
                </div>
              </div>
            </div>

            {/* Section: PROJECTS */}
            <div className="py-8 border-b border-[#e0dbd1]">
              <h2
                style={{ fontFamily: "'DM Serif Display', serif" }}
                className="text-xl font-normal text-[#1a1a1a] uppercase tracking-wider mb-6 flex items-center gap-2"
              >
                <Sparkles size={18} className="text-[#d4772c]" /> Selected Projects & Ventures
              </h2>

              <div className="space-y-8">
                {/* Cloudvyn */}
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                      className="text-xl text-[#1a1a1a]"
                    >
                      Cloudvyn <span className="font-normal text-sm text-[#777] font-sans">| Founder & Lead Engineer</span>
                    </h3>
                    <a
                      href="https://cloudvyn.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#d4772c] hover:underline"
                    >
                      cloudvyn.com ↗
                    </a>
                  </div>
                  <p className="text-xs font-semibold text-[#666] mb-2">
                    AI interview and group discussion prep platform for Indian freshers, with Hindi and English support.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#444] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Architected and launched the platform solo, growing to <strong>600+ registered candidates</strong>, <strong>450+ completed AI interview sessions</strong>, and <strong>50+ multiplayer AI-agent GD simulations</strong>.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Built a real-time voice interview pipeline with WebRTC, Deepgram Nova-3 speech-to-text with voice activity detection for hands-free flow, and Cloudflare Workers AI text-to-speech.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Designed a multi-agent GD simulator with distinct personas and urgency-scored turn taking, orchestrated over Socket.io.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Implemented Razorpay subscriptions with entitlement middleware and BullMQ cron jobs for grace-period downgrades and free-tier resets.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Deployed the Node/Express backend on AWS EC2; fixed client-side rendering bottlenecks blocking Google indexing by separating the SSR Next.js marketing site from the React client app.
                      </span>
                    </li>
                  </ul>
                  <p className="text-[11px] font-semibold text-[#888] mt-2">
                    Tech: Next.js, React, Node.js, Bun, FastAPI, LangChain, OpenAI API, WebRTC, Socket.io, MongoDB, BullMQ, AWS
                  </p>
                </div>

                {/* TaxSolver */}
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                      className="text-xl text-[#1a1a1a]"
                    >
                      TaxSolver <span className="font-normal text-sm text-[#777] font-sans">| Founder & Developer</span>
                    </h3>
                    <a
                      href="https://taxsolver.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#d4772c] hover:underline"
                    >
                      taxsolver.in ↗
                    </a>
                  </div>
                  <p className="text-xs font-semibold text-[#666] mb-2">
                    GST reconciliation SaaS for CA firms and small businesses across India.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#444] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Built a high-speed GSTR-2B reconciliation engine using O(n) Map-based matching with a Fuse.js fuzzy fallback and paise-normalized amounts to eliminate rounding discrepancies.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Developed a RAG pipeline over official CBIC circulars using MongoDB Atlas Vector Search and Voyage AI embeddings, powering an AI legal agent with tools for GST rule search and GSTIN verification.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Integrated the Sandbox.co.in GSP API to securely fetch live GSTR-2B data directly from government portals; published 10+ SEO articles on GST topics to drive organic traffic.
                      </span>
                    </li>
                  </ul>
                  <p className="text-[11px] font-semibold text-[#888] mt-2">
                    Tech: Node.js, MongoDB Atlas Vector Search, Voyage AI, Fuse.js, RAG, Express, Sandbox API
                  </p>
                </div>

                {/* SketchLoop AI */}
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                      className="text-xl text-[#1a1a1a]"
                    >
                      SketchLoop AI <span className="font-normal text-sm text-[#777] font-sans">| Lead Developer</span>
                    </h3>
                    <a
                      href="https://deving-plum.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#d4772c] hover:underline"
                    >
                      deving-plum.vercel.app ↗
                    </a>
                  </div>
                  <p className="text-xs font-semibold text-[#666] mb-2">
                    Prompt-to-design-to-code platform that turns a text idea into a deployable web app.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#444] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Architected an end-to-end pipeline converting natural-language prompts into UI designs and production-ready React and Node.js code.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Built a LangChain prompt-refinement layer that turns vague input into structured design specs; integrated FLUX/Stable Diffusion for UI generation.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Designed an asynchronous job architecture with Redis and BullMQ for long-running generation tasks; containerized with Docker and deployed on GCP.
                      </span>
                    </li>
                  </ul>
                  <p className="text-[11px] font-semibold text-[#888] mt-2">
                    Tech: Next.js, React, Node.js, Redis, BullMQ, LangChain, Stable Diffusion, MongoDB, Docker, GCP
                  </p>
                </div>

                {/* Open Source */}
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                      className="text-xl text-[#1a1a1a]"
                    >
                      openCMS Suite <span className="font-normal text-sm text-[#777] font-sans">| Open Source Contributor</span>
                    </h3>
                    <a
                      href="https://github.com/opencollective-dev/openCMS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#d4772c] hover:underline"
                    >
                      github.com/opencollective-dev/openCMS ↗
                    </a>
                  </div>
                  <p className="text-xs text-[#444] leading-relaxed">
                    Contributor to openCMS, part of a self-hosted open-source suite (openCRM, openCMS, openChat) built with the Open Collective Dev community.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: EXPERIENCE */}
            <div className="py-8 border-b border-[#e0dbd1]">
              <h2
                style={{ fontFamily: "'DM Serif Display', serif" }}
                className="text-xl font-normal text-[#1a1a1a] uppercase tracking-wider mb-6 flex items-center gap-2"
              >
                <Briefcase size={18} className="text-[#d4772c]" /> Professional Experience
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                      className="text-xl text-[#1a1a1a]"
                    >
                      Full Stack Developer <span className="font-normal text-sm text-[#777] font-sans">| TechThaastu Pvt. Ltd.</span>
                    </h3>
                    <span className="text-xs font-semibold text-[#d4772c]">
                      Oct 2025 – Present
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#444] leading-relaxed mt-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Built MERN applications with a reusable React and Tailwind CSS component library, improving page load performance by 20%.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Designed REST APIs for authentication, user management and data processing; optimized MongoDB queries, cutting API response time by 25%.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Shipped LLM-powered content generation and intelligent search using OpenAI and LangChain, saving 20 seconds of manual processing per request.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                      <span>
                        Debugged production issues and delivered fixes through Git/GitHub and Agile sprints, improving system reliability.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                      className="text-xl text-[#1a1a1a]"
                    >
                      MERN Stack Developer Intern <span className="font-normal text-sm text-[#777] font-sans">| GeeksforGeeks</span>
                    </h3>
                    <span className="text-xs font-semibold text-[#888]">
                      Feb 2025 – May 2025
                    </span>
                  </div>
                  <p className="text-xs text-[#444] leading-relaxed mt-1">
                    Built a full-featured MERN e-commerce application with JWT authentication, Redux/Context state management and third-party API integrations.{" "}
                    <a
                      href="https://media.geeksforgeeks.org/certificates/1746014012/a80f3b13487420018649c5fed1f0d7ec.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d4772c] font-semibold hover:underline"
                    >
                      [View Certificate ↗]
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Section: EDUCATION */}
            <div className="pt-8">
              <h2
                style={{ fontFamily: "'DM Serif Display', serif" }}
                className="text-xl font-normal text-[#1a1a1a] uppercase tracking-wider mb-4 flex items-center gap-2"
              >
                <GraduationCap size={18} className="text-[#d4772c]" /> Education & Credentials
              </h2>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                    className="text-xl text-[#1a1a1a]"
                  >
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-xs text-[#666] mt-0.5">
                    Indira Gandhi National Open University (IGNOU)
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#1a1a1a]">Graduating 2026</span>
                  <span className="block text-xs text-[#d4772c] font-semibold">CGPA: 7.13</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: NATIVE PDF EMBED VIEWER                                */}
        {/* ============================================================== */}
        {viewMode === "pdf" && (
          <div className="bg-white rounded-3xl overflow-hidden border border-[#e0dbd1] shadow-2xl h-[85vh] flex flex-col">
            <div className="px-6 py-3 bg-[#f5f0e8] border-b border-[#e0dbd1] flex items-center justify-between">
              <span className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider">
                Abhishek_Madoliya_Resume.pdf
              </span>
              <a
                href={resumePdf}
                download="Abhishek_Madoliya_Resume.pdf"
                className="text-xs font-semibold text-[#d4772c] hover:underline flex items-center gap-1"
              >
                <FileDown size={14} /> Download PDF
              </a>
            </div>
            <div className="flex-1 w-full h-full relative">
              <iframe
                src={`${resumePdf}#toolbar=1&view=FitH`}
                className="w-full h-full border-none"
                title="Abhishek Madoliya Resume PDF"
              />
            </div>
          </div>
        )}

        {/* Bottom Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1a1a1a] hover:bg-[#d4772c] text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <ArrowLeft size={16} /> Return to Portfolio
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ResumeSection;

