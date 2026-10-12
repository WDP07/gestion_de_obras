/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemsSection } from './components/ProblemsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { VideoSection } from './components/VideoSection';
import { StepsSection } from './components/StepsSection';
import { CierreSection } from './components/CierreSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { GoogleSitesModal } from './components/GoogleSitesModal';
import { ExpenseModal } from './components/ExpenseModal';
import { PayrollSimulatorModal } from './components/PayrollSimulatorModal';
import { VideoModal } from './components/VideoModal';
import { ObraItem, GastoItem } from './types';
import { Globe, ArrowRight } from 'lucide-react';

export default function App() {
  // Application State
  const [currency, setCurrency] = useState<'PYG' | 'USD'>('PYG');
  const [obras] = useState<ObraItem[]>([
    { id: '1', nombre: 'Residencial Los Álamos', cliente: 'Ing. Martínez', gastos: 22000000, cobros: 35000000 },
    { id: '2', nombre: 'Edificio San Jerónimo', cliente: 'Arq. Benítez', gastos: 17500000, cobros: 25000000 },
    { id: '3', nombre: 'Dúplex Lambaré', cliente: 'Flia. Gómez', gastos: 9000000, cobros: 12000000 },
  ]);

  const [gastosTotal, setGastosTotal] = useState(48500000);
  const [cobrosTotal, setCobrosTotal] = useState(72000000);

  // Modals
  const [isGoogleSitesModalOpen, setIsGoogleSitesModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isPayrollModalOpen, setIsPayrollModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [dismissTopBanner, setDismissTopBanner] = useState(false);

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'PYG' ? 'USD' : 'PYG'));
  };

  const handleAddGasto = (nuevoGasto: GastoItem) => {
    // If USD, convert to approx PYG for unified base tracking
    const montoPYG = currency === 'USD' ? nuevoGasto.monto * 7500 : nuevoGasto.monto;
    setGastosTotal((prev) => prev + montoPYG);
  };

  const handleConfirmPayrollPayment = (montoNeto: number, workerName: string) => {
    const montoPYG = currency === 'USD' ? montoNeto * 7500 : montoNeto;
    setGastosTotal((prev) => prev + montoPYG);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1B2A41]">
      {/* Google Sites Integration Notification Banner */}
      {!dismissTopBanner && (
        <div className="bg-[#14325C] text-white px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 border-[#0d2342] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 max-w-[90%] truncate">
            <Globe className="w-4 h-4 text-[#FFC400] shrink-0" />
            <span className="truncate">
              ¿Deseas incorporar esta página en tu sitio web de <strong>Google Sites</strong> (<code>sites.google.com/view/gestion-de-obrasix</code>)?
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsGoogleSitesModalOpen(true)}
              className="bg-[#FFC400] text-[#14325C] hover:bg-white px-2.5 py-1 rounded-md text-xs font-black flex items-center gap-1 transition-colors"
            >
              <span>Ver cómo insertar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDismissTopBanner(true)}
              className="text-white/70 hover:text-white px-1.5 py-0.5 rounded text-xs font-bold"
              aria-label="Cerrar aviso"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        onOpenGoogleSitesModal={() => setIsGoogleSitesModalOpen(true)}
        onOpenPayrollModal={() => setIsPayrollModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with interactive phone mockup */}
        <Hero
          obras={obras}
          gastosTotal={gastosTotal}
          cobrosTotal={cobrosTotal}
          currency={currency}
          onToggleCurrency={handleToggleCurrency}
          onOpenExpenseModal={() => setIsExpenseModalOpen(true)}
          onOpenPayrollModal={() => setIsPayrollModalOpen(true)}
        />

        {/* Franja de advertencia industrial */}
        <div className="franja-obra" aria-hidden="true" />

        {/* Problemas comunes */}
        <ProblemsSection />

        {/* Funcionalidades con Simulador de Jornales */}
        <FeaturesSection
          onOpenPayrollModal={() => setIsPayrollModalOpen(true)}
        />

        {/* Video explicativo interactivo */}
        <VideoSection
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
        />

        {/* Pasos para pedir demo */}
        <StepsSection />

        {/* Cierre con CTA */}
        <CierreSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenGoogleSitesModal={() => setIsGoogleSitesModalOpen(true)}
      />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Modals & Interactivity */}
      <GoogleSitesModal
        isOpen={isGoogleSitesModalOpen}
        onClose={() => setIsGoogleSitesModalOpen(false)}
      />

      <ExpenseModal
        isOpen={isExpenseModalOpen}
        onClose={() => setIsExpenseModalOpen(false)}
        obras={obras}
        onAddGasto={handleAddGasto}
        currency={currency}
      />

      <PayrollSimulatorModal
        isOpen={isPayrollModalOpen}
        onClose={() => setIsPayrollModalOpen(false)}
        currency={currency}
        onConfirmPayment={handleConfirmPayrollPayment}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
