import React from 'react';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  benefits: string[];
  forWho: string[];
  sessionTime: string;
}

interface ServiceModalProps {
  service: ServiceData | null;
  isOpen: boolean;
  onClose: () => void;
  onSchedule: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
  onSchedule
}) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E5DECF] overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        role="dialog"
      >
        <div className="relative h-52 sm:h-60 w-full overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-widest text-[#E5DECF] font-semibold">
              Serviço Especializado
            </span>
            <h3 className="font-serif-custom text-2xl sm:text-3xl font-medium tracking-wide">
              {service.title}
            </h3>
            <p className="text-sm text-gray-200 mt-0.5">{service.subtitle}</p>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <p className="text-sm text-[#4A5645] leading-relaxed">
            {service.description}
          </p>

          <div className="bg-white p-4 rounded-xl border border-[#E9E4D8] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3D4739] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B85B38]" />
              Principais Benefícios
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5D645A]">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B85B38] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3D4739] mb-2">
              Indicado para:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {service.forWho.map((item, idx) => (
                <span 
                  key={idx} 
                  className="text-xs px-2.5 py-1 bg-[#EFECE4] text-[#4A5645] rounded-md font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E5DECF]">
            <span className="text-xs text-[#8C9388]">
              Duração da sessão: <strong className="text-[#3D4739]">{service.sessionTime}</strong>
            </span>
            <button
              onClick={() => {
                onClose();
                onSchedule(service.title);
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-[#B85B38] hover:bg-[#A34E2E] text-white text-xs font-medium uppercase tracking-wider rounded-xl shadow transition"
            >
              <span>Agendar Horário</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
