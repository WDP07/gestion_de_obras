export interface ObraItem {
  id: string;
  nombre: string;
  cliente: string;
  gastos: number;
  cobros: number;
}

export interface GastoItem {
  id: string;
  obraId: string;
  concepto: string;
  categoria: 'Materiales' | 'Mano de obra' | 'Fletes' | 'Subcontratos' | 'Varios';
  monto: number;
  fecha: string;
}

export interface Trabajador {
  id: string;
  nombre: string;
  rol: 'Capataz' | 'Oficial Albañil' | 'Ayudante' | 'Fierrero' | 'Electricista';
  tarifaDia: number;
}
