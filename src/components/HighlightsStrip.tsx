import React from 'react';
import { Heart, User, Flower2, Leaf } from 'lucide-react';

export const HighlightsStrip: React.FC = () => {
  const highlights = [
    {
      icon: <Heart className="w-6 h-6 text-[#3D4739] stroke-[1.6]" />,
      title: 'Atendimento individualizado',
      subtitle: 'Máx. 2 alunos por profissional',
    },
    {
      icon: <User className="w-6 h-6 text-[#3D4739] stroke-[1.6]" />,
      title: 'Profissionais qualificados',
      subtitle: 'Fisioterapeuta e Instrutora de Pilates',
    },
    {
      icon: <Flower2 className="w-6 h-6 text-[#3D4739] stroke-[1.6]" />,
      title: 'Ambiente acolhedor e seguro',
      subtitle: 'Estrutura privativa e climatizada',
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#3D4739] stroke-[1.6]" />,
      title: 'Técnicas integrativas com Aromaterapia',
      subtitle: 'Clínica',
    },
  ];

  return (
    <section className="relative border-y border-[#DDD5C5] bg-[#F2EEE6]/60 py-6 md:py-8 my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DDD5C5]">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-4 py-4 sm:py-2 ${
                index !== 0 ? 'sm:pl-6' : ''
              } ${index !== highlights.length - 1 ? 'sm:pr-6' : ''}`}
            >
              <div className="mb-2.5 p-2 rounded-full bg-white/70 shadow-2xs border border-[#E5DECF]">
                {item.icon}
              </div>
              <h3 className="font-serif-custom text-base md:text-[1.05rem] font-medium text-[#242724] tracking-tight leading-snug">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-xs md:text-[13px] text-[#60695B] mt-1 font-sans-custom">
                  {item.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
