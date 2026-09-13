import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowDown, Sparkles, Star, Flame } from 'lucide-react';
import { IMAGES } from '../assets';
import { KokoLogo } from './KokoLogo';

interface HeroSectionProps {
  onOrderClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOrderClick,
  onExploreClick,
}) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#4A0609] via-[#5C080E] to-[#450508]"
    >
      {/* Warm Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9A161F]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F9BF29]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle traditional steam pattern lines in background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            
            {/* 3 Trust Tags */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#781017]/80 text-[#FFF7ED] border border-[#9A1D25] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F9BF29] animate-pulse" />
                FRESH MADE DAILY
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#781017]/80 text-[#FFF7ED] border border-[#9A1D25] shadow-sm">
                TANPA PENGAWET
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#781017]/80 text-[#FFF7ED] border border-[#9A1D25] shadow-sm">
                100% HALAL
              </span>
            </div>

            {/* Small Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-[#F9BF29] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
                ★ BUKAN BAKPAO BIASA ★
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white font-display leading-[1.05]">
                BAKPAO LEMBUT.
              </h1>
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#F9BF29] italic font-display flex items-center gap-2">
                <span>isi SERIUS.</span>
                <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 text-[#FFD166] animate-bounce shrink-0" />
              </div>
            </div>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-[#F7EBE1] max-w-xl leading-relaxed font-normal">
              Freshly made setiap hari dengan tepung kualitas premium, tekstur selembut awan, 
              dan isian melimpah yang diracik khusus bikin kamu selalu nagih.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                id="hero-order-cta"
                onClick={onOrderClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F9BF29] hover:bg-[#FFCF4D] text-[#4A0609] font-black text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-xl hover:shadow-yellow-500/25 active:scale-95 transition-all cursor-pointer group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>PESAN SEKARANG</span>
              </button>

              <button
                id="hero-explore-cta"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6E0D12]/70 hover:bg-[#851118] text-white font-bold text-sm tracking-wide px-7 py-4 rounded-full border border-[#9A1E26] hover:border-[#F9BF29] transition-all cursor-pointer"
              >
                <span>Eksplor Menu</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>

            {/* Social Proof Badge */}
            <div className="pt-3 w-full sm:w-auto">
              <div className="inline-flex items-center gap-3.5 bg-[#400508]/85 border border-[#7D1119] rounded-2xl sm:rounded-full p-2.5 sm:pr-6 shadow-md backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#851118] to-[#5C080E] border border-[#F9BF29]/40 flex items-center justify-center shrink-0 shadow-inner">
                  <Star className="w-5 h-5 fill-[#F9BF29] text-[#F9BF29]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-1.5">
                    <span>12.000+ Bao Terjual Tiap Bulan</span>
                    <span className="hidden sm:inline text-xs text-[#F9BF29]">★ 4.9</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#EAD8CE]">
                    Favorit keluarga, kantor, dan santap hangat sore
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Cutaway Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.93, y: 35, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative layered glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#F9BF29] via-[#BA1822] to-[#F9BF29] rounded-3xl blur opacity-30 animate-pulse" />

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#7A0D14] via-[#65080E] to-[#480507] p-5 sm:p-6 border-2 border-[#961922] shadow-2xl overflow-hidden">
                
                {/* Background vintage stripes effect */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 15px, transparent 0, transparent 30px)'
                  }}
                />

                {/* Card Top Header */}
                <div className="relative flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-[#F9BF29] text-[#4A0609] shadow">
                    <Flame className="w-3.5 h-3.5 fill-[#4A0609]" />
                    #1 Koko Signature
                  </span>
                  
                  <span className="text-xs font-bold text-white/80 bg-black/30 px-2.5 py-1 rounded-full border border-white/10">
                    Verified Halal
                  </span>
                </div>

                {/* Bao Title */}
                <div className="relative mb-3 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white font-display uppercase">
                    BAKPAO CHARSIU SPECIAL
                  </h3>
                  <p className="text-xs text-[#F9BF29] font-semibold mt-0.5">
                    Daging Halal Gurih Manis &amp; Golden Salted Egg Yolk
                  </p>
                </div>

                {/* Large Cutaway Image with custom hover effect */}
                <div className="relative rounded-2xl overflow-hidden border border-[#8C161E] bg-[#3B0407] aspect-square group shadow-inner">
                  <img
                    src={IMAGES.heroCharsiu}
                    alt="Bakpao Charsiu Special Cutaway"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Salted Egg Callout Badge */}
                  <div className="absolute top-3 right-3 bg-[#F9BF29] text-[#4A0609] px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#D97706] animate-ping" />
                    100% Salted Egg Yolk
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-3 bg-[#4A0609]/90 backdrop-blur-sm border border-[#8C161E] text-white px-3 py-1 rounded-xl text-sm font-extrabold shadow">
                    Rp 26.000
                  </div>
                </div>

                {/* Bottom Card Footer Pill */}
                <div className="relative mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wider text-[#F9BF29] font-bold">
                      KOKO&apos;S SPECIAL CUTAWAY
                    </span>
                    <span className="font-bold text-white">
                      Charsiu Special Melt
                    </span>
                  </div>

                  <button
                    onClick={onOrderClick}
                    className="bg-[#BA1822] hover:bg-[#D41C27] text-white text-xs font-bold px-4 py-2 rounded-full transition shadow cursor-pointer active:scale-95"
                  >
                    + Pesan Sekarang
                  </button>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
