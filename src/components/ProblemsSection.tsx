import React, { useState } from 'react';
import { AlertTriangle, Clock, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProblemsSection: React.FC = () => {
  const [obrasCount, setObrasCount] = useState(3);
  const [obrerosCount, setObrerosCount] = useState(12);

  const horasAhorradas = Math.round(obrasCount * 4 + obrerosCount * 1.5);
  const dineroSalvadoAprox = (obrasCount * 1800000).toLocaleString('es-PY');

  return (
    <section className="py-20 bg-white" id="problemas">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14325C] tracking-tight mb-3 max-w-[24ch]">
          ¿Todavía llevás la obra en una libreta?
        </h2>
        <p className="text-lg sm:text-xl font-bold text-[#4A5B73] mb-12 max-w-[55ch]">
          El papel se pierde, la información se desordena y al final del mes los números no cierran.
        </p>

        {/* 3 Problems Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white neo-border rounded-2xl p-7 neo-shadow flex flex-col gap-3.5 hover:-translate-y-1 transition-transform">
            <div className="w-11 h-11 rounded-xl bg-[#FEE4E2] border-2 border-[#D92D20] flex items-center justify-center text-[#D92D20] font-black text-xl">
              !
            </div>
            <h3 className="text-2xl font-black text-[#14325C] tracking-tight">
              No sabés cuánto gastaste
            </h3>
            <p className="text-base font-semibold text-[#344054] leading-relaxed">
              Los gastos quedan en papeles arrugados, audios de WhatsApp y facturas sueltas. A fin de mes nunca cuadran las cuentas con el cliente.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white neo-border rounded-2xl p-7 neo-shadow flex flex-col gap-3.5 hover:-translate-y-1 transition-transform">
            <div className="w-11 h-11 rounded-xl bg-[#FEE4E2] border-2 border-[#D92D20] flex items-center justify-center text-[#D92D20] font-black text-xl">
              ⏱
            </div>
            <h3 className="text-2xl font-black text-[#14325C] tracking-tight">
              Pagar al personal lleva horas
            </h3>
            <p className="text-base font-semibold text-[#344054] leading-relaxed">
              Contar días trabajados, restar adelantos y descuentos a mano los sábados por la tarde, rezando para no equivocarte en la liquidación.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white neo-border rounded-2xl p-7 neo-shadow flex flex-col gap-3.5 hover:-translate-y-1 transition-transform">
            <div className="w-11 h-11 rounded-xl bg-[#FEE4E2] border-2 border-[#D92D20] flex items-center justify-center text-[#D92D20] font-black text-xl">
              📅
            </div>
            <h3 className="text-2xl font-black text-[#14325C] tracking-tight">
              Se pierden los días de lluvia
            </h3>
            <p className="text-base font-semibold text-[#344054] leading-relaxed">
              Lluvia, feriados, ausencias y adicionales no se registran a tiempo. Después nadie recuerda con exactitud qué pasó.
            </p>
          </div>
        </div>

        {/* Interactive Comparison Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#E9ECF0] rounded-2xl neo-border neo-shadow">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#14325C] bg-[#FFC400] px-2.5 py-1 rounded-md border border-[#14325C] inline-block mb-2">
                Simulador de Ahorro en Campo
              </span>
              <h4 className="text-2xl font-black text-[#14325C]">
                Calculá tu tiempo recuperado por mes
              </h4>
              <p className="text-sm font-bold text-gray-700">
                Ajustá cuántas obras y obreros manejás para ver el impacto inmediato.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-white p-3 rounded-xl border-2 border-[#14325C]">
                <label className="block text-xs font-black uppercase text-[#14325C]">Obras en paralelo:</label>
                <div className="flex items-center gap-2 mt-1">
                  <button 
                    onClick={() => setObrasCount((c) => Math.max(1, c - 1))}
                    className="w-7 h-7 bg-[#E9ECF0] font-black rounded border border-[#14325C]"
                  >
                    -
                  </button>
                  <span className="font-black text-lg text-[#14325C] w-6 text-center">{obrasCount}</span>
                  <button 
                    onClick={() => setObrasCount((c) => c + 1)}
                    className="w-7 h-7 bg-[#E9ECF0] font-black rounded border border-[#14325C]"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border-2 border-[#14325C]">
                <label className="block text-xs font-black uppercase text-[#14325C]">Obreros a cargo:</label>
                <div className="flex items-center gap-2 mt-1">
                  <button 
                    onClick={() => setObrerosCount((c) => Math.max(2, c - 2))}
                    className="w-7 h-7 bg-[#E9ECF0] font-black rounded border border-[#14325C]"
                  >
                    -
                  </button>
                  <span className="font-black text-lg text-[#14325C] w-8 text-center">{obrerosCount}</span>
                  <button 
                    onClick={() => setObrerosCount((c) => c + 2)}
                    className="w-7 h-7 bg-[#E9ECF0] font-black rounded border border-[#14325C]"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-[#14325C] text-white p-3.5 rounded-xl border-2 border-[#0d2342] shadow-[3px_3px_0_#0d2342]">
                <div className="text-[11px] uppercase font-bold text-[#FFC400]">Tiempo recuperado:</div>
                <div className="text-xl font-black text-white">~{horasAhorradas} hs / mes</div>
                <div className="text-[10px] text-emerald-300 font-bold">Sin peleas de liquidación</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
