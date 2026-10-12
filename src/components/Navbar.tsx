import React from 'react';
import { Share2, Globe, MessageCircle } from 'lucide-react';

interface Props {
  onOpenGoogleSitesModal: () => void;
  onOpenPayrollModal: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenGoogleSitesModal, onOpenPayrollModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b-[3.5px] border-[#14325C] shadow-xs">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="bg-[#FFC400] text-[#14325C] font-black text-lg px-2.5 py-1 rounded-lg border-2 border-[#14325C] shadow-[2px_2px_0_#14325C] group-hover:scale-105 transition-transform">
            GO
          </span>
          <span className="font-black text-xl text-[#14325C] tracking-tight">
            Gestión de Obras
          </span>
        </a>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-6 font-bold text-sm text-[#1B2A41]">
          <a href="#problemas" className="hover:text-[#2A5189] hover:underline underline-offset-4">
            Problemas comunes
          </a>
          <a href="#funciones" className="hover:text-[#2A5189] hover:underline underline-offset-4">
            Funcionalidades
          </a>
          <button 
            onClick={onOpenPayrollModal} 
            className="text-[#14325C] bg-[#FFF3C4] px-2.5 py-1 rounded-md border border-[#14325C] hover:bg-[#FFC400] transition-colors"
          >
            ★ Simulador de jornales
          </button>
          <a href="#video" className="hover:text-[#2A5189] hover:underline underline-offset-4">
            Demo en video
          </a>
          <a href="#demo" className="hover:text-[#2A5189] hover:underline underline-offset-4">
            Cómo empezar
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Google Sites Integration button */}
          <button
            onClick={onOpenGoogleSitesModal}
            title="Ver cómo insertar esta página en tu Google Sites"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#E9ECF0] hover:bg-[#FFF3C4] text-[#14325C] font-black text-xs sm:text-sm rounded-xl border-2 border-[#14325C] shadow-[2px_2px_0_#14325C] transition-all active:translate-y-0.5"
          >
            <Globe className="w-4 h-4 text-[#14325C]" />
            <span className="hidden sm:inline">Google Sites</span>
            <span className="text-[10px] bg-[#FFC400] text-[#14325C] px-1.5 py-0.2 rounded font-black border border-[#14325C]">
              Embed
            </span>
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/59599742457?text=quiero%20mas%20informaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#1FA855] text-white font-extrabold text-xs sm:text-sm rounded-xl border-2 border-[#14325C] shadow-[0_3px_0_#14325C] hover:-translate-y-0.5 transition-transform"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.8 1.5 5.6 1.5 7 0 12.6-5.6 12.6-12.5S23 3 16 3zm0 22.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.4 1.2 1.2-4.3-.3-.4a10.2 10.2 0 0 1-1.6-5.5C5.5 9.9 10.2 5.3 16 5.3s10.5 4.6 10.5 10.3S21.8 25.8 16 25.8zm5.8-7.6c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-.9 1.2-.4.2-.7.1c-1.9-.9-3.1-1.7-4.3-3.8-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/>
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/gestiondeobraix/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 bg-[#1877F2] text-white font-extrabold text-xs sm:text-sm rounded-xl border-2 border-[#14325C] shadow-[0_3px_0_#14325C] hover:-translate-y-0.5 transition-transform"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </header>
  );
};
