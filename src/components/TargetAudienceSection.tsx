import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface TargetAudienceSectionProps {
  onOpenSchedule: () => void;
}

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({ onOpenSchedule }) => {
  const points = [
    'Dor e tensões musculares',
    'Reabilitação de lesões',
    'Postura e alinhamento',
    'Saúde da coluna',
    'Equilíbrio e mobilidade',
    'Bem-estar e qualidade de vida',
  ];

  return (
    <section id="sobre" className="py-12 md:py-16 border-t border-[#DDD5C5]/70 bg-[#F5F2EB]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 rounded-3xl p-8 md:p-12 border border-[#E4DDD0] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Column */}
            <div className="md:col-span-6 space-y-4 md:pr-6">
              <span className="text-xs uppercase tracking-widest text-[#B85B38] font-semibold">
                Indicação Clínica
              </span>
              <h2 className="font-serif-custom text-3xl sm:text-4xl text-[#242724] tracking-tight">
                Para quem é?
              </h2>
              <p className="text-base text-[#525B4E] leading-relaxed">
                Atendemos pessoas de todas as idades que buscam mais saúde, movimento e bem-estar, seja para prevenir, tratar ou melhorar a qualidade de vida.
              </p>
              <div className="pt-3">
                <button
                  onClick={onOpenSchedule}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#B85B38] hover:text-[#9A4626] transition-colors group"
                >
                  <span>Deseja saber qual o melhor tratamento para você? Fale conosco</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column with Vertical Divider */}
            <div className="md:col-span-6 md:border-l md:border-[#DDD5C5] md:pl-10">
              <ul className="space-y-3.5">
                {points.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-[#3A4337] font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#3D4739]/10 text-[#3D4739] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
