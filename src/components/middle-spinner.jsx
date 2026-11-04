import React from "react";

const MiddleSpinner = () => {
  return (
    <div className="flex justify-center items-center py-20 overflow-hidden" style={{ backgroundColor: "#f5f0e8" }}>
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {/* Central Doodle Sketch matching the reference */}
        <div className="absolute z-10 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center pointer-events-none">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="1.5"
          >
            {/* Hand-drawn style circular face outline */}
            <path
              d="M50 20 C65 20, 75 30, 75 50 C75 70, 65 80, 50 80 C35 80, 25 70, 25 50 C25 30, 35 20, 50 20"
              strokeDasharray="2 2"
            />
            <path d="M50 20.5 C66 20, 76 31, 76 51 C76 71, 66 81, 51 81 C36 81, 26 71, 26 51 C26 31, 36 21, 51 21" />
            
            {/* Curly hair doodles */}
            <path d="M25 50 C20 45, 18 55, 25 60" />
            <path d="M25 40 C20 35, 18 45, 25 50" />
            <path d="M30 25 C25 20, 20 30, 30 35" />
            <path d="M50 20 C50 15, 60 15, 60 20" />
            <path d="M75 30 C80 25, 85 35, 75 40" />
            <path d="M75 50 C80 45, 85 55, 75 60" />
            
            {/* Eyes */}
            <circle cx="42" cy="48" r="1.5" fill="#1a1a1a" />
            <circle cx="58" cy="48" r="1.5" fill="#1a1a1a" />
            
            {/* Smile */}
            <path
              d="M40 60 C45 65, 55 65, 60 60"
              strokeLinecap="round"
            />
            
            {/* Shoulders/Shirt */}
            <path d="M35 80 L35 90 L65 90 L65 80" />
            <path d="M35 80 C40 85, 60 85, 65 80" />
          </svg>
        </div>

        {/* Spinning Circular Text Section */}
        <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full transform"
          >
            <defs>
              {/* Define the circular path for the text */}
              <path
                id="textPath"
                d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
              />
            </defs>
            <text fill="#d4772c" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "12.5px", letterSpacing: "1px" }}>
              <textPath xlinkHref="#textPath">
                More works coming soon.... More works coming soon.... More works coming soon....
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default MiddleSpinner;