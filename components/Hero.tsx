import React from 'react';
import { Tag } from './ui/Tag';
import { FadeIn } from './ui/FadeIn';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';

// --- CONFIGURATION: EDIT STATS HERE ---
const HERO_STATS = [
  { value: "3+", label: "Years Exp." },
  { value: "20+", label: "Projects Done" },
  { value: "100%", label: "Satisfaction" },
];

const MarqueeItem = ({ text }: { text: string }) => (
  <span className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/30 mx-8 uppercase tracking-tighter">
    {text}
  </span>
);

const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div className="flex flex-col items-center px-6 border-r border-white/10 last:border-0">
    <span className="text-2xl md:text-3xl font-bold text-white font-display">{value}</span>
    <span className="text-xs text-secondary uppercase tracking-wider mt-1">{label}</span>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 md:pt-40">
      
      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-20%] left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="flex-grow flex flex-col justify-center items-center text-center px-6 relative z-10">
        <FadeIn delay={100} className="flex flex-col items-center max-w-5xl">
          
          {/* Status Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-wider uppercase">Open for Commissions</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter text-white mb-8 leading-[0.9] drop-shadow-2xl">
            Designing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">Impact.</span>
          </h1>

          <p className="max-w-2xl text-secondary text-lg md:text-2xl leading-relaxed mb-8 font-light tracking-wide">
            I'm <span className="text-white font-medium">Cahyo</span>. Blending creative visuals with social purpose to craft digital experiences that matter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 w-full md:w-auto">
            <a 
              href="#contact" 
              className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Let's Talk
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-white/5 text-white border border-white/10 font-medium hover:bg-white/10 transition-colors backdrop-blur-md"
            >
              My Projects
            </a>
          </div>

          {/* Stats - Dynamic Rendering */}
          <div className="flex flex-wrap justify-center gap-y-4 mb-10 opacity-80">
             {HERO_STATS.map((stat, index) => (
                <StatItem key={index} value={stat.value} label={stat.label} />
             ))}
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap justify-center gap-3">
              <Tag>Visual Design</Tag>
              <Tag>Videography</Tag>
              <Tag>Developer</Tag>
              <Tag>Community Lead</Tag>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
        <ArrowDown size={16} className="text-white" />
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full py-12 overflow-hidden mask-edges mt-auto mb-10 opacity-40 hover:opacity-80 transition-opacity duration-700">
        <div className="flex whitespace-nowrap animate-scroll w-max">
           <MarqueeItem text="Creative Direction" />
           <MarqueeItem text="•" />
           <MarqueeItem text="Social Impact" />
           <MarqueeItem text="•" />
           <MarqueeItem text="Visual Storytelling" />
           <MarqueeItem text="•" />
           <MarqueeItem text="Brand Identity" />
           <MarqueeItem text="•" />
           <MarqueeItem text="Creative Direction" />
           <MarqueeItem text="•" />
           <MarqueeItem text="Social Impact" />
           <MarqueeItem text="•" />
           <MarqueeItem text="Visual Storytelling" />
           <MarqueeItem text="•" />
           <MarqueeItem text="Brand Identity" />
        </div>
      </div>
    </section>
  );
};
