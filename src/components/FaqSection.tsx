import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Nunca pratiquei Pilates antes. Posso começar do zero?',
      a: 'Com certeza! Nosso atendimento é 100% individualizado (máximo de 2 alunos por instrutora). O ritmo e os exercícios são adaptados às suas capacidades atuais, com progressão gradual e acompanhamento constante da postura e respiração.'
    },
    {
      q: 'Como funciona a avaliação inicial?',
      a: 'Antes de iniciar, realizamos uma avaliação biomecânica detalhada: examinamos sua postura, histórico de saúde, lesões prévias, amplitude articular e objetivos pessoais. Dessa forma, traçamos um plano de exercícios exclusivo para você.'
    },
    {
      q: 'Quantas vezes na semana é recomendado praticar?',
      a: 'Recomendamos de 2 a 3 vezes por semana para resultados consistentes em força, mobilidade e controle da dor. No entanto, mesmo com 1 vez por semana você já notará alívio de tensões e melhora na postura corporal.'
    },
    {
      q: 'Emitem recibo para reembolso no plano de saúde (convênio)?',
      a: 'Sim! Para os atendimentos de Fisioterapia e Reabilitação, emitimos recibo e relatório fisioterapêutico oficial com número de CREFITO, que podem ser submetidos ao seu plano de saúde para solicitação de reembolso.'
    },
    {
      q: 'Qual roupa é mais indicada para as sessões?',
      a: 'Roupas leves e confortáveis que permitam amplitude de movimento (legging, bermuda de lycra ou algodão, camiseta confortável). O estúdio possui piso higienizado e o Pilates é praticado com meias antiderrapantes.'
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-[#B85B38] font-semibold">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-serif-custom text-2xl sm:text-3xl text-[#242724] tracking-tight mt-1">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2DBD0] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-serif-custom text-base sm:text-lg text-[#242724] hover:text-[#B85B38] transition-colors"
                >
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8C9884] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#B85B38]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#555C52] leading-relaxed border-t border-[#F3EFE7] animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
