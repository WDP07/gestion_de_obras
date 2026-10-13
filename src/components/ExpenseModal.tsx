import React, { useState } from 'react';
import { X, PlusCircle, CheckCircle2, DollarSign } from 'lucide-react';
import { ObraItem, GastoItem } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  obras: ObraItem[];
  onAddGasto: (nuevoGasto: GastoItem) => void;
  currency: 'PYG' | 'USD';
}

export const ExpenseModal: React.FC<Props> = ({
  isOpen,
  onClose,
  obras,
  onAddGasto,
  currency,
}) => {
  const [obraId, setObraId] = useState(obras[0]?.id || '1');
  const [concepto, setConcepto] = useState('');
  const [categoria, setCategoria] = useState<GastoItem['categoria']>('Materiales');
  const [monto, setMonto] = useState(currency === 'PYG' ? '450000' : '65');
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedMonto = parseFloat(monto.replace(/\./g, '').replace(/,/g, ''));
    if (!concepto.trim() || isNaN(parsedMonto) || parsedMonto <= 0) return;

    onAddGasto({
      id: Date.now().toString(),
      obraId,
      concepto: concepto.trim(),
      categoria,
      monto: parsedMonto,
      fecha: new Date().toLocaleDateString('es-PY'),
    });

    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setConcepto('');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14325C]/80 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl neo-border-thick neo-shadow-lg overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top title */}
        <div className="flex items-center justify-between p-4 bg-[#FFC400] border-b-[3.5px] border-[#14325C]">
          <div className="flex items-center gap-2">
            <PlusCircle className="w-6 h-6 text-[#14325C]" />
            <h3 className="text-lg font-black text-[#14325C]">
              Registrar Nuevo Gasto de Obra
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#14325C] bg-white rounded-lg border-2 border-[#14325C] shadow-[2px_2px_0_#14325C] hover:bg-slate-100"
            aria-label="Cerrar modal de gasto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {successMsg ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-16 h-16 text-[#1FA855] mx-auto animate-bounce" />
            <h4 className="text-xl font-black text-[#14325C]">¡Gasto Asentado en Obra!</h4>
            <p className="text-sm font-bold text-gray-600">
              El saldo neto del panel de control se actualizó en tiempo real.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {/* Obra */}
            <div>
              <label className="block text-xs font-black uppercase text-[#14325C] mb-1">
                Obra Asignada
              </label>
              <select
                value={obraId}
                onChange={(e) => setObraId(e.target.value)}
                className="w-full px-3 py-2.5 font-bold text-sm bg-[#E9ECF0] rounded-xl border-2 border-[#14325C] focus:bg-white focus:outline-none"
              >
                {obras.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.nombre} ({o.cliente})
                  </option>
                ))}
              </select>
            </div>

            {/* Concepto */}
            <div>
              <label className="block text-xs font-black uppercase text-[#14325C] mb-1">
                Concepto / Detalle
              </label>
              <input
                type="text"
                placeholder="Ej. 10 bolsas de Cemento Yguazú, flete de arena..."
                value={concepto}
                onChange={(e) => setConcepto(e.target.value)}
                required
                className="w-full px-3 py-2.5 font-bold text-sm bg-white rounded-xl border-2 border-[#14325C] focus:bg-[#FFF3C4] focus:outline-none"
              />
            </div>

            {/* Categoría */}
            <div>
              <label className="block text-xs font-black uppercase text-[#14325C] mb-1">
                Categoría de Gasto
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-black">
                {(['Materiales', 'Mano de obra', 'Fletes', 'Subcontratos'] as const).map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => setCategoria(cat)}
                    className={`py-2 px-3 rounded-lg border-2 border-[#14325C] text-center transition-colors ${
                      categoria === cat
                        ? 'bg-[#FFC400] text-[#14325C] shadow-[2px_2px_0_#14325C]'
                        : 'bg-white text-gray-700 hover:bg-[#E9ECF0]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Monto */}
            <div>
              <label className="block text-xs font-black uppercase text-[#14325C] mb-1">
                Monto ({currency === 'PYG' ? '₲ Guaraníes' : 'USD $'})
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 font-black text-sm text-[#14325C]">
                  {currency === 'PYG' ? '₲' : '$'}
                </span>
                <input
                  type="text"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                  required
                  className="w-full pl-8 pr-3 py-2.5 font-black text-base bg-[#E9ECF0] rounded-xl border-2 border-[#14325C] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 font-black text-base text-[#14325C] bg-[#FFC400] hover:bg-[#ffb700] rounded-xl border-3 border-[#14325C] shadow-[0_4px_0_#14325C] transition-transform active:translate-y-0.5 flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Confirmar y Guardar en Obra</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
