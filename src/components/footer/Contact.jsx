import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react";

const Contact = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      id="contact"
      className="py-24 pt-32 relative overflow-hidden"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2
            className="text-[3.5rem] md:text-[5.5rem] leading-[1.1] text-[#1a1a1a]"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Let's work <br />
            <span style={{ fontStyle: "italic", color: "#d4772c" }}>together.</span>
          </h2>
        </motion.div>

        {/* Email CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <a
            href="mailto:abhishekmadoliya@gmail.com"
            className="group relative inline-flex items-center gap-4 text-2xl md:text-4xl font-medium text-[#1a1a1a] hover:text-[#d4772c] transition-colors duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            abhishekmadoliya@gmail.com
            <span className="p-2 md:p-3 rounded-full border border-[#1a1a1a]/10 group-hover:border-[#d4772c]/40 group-hover:bg-[#d4772c]/5 transition-all">
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </a>
        </motion.div>

        {/* Social Links Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-24">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-madoliya-540847273/", icon: Linkedin },
            { label: "GitHub", href: "https://github.com/Abhishekmadoliya", icon: Github },
            { label: "Twitter", href: "#", icon: Twitter },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-[#1a1a1a] hover:text-[#d4772c] text-sm font-semibold tracking-widest uppercase flex items-center gap-2 transition-colors border-b border-transparent hover:border-[#d4772c]/30 pb-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {social.label}
            </motion.a>
          ))}
        </div>

        {/* Footer Bottom / Signature */}
        <div className="pt-12 border-t border-[#1a1a1a]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo Initial AM Signature style */}
          <div className="flex items-center gap-2">
            <span 
              className="text-2xl italic font-normal"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              <span className="text-[#1a1a1a]">A</span>
              <span className="text-[#d4772c]">M</span>
            </span>
            <span className="text-[#1a1a1a]/40 text-[11px] font-medium tracking-widest uppercase">
              Abhishek Madoliya
            </span>
          </div>

          {/* Copyright notice */}
          <div className="text-[#1a1a1a]/40 text-[11px] font-medium tracking-widest uppercase">
            © {currentYear} All rights reserved.
          </div>

          {/* Location status like 'New Delhi' */}
          <div className="flex items-center gap-2 text-[#1a1a1a]/60 text-[11px] font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4772c] animate-pulse" />
            New Delhi, India
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Contact;