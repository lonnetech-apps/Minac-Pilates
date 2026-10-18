import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_pilates_studio_1792356860067.jpg';

interface HeroProps {
  onOpenSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20">
      {/* Top right decorative background arch matching the new logo */}
      <div 
        className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 md:w-96 md:h-96 rounded-full border-[28px] md:border-[42px] border-[#FF4D00]/70 opacity-80 -z-10 translate-x-12 -translate-y-8"
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute top-48 right-10 w-44 h-44 rounded-full border-[18px] border-[#236B35]/40 opacity-60 -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Primary CTA */}
          <div className="lg:col-span-6 space-y-6 md:pr-4">
            
            {/* Kicker */}
            <div className="text-xs md:text-sm font-semibold tracking-[0.22em] text-[#5A6356] uppercase">
              MOVIMENTO &nbsp;•&nbsp; EQUILÍBRIO &nbsp;•&nbsp; BEM-ESTAR
            </div>

            {/* Headline */}
            <h1 className="font-serif-custom text-4xl sm:text-5xl lg:text-6xl text-[#242724] leading-[1.12] tracking-tight text-balance">
              Pilates, Fisioterapia e Terapias Manuais
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#555C52] max-w-xl font-normal leading-relaxed">
              Cuidado individualizado para o seu corpo, movimento e bem-estar.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenSchedule}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#FF4D00] text-white font-medium text-sm sm:text-base tracking-wide shadow-md hover:bg-[#E04400] hover:shadow-lg transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Agendar pelo WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <span className="text-xs text-[#717A6D] sm:hidden font-medium">
                Máx. 2 alunos por instrutora
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset with organic frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-[#E6DFD2] rounded-3xl transform rotate-1 scale-[1.02] -z-10 opacity-70" />
              
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-[#E0D9CB] bg-white aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={heroImg}
                  alt="Aluna praticando Pilates no reformer em estúdio iluminado da MINAC"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
