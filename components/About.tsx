import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Tag } from './ui/Tag';

const Card = ({ children, className = "", noPadding = false }: { children?: React.ReactNode; className?: string; noPadding?: boolean }) => (
  <div className={`glass rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.07)] ${noPadding ? 'p-0' : 'p-5 md:p-6'} ${className}`}>
    {children}
  </div>
);

export const About = () => {
  return (
    <section id="about" className="scroll-mt-32">
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
          
          {/* Main Intro */}
          <Card className="md:col-span-6 lg:col-span-8 bg-gradient-to-br from-surfaceHighlight/30 to-surface/10 min-h-[260px] flex flex-col justify-center relative group">
            <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4 leading-tight tracking-tight relative z-10">
              Driven by <span className="text-gray-500">Creativity,</span> <br/>
              Defined by <span className="text-white">Purpose.</span>
            </h2>
            <p className="text-base text-secondary leading-relaxed max-w-2xl relative z-10">
              I blend technical precision in web development and business strategy with an artistic visual touch. My dedication is to drive digital transformations that are not just functional, but narrative-driven. From efficient code to captivating aesthetics, I craft innovative solutions that help organizations thrive and create real-world impact in the digital era.
            </p>
          </Card>

          {/* Avatar Block */}
          <Card className="md:col-span-6 lg:col-span-4 relative group min-h-[260px]" noPadding>
             <img 
               src="https://uploads.onecompiler.io/43w9rf9r9/43wxqhn2f/Desain%20tanpa%20judul%20(3).png" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               alt="Portrait"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
             <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 inline-block">
                   <p className="text-[10px] text-white font-medium uppercase tracking-widest">Hello, I'm Cahyo</p>
                </div>
             </div>
          </Card>

          {/* Location - Aligned with Tech Stack */}
          <Card className="md:col-span-3 lg:col-span-3 flex flex-col justify-between relative overflow-hidden bg-surface min-h-[160px]">
             {/* Grid Background */}
             <div className="absolute inset-0 bg-[size:20px_20px] bg-grid-pattern opacity-[0.2]" />
             
             <div className="relative z-10 flex justify-between items-start">
                 <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg group-hover:bg-white/10 transition-colors">
                    📍
                 </div>
                 <span className="text-[10px] text-secondary uppercase tracking-widest font-semibold self-center">Based In</span>
             </div>
             
             <div className="relative z-10">
                <p className="text-xl text-white font-display font-medium">Yogyakarta</p>
             </div>
          </Card>

          {/* Focus - Aligned with Tech Stack */}
          <Card className="md:col-span-3 lg:col-span-3 flex flex-col justify-between bg-surface group min-h-[160px]">
             <div className="relative z-10 flex justify-between items-start">
                 <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-500">
                    ⚡
                 </div>
                 <span className="text-[10px] text-secondary uppercase tracking-widest font-semibold self-center">Core Focus</span>
             </div>
             
             <div>
                 <p className="text-xl text-white font-display font-medium">Social Impact</p>
             </div>
          </Card>

          {/* Toolkit - Reference Layout */}
          <Card className="md:col-span-6 lg:col-span-6 flex flex-col justify-between bg-surface overflow-hidden relative min-h-[160px]">
             <div className="absolute top-0 right-0 p-24 bg-emerald-500/5 blur-[60px] rounded-full pointer-events-none" />
             
             <div className="relative z-10 flex justify-between items-start mb-4">
                 <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg group-hover:bg-white/10 transition-colors">
                    🛠
                 </div>
                 <span className="text-[10px] text-secondary uppercase tracking-widest font-semibold self-center">My Toolkit</span>
             </div>
             
             <div className="relative z-10">
                 <div className="flex flex-wrap gap-1.5">
                    <Tag>Figma</Tag>
                    <Tag>Canva</Tag>
                    <Tag>Capcut</Tag>
                    <Tag>Lightroom</Tag>
                    <Tag>Notion</Tag>
                    <Tag>Full Stack</Tag>
                    <Tag>Git / GitHub</Tag>
                 </div>
             </div>
          </Card>

        </div>
      </FadeIn>
    </section>
  );
};
