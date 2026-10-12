import React, { useState } from 'react';
import { X, Play, CheckCircle2, MessageCircle, ChevronRight, RefreshCw, Smartphone } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      title: '1. Cargar un gasto en 15 segundos',
      description: 'Sacas una foto al remito o factura del corralón desde el celular, marcas la categoría y el importe. El saldo de la obra se actualiza inmediatamente.',
      badge: 'Paso 1 de 3',
      mockContent: {
        header: 'Nuevo comprobante: Corralón Central',
        highlight: '₲ 1.450.000 — 50 bolsas cemento',
        status: 'Asentado en Obra: Los Álamos',
      },
    },
    {
      title: '2. Liquidar la semana de tus obreros',
      description: 'Entras al simulador, seleccionas al oficial o capataz, marcas los días trabajados, cargas si tuvo algún adelanto de combustible y listo.',
      badge: 'Paso 2 de 3',
      mockContent: {
        header: 'Liquidación Oficial Albañil',
        highlight: 'Neto a pagar: ₲ 980.000',
        status: '5.5 jornales - 1 adelanto deducido',
      },
    },
    {
      title: '3. Respaldo de días de lluvia ante el cliente',
      description: 'Registras los días de lluvia con reporte fotográfico y notas. Al momento de entregar la obra, tienes el historial exacto para justificar demoras.',
      badge: 'Paso 3 de 3',
      mockContent: {
        header: 'Bitácora meteorológica',
        highlight: 'Martes 07/10: 48mm lluvia registrada',
        status: 'Certificado de suspensión para propietario',
      },
    },
  ];

  const current = steps[activeStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14325C]/85 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl neo-border-thick neo-shadow-lg overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[#14325C] text-white border-b-[3.5px] border-[#0d2342]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FFC400] text-[#14325C] flex items-center justify-center font-black">
              <Play className="w-4 h-4 ml-0.5 fill-[#14325C]" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">
                Demo Guiada de Gestión de Obras
              </h3>
              <p className="text-xs text-white/80">
                Cómo tener el control absoluto en menos de 60 segundos
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white bg-white/10 hover:bg-white/20 rounded-lg border border-white/30"
            aria-label="Cerrar modal de video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Tabs */}
        <div className="flex border-b-2 border-[#14325C] bg-[#E9ECF0]">
          {steps.map((st, idx) => (
            <button
              key={st.title}
              onClick={() => setActiveStep(idx)}
              className={`flex-1 py-2.5 px-3 text-xs font-black transition-colors ${
                activeStep === idx
                  ? 'bg-white text-[#14325C] border-b-4 border-[#FFC400]'
                  : 'text-gray-600 hover:text-[#14325C]'
              }`}
            >
              {`Paso ${idx + 1}`}
            </button>
          ))}
        </div>

        {/* Player / Simulated Demo Body */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1">
          {/* Virtual Screen */}
          <div className="aspect-video w-full bg-[#14325C] rounded-2xl p-6 text-white border-3 border-[#0d2342] shadow-[4px_4px_0_#0d2342] flex flex-col justify-between relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="flex items-center justify-between relative z-10">
              <span className="px-2.5 py-1 text-xs font-black uppercase tracking-wider bg-[#FFC400] text-[#14325C] rounded-md">
                {current.badge}
              </span>
              <span className="text-xs font-bold text-white/80 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-[#FFC400]" />
                Simulación en tiempo real
              </span>
            </div>

            <div className="my-auto text-center space-y-2 relative z-10 py-4">
              <span className="text-xs font-bold text-[#FFC400] uppercase tracking-wider">
                {current.mockContent.header}
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {current.mockContent.highlight}
              </div>
              <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-green-300">
                ✓ {current.mockContent.status}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-white/70 border-t border-white/20 pt-2 relative z-10">
              <span>0:{activeStep * 20 + 15} / 1:00</span>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      i === activeStep ? 'w-8 bg-[#FFC400]' : 'w-2 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-4 bg-[#FFF3C4] rounded-xl border-2 border-[#14325C]">
            <h4 className="text-base font-black text-[#14325C] mb-1">
              {current.title}
            </h4>
            <p className="text-sm font-semibold text-[#1B2A41] leading-relaxed">
              {current.description}
            </p>
          </div>
        </div>

        {/* Footer controls */}
        <div className="p-4 bg-[#E9ECF0] border-t-[3.5px] border-[#14325C] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {activeStep < steps.length - 1 ? (
              <button
                onClick={() => setActiveStep((prev) => prev + 1)}
                className="w-full sm:w-auto px-4 py-2 font-black text-xs text-[#14325C] bg-white rounded-lg border-2 border-[#14325C] flex items-center justify-center gap-1.5"
              >
                <span>Siguiente paso</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setActiveStep(0)}
                className="w-full sm:w-auto px-4 py-2 font-black text-xs text-[#14325C] bg-white rounded-lg border-2 border-[#14325C] flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Volver al inicio</span>
              </button>
            )}
          </div>

          <a
            href="https://wa.me/59599742457?text=Hola,%20vi%20el%20video%20y%20quiero%20ver%20la%20demo%20en%20vivo%20para%20mi%20obra"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 font-black text-xs text-white bg-[#1FA855] hover:bg-[#198745] rounded-xl border-2 border-[#14325C] shadow-[2px_2px_0_#14325C] flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Pedir demo guiada por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
