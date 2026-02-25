import React, { useState, useEffect } from 'react';

export const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        timeZone: 'Asia/Jakarta' 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/50 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-12">
            
            <div className="md:col-span-2">
              <a href="#" className="font-display font-bold text-3xl text-white block mb-6">Cahyo.</a>
              <p className="text-secondary max-w-sm text-lg leading-relaxed">
                Crafting digital experiences with a focus on aesthetics, usability, and social impact.
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Sitemap</h4>
              <ul className="space-y-3 text-secondary">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#cv" className="hover:text-white transition-colors">CV & Experience</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Works</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <ul className="space-y-3 text-secondary">
                <li><a href="https://www.instagram.com/cahyo_sirat05/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/cahyo-" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="mailto:Cahsirat05@gmail.com" className="hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 uppercase tracking-wider font-mono">
            <p>© 2025 Cahyo Portfolio.</p>
            
            <div className="flex items-center gap-2 mt-4 md:mt-0">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span>Yogyakarta, ID — {time} WIB</span>
            </div>
          </div>
          
          <div className="mt-20 text-center md:text-left opacity-20 hover:opacity-40 transition-opacity select-none pointer-events-none">
             <span className="text-[12vw] leading-none font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent">
                CAHYO
             </span>
          </div>
        </div>
    </footer>
  );
};