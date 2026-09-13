import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../assets';
import { Wheat, ShieldCheck, Award, Hand, Flame, Sparkles, ChevronRight } from 'lucide-react';

interface QualityStoryProps {
  onReheatTipsClick?: () => void;
}

export const QualityStory: React.FC<QualityStoryProps> = ({ onReheatTipsClick }) => {
  return (
    <section id="story" className="py-20 sm:py-24 bg-gradient-to-b from-[#380407] via-[#48060B] to-[#400508] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Craft Story & 4 Pillars */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#63090F] text-[#F9BF29] text-xs font-bold uppercase tracking-wider mb-3 border border-[#851118]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THE BAO CRAFTSMANSHIP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight uppercase">
                SOFT IS SERIOUS BUSINESS.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#F4E4D9] leading-relaxed">
                Bagi Koko, kelembutan bakpao bukan sekadar adonan mengembang. 
                Ada perhitungan suhu fermentasi alami, kelembapan uap bambu tradisional, 
                serta tepung gandum halus tanpa zat pemutih yang kami pilih dengan cermat.
              </p>
            </div>

            {/* 4 Feature Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Pillar 1 */}
              <div className="bg-[#4E070B] border border-[#751118] rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#6E0E14] text-[#F9BF29] flex items-center justify-center shrink-0 border border-[#8C161E]">
                  <Wheat className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white font-display">
                    Tepung Khusus Premium
                  </h4>
                  <p className="text-xs text-[#DEC6BB] mt-1 leading-relaxed">
                    Protein khusus pilihan untuk hasil adonan kenyal-empuk selembut awan.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-[#4E070B] border border-[#751118] rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#6E0E14] text-[#F9BF29] flex items-center justify-center shrink-0 border border-[#8C161E]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white font-display">
                    Tanpa Zat Pengawet
                  </h4>
                  <p className="text-xs text-[#DEC6BB] mt-1 leading-relaxed">
                    Aman dikonsumsi anak-anak, balita, hingga seluruh keluarga tercinta.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-[#4E070B] border border-[#751118] rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#6E0E14] text-[#F9BF29] flex items-center justify-center shrink-0 border border-[#8C161E]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white font-display">
                    100% Halal &amp; Higienis
                  </h4>
                  <p className="text-xs text-[#DEC6BB] mt-1 leading-relaxed">
                    Semua bahan terverifikasi halal, diproses di dapur bersih berstandar tinggi.
                  </p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-[#4E070B] border border-[#751118] rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#6E0E14] text-[#F9BF29] flex items-center justify-center shrink-0 border border-[#8C161E]">
                  <Hand className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white font-display">
                    Handcrafted Daily
                  </h4>
                  <p className="text-xs text-[#DEC6BB] mt-1 leading-relaxed">
                    Dibentuk satu persatu dengan tangan terampil setiap pagi sebelum subuh.
                  </p>
                </div>
              </div>

            </div>

            {/* Reheating Tips Callout Banner */}
            <div 
              onClick={onReheatTipsClick}
              className="bg-gradient-to-r from-[#690C12] to-[#54070B] border border-[#8F161F] rounded-2xl p-4 flex items-center justify-between gap-4 cursor-pointer hover:border-[#F9BF29] transition shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#BA1822] text-[#F9BF29] flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#F9BF29] uppercase tracking-wider block">
                    TIPS HANGATKAN DI RUMAH
                  </span>
                  <p className="text-xs text-white font-medium">
                    Kukus 5-7 menit atau microwave 45 detik dengan segelas air kecil di sampingnya.
                  </p>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-[#F9BF29] shrink-0" />
            </div>

          </motion.div>

          {/* Right Column: Texture Photo Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-[#87121A] shadow-2xl bg-[#4A0609] p-4 group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#2A0305]">
                <img
                  src={IMAGES.bunTextureCraft}
                  alt="Tekstur Lembut Adonan Bakpaonya Koko"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase bg-[#BA1822] text-white shadow">
                    ARTISANAL PROCESS
                  </span>
                </div>

                {/* Bottom Overlay Quote */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="bg-[#420609]/90 backdrop-blur-md border border-[#87121A] rounded-xl p-3.5">
                    <span className="text-[10px] font-black uppercase text-[#F9BF29] tracking-wider block">
                      UNCOMPROMISING QUALITY
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                      &ldquo;Sekali gigit, terasa bedanya. Kulitnya gak nempel di gigi, empuknya bertahan lama.&rdquo;
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
