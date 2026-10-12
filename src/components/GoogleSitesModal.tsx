import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Info, Globe, Code2, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSitesModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ais-dev-tcreuwovtbqzk6nhikecbm-473270489982.us-east5.run.app';
  const googleSitesUrl = 'https://sites.google.com/view/gestion-de-obrasix?usp=sharing';

  const embedCode = `<iframe 
  src="${currentUrl}" 
  style="width: 100%; height: 900px; border: none; border-radius: 12px; box-shadow: 0 4px 20px rgba(20,50,92,0.15);" 
  title="Gestión de Obras" 
  allow="clipboard-write; accelerometer; gyroscope" 
  loading="lazy">
</iframe>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(embedCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14325C]/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl neo-border-thick neo-shadow-lg max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-[#FFC400] border-b-[3.5px] border-[#14325C]">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 font-black text-[#14325C] bg-white rounded-xl border-2 border-[#14325C] shadow-[2px_2px_0_#14325C]">
              GS
            </span>
            <div>
              <h3 className="text-xl font-black text-[#14325C] tracking-tight">
                Cómo incorporar esta página a tu Google Sites
              </h3>
              <p className="text-xs font-bold text-[#14325C]/80">
                Paso a paso para tu sitio: sites.google.com/view/gestion-de-obrasix
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#14325C] bg-white hover:bg-[#E9ECF0] rounded-xl border-2 border-[#14325C] shadow-[2px_2px_0_#14325C] transition-transform active:translate-y-0.5"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-[#1B2A41]">
          {/* Link direct banner */}
          <div className="p-4 bg-[#E9ECF0] rounded-xl border-2 border-[#14325C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-[#14325C] flex-shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#14325C]">Tu sitio destino</p>
                <p className="font-extrabold text-sm text-[#14325C] truncate max-w-xs sm:max-w-md">
                  sites.google.com/view/gestion-de-obrasix
                </p>
              </div>
            </div>
            <a
              href={googleSitesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-black text-sm bg-white text-[#14325C] rounded-lg border-2 border-[#14325C] shadow-[2px_2px_0_#14325C] hover:bg-[#FFC400] transition-colors"
            >
              <span>Abrir Google Sites</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Pasos */}
          <div className="space-y-4">
            <h4 className="text-base font-black text-[#14325C] uppercase tracking-wide">
              Instrucciones en 3 pasos (Menos de 1 minuto):
            </h4>

            <div className="space-y-3">
              {/* Step 1 */}
              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border-2 border-[#14325C] shadow-[3px_3px_0_#14325C]">
                <div className="flex items-center justify-center w-8 h-8 font-black text-sm bg-[#FFC400] text-[#14325C] rounded-lg border-2 border-[#14325C] flex-shrink-0">
                  1
                </div>
                <div className="text-sm">
                  <p className="font-extrabold text-[#14325C]">Abre el editor de Google Sites</p>
                  <p className="text-gray-700">
                    Ingresa a tu sitio web en modo edición desde tu cuenta de Google.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border-2 border-[#14325C] shadow-[3px_3px_0_#14325C]">
                <div className="flex items-center justify-center w-8 h-8 font-black text-sm bg-[#FFC400] text-[#14325C] rounded-lg border-2 border-[#14325C] flex-shrink-0">
                  2
                </div>
                <div className="text-sm">
                  <p className="font-extrabold text-[#14325C]">Haz clic en "Insertar" (panel lateral derecho)</p>
                  <p className="text-gray-700">
                    En el menú de la derecha, selecciona el botón <strong>"Incorporar"</strong> (Embed) con el ícono <strong>&lt;/&gt;</strong>.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border-2 border-[#14325C] shadow-[3px_3px_0_#14325C]">
                <div className="flex items-center justify-center w-8 h-8 font-black text-sm bg-[#FFC400] text-[#14325C] rounded-lg border-2 border-[#14325C] flex-shrink-0">
                  3
                </div>
                <div className="text-sm">
                  <p className="font-extrabold text-[#14325C]">Pega el código o la URL</p>
                  <p className="text-gray-700">
                    Elige <strong>"Incorporar código"</strong> y pega el código iframe generado abajo, o elige <strong>"Mediante URL"</strong> y pega el enlace directo. Luego ajusta el tamaño al ancho completo de tu página.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Opción A: Código Iframe listo */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-black text-[#14325C] flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#14325C]" />
                Opción A: Código de incorporación (Recomendado)
              </label>
              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black text-white bg-[#14325C] hover:bg-[#2A5189] rounded-lg transition-colors"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#FFC400]" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar código HTML</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3 text-xs font-mono bg-slate-900 text-slate-100 rounded-xl overflow-x-auto border-2 border-[#14325C]">
              {embedCode}
            </pre>
          </div>

          {/* Opción B: URL directa */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-black text-[#14325C] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#14325C]" />
                Opción B: URL directa de la aplicación
              </label>
              <button
                onClick={handleCopyUrl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black text-[#14325C] bg-[#FFC400] hover:bg-[#e0ad00] rounded-lg border-2 border-[#14325C] transition-colors"
              >
                {copiedUrl ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>¡Copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar enlace</span>
                  </>
                )}
              </button>
            </div>
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full px-3 py-2 text-xs font-mono bg-[#E9ECF0] rounded-xl border-2 border-[#14325C] text-[#14325C]"
            />
          </div>

          {/* Tips */}
          <div className="p-3.5 bg-[#FFF3C4] rounded-xl border-2 border-[#14325C] flex items-start gap-3">
            <Info className="w-5 h-5 text-[#14325C] flex-shrink-0 mt-0.5" />
            <p className="text-xs font-semibold text-[#14325C] leading-relaxed">
              <strong>Consejo para Google Sites:</strong> Una vez insertado en tu página de Google Sites, arrastra los puntos azules de los bordes del bloque para estirarlo a todo el ancho y alto deseado. Así tus visitantes podrán interactuar con el simulador y pedir demo directamente desde tu dominio.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-5 bg-[#E9ECF0] border-t-[3.5px] border-[#14325C] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 font-black text-sm text-[#14325C] bg-white hover:bg-slate-100 rounded-xl border-2 border-[#14325C] shadow-[2px_2px_0_#14325C] transition-transform active:translate-y-0.5"
          >
            Entendido, cerrar
          </button>
          <a
            href={googleSitesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 font-black text-sm text-white bg-[#1FA855] hover:bg-[#198745] rounded-xl border-2 border-[#14325C] shadow-[2px_2px_0_#14325C] flex items-center gap-2 transition-transform active:translate-y-0.5"
          >
            <span>Ir a Google Sites ahora</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
