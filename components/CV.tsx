import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Briefcase, GraduationCap, Heart, Award } from 'lucide-react';

const CVItem = ({ year, role, org, desc }: { year: string, role: string, org: string, desc?: string }) => (
  <div className="relative pl-8 border-l border-white/10 pb-8 last:pb-0">
    <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-surface border border-white/20" />
    <span className="text-xs font-mono text-secondary mb-1 block">{year}</span>
    <h4 className="text-lg text-white font-medium">{role}</h4>
    <p className="text-gray-400 text-sm mb-2">{org}</p>
    {desc && <p className="text-gray-500 text-sm leading-relaxed max-w-md">{desc}</p>}
  </div>
);

const VolunteerCard = ({ role, org, event }: { role: string, org: string, event?: string }) => (
  <div className="group p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.02]">
    <div className="mb-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-colors">
      <Heart size={18} />
    </div>
    <h4 className="text-white font-medium text-lg mb-1">{role}</h4>
    <p className="text-secondary text-sm">{org}</p>
    {event && <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide font-medium">{event}</p>}
  </div>
);

const AchievementCard = ({ icon, title, org, year }: { icon: string, title: string, org: string, year: string }) => (
  <div className="p-4 rounded-2xl bg-surface border border-white/5 flex gap-4 items-start hover:border-white/20 hover:bg-white/5 transition-all duration-300">
    <span className="text-2xl mt-0.5 block">{icon}</span>
    <div>
      <h4 className="text-white font-medium text-sm md:text-base leading-tight">{title}</h4>
      <p className="text-xs text-gray-500 mt-1">{org} <span className="mx-1">•</span> {year}</p>
    </div>
  </div>
);

export const CV = () => {
  return (
    <section id="cv" className="scroll-mt-32">
      
      {/* Education & Experience Grid */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-24">
        
        {/* Education */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-white/5 rounded-lg text-white"><GraduationCap size={20} /></div>
              <h3 className="text-lg font-display font-medium text-white">Education</h3>
            </div>
          </FadeIn>
          <div className="space-y-2">
            <FadeIn delay={100}>
              <CVItem 
                year="2025–2029" 
                role="Bachelor of Information Systems" 
                org="Amikom University" 
                desc="Specializing in digital systems, creative technology, and UI/UX design." 
              />
            </FadeIn>
            <FadeIn delay={200}>
              <CVItem 
                year="2022–2025" 
                role="High School Diploma (Social Studies)" 
                org="SMAN 1 Bambanglipuro" 
                desc="Graduated with honors. GPA: 86.1" 
              />
            </FadeIn>
          </div>

          {/* Achievements Section */}
          <div className="mt-12">
             <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white/5 rounded-lg text-white"><Award size={20} /></div>
                  <h3 className="text-lg font-display font-medium text-white">Achievements</h3>
                </div>
             </FadeIn>
             <FadeIn delay={300}>
                <div className="flex flex-col gap-3">
                  <AchievementCard 
                     icon="🥉" 
                     title="3rd Place Video Competition" 
                     org="Balai Tekkomdik DIY" 
                     year="2024"
                  />
                  <AchievementCard 
                     icon="🥉" 
                     title="3rd Place in the Student Creativity Program - Community Service" 
                     org="PIMAPOSMA AMIKOM" 
                     year="2025"
                  />
                </div>
             </FadeIn>
          </div>
        </div>

        {/* Experience */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-white/5 rounded-lg text-white"><Briefcase size={20} /></div>
              <h3 className="text-lg font-display font-medium text-white">Experience</h3>
            </div>
          </FadeIn>
          <div className="space-y-2">
            <FadeIn delay={100}>
              <CVItem 
                year="2024–Present" 
                role="Social Media Manager" 
                org="Desamind Yogyakarta" 
                desc="Spearheading social media strategies, designing visual content, and managing community engagement for village empowerment programs." 
              />
            </FadeIn>
            <FadeIn delay={200}>
              <CVItem 
                year="2024–Present" 
                role="Content Creator" 
                org="RCE Youth UGM" 
                desc="Developing educational content focused on Sustainable Development Goals (SDGs) and youth participation." 
              />
            </FadeIn>
            <FadeIn delay={300}>
              <CVItem 
                year="2022–2024" 
                role="Student Council (OSIS)" 
                org="SMAN 1 Bambanglipuro" 
                desc="Led the 'Bamsayota Berbagi' charity event and coordinated various school-wide initiatives." 
              />
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Volunteer Section - Separated & Styled */}
      <FadeIn>
        <div className="border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <h3 className="font-display text-3xl text-white font-medium mb-2">Community & Impact</h3>
              <p className="text-secondary max-w-md">Volunteering allows me to give back and stay connected to the grassroots.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-white/10 ml-8 mb-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <VolunteerCard role="Field Volunteer" org="Pandara Foundation" event="Parangtritis Beach Cleanup" />
             <VolunteerCard role="Leadership Camp" org="Desamind ID" event="Volunteer Participant" />
             <VolunteerCard role="Environmental Action" org="4K Yogyakarta" event="Sea Pandan Planting" />
             <VolunteerCard role="Event Staff" org="Vegan Festival Yogyakarta" event="Coordinator Assistant" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
