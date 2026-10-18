import React from 'react';
import { MinacLogo, MinacFlourish } from './MinacLogo';
import { Phone, Globe, Instagram, Facebook, Youtube, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="border-t border-[#DDD5C5] bg-[#F4F0E8] text-[#3D4739] pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row matching the layout in image.png */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-[#E2DBD0]">
          
          {/* Brand */}
          <div className="shrink-0">
            <a href="#inicio" className="inline-block">
              <MinacLogo size="md" />
            </a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs sm:text-sm font-medium text-[#4A5645]">
            
            {/* Phone / WhatsApp */}
            <a
              href="https://wa.me/5511916636635"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#B85B38] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B85B38]" />
              <span className="font-semibold">(11) 91663-6635</span>
            </a>

            {/* Website */}
            <a
              href="https://www.minac.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#B85B38] transition-colors"
            >
              <Globe className="w-4 h-4 text-[#B85B38]" />
              <span>www.minac.com.br</span>
            </a>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-[#4A5645]">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#B85B38] transition-colors p-1"
                  aria-label="Instagram MINAC"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#B85B38] transition-colors p-1"
                  aria-label="Facebook MINAC"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#B85B38] transition-colors p-1"
                  aria-label="YouTube MINAC"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
              <span className="text-xs text-[#5D6657]">@minac.pilates</span>
            </div>

          </div>

          {/* Right Flourish */}
          <div className="shrink-0 hidden lg:block opacity-90">
            <MinacFlourish className="w-20 h-10" />
          </div>

        </div>

        {/* Secondary info bar: Address & Hours & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6A7364]">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B85B38]" />
              <span>Rua das Acácias, 142 • Jardins • São Paulo - SP</span>
            </span>
            <span className="hidden md:inline text-[#C0B9AA]">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B85B38]" />
              <span>Seg a Sex: 07h às 20h • Sáb: 08h às 12h</span>
            </span>
          </div>

          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} MINAC Pilates e Fisioterapia. Todos os direitos reservados.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
