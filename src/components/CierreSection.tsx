import React from 'react';
import { PhoneCall } from 'lucide-react';

export const CierreSection: React.FC = () => {
  return (
    <section className="bg-[#FFC400] text-center border-t-[4px] border-[#14325C] py-20 px-4 sm:px-6">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14325C] tracking-tight mb-4 max-w-[22ch] mx-auto">
          Todo lo que tu obra necesita, en un solo lugar.
        </h2>
        <p className="text-xl sm:text-2xl font-bold text-[#14325C] max-w-[48ch] mx-auto mb-9 leading-snug">
          Dejá las libretas y el desorden atrás. Empezá a gestionar tus obras de forma profesional hoy mismo.
        </p>

        <a
          href="https://wa.me/59599742457?text=quiero%20mas%20informaci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 min-h-[58px] px-8 py-3.5 rounded-2xl font-black text-lg text-white bg-[#1FA855] hover:bg-[#198745] border-[3.5px] border-[#14325C] shadow-[0_6px_0_#14325C] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#14325C] active:translate-y-0.5 active:shadow-[0_2px_0_#14325C] transition-all"
        >
          <svg className="w-6 h-6 fill-white shrink-0" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.8 1.5 5.6 1.5 7 0 12.6-5.6 12.6-12.5S23 3 16 3zm0 22.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.4 1.2 1.2-4.3-.3-.4a10.2 10.2 0 0 1-1.6-5.5C5.5 9.9 10.2 5.3 16 5.3s10.5 4.6 10.5 10.3S21.8 25.8 16 25.8zm5.8-7.6c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-.9 1.2-.4.2-.7.1c-1.9-.9-3.1-1.7-4.3-3.8-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/>
          </svg>
          <span>Escribinos por WhatsApp</span>
        </a>

        <p className="font-extrabold text-[#14325C] mt-6 text-lg sm:text-xl flex items-center justify-center gap-2">
          <PhoneCall className="w-5 h-5 text-[#14325C]" />
          <span>También podés llamarnos directamente:</span>{' '}
          <a href="tel:+59599742457" className="underline hover:text-black">
            +595 997 424 57
          </a>
        </p>
      </div>
    </section>
  );
};
