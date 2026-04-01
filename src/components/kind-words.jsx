import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const testimonials = [
  {
    quote: "I had the chance to work with Abhishek on several projects. He's curious, quick to learn, and somehow always has thoughtful ideas when the rest of us are still figuring things out.\n\nWorking with him was great and yes, I ended up learning a thing or two from him as well.",
    name: "Ananthu B",
    role: "Senior UI/UX designer",
    company: "Way.com",
    avatar: "https://i.pravatar.cc/150?u=ananthu",
    bgColor: "#ffffff",
  },
  {
    quote: "I had the chance to work with Abhishek at Way.com, and collaborating with him was always a really enriching experience. What stands out the most about Abhishek is his storytelling ability. He has a way of bringing insights together and presenting them in a way that makes the whole team see the bigger picture clearly.\n\nAbhishek also puts an incredible amount of effort into research. He goes beyond the obvious, digs deep into problems, and brings thoughtful perspectives that make the work much stronger and meaningful.",
    name: "Linsha Watson",
    role: "Senior Product Designer",
    company: "Way.com",
    avatar: "https://i.pravatar.cc/150?u=linsha",
    bgColor: "#e1f1ff", // Exact light blue highlight
  },
  {
    quote: "Abhishek is an extremely talented developer. He has done an excellent job in designing our pitch deck, illustrations for our new web site and investor presentations.\n\nWorking closely with me during his tenure at TabEdu, he has been very patient in his approach, has no hesitance in working extra hours to meet our deadlines, demonstrated positive attitude, willing to listen to ideas and develop good design options which are very important skills for a graphic designer.\n\nI have no hesitance in recommending Abhishek as I am sure he will be a great asset to any team he joins.",
    name: "Chintu Varghese",
    role: "CEO",
    company: "TabEdu",
    avatar: "https://i.pravatar.cc/150?u=chintu",
    bgColor: "#ffffff",
  },
];

const KindWords = () => {
  const [index, setIndex] = useState(1);
  const dragX = useMotionValue(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const onDragEnd = (e, { offset, velocity }) => {
    if (offset.x > 100 || velocity.x > 500) {
      prev();
    } else if (offset.x < -100 || velocity.x < -500) {
      next();
    }
  };

  return (
    <section className="py-24 overflow-hidden select-none" style={{ backgroundColor: "#f5f0e8" }}>
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Header Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[2.2rem] md:text-[3.2rem] font-normal leading-tight"
          >
            <span style={{ fontFamily: "'DM Serif Display', serif", color: "#d4772c" }}>Kind words </span>
            <span style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a1a" }}>from collaborators</span>
          </motion.h2>
        </div>

        {/* 3D Draggable Carousel Area */}
        <div className="relative h-[580px] flex items-center justify-center [perspective:1800px] touch-none">
          <motion.div 
            className="relative w-full h-full flex items-center justify-center"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={onDragEnd}
            style={{ x: dragX }}
          >
            {testimonials.map((t, i) => {
              const isActive = i === index;
              const isLeft = i === (index - 1 + testimonials.length) % testimonials.length;
              const isRight = i === (index + 1) % testimonials.length;

              // 3D parameters to match screenshot perspective
              let rotateY = 0;
              let x = 0;
              let scale = 0.8;
              let zIndex = 0;
              let opacity = 0;

              if (isActive) {
                rotateY = 0;
                x = 0;
                scale = 1;
                zIndex = 30;
                opacity = 1;
              } else if (isLeft) {
                rotateY = 32;
                x = -380;
                scale = 0.84;
                zIndex = 10;
                opacity = 0.65;
              } else if (isRight) {
                rotateY = -32;
                x = 380;
                scale = 0.84;
                zIndex = 10;
                opacity = 0.65;
              }

              return (
                <motion.div
                  key={i}
                  animate={{
                    rotateY,
                    x,
                    scale,
                    zIndex,
                    opacity,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 25,
                    opacity: { duration: 0.4 } 
                  }}
                  className="absolute w-[340px] md:w-[380px] h-[500px] rounded-[2.5rem] p-10 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white pointer-events-none"
                  style={{
                    backgroundColor: isActive ? t.bgColor : "#ffffff",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Testimonial Quote */}
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <p
                      className="text-[#4a4a4a]/90 text-[14px] md:text-[14.5px] leading-[1.75] text-left"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
                    >
                      {t.quote}
                    </p>
                  </div>

                  {/* Profile Section */}
                  <div className="mt-10 flex items-center justify-between border-t border-[#eee] pt-6 relative">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm">
                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col text-left">
                        <h4 className="text-[#1a1a1a] text-[15px] font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {t.name}
                        </h4>
                        <span className="text-[#999] text-[11px] font-medium uppercase tracking-tight">
                          {t.role}, {t.company}
                        </span>
                      </div>
                    </div>
                    
                    {/* LinkedIn Link (Visual only) */}
                    <div className="absolute right-0 bottom-0 bg-[#f9f9f9] border border-[#eee] rounded-md p-1.5 text-[#0077B5] shadow-sm transform translate-y-1">
                      <Linkedin size={16} fill="currentColor" strokeWidth={0} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Precise Navigation Pill */}
        <div className="mt-4 flex justify-center">
           <div className="bg-[#d4cfc4]/50 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-6 shadow-sm">
              <button 
                onClick={prev} 
                className="text-[#4a4a4a] hover:text-[#d4772c] transition-all transform active:scale-90"
              >
                <ChevronLeft size={22} strokeWidth={2.5} />
              </button>

              <div className="flex items-center gap-2">
                {[0, 1, 2, 3, 4].map((dot) => {
                  const itemsCount = testimonials.length;
                  // Map index to a specific dot if needed, currently 3 testimonials for 5 dots is just visual
                  const activeDot = index % 5; 
                  return (
                    <div
                      key={dot}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        dot === activeDot ? "bg-[#d4772c] scale-125" : "bg-black/10"
                      }`}
                    />
                  );
                })}
              </div>

              <button 
                onClick={next} 
                className="text-[#4a4a4a] hover:text-[#d4772c] transition-all transform active:scale-90"
              >
                <ChevronRight size={22} strokeWidth={2.5} />
              </button>
           </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2.5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4cfc4;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default KindWords;