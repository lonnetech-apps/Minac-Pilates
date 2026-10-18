import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenSchedule: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenSchedule }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Little nudge tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mb-2 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-[#E0D9CB] text-xs text-[#2D312E] animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <span>Fale com a nossa fisioterapeuta no WhatsApp</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5 ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <button
        onClick={onOpenSchedule}
        aria-label="Conversar no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="sr-only">Agendar pelo WhatsApp</span>
      </button>
    </div>
  );
};
