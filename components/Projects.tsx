import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { ArrowUpRight } from 'lucide-react';

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  category: string;
}

const PROJECTS: ProjectData[] = [
  {
    title: "Atmosphere Event",
    category: "Development",
    description: "Developed an interactive event website featuring dynamic animations, schedule exploration, and ticket booking system for a local music festival.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://uploads.onecompiler.io/43w9rf9r9/43xztdypm/7.png"
  },
  {
    title: "Elegance Portfolio",
    category: "Design",
    description: "A visually engaging portfolio website featuring real-time 3D elements, fluid animations, and a responsive sleek interface for a fashion brand.",
    tags: ["Figma", "Webflow", "GSAP"],
    image: "https://uploads.onecompiler.io/43w9rf9r9/43wxxv2sw/DSC00250.jpg"
  },
  {
    title: "Social Impact Doc",
    category: "Videography",
    description: "A short documentary series capturing the essence of rural community development and social empowerment initiatives in Yogyakarta.",
    tags: ["Premiere Pro", "Storytelling", "Color Grading"],
    image: "https://uploads.onecompiler.io/43w9rf9r9/43wxxv2sw/DSC07408.JPG"
  },
  {
    title: "Java Street Life",
    category: "Photography",
    description: "Capturing the raw and authentic moments of daily life in the streets of Yogyakarta, focusing on human interest and traditional markets.",
    tags: ["Sony Alpha", "Street", "Human Interest"],
    image: "https://images.unsplash.com/photo-1566996695273-047c23101d2d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Misty Highlands",
    category: "Photography",
    description: "A landscape series exploring the serene and mystical atmosphere of Merapi's slopes during the early morning hours.",
    tags: ["Landscape", "Nature", "Mood"],
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Urban Geometry",
    category: "Photography",
    description: "Exploring the interaction between light, shadow, and modern architecture in the developing sides of the city.",
    tags: ["Architecture", "Composition", "B&W"],
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2070&auto=format&fit=crop"
  }
];

const ProjectCard = ({ project }: { project: ProjectData }) => (
  <div className="group flex flex-col h-full bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)] transition-all duration-500">
    
    {/* Image Container */}
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-20 z-10" />
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      
      {/* Category Badge on Image */}
      <div className="absolute top-4 left-4 z-20">
         <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-black bg-white/90 backdrop-blur-md rounded-full">
            {project.category}
         </span>
      </div>
    </div>

    {/* Content Container */}
    <div className="p-6 flex flex-col flex-grow">
      
      <h3 className="text-2xl font-display font-medium text-white mb-3 group-hover:text-emerald-200 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400 font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* Link Action */}
      <div className="flex items-center gap-2 text-sm font-medium text-white group/link cursor-pointer pt-4 border-t border-white/5">
         <span>View Details</span>
         <ArrowUpRight size={16} className="text-emerald-400 transform transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
      </div>

    </div>
  </div>
);

const PhotographyCard = ({ project }: { project: ProjectData }) => (
  <div className="group relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden cursor-pointer border border-white/10">
    {/* Full Image */}
    <img 
      src={project.image} 
      alt={project.title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />

    {/* Category Badge - Top Right */}
    <div className="absolute top-4 right-4 z-20">
        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <ArrowUpRight size={14} className="text-white" />
        </div>
    </div>

    {/* Content positioned at bottom */}
    <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start justify-end">
       <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
         <span className="text-emerald-400 font-mono text-[10px] tracking-widest uppercase mb-2 block">{project.category}</span>
         <h3 className="text-3xl text-white font-display font-medium mb-3 leading-tight">{project.title}</h3>
         
         <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500">
             <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
             <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] text-white/80 border border-white/20 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">{tag}</span>
                ))}
             </div>
         </div>
       </div>
    </div>
  </div>
);

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Get unique categories + All
  const categories = ['All', 'Development', 'Design', 'Videography', 'Photography'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  return (
    <section id="projects" className="scroll-mt-32">
      <FadeIn>
        {/* Section Header */}
        <div className="text-center mb-10 space-y-4">
           <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight">
             Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Works</span>
           </h2>
           <p className="text-secondary max-w-2xl mx-auto text-lg">
             A curated collection of works demonstrating expertise in design, development, visual storytelling, and photography.
           </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-white text-black border-white' 
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]">
          {filteredProjects.map((project, index) => (
             <FadeIn key={`${filter}-${index}`} delay={index * 100} className="h-full">
               {project.category === 'Photography' ? (
                 <PhotographyCard project={project} />
               ) : (
                 <ProjectCard project={project} />
               )}
             </FadeIn>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                View All Archives
                <ArrowUpRight size={16} />
            </a>
        </div>

      </FadeIn>
    </section>
  );
};
