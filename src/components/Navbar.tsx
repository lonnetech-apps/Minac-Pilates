import React, { useState } from 'react';
import { MinacLogo } from './MinacLogo';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F8F6F2]/95 backdrop-blur-md border-b border-[#E7E2D6] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Brand wordmark and emblem */}
          <a href="#inicio" className="shrink-0 transition-opacity hover:opacity-95" aria-label="MINAC Início">
            <MinacLogo size="md" />
          </a>

          {/* Zone 2: Navigation Links (desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A5645]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 transition-colors hover:text-[#FF4D00] relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF4D00] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSchedule}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3D4739] text-[#FAF8F5] text-xs font-semibold tracking-wide hover:bg-[#2D352A] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#8C9884] fill-current" />
              <span>Fale Conosco</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenSchedule}
              className="p-2 rounded-full bg-[#3D4739] text-white hover:bg-[#2D352A] transition"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#3D4739] hover:bg-[#EAE4D6] transition"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E7E2D6] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#3D4739] hover:bg-[#EFECE4] rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#E7E2D6]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#3D4739] text-white text-sm font-semibold tracking-wide shadow"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#8C9884]" />
              <span>Fale Conosco no WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
