import React from 'react';
import { Smartphone, PlusCircle, ArrowDown } from 'lucide-react';
import { ObraItem } from '../types';

interface Props {
  obras: ObraItem[];
  gastosTotal: number;
  cobrosTotal: number;
  currency: 'PYG' | 'USD';
  onToggleCurrency: () => void;
  onOpenExpenseModal: () => void;
  onOpenPayrollModal: () => void;
}

export const Hero: React.FC<Props> = ({
  obras,
  gastosTotal,
  cobrosTotal,
  currency,
  onToggleCurrency,
  onOpenExpenseModal,
  onOpenPayrollModal,
}) => {
  const saldoNeto = cobrosTotal - gastosTotal;

  const formatAmount = (val: number) => {
    if (currency === 'USD') {
      return `$ ${(val / 7500).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
    }
    return `₲ ${val.toLocaleString('es-PY')}`;
  };

  return (
    <section className="bg-[#FFC400] pt-12 pb-16 md:pt-16 md:pb-20 border-b-[4px] border-[#14325C]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="space-y-6">
            <div className="inline-block bg-white text-[#14325C] text-xs sm:text-sm font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-[#14325C] shadow-[2px_2px_0_#14325C]">
              Diseñado para constructores y contratistas
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#14325C] leading-[1.05] tracking-tight">
              Tus obras bajo control, desde el celular.
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-[#14325C] leading-snug max-w-[36ch]">
              Gastos, cobros, pagos al personal y días trabajados. Todo en un solo lugar y en tiempo real.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
              <a
                href="https://wa.me/59599742457?text=quiero%20mas%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 min-h-[58px] px-7 py-3.5 rounded-2xl font-black text-lg text-white bg-[#1FA855] hover:bg-[#198745] border-[3.5px] border-[#14325C] shadow-[0_6px_0_#14325C] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#14325C] active:translate-y-0.5 active:shadow-[0_2px_0_#14325C] transition-all"
              >
                <svg className="w-6 h-6 fill-white shrink-0" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.8 1.5 5.6 1.5 7 0 12.6-5.6 12.6-12.5S23 3 16 3zm0 22.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.4 1.2 1.2-4.3-.3-.4a10.2 10.2 0 0 1-1.6-5.5C5.5 9.9 10.2 5.3 16 5.3s10.5 4.6 10.5 10.3S21.8 25.8 16 25.8zm5.8-7.6c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-.9 1.2-.4.2-.7.1c-1.9-.9-3.1-1.7-4.3-3.8-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/>
                </svg>
                <span>Pedir demo por WhatsApp</span>
              </a>

              <a
                href="#funciones"
                className="inline-flex items-center justify-center gap-2 min-h-[58px] px-7 py-3.5 rounded-2xl font-black text-lg text-[#14325C] bg-white hover:bg-slate-50 border-[3.5px] border-[#14325C] shadow-[0_6px_0_#14325C] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#14325C] active:translate-y-0.5 active:shadow-[0_2px_0_#14325C] transition-all"
              >
                <span>Ver funciones</span>
              </a>

              <button
                onClick={onOpenPayrollModal}
                className="inline-flex items-center justify-center gap-2 min-h-[58px] px-5 py-3.5 rounded-2xl font-black text-base text-[#14325C] bg-[#FFF3C4] hover:bg-white border-[3.5px] border-[#14325C] shadow-[0_6px_0_#14325C] hover:-translate-y-0.5 transition-all"
              >
                <span>⚡ Probar Simulador</span>
              </button>
            </div>

            {/* Note */}
            <div className="flex items-center gap-2.5 text-sm sm:text-base font-extrabold text-[#14325C] pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#14325C] inline-block shrink-0" />
              <span>Te mostramos la app funcionando en vivo con el caso de tu obra.</span>
            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="flex justify-center">
            <div
              className="w-full max-w-[340px] bg-[#14325C] rounded-[42px] p-3.5 border-[3.5px] border-[#0d2342] shadow-[12px_12px_0_rgba(20,50,92,0.3)] transition-transform hover:scale-[1.01]"
              role="region"
              aria-label="Panel de control en smartphone"
            >
              {/* Phone screen */}
              <div className="bg-white rounded-[32px] p-5 shadow-inner border border-slate-200 space-y-3">
                {/* Screen Header */}
                <div className="flex items-center justify-between pb-2.5 border-b-2 border-[#E9ECF0]">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-base text-[#14325C]">Panel de control</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={onToggleCurrency}
                      title="Cambiar moneda (Guaraníes o Dólares)"
                      className="text-[11px] font-black px-1.5 py-0.5 bg-[#FFF3C4] text-[#14325C] rounded border border-[#14325C] hover:bg-[#FFC400]"
                    >
                      {currency === 'PYG' ? '₲ PYG' : '$ USD'}
                    </button>
                    <span className="bg-[#D1FADF] text-[#027A48] text-[11px] font-black px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#027A48] animate-ping" />
                      En línea
                    </span>
                  </div>
                </div>

                {/* Metric 1 */}
                <div className="flex items-baseline justify-between p-3 rounded-xl bg-[#E9ECF0] border-[1.5px] border-[#d8dde4] text-[#1B2A41] font-bold text-sm">
                  <span>Obras activas</span>
                  <b className="font-black text-lg text-[#14325C]">{obras.length}</b>
                </div>

                {/* Metric 2 */}
                <div className="flex items-baseline justify-between p-3 rounded-xl bg-[#E9ECF0] border-[1.5px] border-[#d8dde4] text-[#1B2A41] font-bold text-sm">
                  <span>Gastos del mes</span>
                  <b className="font-black text-base text-[#14325C]">
                    {formatAmount(gastosTotal)}
                  </b>
                </div>

                {/* Metric 3 */}
                <div className="flex items-baseline justify-between p-3 rounded-xl bg-[#E9ECF0] border-[1.5px] border-[#d8dde4] text-[#1B2A41] font-bold text-sm">
                  <span>Cobros recibidos</span>
                  <b className="font-black text-base text-[#14325C]">
                    {formatAmount(cobrosTotal)}
                  </b>
                </div>

                {/* Saldo Neto */}
                <div className="flex items-baseline justify-between p-3.5 rounded-xl bg-[#14325C] border-2 border-[#0d2342] shadow-[0_3px_0_rgba(0,0,0,0.2)] text-white font-bold text-sm">
                  <span>Saldo neto</span>
                  <b className="font-black text-xl text-[#FFC400]">
                    {formatAmount(saldoNeto)}
                  </b>
                </div>

                {/* Action button */}
                <button
                  type="button"
                  onClick={onOpenExpenseModal}
                  className="w-full mt-2 py-3.5 px-4 bg-[#FFC400] hover:bg-[#ffb700] text-[#14325C] font-black text-center text-sm rounded-xl border-3 border-[#14325C] shadow-[0_3px_0_#14325C] active:translate-y-0.5 transition-transform flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4 text-[#14325C]" />
                  <span>+ Registrar nuevo gasto</span>
                </button>

                <div className="text-center text-[11px] font-bold text-[#5F718B] pt-1">
                  • Interfaz adaptada a celular de obra •
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
