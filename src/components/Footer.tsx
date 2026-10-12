import React from 'react';
import { Globe } from 'lucide-react';

interface Props {
  onOpenGoogleSitesModal: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenGoogleSitesModal }) => {
  return (
    <footer className="bg-[#14325C] text-white border-t-4 border-[#0d2342] py-8 text-sm sm:text-base font-semibold">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-2">
          <strong>Gestión de Obras</strong> • Paraguay
        </div>

        <div className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm font-bold">
          ⚙ Sistema de control de obras en campo
        </div>

        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          <button
            onClick={onOpenGoogleSitesModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-extrabold text-xs border border-white/30 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#FFC400]" />
            <span>Guía Google Sites</span>
          </button>

          <a
            href="https://www.facebook.com/gestiondeobraix/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#14325C] font-extrabold text-xs hover:bg-[#E9ECF0] transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-[#1877F2]" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </a>

          <a
            href="https://wa.me/59599742457?text=quiero%20mas%20informaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1FA855] text-white font-extrabold text-xs hover:bg-[#198745] transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 32 32">
              <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.8 1.5 5.6 1.5 7 0 12.6-5.6 12.6-12.5S23 3 16 3zm0 22.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.4 1.2 1.2-4.3-.3-.4a10.2 10.2 0 0 1-1.6-5.5C5.5 9.9 10.2 5.3 16 5.3s10.5 4.6 10.5 10.3S21.8 25.8 16 25.8zm5.8-7.6c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-.9 1.2-.4.2-.7.1c-1.9-.9-3.1-1.7-4.3-3.8-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};
