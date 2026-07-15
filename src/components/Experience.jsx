import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  const [activeNode, setActiveNode] = useState(null);

  // Reverse the array so that the oldest experience is on the left
  const timelineData = [...EXPERIENCE].reverse();

  return (
    <section id="experience" className="section overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6">
        <SectionHeading
          title="Experience & Journey"
          subtitle="My academic and professional journey in AI/ML"
        />

        {/* Desktop Journey Map (hidden on mobile) */}
        <div className="hidden lg:block relative w-full h-[600px] mt-12 mb-10">
          
          {/* SVG Background Path */}
          <div className="absolute inset-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <path 
                d="M 0,300 C 66,100 133,100 200,300 S 333,500 400,300 S 533,100 600,300 S 733,500 800,300 S 933,100 1000,300"
                fill="none" 
                stroke="var(--color-primary)" 
                strokeWidth="3" 
                strokeDasharray="8 8" 
                className="opacity-50"
              />
            </svg>
          </div>

          {/* Central Segmented Arrow (Phases) */}
          <div className="absolute top-[270px] left-0 w-full h-[60px] flex z-0 opacity-90 shadow-sm rounded-lg overflow-hidden">
             <div 
                className="flex-1 bg-primary text-white flex items-center justify-center font-bold text-sm uppercase tracking-widest" 
                style={{ clipPath: "polygon(0% 0%, calc(100% - 24px) 0%, 100% 50%, calc(100% - 24px) 100%, 0% 100%)" }}
             >
               Foundation
             </div>
             <div 
                className="flex-1 bg-primary-dark text-white flex items-center justify-center font-bold text-sm uppercase tracking-widest -ml-[24px] pl-[24px]" 
                style={{ clipPath: "polygon(0% 0%, calc(100% - 24px) 0%, 100% 50%, calc(100% - 24px) 100%, 0% 100%, 24px 50%)" }}
             >
               Exploration
             </div>
             <div 
                className="flex-1 bg-[#084b63] text-white flex items-center justify-center font-bold text-sm uppercase tracking-widest -ml-[24px] pl-[24px]" 
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 24px 50%)" }}
             >
               Specialization
             </div>
          </div>

          {/* Nodes & Cards */}
          {timelineData.map((item, idx) => {
            const leftPercent = 10 + (idx * 20); // 10%, 30%, 50%, 70%, 90%
            const isTop = idx % 2 === 0;
            const topPercent = isTop ? 16.66 : 83.33; // Matches Y=100 and Y=500 in SVG

            return (
              <div 
                key={item.id}
                className="absolute flex flex-col items-center justify-center z-10"
                style={{
                  left: `${leftPercent}%`,
                  top: `${topPercent}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => setActiveNode(item.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                {/* The Card (Positioned Above or Below) */}
                <div 
                  className={`absolute w-64 bg-white/95 backdrop-blur-xl border border-border rounded-2xl p-5 transition-all duration-300 ${
                    isTop ? "bottom-[36px]" : "top-[36px]"
                  } ${
                    activeNode === item.id 
                    ? "scale-105 border-primary shadow-[0_12px_40px_rgba(17,138,178,0.2)] z-50" 
                    : "scale-100 shadow-sm z-10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2.5 py-1 text-[10px] font-bold rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-bold font-heading text-dark mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-secondary mb-2">
                    {item.subtitle}
                  </p>
                  
                  {/* Expandable description on hover */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeNode === item.id ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}>
                    <p className="text-xs text-secondary leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-bg rounded-md text-secondary font-medium border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Show preview tags if not expanded */}
                  <div className={`flex flex-wrap gap-1 transition-all duration-300 ${
                    activeNode === item.id ? "hidden" : "block"
                  }`}>
                      {item.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-bg rounded-md text-secondary font-medium border border-border">
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 2 && (
                        <span className="text-[10px] px-2 py-0.5 text-secondary">
                          +{item.tags.length - 2}
                        </span>
                      )}
                  </div>
                </div>

                {/* The Interactive Dot */}
                <div 
                  className={`w-6 h-6 rounded-full bg-white border-[4px] border-primary cursor-pointer transition-all duration-300 ${
                    activeNode === item.id 
                    ? "scale-125 shadow-[0_0_0_6px_rgba(17,138,178,0.3)]" 
                    : "shadow-[0_0_0_4px_rgba(17,138,178,0.15)] hover:scale-110"
                  }`} 
                />
              </div>
            );
          })}
        </div>

        {/* Mobile View (Standard Vertical Timeline - visible on small screens) */}
        <div className="block lg:hidden relative max-w-xl mx-auto mt-10">
           <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary-light via-primary to-primary-light rounded-full" />
           <div className="flex flex-col gap-10">
            {EXPERIENCE.map((item) => (
              <div key={item.id} className="relative ml-16">
                  {/* Dot */}
                  <div 
                    className="absolute w-5 h-5 rounded-full bg-primary border-[3px] border-white z-10 -left-[49px] top-5" 
                    style={{ boxShadow: "0 0 0 4px rgba(17,138,178,0.2)" }} 
                  />
                  
                  <div className="glass-card p-6">
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-primary/10 text-[#0a526a] mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-base font-bold font-heading text-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0a526a] mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-secondary leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="skill-badge !text-[10px] !py-1 !px-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
              </div>
            ))}
           </div>
        </div>

      </div>
    </section>
  );
}
