import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { KokoLogo } from './KokoLogo';

interface FinalCTAProps {
  onWhatsAppClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onWhatsAppClick }) => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#3B0407] via-[#5C080E] to-[#400508] relative overflow-hidden text-center scroll-mt-24">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#BA1822]/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Centered Bao Mascot Logo with bounce animation */}
        <div className="flex justify-center mb-6">
          <div className="animate-bounce">
            <KokoLogo size={120} showText={false} />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight uppercase leading-tight">
          UDAH TAU MAU BAKPAO YANG MANA?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-[#F5E6DC] max-w-2xl mx-auto leading-relaxed">
          Jangan cuma lihat-lihat fotonya. Nikmati sensasi bakpao hangat yang dikukus fresh 
          dan melimpah sekarang juga!
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            id="btn-final-whatsapp"
            onClick={onWhatsAppClick}
            className="inline-flex items-center gap-2.5 bg-[#F9BF29] hover:bg-[#FFCF4D] text-[#4A0609] font-black text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-500/25 active:scale-95 transition cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-emerald-800" />
            <span>PESAN SEKARANG VIA WHATSAPP</span>
          </button>

          <a
            href="tel:081398768046"
            className="inline-flex items-center gap-2 bg-[#660B10]/80 hover:bg-[#7D0E15] text-white font-bold text-sm px-7 py-4 rounded-full border border-[#9A1E26] hover:border-[#F9BF29] transition"
          >
            <Phone className="w-4 h-4 text-[#F9BF29]" />
            <span>0813-9876-8046</span>
          </a>
        </div>

        {/* 3 Trust Badges */}
        <div className="mt-12 pt-8 border-t border-[#6E0F15] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left sm:text-center">
          <div className="flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm font-bold text-[#F4E3D8]">
            <CheckCircle2 className="w-4 h-4 text-[#F9BF29] shrink-0" />
            <span>PENGIRIMAN INSTANT &amp; SAMEDAY</span>
          </div>

          <div className="flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm font-bold text-[#F4E3D8]">
            <CheckCircle2 className="w-4 h-4 text-[#F9BF29] shrink-0" />
            <span>PACKING BOX TEBAL &amp; AMAN</span>
          </div>

          <div className="flex items-center sm:justify-center gap-2.5 text-xs sm:text-sm font-bold text-[#F4E3D8]">
            <CheckCircle2 className="w-4 h-4 text-[#F9BF29] shrink-0" />
            <span>GARANSI FRESH SAMPAI TUJUAN</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
};
