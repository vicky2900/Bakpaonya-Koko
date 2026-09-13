import React from 'react';
import { KokoLogo } from './KokoLogo';
import { Instagram, MessageCircle, Mail, MapPin, Award, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D0305] text-[#DBC5B9] pt-16 pb-12 border-t border-[#54070B] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#4A070A]">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <KokoLogo size={52} />
            
            <p className="text-xs sm:text-sm text-[#D1B8AC] leading-relaxed max-w-sm pt-2">
              Menyajikan bakpao kukus artisanal dengan tekstur selembut awan dan isian melimpah 
              warisan rasa otentik khas Koko. Freshly steamed daily, 100% halal, dan tanpa bahan pengawet.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#420609] border border-[#690D13] px-3 py-1.5 rounded-full text-xs font-bold text-[#F9BF29]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% HALAL &amp; HYGIENIC CERTIFIED</span>
            </div>
          </div>

          {/* Column 2: Outlets */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black tracking-widest text-white uppercase font-display">
              KUNJUNGI OUTLET
            </h4>

            <div className="space-y-3 text-xs">
              <div className="bg-[#380407] p-3 rounded-xl border border-[#52070B]">
                <strong className="text-white block text-sm font-bold">
                  Alam Sutera Flagship
                </strong>
                <p className="text-[#C4A99D] mt-0.5 leading-relaxed">
                  Jl. Jalur Sutera Tim. No.16A No.2, Verona Junction Blok B-07, Tangerang
                </p>
                <span className="text-[#F9BF29] font-semibold mt-1 block">
                  Buka Setiap Hari: 08.00 - 20.00 WIB
                </span>
              </div>

              <div className="bg-[#380407] p-3 rounded-xl border border-[#52070B]">
                <strong className="text-white block text-sm font-bold">
                  Pop-up &amp; Delivery Station
                </strong>
                <p className="text-[#C4A99D] mt-0.5 leading-relaxed">
                  Tersedia pemesanan hampers &amp; corporate catering se-Jabodetabek
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Contact & Ordering */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black tracking-widest text-white uppercase font-display">
              PEMESANAN &amp; SOSMED
            </h4>

            <ul className="space-y-2.5 text-xs text-[#CDB4A7]">
              <li>
                <a
                  href="https://wa.me/6281398768046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#F9BF29] transition"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>0813-9876-8046 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/bakpaonyakoko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#F9BF29] transition"
                >
                  <Instagram className="w-4 h-4 text-[#F9BF29]" />
                  <span>@bakpaonyakoko</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:halo@bakpaonyakoko.com"
                  className="flex items-center gap-2.5 hover:text-[#F9BF29] transition"
                >
                  <Mail className="w-4 h-4 text-[#F9BF29]" />
                  <span>halo@bakpaonyakoko.com</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[10px] text-[#A6887B] block">
                Pemesanan Online:
              </span>
              <div className="flex gap-2 mt-1.5">
                <span className="px-2.5 py-1 bg-[#4A0609] rounded-md text-[11px] font-bold text-white border border-[#690D13]">
                  GrabFood
                </span>
                <span className="px-2.5 py-1 bg-[#4A0609] rounded-md text-[11px] font-bold text-white border border-[#690D13]">
                  GoFood
                </span>
                <span className="px-2.5 py-1 bg-[#4A0609] rounded-md text-[11px] font-bold text-white border border-[#690D13]">
                  ShopeeFood
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8276]">
          <p>© 2026 Bakpaonya Koko. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Syarat &amp; Ketentuan
            </a>
            <a href="#" className="hover:text-white transition">
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
