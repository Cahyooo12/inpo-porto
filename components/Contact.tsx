import React from 'react';
import { ArrowUpRight, Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const LinkCard = ({ icon: Icon, name, label, href, gradient }: any) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group relative overflow-hidden p-8 rounded-3xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-500"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div className="flex justify-between items-start mb-8">
        <div className="p-3 rounded-full bg-white/5 text-white border border-white/5 group-hover:scale-110 transition-transform duration-500">
          <Icon size={24} />
        </div>
        <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
      </div>
      <div>
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1 block">{name}</span>
        <span className="text-xl md:text-2xl text-white font-display font-medium block">{label}</span>
      </div>
    </div>
  </a>
);

export const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-32 pb-20">
      <FadeIn>
        <div className="mb-12">
          <h2 className="font-display text-5xl md:text-7xl text-white font-medium tracking-tighter mb-6">
            Let's start a <br/>
            <span className="text-gray-600">conversation.</span>
          </h2>
          <p className="text-secondary text-lg max-w-xl">
            Interested in collaboration or just want to say hi? I'm always open to new ideas and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LinkCard 
            icon={Mail}
            name="Email"
            label="Cahsirat05@gmail.com"
            href="mailto:Cahsirat05@gmail.com"
            gradient="from-blue-500 to-cyan-500"
          />
          <LinkCard 
            icon={Instagram}
            name="Instagram"
            label="@cahyo_sirat05"
            href="https://www.instagram.com/cahyo_sirat05/"
            gradient="from-pink-500 to-orange-500"
          />
          <LinkCard 
            icon={Linkedin}
            name="LinkedIn"
            label="/in/cahyo-"
            href="https://www.linkedin.com/in/cahyo-"
            gradient="from-blue-600 to-indigo-600"
          />
        </div>
      </FadeIn>
    </section>
  );
};
