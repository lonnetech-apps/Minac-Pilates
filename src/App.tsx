import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightsStrip } from './components/HighlightsStrip';
import { ServicesSection } from './components/ServicesSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ScheduleModal } from './components/ScheduleModal';
import { TeamModal } from './components/TeamModal';
import { ServiceModal, ServiceData } from './components/ServiceModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [initialScheduleService, setInitialScheduleService] = useState('Pilates');

  const handleOpenSchedule = (serviceName?: string) => {
    if (serviceName) {
      setInitialScheduleService(serviceName);
    }
    setScheduleModalOpen(true);
  };

  const handleSelectService = (service: ServiceData) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2] text-[#2D312E] font-sans-custom selection:bg-[#B85B38]/20 selection:text-[#B85B38]">
      {/* Top Navigation */}
      <Navbar onOpenSchedule={() => handleOpenSchedule()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenSchedule={() => handleOpenSchedule('Pilates')} />

        {/* 2. Key Highlights Strip (4 items) */}
        <HighlightsStrip />

        {/* 3. Nossos Serviços (4 cards) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Para quem é? (Checklist section) */}
        <TargetAudienceSection onOpenSchedule={() => handleOpenSchedule('Avaliação Geral')} />

        {/* 5. Nossa Equipe & Motto Callout */}
        <TeamSection onOpenTeamModal={() => setTeamModalOpen(true)} />

        {/* 6. Testemunhos e Avaliações de Pacientes */}
        <TestimonialsSection />

        {/* 7. Dúvidas Frequentes */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp onOpenSchedule={() => handleOpenSchedule()} />

      {/* Modals & Drawers */}
      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        initialService={initialScheduleService}
      />

      <TeamModal
        isOpen={teamModalOpen}
        onClose={() => setTeamModalOpen(false)}
        onOpenSchedule={() => handleOpenSchedule('Pilates Clínico')}
      />

      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onSchedule={(serviceTitle) => {
          setSelectedService(null);
          handleOpenSchedule(serviceTitle);
        }}
      />
    </div>
  );
}
