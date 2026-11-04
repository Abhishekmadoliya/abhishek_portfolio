import { forwardRef, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Laptop,
  Smartphone,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Layers,
  Cpu,
  CheckCircle2,
  Lock,
  Globe,
  Radio,
  FileCode2,
  Workflow,
  Server,
  Database,
  Rocket,
  ShieldAlert,
} from "lucide-react";

import fileshareimg from "../assets/14-Best-File-Sharing-Apps-for-Bu.jpg";
import ecoming from "../assets/84_ecommerce.webp";
import re_pdf from "../assets/pdfresearch.jpeg";

const projects = [
  {
    id: "cloudvyn",
    title: "Cloudvyn AI",
    tagline: "AI Mock Interview & Multiplayer Group Discussion Platform",
    site: "cloudvyn.com",
    year: "2025 – 2026",
    role: "Founder & Lead Engineer",
    categories: ["AI & SaaS", "Realtime Voice"],
    filterCategory: "ai",
    platforms: ["desktop", "mobile"],
    status: "Live in Production",
    metrics: "600+ Candidates • 450+ Sessions • 50+ GDs",
    link: "https://cloudvyn.com/",
    github: "https://github.com/Abhishekmadoliya/cloudvyn-ai-interview",
    image: fileshareimg,
    themeColor: "#2563eb",
    bgColor: "#eff6ff",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    description:
      "Full-featured AI interview preparation platform built for Indian freshers with Hindi & English voice support, real-time behavioral feedback, and multiplayer agent GD simulations.",
    overview:
      "Cloudvyn was born to solve a critical problem for job aspirants in India: the acute lack of affordable, real-time interview practice with realistic conversational feedback. Abhishek architected and shipped the platform solo from ground zero, scaling it to 600+ registered candidates.",
    summary:
      "Features a real-time WebRTC audio pipeline, Deepgram Nova-3 speech-to-text with Voice Activity Detection (VAD) for natural hands-free turn-taking, Cloudflare Workers AI TTS, and an urgency-scored multi-agent GD simulator orchestrated over Socket.io.",
    myPart: [
      "WebRTC & Deepgram Nova-3 voice streaming with hands-free Voice Activity Detection",
      "Multi-agent GD simulator with distinct personas & urgency-scored turn arbitration",
      "Razorpay subscriptions with entitlement middleware & BullMQ cron downgrade workers",
      "AWS EC2 backend deployment + Next.js SSR SEO architecture separating marketing from SPA",
    ],
    impact:
      "Scaled to 600+ registered candidates, 450+ completed interview sessions, and 50+ group discussion simulations with automated performance scoring.",
    architecture: {
      client: "Next.js SSR marketing front + React.js SPA candidate console with Tailwind CSS",
      realtime: "WebRTC audio stream, Deepgram Nova-3 STT with VAD, Cloudflare Workers TTS, Socket.io",
      backend: "Node.js, Express, Bun, FastAPI, LangChain, OpenAI API",
      databaseQueue: "MongoDB Atlas, Redis, BullMQ for scheduled entitlement resets & grace periods",
      hosting: "AWS EC2, Nginx reverse proxy, Docker, Cloudflare DNS & SSL",
    },
    keyHighlights: [
      "Real-time voice latency optimized under 400ms for natural conversation without audio stutter.",
      "Urgency-scored algorithm prevents AI agents from interrupting each other in multi-agent GDs.",
      "Entitlement middleware enforces subscription tiers with zero feature leakage.",
      "Separated SSR Next.js marketing site from client-side React app to fix Google indexing bottlenecks.",
    ],
  },
  {
    id: "taxsolver",
    title: "TaxSolver",
    tagline: "Automated GST Reconciliation SaaS & FinTech AI Agent",
    site: "taxsolver.in",
    year: "2025 – 2026",
    role: "Founder & Full-Stack Developer",
    categories: ["FinTech & RAG", "AI & SaaS"],
    filterCategory: "fintech",
    platforms: ["desktop", "mobile"],
    status: "Live in Production",
    metrics: "O(n) Matching • Paise-Normalized • RAG Agent",
    link: "https://taxsolver.in/",
    github: "https://github.com/Abhishekmadoliya",
    image: re_pdf,
    themeColor: "#0d9488",
    bgColor: "#f0fdfa",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    description:
      "GST reconciliation SaaS engineered for Chartered Accountant (CA) firms and SMBs with automated government portal sync and RAG legal research.",
    overview:
      "CA firms across India waste days manually comparing massive GSTR-2B government ledgers with client purchase registers. TaxSolver eliminates this painful manual bottleneck with an instantaneous O(n) Map-based matching engine and an intelligent legal assistant.",
    summary:
      "Replaces days of manual GSTR-2B Excel reconciliation with an instantaneous O(n) Map-based engine. Includes a CBIC circular RAG agent powered by MongoDB Atlas Vector Search and Voyage AI embeddings, plus live government GSP API integration.",
    myPart: [
      "Engineered high-speed GSTR-2B reconciliation engine with paise-normalization",
      "Fuse.js fuzzy fallback matcher for vendor invoice discrepancy resolution",
      "RAG pipeline over CBIC GST circulars with Voyage AI embeddings & MongoDB Vector Search",
      "Sandbox.co.in GSP API integration for direct GSTR-2B sync from tax portals",
    ],
    impact:
      "Automated reconciliation for thousands of vendor line-items from hours down to seconds, resolving invoice mismatches with 100% mathematical precision.",
    architecture: {
      client: "React.js, Tailwind CSS, Lucide icons, Vite client dashboard with export to Excel",
      engine: "Paise-normalized numeric parsing, O(n) Map indexer + Fuse.js fuzzy fallback",
      ragAgent: "Voyage AI embeddings, MongoDB Atlas Vector Search, LangChain GST tools",
      backend: "Node.js, Express.js, Sandbox.co.in GSP API, Razorpay billing",
      hosting: "VPS/Linux, Docker, Nginx, automated backup cron jobs",
    },
    keyHighlights: [
      "Paise-normalized arithmetic completely eliminates floating-point reconciliation rounding errors.",
      "Interactive AI Agent answers complex GST classification questions with official circular citations.",
      "Direct integration with Sandbox.co.in GSP API enables 1-click ledger pulls.",
      "10+ published in-depth GST guides driving organic CA firm discovery across India.",
    ],
  },
  {
    id: "minimalreader",
    title: "MinimalReader",
    tagline: "Distraction-Free Fast Modern Editorial Reading Platform",
    site: "minimalreader.pages.dev",
    year: "2025 – 2026",
    role: "Creator & Developer",
    categories: ["Web & Open Source", "Minimal UI"],
    filterCategory: "web",
    platforms: ["desktop", "mobile"],
    status: "Live on Cloudflare Edge",
    metrics: "100 Lighthouse • Sub-50ms • Zero Clutter",
    link: "https://minimalreader.pages.dev/",
    github: "https://github.com/Abhishekmadoliya/minimalreader",
    image: ecoming,
    themeColor: "#334155",
    bgColor: "#f8fafc",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
    description:
      "Ultra-clean, distraction-free reading experience stripping digital noise and offering optimal typographic hierarchy and instant offline caching.",
    overview:
      "Modern web content is plagued by ads, tracking scripts, and visual clutter. MinimalReader is a purist reading sanctuary delivering beautiful editorial typography, instant page loads, and distraction-free content consumption.",
    summary:
      "Designed for readers and researchers who crave pure focus. Employs responsive modern layout techniques, high-contrast readable serif typography, client-side caching, and sub-50ms global edge delivery.",
    myPart: [
      "Curated typography and distraction-free responsive reading UI",
      "Offline-first client caching and instantaneous page rendering",
      "Cloudflare Pages edge deployment with automated CI/CD",
      "Lightweight accessible DOM hierarchy with zero bloat",
    ],
    impact:
      "Achieved a perfect 100/100 score across all Google Lighthouse metrics with zero advertising, zero trackers, and pure reading comfort.",
    architecture: {
      client: "Modern Responsive React / Vanilla DOM, Tailwind CSS typography",
      caching: "Offline-first Cache API and localStorage reading state sync",
      deployment: "Cloudflare Pages global edge CDN with automated Git triggers",
    },
    keyHighlights: [
      "Sub-50ms time to first byte across global edge nodes.",
      "Custom reading modes with dynamic font scaling, contrast, and progress memory.",
      "100% responsive fluid layout tailored for handheld and wide-screen reading.",
    ],
  },
  {
    id: "sketchloop",
    title: "SketchLoop AI",
    tagline: "Prompt-to-Design-to-Code Autonomous Web App Generator",
    site: "deving-plum.vercel.app",
    year: "2025",
    role: "Lead Developer",
    categories: ["AI & SaaS", "Generative Code"],
    filterCategory: "ai",
    platforms: ["desktop", "mobile"],
    status: "Deployed Demo",
    metrics: "Prompt-to-React • BullMQ Workers • Docker GCP",
    link: "https://deving-plum.vercel.app/",
    github: "https://github.com/Abhishekmadoliya",
    image: fileshareimg,
    themeColor: "#7c3aed",
    bgColor: "#faf5ff",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    description:
      "Generative developer tool that turns plain English prompts into production-ready UI designs and downloadable React & Node.js codebases.",
    overview:
      "Turning an idea into code is slow and fragmented. SketchLoop AI bridges the gap between natural language prompts and functional React/Node code through structured multi-stage LLM generation.",
    summary:
      "Features a LangChain prompt refinement engine that enriches user prompts into structured specs, integrates FLUX/Stable Diffusion for UI generation, and executes async code synthesis via Redis & BullMQ.",
    myPart: [
      "Architected prompt-to-code pipeline with LangChain & OpenAI",
      "Integrated FLUX/Stable Diffusion generative design models",
      "Designed async worker architecture with Redis & BullMQ for heavy generation",
      "Containerized backend with Docker and deployed on GCP Cloud Run",
    ],
    impact:
      "Enables rapid prototyping of full web apps in under 60 seconds with modular component breakdown and production file structure.",
    architecture: {
      client: "Next.js, Tailwind CSS, Monaco code editor, dynamic preview iframe",
      workerQueue: "Redis, BullMQ distributed background worker architecture",
      aiEngine: "LangChain spec refinement, FLUX/SD image synthesis, OpenAI code generator",
      cloud: "Docker container, Google Cloud Platform (GCP), Vercel frontend",
    },
    keyHighlights: [
      "Structured JSON schema constraints ensure generated React code compiles without syntax errors.",
      "Queue workers prevent HTTP request timeouts on compute-heavy multi-step generations.",
      "Automated zip packaging allowing developers to immediately run `npm install && npm run dev` locally.",
    ],
  },
  {
    id: "opencms",
    title: "openCMS Suite",
    tagline: "Self-Hosted Open Source Modular CMS by Open Collective Dev",
    site: "github.com/opencollective-dev/openCMS",
    year: "2025",
    role: "Open Source Contributor",
    categories: ["Web & Open Source", "Community"],
    filterCategory: "web",
    platforms: ["desktop"],
    status: "Active Open Source",
    metrics: "Self-Hosted • Modular CMS • MIT License",
    link: "https://github.com/opencollective-dev/openCMS",
    github: "https://github.com/opencollective-dev/openCMS",
    image: re_pdf,
    themeColor: "#ea580c",
    bgColor: "#fff7ed",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    description:
      "Part of the community-driven open-source suite (openCRM, openCMS, openChat) empowering developers with complete data sovereignty.",
    overview:
      "Proprietary SaaS CMS solutions lock users into recurring fee structures. openCMS provides a developer-first, self-hostable alternative with total database control and modular plugin extensibility.",
    summary:
      "Contributed to modular content authoring endpoints, schema-flexible collection builders, and modern dashboard UI components for developer self-hosting.",
    myPart: [
      "Contributed modular backend endpoints and authentication workflows",
      "Built reusable responsive dashboard UI components",
      "Participated in pull request reviews and architectural discussions",
    ],
    impact:
      "Strengthened the open-source self-hosted alternative to proprietary headless CMS platforms with privacy-focused architecture.",
    architecture: {
      client: "React.js, Tailwind CSS, modern responsive data tables",
      backend: "Node.js, Express, MongoDB / PostgreSQL schema drivers",
      distribution: "GitHub open source repository with community issue tracker",
    },
    keyHighlights: [
      "100% self-hostable with Docker Compose.",
      "Extensible hook and plugin system for third-party integrations.",
      "Clean RESTful API designed for multi-channel content delivery.",
    ],
  },
];

const filterTabs = [
  { id: "all", label: "All Works" },
  { id: "ai", label: "AI & SaaS" },
  { id: "fintech", label: "FinTech & RAG" },
  { id: "web", label: "Web & Open Source" },
];

const CatIllustration = () => (
  <svg
    width="110"
    height="70"
    viewBox="0 0 120 80"
    fill="none"
    className="mx-auto mb-3"
  >
    <path
      d="M20 60 C20 40, 25 35, 30 35 C35 35, 40 40, 40 60 L60 60 C60 40, 65 35, 70 35 C75 35, 80 40, 80 60 Z"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M30 35 L30 25 C30 22, 28 20, 25 20 C22 20, 20 22, 20 25 L20 35"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M70 35 L70 25 C70 22, 72 20, 75 20 C78 20, 80 22, 80 25 L80 35"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M80 60 C90 60, 95 50, 95 40 C95 30, 90 25, 85 25"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M45 45 C50 42, 55 42, 60 45 L60 48 C55 51, 50 51, 45 48 Z"
      fill="#d4772c"
      stroke="#1a1a1a"
      strokeWidth="1"
    />
    <path d="M60 46 L65 44 L65 48 Z" fill="#d4772c" stroke="#1a1a1a" strokeWidth="1" />
    <circle cx="35" cy="45" r="1.2" fill="#1a1a1a" />
    <circle cx="65" cy="45" r="1.2" fill="#1a1a1a" />
    <path d="M90 65 L100 62 L100 68 Z" fill="#4a4a4a" />
    <path d="M105 65 L115 62 L115 68 Z" fill="#4a4a4a" />
  </svg>
);

const Projects = forwardRef((props, ref) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const sectionContainerRef = useRef(null);

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;
  const currentIndex = projects.findIndex((p) => p.id === selectedProjectId);

  const nextProject =
    currentIndex >= 0 ? projects[(currentIndex + 1) % projects.length] : null;
  const prevProject =
    currentIndex >= 0
      ? projects[(currentIndex - 1 + projects.length) % projects.length]
      : null;

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  // Smooth scroll back to section top when opening / closing case study
  const scrollToSectionTop = () => {
    if (sectionContainerRef.current) {
      sectionContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectProject = (projectId) => {
    // If supported, use startViewTransition for smooth same-document transition
    if (typeof document !== "undefined" && document.startViewTransition) {
      document.startViewTransition(() => {
        setSelectedProjectId(projectId);
      });
    } else {
      setSelectedProjectId(projectId);
    }
    scrollToSectionTop();
  };

  const handleBackToList = () => {
    if (typeof document !== "undefined" && document.startViewTransition) {
      document.startViewTransition(() => {
        setSelectedProjectId(null);
      });
    } else {
      setSelectedProjectId(null);
    }
    scrollToSectionTop();
  };

  // Keyboard navigation: Escape key returns to list
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedProjectId) {
        handleBackToList();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectId]);

  return (
    <section
      ref={(node) => {
        sectionContainerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      id="projects"
      className="py-24 md:py-28 relative scroll-mt-20"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <AnimatePresence mode="wait">
          {/* ============================================================== */}
          {/* VIEW 1: PROJECTS GRID LIST (Default View)                     */}
          {/* ============================================================== */}
          {!selectedProject && (
            <motion.div
              key="projects-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header Section */}
              <div className="text-center mb-14">
                <CatIllustration />
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-[2.8rem] md:text-[3.6rem] font-normal leading-tight"
                >
                  <span
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      color: "#1a1a1a",
                    }}
                  >
                    Selected{" "}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      color: "#d4772c",
                      fontStyle: "italic",
                    }}
                  >
                    works
                  </span>
                </motion.h2>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    color: "#777",
                    maxWidth: "540px",
                    margin: "12px auto 0",
                    lineHeight: 1.6,
                  }}
                >
                  Live production SaaS platforms, AI voice agents, and autonomous systems built
                  and shipped end-to-end. Click any project to inspect its architecture.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
                {filterTabs.map((tab) => {
                  const isActive = activeFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveFilter(tab.id)}
                      className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-[#1a1a1a] text-[#f5f0e8] shadow-sm scale-105"
                          : "bg-white/70 text-[#555] hover:text-[#1a1a1a] hover:bg-white border border-[#e0dbd1]"
                      }`}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Project Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {filteredProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    onClick={() => handleSelectProject(project.id)}
                    className="group flex flex-col bg-[#fcfbfa] rounded-[2rem] overflow-hidden border border-[#e0dbd1] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] transition-all duration-400 cursor-pointer hover:-translate-y-1"
                  >
                    {/* Browser Preview Top Header */}
                    <div
                      className="relative h-[270px] p-6 flex flex-col justify-between overflow-hidden"
                      style={{ backgroundColor: project.bgColor }}
                    >
                      {/* Browser address pill */}
                      <div className="flex items-center justify-between z-10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                        </div>

                        <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-black/5 text-[11px] font-medium text-[#444] shadow-xs">
                          <Lock size={10} className="text-emerald-600" />
                          <span>{project.site}</span>
                        </div>

                        <div className="flex items-center gap-2 text-[#444]/60">
                          {project.platforms.includes("desktop") && <Laptop size={14} />}
                          {project.platforms.includes("mobile") && <Smartphone size={14} />}
                        </div>
                      </div>

                      {/* Center preview graphic */}
                      <div className="relative my-auto flex items-center justify-center py-2">
                        <div className="w-full max-w-[340px] h-28 rounded-xl overflow-hidden shadow-md border border-black/10 transition-transform duration-500 group-hover:scale-105 bg-white relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-2.5">
                            <span className="text-white text-xs font-semibold tracking-wide">
                              {project.title}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom status badge and CTA pill */}
                      <div className="flex items-center justify-between z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-[11px] font-bold text-[#1a1a1a] shadow-xs">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          {project.status}
                        </span>

                        <span
                          className="bg-[#1a1a1a] group-hover:bg-[#d4772c] text-white text-[12px] font-semibold px-4 py-1.5 rounded-full shadow-md transition-colors duration-300 flex items-center gap-1.5"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          Read Case Study <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>

                    {/* Bottom Card Content */}
                    <div className="p-8 flex flex-col flex-1 justify-between">
                      <div>
                        {/* Meta row */}
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className="text-[#d4772c] text-[11px] font-bold uppercase tracking-[0.1em]"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {project.categories.join(" • ")}
                          </span>
                          <span className="text-[#888] text-[12px] font-medium">
                            {project.year}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h3
                          className="text-[1.8rem] leading-[1.2] text-[#1a1a1a] mb-1 font-normal group-hover:text-[#d4772c] transition-colors"
                          style={{ fontFamily: "'DM Serif Display', serif" }}
                        >
                          {project.title}
                        </h3>

                        <p
                          className="text-[12px] font-semibold text-[#888] mb-3 uppercase tracking-wider"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {project.role}
                        </p>

                        <p
                          className="text-[#555] text-[14px] leading-[1.65] mb-5"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {project.description}
                        </p>

                        {/* Metrics Badge */}
                        <div className="mb-5 px-3.5 py-2 rounded-xl bg-[#f5f0e8] border border-[#e0dbd1] text-[12px] font-semibold text-[#1a1a1a] flex items-center gap-2">
                          <Sparkles size={14} className="text-[#d4772c] flex-shrink-0" />
                          <span>{project.metrics}</span>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-5 border-t border-[#e0dbd1]/60 flex items-center justify-between">
                        <span
                          className="text-xs font-semibold text-[#1a1a1a] group-hover:text-[#d4772c] transition-colors inline-flex items-center gap-1"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          Explore Architectural Section <ArrowRight size={13} />
                        </span>

                        <span className="text-[11px] text-[#999]">
                          Click to expand
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* VIEW 2: DEDICATED IN-PAGE PROJECT CASE STUDY SECTION          */}
          {/* ============================================================== */}
          {selectedProject && (
            <motion.div
              key={`case-study-${selectedProject.id}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.45 }}
              className="w-full flex flex-col"
            >
              {/* TOP NAVIGATION BAR */}
              <div className="mb-8 p-4 rounded-2xl bg-white/80 border border-[#e0dbd1] shadow-xs flex flex-wrap items-center justify-between gap-4">
                {/* Back button */}
                <button
                  onClick={handleBackToList}
                  className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] hover:bg-[#d4772c] text-white text-xs font-semibold transition-all duration-300 shadow-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <ArrowLeft size={14} /> Back to all projects
                </button>

                {/* Breadcrumb Indicator */}
                <div className="hidden sm:flex items-center gap-2 text-xs text-[#777]">
                  <span
                    onClick={handleBackToList}
                    className="hover:text-[#1a1a1a] cursor-pointer"
                  >
                    Works
                  </span>
                  <span>/</span>
                  <span className="font-semibold text-[#1a1a1a]">
                    {selectedProject.title}
                  </span>
                </div>

                {/* Quick Prev / Next Switcher */}
                <div className="flex items-center gap-2">
                  {prevProject && (
                    <button
                      onClick={() => handleSelectProject(prevProject.id)}
                      className="cursor-pointer p-2 rounded-full bg-[#f5f0e8] hover:bg-white text-[#555] hover:text-[#d4772c] border border-[#e0dbd1] transition-colors"
                      title={`Previous: ${prevProject.title}`}
                    >
                      <ChevronLeft size={16} />
                    </button>
                  )}
                  <span className="text-[11px] font-semibold text-[#888] px-2">
                    {currentIndex + 1} of {projects.length}
                  </span>
                  {nextProject && (
                    <button
                      onClick={() => handleSelectProject(nextProject.id)}
                      className="cursor-pointer p-2 rounded-full bg-[#f5f0e8] hover:bg-white text-[#555] hover:text-[#d4772c] border border-[#e0dbd1] transition-colors"
                      title={`Next: ${nextProject.title}`}
                    >
                      <ChevronRight size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* PROJECT HERO SECTION */}
              <div
                className="rounded-3xl p-8 md:p-14 border border-[#e0dbd1] shadow-md relative overflow-hidden mb-12"
                style={{ backgroundColor: selectedProject.bgColor }}
              >
                {/* Top Badge & Live Status */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-white/90 border border-black/5 text-[#d4772c]">
                      {selectedProject.categories.join(" • ")}
                    </span>
                    <span className="text-xs text-[#777] font-semibold">
                      {selectedProject.year}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-white/95 px-3.5 py-1.5 rounded-full border border-black/5 text-xs font-bold text-[#1a1a1a] shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{selectedProject.status}</span>
                  </div>
                </div>

                {/* Big Title & Subtitle */}
                <div className="max-w-3xl">
                  <h1
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                    className="text-4xl sm:text-5xl md:text-6xl text-[#1a1a1a] leading-[1.08] mb-3"
                  >
                    {selectedProject.title}
                  </h1>
                  <p
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-lg md:text-xl text-[#444] font-medium mb-4"
                  >
                    {selectedProject.tagline}
                  </p>
                  <p
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-sm font-semibold text-[#777] uppercase tracking-wider"
                  >
                    Role: {selectedProject.role}
                  </p>
                </div>

                {/* Key Metrics Ribbon */}
                <div className="mt-8 p-4 rounded-2xl bg-white/90 border border-black/5 shadow-xs flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Sparkles size={20} className="text-[#d4772c]" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#888]">
                        Verified Impact & Scale
                      </p>
                      <p className="text-base font-semibold text-[#1a1a1a]">
                        {selectedProject.metrics}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1a1a] hover:bg-[#d4772c] text-white text-xs font-semibold shadow-md transition-all duration-300 hover:scale-105"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Visit Live Site <ExternalLink size={13} />
                    </a>

                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-[#f5f0e8] text-[#1a1a1a] text-xs font-semibold border border-[#e0dbd1] transition-colors"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <Github size={14} /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* DETAILED CONTENT SECTION */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
                {/* Main Narrative Column */}
                <div className="space-y-12">
                  {/* Executive Overview & Problem Solved */}
                  <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#e0dbd1] shadow-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4772c] block mb-2">
                      The Challenge & Vision
                    </span>
                    <h3
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                      className="text-2xl text-[#1a1a1a] mb-4"
                    >
                      Why I Built This Platform
                    </h3>
                    <p
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-[15px] text-[#444] leading-relaxed mb-4"
                    >
                      {selectedProject.overview}
                    </p>
                    <p
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-[15px] text-[#555] leading-relaxed"
                    >
                      {selectedProject.summary}
                    </p>
                  </div>

                  {/* System Architecture Grid */}
                  <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#e0dbd1] shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu size={18} className="text-[#d4772c]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4772c]">
                        Engineering Blueprint
                      </span>
                    </div>
                    <h3
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                      className="text-2xl text-[#1a1a1a] mb-6"
                    >
                      Full-Stack Architecture Breakdown
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.architecture &&
                        Object.entries(selectedProject.architecture).map(
                          ([layer, detail]) => (
                            <div
                              key={layer}
                              className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e0dbd1]"
                            >
                              <div className="flex items-center gap-1.5 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c]" />
                                <span className="font-bold uppercase tracking-wider text-[#d4772c] text-[10px]">
                                  {layer}
                                </span>
                              </div>
                              <p
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                                className="text-[13px] text-[#333] leading-relaxed font-medium"
                              >
                                {detail}
                              </p>
                            </div>
                          )
                        )}
                    </div>
                  </div>

                  {/* Key Engineering Breakthroughs */}
                  <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#e0dbd1] shadow-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4772c] block mb-2">
                      Hard Problems Solved
                    </span>
                    <h3
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                      className="text-2xl text-[#1a1a1a] mb-6"
                    >
                      Key Technical Breakthroughs
                    </h3>

                    <div className="space-y-4">
                      {selectedProject.keyHighlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#faf8f5] border border-[#e0dbd1]/80"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-[#d4772c] mt-0.5 flex-shrink-0"
                          />
                          <p
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                            className="text-[14px] text-[#333] leading-relaxed"
                          >
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar Sticky Meta Column */}
                <div className="space-y-6">
                  {/* My Exact Contributions Card */}
                  <div className="bg-white rounded-3xl p-7 border border-[#e0dbd1] shadow-xs">
                    <h4
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                      className="text-xl text-[#1a1a1a] mb-4"
                    >
                      My Core Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.myPart.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-[#444] leading-relaxed"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Links & CTA Card */}
                  <div className="bg-[#1a1a1a] text-white rounded-3xl p-7 shadow-lg flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4772c] block mb-2">
                        Inspect in Action
                      </span>
                      <h4
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                        className="text-2xl mb-2 text-white"
                      >
                        Try {selectedProject.title} Live
                      </h4>
                      <p className="text-xs text-[#bbb] leading-relaxed mb-6">
                        Experience the live production application deployed on domain.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-full bg-[#d4772c] hover:bg-white hover:text-[#1a1a1a] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Launch Application <ExternalLink size={14} />
                      </a>

                      <button
                        onClick={handleBackToList}
                        className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <ArrowLeft size={13} /> Return to All Projects
                      </button>
                    </div>
                  </div>

                  {/* Next Project Teaser */}
                  {nextProject && (
                    <div
                      onClick={() => handleSelectProject(nextProject.id)}
                      className="bg-white rounded-3xl p-6 border border-[#e0dbd1] shadow-xs cursor-pointer hover:border-[#d4772c] transition-all group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#888] block mb-1">
                        Up Next →
                      </span>
                      <h5
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                        className="text-lg text-[#1a1a1a] group-hover:text-[#d4772c] transition-colors"
                      >
                        {nextProject.title}
                      </h5>
                      <p className="text-xs text-[#666] line-clamp-2 mt-1">
                        {nextProject.tagline}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* BOTTOM RETURN TO WORKS BUTTON */}
              <div className="mt-16 text-center">
                <button
                  onClick={handleBackToList}
                  className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1a1a1a] hover:bg-[#d4772c] text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <ArrowLeft size={16} /> Back to All Projects
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

export default Projects;
