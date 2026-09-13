import React from 'react';

export const TrustTicker: React.FC = () => {
  const tickerItems = [
    'BAKPAO HANGAT',
    'FRESH MADE SETIAP HARI',
    'TANPA BAHAN PENGAWET',
    'ISIAN MELIMPAH',
    'BAKPAONYA KOKO',
    '100% HALAL INDONESIA',
    'LEMBUT SEPERTI AWAN',
    'RESEP OTENTIK KOKO',
    'KUKUS FRESH TIAP JAM',
  ];

  return (
    <div className="relative w-full bg-[#B91C27] text-white py-3.5 overflow-hidden border-y border-[#DC2626]/40 shadow-inner select-none">
      <div className="flex w-max animate-marquee space-x-8 items-center font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 shrink-0">
            <span className="text-white drop-shadow-sm">{item}</span>
            <span className="text-[#F9BF29] text-base leading-none">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};
