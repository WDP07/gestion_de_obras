import React from 'react';

export const StepsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="demo">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14325C] tracking-tight mb-3 max-w-[24ch]">
          Cómo pedir tu demo
        </h2>
        <p className="text-lg sm:text-xl font-bold text-[#4A5B73] mb-12 max-w-[55ch]">
          Sin trámites complejos. En 10 minutos tenés la solución funcionando para tu empresa.
        </p>

        {/* 3 Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Paso 1 */}
          <div className="bg-[#F8FAFC] neo-border rounded-2xl p-7 neo-shadow flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-[52px] h-[52px] bg-[#FFC400] text-[#14325C] border-[2.5px] border-[#14325C] rounded-xl flex items-center justify-center font-black text-3xl mb-4 shadow-[2px_2px_0_#14325C]">
                1
              </div>
              <h3 className="text-2xl font-black text-[#14325C] mb-2.5 tracking-tight">
                Escribinos
              </h3>
              <p className="text-base font-semibold text-[#475467] leading-relaxed">
                Mandanos un mensaje directo por WhatsApp o coordinemos una llamada telefónica breve.
              </p>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="bg-[#F8FAFC] neo-border rounded-2xl p-7 neo-shadow flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-[52px] h-[52px] bg-[#FFC400] text-[#14325C] border-[2.5px] border-[#14325C] rounded-xl flex items-center justify-center font-black text-3xl mb-4 shadow-[2px_2px_0_#14325C]">
                2
              </div>
              <h3 className="text-2xl font-black text-[#14325C] mb-2.5 tracking-tight">
                Contanos tu obra
              </h3>
              <p className="text-base font-semibold text-[#475467] leading-relaxed">
                Hablamos sobre cuántas obras tenés activas, cuánta gente manejás y cómo llevás tus números hoy.
              </p>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="bg-[#F8FAFC] neo-border rounded-2xl p-7 neo-shadow flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-[52px] h-[52px] bg-[#FFC400] text-[#14325C] border-[2.5px] border-[#14325C] rounded-xl flex items-center justify-center font-black text-3xl mb-4 shadow-[2px_2px_0_#14325C]">
                3
              </div>
              <h3 className="text-2xl font-black text-[#14325C] mb-2.5 tracking-tight">
                Te la mostramos
              </h3>
              <p className="text-base font-semibold text-[#475467] leading-relaxed">
                Configuramos la app con tus datos reales para que compruebes lo fácil que es tener el control total.
              </p>
            </div>
          </div>
        </div>

        {/* Center CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/59599742457?text=quiero%20mas%20informaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 min-h-[58px] px-8 py-3.5 rounded-2xl font-black text-lg text-white bg-[#1FA855] hover:bg-[#198745] border-[3.5px] border-[#14325C] shadow-[0_6px_0_#14325C] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#14325C] active:translate-y-0.5 active:shadow-[0_2px_0_#14325C] transition-all"
          >
            <svg className="w-6 h-6 fill-white shrink-0" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.8 1.5 5.6 1.5 7 0 12.6-5.6 12.6-12.5S23 3 16 3zm0 22.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.4 1.2 1.2-4.3-.3-.4a10.2 10.2 0 0 1-1.6-5.5C5.5 9.9 10.2 5.3 16 5.3s10.5 4.6 10.5 10.3S21.8 25.8 16 25.8zm5.8-7.6c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-.9 1.2-.4.2-.7.1c-1.9-.9-3.1-1.7-4.3-3.8-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/>
            </svg>
            <span>Pedir demo por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
