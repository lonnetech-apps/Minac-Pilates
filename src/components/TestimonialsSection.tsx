import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Renata Albuquerque',
      role: 'Aluna de Pilates há 2 anos',
      text: 'Comecei por indicação médica devido a duas hérnias de disco. Em menos de 3 meses as dores sumiram completamente. O fato de serem no máximo 2 alunos por instrutora faz toda a diferença na correção dos movimentos.',
      rating: 5,
    },
    {
      name: 'Carlos Eduardo Mendes',
      role: 'Paciente de Fisioterapia & Terapias Manuais',
      text: 'Excelente atendimento! Sofri uma lesão no menisco e o plano de reabilitação foi super individualizado. A combinação de fisioterapia com as terapias manuais devolveu minha mobilidade e confiança para correr.',
      rating: 5,
    },
    {
      name: 'Beatriz Vasconcelos',
      role: 'Aluna de Pilates Gestante & Aromaterapia',
      text: 'O estúdio é um oásis de tranquilidade no dia a dia. Pratiquei Pilates durante toda a minha gravidez com total segurança e a aromaterapia no final de cada sessão me deixava muito calma e revigorada.',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F4F0E8]/50 border-t border-[#E5DECF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-1 text-[#B85B38] mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <h2 className="font-serif-custom text-2xl sm:text-3xl text-[#242724] tracking-tight">
            O que nossos alunos e pacientes dizem
          </h2>
          <p className="text-xs sm:text-sm text-[#5D645A] mt-2">
            Avaliação 5.0 estrelas no Google • Histórias reais de transformação e alívio da dor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E4DDD0] shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#B85B38]/30 mb-3" />
                <p className="text-xs sm:text-sm text-[#4A5645] leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F0EBE0] flex items-center justify-between">
                <div>
                  <h3 className="font-serif-custom text-sm font-semibold text-[#242724]">
                    {t.name}
                  </h3>
                  <p className="text-[11px] text-[#788172]">
                    {t.role}
                  </p>
                </div>
                <div className="flex gap-0.5 text-[#B85B38]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
