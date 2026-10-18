import React from 'react';
import { X, Award, CheckCircle, GraduationCap, Heart, Calendar } from 'lucide-react';
import teamImg from '../assets/images/team_physiotherapist_1792356863333.jpg';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSchedule: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose, onOpenSchedule }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E5DECF] overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        role="dialog"
      >
        <div className="bg-[#3D4739] text-[#FAF8F5] px-6 py-5 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#E5DECF]" />
            <h3 className="font-serif-custom text-xl font-medium">Nossa Equipe de Fisioterapeutas</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-[#FAF8F5]/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-[#E5DECF]">
              <img 
                src={teamImg} 
                alt="Fisioterapeuta MINAC" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#B85B38]">
                Coordenação Clínica & Instrutora
              </span>
              <h4 className="font-serif-custom text-2xl font-semibold text-[#2D312E]">
                Drª. Camila M. Minac
              </h4>
              <p className="text-xs text-[#5D645A] font-medium">
                CREFITO-3 / 248.910-F • Graduação em Fisioterapia pela USP
              </p>
              <p className="text-sm text-[#4A5645] leading-relaxed pt-1">
                Especialista em Reabilitação da Coluna Vertebral e Pilates Clínico Avançado pela The Pilates Method Alliance (PMA). Formação em Terapias Manuais Miofasciais e Aromaterapia Aplicada à Saúde Física e Mental.
              </p>
            </div>
          </div>

          <div className="border-t border-[#E5DECF] pt-5">
            <h5 className="font-serif-custom text-lg font-medium text-[#2D312E] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#B85B38]" />
              Diferenciais do nosso Atendimento
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#4A5645]">
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E9E4D8]">
                <CheckCircle className="w-4 h-4 text-[#3D4739] shrink-0 mt-0.5" />
                <span><strong>Turmas reduzidas:</strong> Máximo de 2 alunos por instrutora para correção postural minuciosa.</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E9E4D8]">
                <CheckCircle className="w-4 h-4 text-[#3D4739] shrink-0 mt-0.5" />
                <span><strong>Avaliação Prévia:</strong> Análise postural e histórico clínico completo antes de iniciar.</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E9E4D8]">
                <CheckCircle className="w-4 h-4 text-[#3D4739] shrink-0 mt-0.5" />
                <span><strong>Aparelhos Originais:</strong> Equipamentos de Pilates modernos, higienizados e de alta performance.</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E9E4D8]">
                <CheckCircle className="w-4 h-4 text-[#3D4739] shrink-0 mt-0.5" />
                <span><strong>Abordagem Integrativa:</strong> Associação de técnicas manuais e aromaterapia com foco no bem-estar total.</span>
              </div>
            </div>
          </div>

          <div className="bg-[#EFECE4] p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <p className="font-serif-custom font-medium text-base text-[#2D312E]">
                Venha fazer uma aula experimental
              </p>
              <p className="text-xs text-[#5D645A]">
                Conheça nosso estúdio e sinta a diferença no seu corpo.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenSchedule();
              }}
              className="px-5 py-2.5 bg-[#B85B38] hover:bg-[#A34E2E] text-white text-xs font-medium uppercase tracking-wider rounded-lg shadow transition-colors shrink-0"
            >
              Agendar Avaliação
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
