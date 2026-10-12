import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface Props {
  onOpenPayrollModal: () => void;
}

export const FeaturesSection: React.FC<Props> = ({ onOpenPayrollModal }) => {
  return (
    <section className="py-20 bg-[#F1F4F8] border-t-[3.5px] border-b-[3.5px] border-[#14325C]" id="funciones">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14325C] tracking-tight mb-3 max-w-[24ch]">
          Todo lo que tu obra necesita
        </h2>
        <p className="text-lg sm:text-xl font-bold text-[#4A5B73] mb-12 max-w-[55ch]">
          Herramientas simples y robustas creadas pensando en el ritmo real del trabajo de campo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Módulo Estrella (Destacado - Full Width) */}
          <div className="md:col-span-2 bg-[#FFF3C4] neo-border rounded-2xl p-7 sm:p-9 neo-shadow-lg relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <span className="inline-block bg-[#FFC400] text-[#14325C] font-black text-xs uppercase tracking-wider px-3 py-1 rounded-md border-2 border-[#14325C]">
                Módulo Estrella
              </span>
              <button
                onClick={onOpenPayrollModal}
                className="inline-flex items-center gap-2 px-4 py-2 font-black text-xs sm:text-sm bg-[#14325C] text-[#FFC400] hover:bg-[#0d2342] rounded-xl border-2 border-[#14325C] shadow-[2px_2px_0_#14325C] transition-transform active:translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-[#FFC400]" />
                <span>Abrir Simulador Interactivo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#14325C] mb-5 tracking-tight">
              Simulador de pagos y bitácora de días
            </h3>

            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-base sm:text-lg font-bold text-[#243248]">
                <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-1">
                  ✓
                </span>
                <span>Elegís a la persona y marcás en el calendario los días y turnos que trabajó.</span>
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg font-bold text-[#243248]">
                <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-1">
                  ✓
                </span>
                <span>Aplicás adelantos o descuentos al instante y la app calcula con exactitud el total a pagar.</span>
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg font-bold text-[#243248]">
                <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-1">
                  ✓
                </span>
                <span>Al confirmar, el pago se asienta como gasto de mano de obra automáticamente en la cuenta de la obra.</span>
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg font-bold text-[#243248]">
                <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-1">
                  ✓
                </span>
                <span>Bitácora meteorológica y de asistencia: registro formal de lluvias, faltas y feriados para respaldo con el propietario.</span>
              </li>
            </ul>
          </div>

          {/* Bloque 1: Control financiero */}
          <div className="bg-white neo-border rounded-2xl p-7 neo-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#14325C] mb-4 tracking-tight">
                Control financiero
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Panel con obras activas, total de gastos, cobros y saldo neto en tiempo real.</span>
                </li>
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Gastos clasificados por categorías personalizables (materiales, fletes, jornales, subcontratos).</span>
                </li>
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Registro de cobros y certificados de avance con comprobante y método de pago.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bloque 2: Tus obras en detalle */}
          <div className="bg-white neo-border rounded-2xl p-7 neo-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#14325C] mb-4 tracking-tight">
                Tus obras en detalle
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Medidor visual de avance de obra comparado con el presupuesto estimado.</span>
                </li>
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Encargados, capataces y cuadrillas asignadas a cada proyecto.</span>
                </li>
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Consulta en segundos cuánto dinero real tenés comprometido e invertido en cada obra.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bloque 3: Organización y equipo */}
          <div className="bg-white neo-border rounded-2xl p-7 neo-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#14325C] mb-4 tracking-tight">
                Organización y equipo
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Tareas pendientes de la semana ordenadas por nivel de prioridad y fecha.</span>
                </li>
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Ficha de clientes y proveedores con contactos directos a un clic.</span>
                </li>
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Ficha de personal con teléfono, rol asignado y modalidad de cobro (por día o semanal).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bloque 4: Hecho para usar en obra */}
          <div className="bg-white neo-border rounded-2xl p-7 neo-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#14325C] mb-4 tracking-tight">
                Hecho para usar en obra
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Botones grandes, números claros y tipografía de alto contraste legible bajo el sol.</span>
                </li>
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Sincronización automática entre el celular de obra y la computadora de oficina.</span>
                </li>
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Soporte para moneda local (Guaraníes, Dólares, etc.) y configuración a medida.</span>
                </li>
                <li className="flex items-start gap-2.5 text-base font-semibold text-[#243248]">
                  <span className="w-5 h-5 rounded-full bg-[#14325C] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Respaldo seguro en la nube para nunca perder información aunque cambies de celular.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
