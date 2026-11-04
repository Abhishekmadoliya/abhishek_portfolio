import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Smartphone,
  Cpu,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Zap,
  Layers,
  Workflow,
  ShieldCheck,
  Clock,
} from "lucide-react";

const services = [
  {
    id: "web-dev",
    number: "01",
    title: "Full-Stack Web Engineering",
    tagline: "Scalable, High-Performance Web Applications",
    description:
      "End-to-end development of modern web applications using React, Next.js, and Node.js. Clean code architecture, blazingly fast SSR/SEO, and bulletproof responsive UI.",
    deliverables: [
      "Custom responsive frontend UI with Tailwind CSS & Framer Motion",
      "High-concurrency RESTful & real-time WebSocket backends",
      "Robust database design with MongoDB & PostgreSQL",
      "Role-based access control (RBAC) & secure authentication",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express", "TypeScript", "Tailwind CSS"],
    accent: "#d4772c",
    badge: "Most Requested",
  },
  {
    id: "ai-agents",
    number: "02",
    title: "AI Agents & RAG Systems",
    tagline: "Autonomous Workflows & Real-Time Voice Pipelines",
    description:
      "Transforming LLMs into practical business tools. Building custom RAG pipelines over your proprietary documents, real-time WebRTC voice agents, and multi-agent coordination.",
    deliverables: [
      "RAG pipelines with vector databases (MongoDB Atlas Vector Search)",
      "Real-time voice streaming with WebRTC, Deepgram Nova-3 & Cloudflare TTS",
      "Autonomous tool-calling agents using LangChain & OpenAI",
      "Multi-agent simulation environments with turn-taking orchestration",
    ],
    tech: ["LangChain", "OpenAI API", "Vector Search", "WebRTC", "Deepgram", "Socket.io"],
    accent: "#2563eb",
    badge: "AI Frontier",
  },
  {
    id: "automation",
    number: "03",
    title: "Intelligent Backend Automation",
    tagline: "Asynchronous Queues & Workflow Engines",
    description:
      "Eliminating manual bottlenecks with resilient background processing, scheduled cron pipelines, automated reconciliation algorithms, and multi-system webhook synchronization.",
    deliverables: [
      "Distributed background job processing with Redis & BullMQ",
      "Automated financial / data reconciliation engines (Paise-normalized)",
      "Payment gateway lifecycle (Razorpay/Stripe subscriptions & webhooks)",
      "n8n automated pipelines & third-party API orchestration",
    ],
    tech: ["Node.js", "Bun", "BullMQ", "Redis", "Razorpay", "n8n", "Docker"],
    accent: "#0d9488",
    badge: "Operational Efficiency",
  },
  {
    id: "app-dev",
    number: "04",
    title: "Cross-Platform & Progressive Apps",
    tagline: "Responsive Web Apps with Native Fluidity",
    description:
      "Modern web applications optimized for touchscreens, mobile devices, and tablet viewports. Offline-ready capabilities, instant loading, and smooth gestures.",
    deliverables: [
      "Mobile-first responsive architecture matching 100% of device viewports",
      "Progressive Web App (PWA) offline caching & service workers",
      "Smooth hardware-accelerated animations on low-power devices",
      "Lighthouse 95+ performance optimization across CWV",
    ],
    tech: ["React", "PWA", "Vite", "Tailwind CSS", "Framer Motion", "Cloudflare"],
    accent: "#7c3aed",
    badge: "Fast & Fluid",
  },
  {
    id: "mvp-launch",
    number: "05",
    title: "0-to-1 SaaS MVP Development",
    tagline: "From Idea to Production-Ready Launch in Weeks",
    description:
      "For founders, startups, and innovators looking to ship an MVP without technical delays. Full ownership: from system architecture to live payment-ready deployment.",
    deliverables: [
      "Rapid prototyping from PRD to production-grade architecture",
      "Automated subscription tiers, billing entitlements & user onboarding",
      "Cloud infrastructure provisioning (AWS EC2 / GCP / Docker / Nginx)",
      "SEO-ready marketing landing page + authenticated client dashboard",
    ],
    tech: ["Next.js", "Node.js", "AWS EC2", "GCP", "Docker", "Razorpay", "MongoDB"],
    accent: "#ea580c",
    badge: "Founder-to-Founder",
  },
];

const Services = forwardRef(({ onClickContact }, ref) => {
  return (
    <section
      ref={ref}
      id="services"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 bg-[#e8e2d5] border border-[#d8d0c0]"
          >
            <Zap size={13} className="text-[#d4772c]" />
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[11px] font-bold text-[#444] uppercase tracking-wider"
            >
              Services & Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[2.8rem] md:text-[3.6rem] font-normal leading-tight"
          >
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: "#1a1a1a",
              }}
            >
              What I{" "}
            </span>
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: "#d4772c",
                fontStyle: "italic",
              }}
            >
              deliver
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "#777",
              maxWidth: "520px",
              margin: "12px auto 0",
              lineHeight: 1.7,
            }}
          >
            High-leverage engineering services for businesses, founders, and teams who need
            production-grade software that scales.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex flex-col justify-between bg-white rounded-3xl p-8 border border-[#e0dbd1] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-400 relative overflow-hidden ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Top Accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-500"
                style={{ backgroundColor: service.accent }}
              />

              <div>
                {/* Header Row: Number + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                    className="text-2xl text-[#bbb] group-hover:text-[#d4772c] transition-colors"
                  >
                    {service.number}
                  </span>

                  <span
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-[#f5f0e8] text-[#555] border border-[#e0dbd1]"
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                  className="text-2xl text-[#1a1a1a] mb-1 font-normal"
                >
                  {service.title}
                </h3>

                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-xs font-semibold text-[#d4772c] mb-4"
                >
                  {service.tagline}
                </p>

                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-[13.5px] text-[#666] leading-relaxed mb-6"
                >
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-4 border-t border-[#f0ebe3]">
                  <p
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-[11px] font-bold uppercase tracking-wider text-[#999] mb-2"
                  >
                    Key Deliverables
                  </p>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-left">
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 flex-shrink-0 text-[#d4772c]"
                      />
                      <span
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="text-[12px] text-[#444] leading-snug"
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Tags + CTA */}
              <div className="mt-8 pt-5 border-t border-[#f0ebe3]">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-[#f5f0e8] text-[#666] text-[10px] font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onClickContact}
                  className="w-full py-2.5 rounded-full border border-[#1a1a1a]/20 hover:border-[#d4772c] hover:bg-[#d4772c] hover:text-white text-[#1a1a1a] text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Inquire for Project <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder Workflow Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-white/70 border border-[#e0dbd1] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#d4772c]/10 text-[#d4772c] flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4
                style={{ fontFamily: "'DM Serif Display', serif" }}
                className="text-xl text-[#1a1a1a]"
              >
                Production-Tested Engineering Standard
              </h4>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-xs text-[#666] mt-0.5"
              >
                Zero boilerplate slop. Every project is architected with clean design patterns,
                type safety, and rigorous error handling.
              </p>
            </div>
          </div>

          <button
            onClick={onClickContact}
            className="px-6 py-3 rounded-full bg-[#1a1a1a] hover:bg-[#d4772c] text-white text-xs font-semibold tracking-wide shadow-md transition-colors whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Start a Collaboration →
          </button>
        </motion.div>
      </div>
    </section>
  );
});

export default Services;

