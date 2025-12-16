import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const links = [
    { name: 'About', href: '#about' },
    { name: 'CV', href: '#cv' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      // Check if at top to reset or set home
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section instanceof HTMLElement) {
          if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
            setActiveSection(link.href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto glass px-2 py-2 rounded-full flex items-center gap-2 shadow-2xl ring-1 ring-white/10 bg-black/40">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, '#')}
          className="px-5 py-2 rounded-full font-display font-bold text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
        >
          Cahyo.
        </a>
        <div className="h-4 w-[1px] bg-white/10 mx-1"></div>
        <div className="flex gap-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === link.href 
                  ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]' 
                  : 'text-secondary hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};