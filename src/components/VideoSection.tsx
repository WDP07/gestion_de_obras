import React from 'react';
import { Play } from 'lucide-react';

interface Props {
  onOpenVideoModal: () => void;
}

export const VideoSection: React.FC<Props> = ({ onOpenVideoModal }) => {
  return (
    <section className="py-20 bg-[#14325C] text-white text-center" id="video">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
          Mirá cómo funciona en un minuto
        </h2>
        <p className="text-lg sm:text-xl font-bold text-[#D7DADE] mb-10 max-w-[50ch] mx-auto">
          Una demostración rápida de cómo cargar un gasto y liquidar la semana de tus obreros en menos de 60 segundos.
        </p>

        {/* Video Frame */}
        <div
          onClick={onOpenVideoModal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onOpenVideoModal()}
          className="mx-auto aspect-video max-w-[820px] w-full rounded-2xl border-4 border-[#FFC400] bg-[#2A5189] flex flex-col items-center justify-center p-7 shadow-[0_12px_30px_rgba(0,0,0,0.3)] cursor-pointer group hover:border-white transition-all select-none relative overflow-hidden"
          aria-label="Reproducir video demostrativo"
        >
          {/* Background subtle grid */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFC400_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Play Button */}
          <div className="w-[76px] h-[76px] rounded-full bg-[#FFC400] border-3 border-[#14325C] flex items-center justify-center shadow-[0_6px_0_#14325C] mb-4 group-hover:scale-110 transition-transform relative z-10">
            <svg className="w-8 h-8 fill-[#14325C] ml-1" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <div className="text-xl sm:text-2xl font-black text-white tracking-tight relative z-10">
            Video demostrativo de Gestión de Obras
          </div>
          <div className="text-sm sm:text-base font-bold text-[#FFF3C4] mt-1.5 relative z-10">
            Hacé clic para reproducir el tour guiado o solicitarlo por WhatsApp
          </div>
        </div>
      </div>
    </section>
  );
};
