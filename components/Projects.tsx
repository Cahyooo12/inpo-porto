import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ category, title, image, isVideo = false }: { category: string, title: string, image: string, isVideo?: boolean }) => (
  <div className="group relative rounded-3xl overflow-hidden bg-surface border border-white/5 cursor-pointer h-full">
    {/* Image Container */}
    <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden relative">
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
      
      {isVideo ? (
        <iframe 
            src={`${image}&controls=0&rel=0&autoplay=0`}
            title={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        />
      ) : (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
        />
      )}

      {/* Overlay Info */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-300">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
           <div className="flex justify-between items-end">
             <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white mb-3">
                  {category}
                </span>
                <h3 className="text-white font-display text-2xl font-medium leading-none">{title}</h3>
             </div>
             <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
               <ArrowUpRight size={20} />
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-32">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
           <h2 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tighter">
             Selected <br/> Works
           </h2>
           <p className="text-secondary text-right max-w-xs mt-4 md:mt-0">
             A curation of moments, movements, and visual stories captured over the years.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Video - Spans 2 cols */}
          <div className="lg:col-span-2 group relative rounded-3xl overflow-hidden border border-white/5 bg-surface aspect-video lg:aspect-auto min-h-[400px]">
             <iframe 
               src="https://www.youtube.com/" 
               className="w-full h-full object-cover"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
             />
             <div className="absolute top-4 left-4 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white tracking-wide">
                  Featured Documentary
                </span>
             </div>
          </div>

          {/* Cards */}
          <ProjectCard category="Event" title="Atmosphere" image="https://uploads.onecompiler.io/43w9rf9r9/43xztdypm/7.png" />
          <ProjectCard category="Portrait" title="Elegance" image="https://uploads.onecompiler.io/43w9rf9r9/43wxxv2sw/DSC00250.jpg" />
          <ProjectCard category="Photography" title="Connection" image="https://uploads.onecompiler.io/43w9rf9r9/43wxxv2sw/DSC07408.JPG" />
          <ProjectCard category="Wedding" title="Moments" image="https://uploads.onecompiler.io/43w9rf9r9/43x2xnxwr/3.png" />
          <ProjectCard category="Lifestyle" title="Vibrant" image="https://uploads.onecompiler.io/43w9rf9r9/43wxyr6n4/DSC07632.JPG" />
        </div>
      </FadeIn>
    </section>
  );
};