import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Phone,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const Contact = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const email = "abhishekmadoliya@gmail.com";
  const phone = "+91 9310069214";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const projectTypes = [
    "Full-Stack Web App",
    "AI Agent & RAG Pipeline",
    "Voice WebRTC System",
    "Workflow Automation",
    "SaaS MVP Build",
    "Full-Time Role",
  ];

  return (
    <footer
      ref={ref}
      id="contact"
      className="py-24 pt-32 relative overflow-hidden"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4772c]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1100px] mx-auto px-6 text-center relative z-10">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 bg-white border border-[#e0dbd1] shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[12px] font-semibold text-[#1a1a1a]"
          >
            Currently booking new projects & opportunities
          </span>
        </motion.div>

        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2
            className="text-[3.2rem] md:text-[5.5rem] leading-[1.08] text-[#1a1a1a]"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Let's build <br />
            <span style={{ fontStyle: "italic", color: "#d4772c" }}>
              something extraordinary.
            </span>
          </h2>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[15px] text-[#666] max-w-md mx-auto mt-4"
          >
            Have a project in mind, need custom AI integrations, or want to discuss a full-time role?
            I'm always open to talking architecture and code.
          </p>
        </motion.div>

        {/* Project Interest Chips */}
        <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto mb-12">
          {projectTypes.map((type, i) => (
            <a
              key={i}
              href={`mailto:${email}?subject=Project%20Inquiry%20-%20${encodeURIComponent(
                type
              )}`}
              className="px-3.5 py-1.5 rounded-full text-[12px] font-medium bg-white/80 hover:bg-[#d4772c] hover:text-white border border-[#e0dbd1] text-[#555] transition-all duration-300 shadow-2xs hover:scale-105"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              + {type}
            </a>
          ))}
        </div>

        {/* Email Direct & Copy Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1a1a1a] hover:bg-[#d4772c] text-[#f5f0e8] text-lg md:text-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <Mail size={20} />
            <span>{email}</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <button
            onClick={copyToClipboard}
            className="cursor-pointer inline-flex items-center gap-2 px-5 py-4 rounded-full bg-white hover:bg-[#fcfaf7] border border-[#e0dbd1] text-xs font-semibold text-[#1a1a1a] transition-all duration-300 shadow-xs hover:border-[#d4772c]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-[#888]" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Contact details row */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-[#666] mb-16">
          <a
            href="tel:+919310069214"
            className="inline-flex items-center gap-2 hover:text-[#d4772c] transition-colors"
          >
            <Phone size={14} className="text-[#d4772c]" />
            <span>{phone}</span>
          </a>
          <span className="w-1 h-1 rounded-full bg-[#bbb]" />
          <div className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-[#d4772c]" />
            <span>Badarpur, New Delhi 110044, India</span>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-20">
          {[
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/abhishek-madoliya-540847273/",
              icon: Linkedin,
            },
            {
              label: "GitHub",
              href: "https://github.com/Abhishekmadoliya",
              icon: Github,
            },
            {
              label: "Google Doc Resume",
              href: "https://docs.google.com/document/d/1sh3prDiykcmYL0LLwXZNYbQcyoXgKeHi2umn5qfGJsA/edit?usp=sharing",
              icon: ArrowUpRight,
            },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-[#1a1a1a] hover:text-[#d4772c] text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-colors border-b border-transparent hover:border-[#d4772c] pb-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <social.icon size={15} />
              {social.label}
            </motion.a>
          ))}
        </div>

        {/* Footer Bottom / Signature */}
        <div className="pt-10 border-t border-[#1a1a1a]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo Signature */}
          <div className="flex items-center gap-2">
            <span
              className="text-2xl italic font-normal"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              <span className="text-[#1a1a1a]">A</span>
              <span className="text-[#d4772c]">M</span>
            </span>
            <span className="text-[#1a1a1a]/50 text-[11px] font-medium tracking-widest uppercase">
              Abhishek Madoliya • AI Full Stack Engineer
            </span>
          </div>

          {/* Copyright */}
          <div className="text-[#1a1a1a]/50 text-[11px] font-medium tracking-widest uppercase">
            © {currentYear} Abhishek Madoliya. Crafted with React & Tailwind.
          </div>

          {/* Location status */}
          <div className="flex items-center gap-2 text-[#1a1a1a]/70 text-[11px] font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#d4772c] animate-pulse" />
            New Delhi, India
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Contact;
