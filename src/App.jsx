import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/footer/Contact";
import MiddleSpinner from "./components/middle-spinner";
import KindWords from "./components/kind-words";
import ResumeSection from "./components/ResumeSection";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("about");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showResumeSection, setShowResumeSection] = useState(false);

  // Smooth scroll helpers
  const scrollTo = (ref) => {
    if (showResumeSection) {
      setShowResumeSection(false);
      setTimeout(() => {
        if (ref?.current) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    } else if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenResume = () => {
    if (typeof document !== "undefined" && document.startViewTransition) {
      document.startViewTransition(() => {
        setShowResumeSection(true);
      });
    } else {
      setShowResumeSection(true);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseResume = () => {
    if (typeof document !== "undefined" && document.startViewTransition) {
      document.startViewTransition(() => {
        setShowResumeSection(false);
      });
    } else {
      setShowResumeSection(false);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll listener for back to top, fallback progress, and active section
  useEffect(() => {
    const progressBar = document.getElementById("scroll-progress");
    const supportsScrollTimeline =
      typeof CSS !== "undefined" &&
      CSS.supports &&
      CSS.supports("animation-timeline", "scroll()");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setShowBackToTop(scrollY > 400);

      // Fallback scroll progress
      if (!supportsScrollTimeline && progressBar) {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? scrollY / scrollable : 0;
        progressBar.style.transform = `scaleX(${progress})`;
      }

      if (showResumeSection) {
        setActiveSection("resume");
        return;
      }

      // Active Section Spy
      const sections = [
        { id: "about", ref: heroRef },
        { id: "projects", ref: projectsRef },
        { id: "services", ref: servicesRef },
        { id: "skills", ref: skillsRef },
        { id: "experience", ref: experienceRef },
        { id: "contact", ref: contactRef },
      ];

      const scrollPosition = scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const top = section.ref.current.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showResumeSection]);

  return (
    <div className="relative min-h-screen bg-[#f5f0e8] text-[#1a1a1a] selection:bg-[#d4772c] selection:text-white">
      {/* Decorative Top Scroll Progress Bar */}
      <div
        id="scroll-progress"
        aria-hidden="true"
        className="fixed top-0 left-0 w-full h-[3px] bg-[#d4772c] origin-left z-50 pointer-events-none"
      />

      {/* Global Navigation */}
      <Navbar
        onClickAbout={() => scrollTo(heroRef)}
        onClickProjects={() => scrollTo(projectsRef)}
        onClickServices={() => scrollTo(servicesRef)}
        onClickSkills={() => scrollTo(skillsRef)}
        onClickExperience={() => scrollTo(experienceRef)}
        onClickContact={() => scrollTo(contactRef)}
        onClickResume={handleOpenResume}
        activeSection={showResumeSection ? "resume" : activeSection}
      />

      <AnimatePresence mode="wait">
        {/* ============================================================== */}
        {/* VIEW 1: DEDICATED IN-PAGE RESUME SECTION                       */}
        {/* ============================================================== */}
        {showResumeSection ? (
          <ResumeSection key="resume-view" onBack={handleCloseResume} />
        ) : (
          <motion.div
            key="main-portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Section */}
            <Hero
              ref={heroRef}
              onClickContact={() => scrollTo(contactRef)}
              onClickProjects={() => scrollTo(projectsRef)}
              onOpenResume={handleOpenResume}
            />

            {/* Selected Works / Showcase Section */}
            <Projects ref={projectsRef} />

            {/* Services & Capabilities Section */}
            <Services
              ref={servicesRef}
              onClickContact={() => scrollTo(contactRef)}
            />

            {/* Toolkit / Skills Section */}
            <Skills ref={skillsRef} />

            {/* Career & Journey Section */}
            <Experience ref={experienceRef} />

            {/* Middle Animated Spinner Doodle */}
            <MiddleSpinner />

            {/* Kind Words / Collaborators Testimonials */}
            <KindWords />

            {/* Contact & Footer Section */}
            <Contact ref={contactRef} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back to Top Pill */}
      <AnimatePresence>
        {showBackToTop && !showResumeSection && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25 }}
            onClick={() => scrollTo(heroRef)}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#1a1a1a] hover:bg-[#d4772c] text-white shadow-xl cursor-pointer transition-colors duration-300 border border-white/20 group"
          >
            <ArrowUp
              size={18}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
