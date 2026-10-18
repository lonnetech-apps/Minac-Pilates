import React from 'react';
import { ArrowRight } from 'lucide-react';
import teamPhoto from '../assets/images/team_physiotherapist_1792356863333.jpg';
import { MinacFlourish } from './MinacLogo';

interface TeamSectionProps {
  onOpenTeamModal: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenTeamModal }) => {
  return (
    <section id="equipe" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E4DDD0] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Photo */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-md border-2 border-white bg-[#EFECE4]">
                <img
                  src={teamPhoto}
                  alt="Fisioterapeuta e Instrutora de Pilates da Clínica MINAC"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Middle Column: Text & CTA */}
            <div className="lg:col-span-5 space-y-3.5 text-center lg:text-left">
              <h2 className="font-serif-custom text-2xl sm:text-3xl text-[#242724] tracking-tight">
                Nossa Equipe
              </h2>
              <p className="text-sm text-[#555C52] leading-relaxed max-w-md mx-auto lg:mx-0">
                Fisioterapeutas e Instrutora de Pilates com experiência e cuidado em cada atendimento.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenTeamModal}
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#3D4739] hover:bg-[#2D352A] text-white text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Conheça nossa equipe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Handwritten Motto & Brand Flourish */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E8E2D5]">
              <div className="space-y-1">
                <p 
                  className="font-script text-2xl sm:text-3xl lg:text-[2rem] text-[#4A5645] leading-snug tracking-wide italic"
                  style={{ textShadow: '0 1px 1px rgba(0,0,0,0.03)' }}
                >
                  Mais saúde,<br />
                  o mesmo propósito:<br />
                  <span className="text-[#FF4D00] font-semibold">seu bem-estar.</span>
                </p>
              </div>
              
              <div className="mt-3 opacity-90">
                <MinacFlourish className="w-24 h-14" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
