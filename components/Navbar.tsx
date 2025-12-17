import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'CV', href: '#cv' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

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
    <div className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <nav 
        className={`pointer-events-auto glass transition-all duration-500 ease-out shadow-2xl ring-1 ring-white/10 bg-black/40 
          ${isMobileMenuOpen 
            ? 'rounded-[2rem] p-3 flex flex-col w-full max-w-[280px]' 
            : 'rounded-full px-2 py-2 flex items-center gap-2 w-auto'
          }`}
      >
        <div className={`flex items-center justify-between w-full ${!isMobileMenuOpen ? 'md:w-auto' : ''}`}>
           <a 
             href="#" 
             onClick={(e) => { scrollToSection(e, '#'); setIsMobileMenuOpen(false); }}
             className="px-5 py-2 rounded-full font-display font-bold text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/5 whitespace-nowrap"
           >
             Cahyo.
           </a>

           {/* Mobile Menu Toggle */}
           <button 
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className={`md:hidden p-2.5 rounded-full bg-white/5 text-white border border-white/5 hover:bg-white/10 transition-colors ml-2 ${!isMobileMenuOpen ? 'block' : 'absolute top-3 right-3'}`}
             aria-label="Toggle menu"
           >
             {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
           </button>
        </div>
        
        {/* Desktop Divider */}
        <div className={`hidden md:block h-4 w-[1px] bg-white/10 mx-1 ${isMobileMenuOpen ? 'hidden' : ''}`}></div>
        
        {/* Links */}
        <div className={`
            flex md:flex-row gap-1
            ${isMobileMenuOpen 
              ? 'flex-col w-full mt-4 animate-in fade-in slide-in-from-top-4 duration-300' 
              : 'hidden md:flex'
            }
        `}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                scrollToSection(e, link.href);
                setIsMobileMenuOpen(false);
              }}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 text-center
                ${activeSection === link.href 
                  ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]' 
                  : 'text-secondary hover:text-white hover:bg-white/5'
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};
