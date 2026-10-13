import React, { useState } from 'react';
import { X, CloudRain, Sun, Calendar, DollarSign, Check, Send, User, AlertCircle, FileText } from 'lucide-react';
import { Trabajador } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currency: 'PYG' | 'USD';
  onConfirmPayment?: (monto: number, workerName: string) => void;
}

const DEFAULT_WORKERS: Trabajador[] = [
  { id: '1', nombre: 'Ramón Benítez', rol: 'Oficial Albañil', tarifaDia: 180000 },
  { id: '2', nombre: 'Jorge Galeano', rol: 'Capataz', tarifaDia: 250000 },
  { id: '3', nombre: 'Carlos Vera', rol: 'Ayudante', tarifaDia: 130000 },
  { id: '4', nombre: 'Esteban Ruiz', rol: 'Fierrero', tarifaDia: 190000 },
];

type DiaEstado = 'completo' | 'medio' | 'lluvia_paga' | 'lluvia_susp' | 'falta' | 'feriado';

const DIAS_SEMANA = [
  { key: 'lun', nombre: 'Lunes', fecha: '06/10' },
  { key: 'mar', nombre: 'Martes', fecha: '07/10' },
  { key: 'mie', nombre: 'Miércoles', fecha: '08/10' },
  { key: 'jue', nombre: 'Jueves', fecha: '09/10' },
  { key: 'vie', nombre: 'Viernes', fecha: '10/10' },
  { key: 'sab', nombre: 'Sábado', fecha: '11/10' },
];

export const PayrollSimulatorModal: React.FC<Props> = ({
  isOpen,
  onClose,
  currency,
  onConfirmPayment,
}) => {
  const [selectedWorkerId, setSelectedWorkerId] = useState('1');
  const [adelanto, setAdelanto] = useState('100000');
  const [descuento, setDescuento] = useState('0');
  const [lluviaObs, setLluviaObs] = useState('Lluvia torrencial Martes (4hs sin hormigonado). Obra resguardada.');
  const [dias, setDias] = useState<Record<string, DiaEstado>>({
    lun: 'completo',
    mar: 'lluvia_paga', // día con lluvia justificada
    mie: 'completo',
    jue: 'completo',
    vie: 'completo',
    sab: 'medio',
  });
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [confirmedSuccess, setConfirmedSuccess] = useState(false);

  if (!isOpen) return null;

  const currentWorker = DEFAULT_WORKERS.find((w) => w.id === selectedWorkerId) || DEFAULT_WORKERS[0];
  const rateMultiplier = currency === 'USD' ? 1 / 7500 : 1;
  const tarifa = Math.round(currentWorker.tarifaDia * rateMultiplier);

  // Calculate day factors
  let factorDias = 0;
  let diasLluviaCount = 0;
  let diasTrabajadosCount = 0;

  Object.values(dias).forEach((estado) => {
    if (estado === 'completo') {
      factorDias += 1;
      diasTrabajadosCount += 1;
    } else if (estado === 'medio') {
      factorDias += 0.5;
      diasTrabajadosCount += 0.5;
    } else if (estado === 'lluvia_paga') {
      factorDias += 1;
      diasLluviaCount += 1;
    } else if (estado === 'feriado') {
      factorDias += 1;
    } else if (estado === 'lluvia_susp') {
      diasLluviaCount += 1;
    }
  });

  const parsedAdelanto = parseFloat(adelanto.replace(/\./g, '')) || 0;
  const parsedDescuento = parseFloat(descuento.replace(/\./g, '')) || 0;

  const subtotalBruto = Math.round(tarifa * factorDias);
  const netoAPagar = Math.max(0, subtotalBruto - parsedAdelanto - parsedDescuento);

  const toggleDayState = (diaKey: string) => {
    const states: DiaEstado[] = ['completo', 'medio', 'lluvia_paga', 'lluvia_susp', 'falta'];
    const current = dias[diaKey] || 'completo';
    const nextIndex = (states.indexOf(current) + 1) % states.length;
    setDias((prev) => ({ ...prev, [diaKey]: states[nextIndex] }));
  };

  const formatMoney = (val: number) => {
    if (currency === 'USD') return `$ ${val.toLocaleString('en-US')}`;
    return `₲ ${val.toLocaleString('es-PY')}`;
  };

  const getBadgeStyle = (estado: DiaEstado) => {
    switch (estado) {
      case 'completo':
        return 'bg-[#D1FADF] text-[#027A48] border-[#027A48]';
      case 'medio':
        return 'bg-[#FFF3C4] text-[#14325C] border-[#14325C]';
      case 'lluvia_paga':
        return 'bg-blue-100 text-blue-900 border-blue-900';
      case 'lluvia_susp':
        return 'bg-slate-200 text-slate-700 border-slate-700 line-through';
      case 'falta':
        return 'bg-rose-100 text-rose-800 border-rose-800';
      case 'feriado':
        return 'bg-purple-100 text-purple-800 border-purple-800';
      default:
        return 'bg-white text-gray-800 border-gray-400';
    }
  };

  const getBadgeLabel = (estado: DiaEstado) => {
    switch (estado) {
      case 'completo':
        return 'Jornal 100%';
      case 'medio':
        return 'Medio Turno (0.5)';
      case 'lluvia_paga':
        return 'Lluvia Pagada (1.0)';
      case 'lluvia_susp':
        return 'Lluvia Susp. (0)';
      case 'falta':
        return 'Falta / Ausente (0)';
      case 'feriado':
        return 'Feriado (1.0)';
    }
  };

  const summaryText = `📋 *LIQUIDACIÓN DE JORNAL - GESTIÓN DE OBRAS*
Trabajador: ${currentWorker.nombre} (${currentWorker.rol})
Tarifa día: ${formatMoney(tarifa)}
Jornales computados: ${factorDias} días
Subtotal bruto: ${formatMoney(subtotalBruto)}
- Adelantos retirados: ${formatMoney(parsedAdelanto)}
- Descuentos: ${formatMoney(parsedDescuento)}
💰 *TOTAL NETO A PAGAR: ${formatMoney(netoAPagar)}*

🌧 *Bitácora de Lluvias:* ${lluviaObs}`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const handleConfirmToApp = () => {
    if (onConfirmPayment) {
      onConfirmPayment(netoAPagar, currentWorker.nombre);
    }
    setConfirmedSuccess(true);
    setTimeout(() => {
      setConfirmedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14325C]/85 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl neo-border-thick neo-shadow-lg max-h-[94vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-[#FFC400] border-b-[3.5px] border-[#14325C]">
          <div className="flex items-center gap-3">
            <span className="p-2 font-black text-[#14325C] bg-white rounded-xl border-2 border-[#14325C] shadow-[2px_2px_0_#14325C]">
              <Calendar className="w-6 h-6" />
            </span>
            <div>
              <div className="inline-block px-2 py-0.5 text-xs font-black uppercase tracking-wider bg-[#14325C] text-[#FFC400] rounded-md mb-1">
                Módulo Estrella en Vivo
              </div>
              <h3 className="text-xl font-black text-[#14325C] tracking-tight">
                Simulador de Pagos y Bitácora de Días
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#14325C] bg-white hover:bg-[#E9ECF0] rounded-xl border-2 border-[#14325C] shadow-[2px_2px_0_#14325C]"
            aria-label="Cerrar simulador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmedSuccess ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-20 h-20 bg-[#D1FADF] text-[#027A48] rounded-full flex items-center justify-center mx-auto border-4 border-[#14325C] shadow-[4px_4px_0_#14325C]">
              <Check className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-[#14325C]">¡Liquidación Asentada con Éxito!</h4>
            <p className="font-bold text-gray-700 max-w-md mx-auto">
              Se registró el gasto de <strong>{formatMoney(netoAPagar)}</strong> en la cuenta de mano de obra de la obra activa.
            </p>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            {/* Step 1: Trabajador selection */}
            <div className="p-4 bg-[#E9ECF0] rounded-xl border-2 border-[#14325C]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-[#14325C]" />
                  <div>
                    <label className="text-xs font-black uppercase tracking-wider text-[#14325C]">
                      Paso 1: Seleccionar Personal
                    </label>
                    <select
                      value={selectedWorkerId}
                      onChange={(e) => setSelectedWorkerId(e.target.value)}
                      className="mt-1 block font-black text-base bg-white text-[#14325C] px-3 py-1.5 rounded-lg border-2 border-[#14325C]"
                    >
                      {DEFAULT_WORKERS.map((w) => (
                        <option key={w.id} value={w.id}>
                          {w.nombre} — {w.rol} ({formatMoney(Math.round(w.tarifaDia * rateMultiplier))}/día)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-gray-600 block">Tarifa por día:</span>
                  <span className="text-lg font-black text-[#14325C]">{formatMoney(tarifa)}</span>
                </div>
              </div>
            </div>

            {/* Step 2: Días trabajados y Clima */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#14325C] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#14325C]" />
                  Paso 2: Calendario Semanal de Turnos (Toca para alternar estado)
                </h4>
                <span className="text-xs font-bold text-gray-500 hidden sm:inline">
                  Click en cualquier día para cambiar
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                {DIAS_SEMANA.map((dia) => {
                  const estado = dias[dia.key] || 'completo';
                  return (
                    <button
                      key={dia.key}
                      type="button"
                      onClick={() => toggleDayState(dia.key)}
                      className="p-3 bg-white rounded-xl border-2 border-[#14325C] shadow-[2px_2px_0_#14325C] hover:bg-[#FFF3C4] transition-all text-left flex flex-col justify-between h-28"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-black text-sm text-[#14325C]">{dia.nombre}</span>
                          <span className="text-[10px] font-bold text-gray-500">{dia.fecha}</span>
                        </div>
                      </div>
                      <div>
                        <span className={`inline-block w-full text-[11px] font-black py-1 px-1.5 rounded border text-center ${getBadgeStyle(estado)}`}>
                          {getBadgeLabel(estado)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bitácora meteorológica note */}
              <div className="mt-3 p-3 bg-[#FFF3C4] rounded-xl border-2 border-[#14325C] flex items-start gap-2.5">
                <CloudRain className="w-5 h-5 text-[#14325C] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <label className="text-xs font-black uppercase text-[#14325C] block mb-1">
                    Bitácora Meteorológica (Respaldo formal para el propietario)
                  </label>
                  <input
                    type="text"
                    value={lluviaObs}
                    onChange={(e) => setLluviaObs(e.target.value)}
                    className="w-full text-xs font-bold bg-white text-[#14325C] px-2.5 py-1.5 rounded-lg border border-[#14325C]"
                    placeholder="Registra incidencias de lluvia, corte de agua o luz..."
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Adelantos y Descuentos */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-[#14325C] mb-2">
                Paso 3: Adelantos Retirados y Descuentos
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-xl border-2 border-[#14325C] shadow-[2px_2px_0_#14325C]">
                  <label className="block text-xs font-black uppercase text-[#14325C] mb-1">
                    Vales / Adelantos en la semana ({currency === 'PYG' ? '₲' : '$'})
                  </label>
                  <input
                    type="number"
                    value={adelanto}
                    onChange={(e) => setAdelanto(e.target.value)}
                    className="w-full text-base font-black px-3 py-2 bg-[#E9ECF0] rounded-lg border border-[#14325C]"
                  />
                  <span className="text-[11px] font-bold text-gray-500 mt-1 block">
                    Combustible, almuerzos o vales de caja chica entregados
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border-2 border-[#14325C] shadow-[2px_2px_0_#14325C]">
                  <label className="block text-xs font-black uppercase text-[#14325C] mb-1">
                    Otros Descuentos ({currency === 'PYG' ? '₲' : '$'})
                  </label>
                  <input
                    type="number"
                    value={descuento}
                    onChange={(e) => setDescuento(e.target.value)}
                    className="w-full text-base font-black px-3 py-2 bg-[#E9ECF0] rounded-lg border border-[#14325C]"
                  />
                  <span className="text-[11px] font-bold text-gray-500 mt-1 block">
                    Materiales dañados, herramientas o préstamos anteriores
                  </span>
                </div>
              </div>
            </div>

            {/* Liquidación Final Card */}
            <div className="p-5 bg-[#14325C] text-white rounded-2xl border-3 border-[#0d2342] shadow-[6px_6px_0_#0d2342] space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <div>
                  <span className="text-xs font-extrabold text-[#FFC400] uppercase tracking-wider block">
                    Resumen de Liquidación
                  </span>
                  <h4 className="text-lg font-black text-white">
                    {currentWorker.nombre} ({currentWorker.rol})
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-white/80 block">Jornales válidos</span>
                  <span className="text-base font-black text-[#FFC400]">{factorDias} días</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs font-bold pt-1">
                <div>
                  <span className="text-white/70 block">Subtotal Bruto</span>
                  <span className="font-extrabold text-sm">{formatMoney(subtotalBruto)}</span>
                </div>
                <div>
                  <span className="text-white/70 block">- Adelantos</span>
                  <span className="font-extrabold text-sm text-rose-300">-{formatMoney(parsedAdelanto)}</span>
                </div>
                <div>
                  <span className="text-white/70 block">- Descuentos</span>
                  <span className="font-extrabold text-sm text-rose-300">-{formatMoney(parsedDescuento)}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-[#FFC400]">
                    Total Neto a Pagar en Mano
                  </span>
                  <div className="text-3xl font-black text-[#FFC400] tracking-tight">
                    {formatMoney(netoAPagar)}
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopySummary}
                    className="flex-1 sm:flex-none px-3.5 py-2.5 font-black text-xs bg-white text-[#14325C] hover:bg-slate-100 rounded-xl border-2 border-white transition-all flex items-center justify-center gap-1.5"
                  >
                    {copiedSummary ? <Check className="w-4 h-4 text-[#1FA855]" /> : <FileText className="w-4 h-4" />}
                    <span>{copiedSummary ? '¡Copiado!' : 'Copiar para WhatsApp'}</span>
                  </button>

                  <button
                    onClick={handleConfirmToApp}
                    className="flex-1 sm:flex-none px-4 py-2.5 font-black text-xs bg-[#1FA855] hover:bg-[#198745] text-white rounded-xl border-2 border-white shadow-[0_3px_0_rgba(0,0,0,0.3)] transition-all flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-4 h-4" />
                    <span>Asentar como Gasto</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 bg-[#E9ECF0] border-t-[3.5px] border-[#14325C] flex items-center justify-between">
          <p className="text-xs font-bold text-gray-600">
            • Este módulo se sincroniza automáticamente con el libro contable de la obra.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 font-black text-xs text-[#14325C] bg-white rounded-lg border-2 border-[#14325C]"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
