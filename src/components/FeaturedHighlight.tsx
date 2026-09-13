import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../assets';
import { Clock, Cloud, Utensils, MessageCircle, Sparkles } from 'lucide-react';

interface FeaturedHighlightProps {
  onOrderBundling: () => void;
}

export const FeaturedHighlight: React.FC<FeaturedHighlightProps> = ({
  onOrderBundling,
}) => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#420508] via-[#52070C] to-[#3B0407] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#BA1822]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big visual card with ratio callout */}
          <motion.div 
            initial={{ opacity: 0, x: -35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-2 border-[#82131B] bg-[#59090E] p-4 sm:p-5 group">
              
              {/* Inner Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] bg-[#2D0305]">
                <img
                  src={IMAGES.chocoCheeseMelt}
                  alt="Bakpao Choco Cheese Split Texture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Standard Koko Ratio Tag Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#4A0609]/90 backdrop-blur-md border border-[#9A1E26] rounded-2xl p-3.5 sm:p-4 flex items-center justify-between shadow-xl">
                  <div className="text-left">
                    <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F9BF29]">
                      STANDARD KOKO
                    </span>
                    <span className="text-xs sm:text-sm font-black text-white">
                      Rasio Isian 60% : Kulit 40%
                    </span>
                    <span className="block text-[10px] text-[#E5D2C8] mt-0.5">
                      Gak pelit filling di setiap gigitan
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F9BF29] to-[#FCE7A4] text-[#4A0609] flex flex-col items-center justify-center font-black shadow shrink-0">
                    <span className="text-xs leading-none">100%</span>
                    <span className="text-[8px] uppercase tracking-tighter">Halal</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Signature Story & 3 Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E0D12] text-[#F9BF29] text-xs font-bold uppercase tracking-wider mb-3 border border-[#8C161E]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THE KOKO SIGNATURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight uppercase">
                BAKPAO DENGAN TEPUNG JEPANG
                PERTAMA DI INDONESIA.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#F4E3D7] leading-relaxed">
                Adonan super lembut dengan tepung pilihan tanpa bahan pemutih kimiawi, 
                filling generous yang tidak pelit, dan racikan resep otentik yang punya karakter rasa mendalam.
              </p>
            </div>

            {/* 3 Feature Cards */}
            <div className="space-y-3.5 pt-2">
              
              {/* Feature 1 */}
              <div className="bg-[#4E070B]/85 hover:bg-[#5D0A10] border border-[#7D1119] rounded-2xl p-4 sm:p-4.5 transition duration-200 flex gap-4 items-start shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#7D1119] border border-[#9A1E26] text-[#F9BF29] flex items-center justify-center shrink-0 shadow-inner">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-white font-display">
                    Fresh Made Daily
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#E3D1C6] leading-relaxed mt-1">
                    Dikukus bertahap setiap jam untuk memastikan kehangatan, kelembapan adonan, dan kenikmatan tekstur maksimal sampai ke tanganmu.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#4E070B]/85 hover:bg-[#5D0A10] border border-[#7D1119] rounded-2xl p-4 sm:p-4.5 transition duration-200 flex gap-4 items-start shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#7D1119] border border-[#9A1E26] text-[#F9BF29] flex items-center justify-center shrink-0 shadow-inner">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-white font-display">
                    Soft &amp; Fluffy Pillow Texture
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#E3D1C6] leading-relaxed mt-1">
                    Karakter adonan kenyal-lembut tanpa rasa lengket di gigi. Tetap empuk bahkan saat sudah dingin berjam-jam.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#4E070B]/85 hover:bg-[#5D0A10] border border-[#7D1119] rounded-2xl p-4 sm:p-4.5 transition duration-200 flex gap-4 items-start shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#7D1119] border border-[#9A1E26] text-[#F9BF29] flex items-center justify-center shrink-0 shadow-inner">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-white font-display">
                    Generous Filling Di Tiap Gigitan
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#E3D1C6] leading-relaxed mt-1">
                    Filling melimpah sampai ujung gigitan pertama dan terakhir. Daging tebal, keju mekar, dan telur asin utuh yang bikin puas.
                  </p>
                </div>
              </div>

            </div>

            {/* Bundling Action Button */}
            <div className="pt-2">
              <button
                id="btn-bundling-order"
                onClick={onOrderBundling}
                className="inline-flex items-center gap-2.5 bg-[#F9BF29] hover:bg-[#FFCF4D] text-[#4A0609] font-black text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-full shadow-xl hover:shadow-yellow-500/20 active:scale-95 transition cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>HUBUNGI KOKO &amp; PESAN BUNDLING</span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
