import React, { useState } from 'react';
import { X, MessageCircle, Calendar, Clock, CheckCircle2, Phone, User, Sparkles } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Pilates'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService);
  const [period, setPeriod] = useState('Manhã');
  const [objective, setObjective] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync initialService when modal opens with specific service
  React.useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Olá! Gostaria de agendar um horário na *MINAC Pilates e Fisioterapia*.%0A%0A*Nome:* ${encodeURIComponent(name || 'Cliente')}%0A*Telefone:* ${encodeURIComponent(phone || 'Não informado')}%0A*Serviço de interesse:* ${encodeURIComponent(service)}%0A*Período de preferência:* ${encodeURIComponent(period)}${objective ? `%0A*Observação / Objetivo:* ${encodeURIComponent(objective)}` : ''}%0A%0A_Vim pelo site oficial MINAC._`;

    // Wait a brief moment to show success message then open WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/5511916636635?text=${message}`, '_blank');
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1500);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E5DECF] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header pattern */}
        <div className="bg-[#3D4739] text-[#FAF8F5] px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#FF4D00] flex items-center justify-center text-white shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-custom text-lg font-medium tracking-wide">Agendar pelo WhatsApp</h3>
              <p className="text-xs text-[#E5DECF] font-sans-custom">Resposta rápida da nossa equipe de fisioterapeutas</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-[#FAF8F5]/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content */}
        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#3D4739]/10 text-[#3D4739] flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
            </div>
            <h4 className="font-serif-custom text-xl text-[#2D312E] font-medium">Redirecionando para o WhatsApp...</h4>
            <p className="text-sm text-[#5D645A] max-w-sm">
              Sua solicitação foi preparada. Você será direcionado para iniciar a conversa diretamente com a nossa fisioterapeuta.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#4A5645] uppercase tracking-wider mb-1.5">
                Seu Nome
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#8C9388] absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Ex: Mariana Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#DDD5C5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#B85B38] focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#4A5645] uppercase tracking-wider mb-1.5">
                  Telefone / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8C9388] absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#DDD5C5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#B85B38] focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A5645] uppercase tracking-wider mb-1.5">
                  Serviço Desejado
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#DDD5C5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#B85B38] focus:border-transparent transition"
                >
                  <option value="Pilates">Pilates (Reformer & Studio)</option>
                  <option value="Fisioterapia">Fisioterapia Especializada</option>
                  <option value="Terapias Manuais">Terapias Manuais & Liberação</option>
                  <option value="Aromaterapia Clínica">Aromaterapia Clínica</option>
                  <option value="Avaliação Geral">Avaliação Global do Corpo</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4A5645] uppercase tracking-wider mb-1.5">
                Período Preferido
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Manhã', 'Tarde', 'Noite'].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPeriod(p)}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                      period === p
                        ? 'bg-[#3D4739] text-white border-[#3D4739] shadow-sm'
                        : 'bg-white text-[#4A5645] border-[#DDD5C5] hover:border-[#3D4739]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4A5645] uppercase tracking-wider mb-1.5">
                Conte brevemente o que você busca (opcional)
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Sinto dores nas costas, ou quero fortalecer postura..."
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                className="w-full p-3 bg-white border border-[#DDD5C5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4D00] focus:border-transparent transition resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#FF4D00] hover:bg-[#E04400] text-white font-medium text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirmar e Conversar no WhatsApp</span>
              </button>
              <p className="text-[11px] text-[#8C9388] text-center mt-2.5">
                Atendimento humanizado • Máximo de 2 alunos por instrutora
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
