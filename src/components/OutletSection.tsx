import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../assets';
import { OUTLET_DATA } from '../data';
import { MapPin, Clock, Phone, Navigation, MessageCircle, Store, Sparkles } from 'lucide-react';

export const OutletSection: React.FC = () => {
  return (
    <section id="outlet" className="py-20 sm:py-24 bg-[#3B0407] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Outlet Photo Card */}
          <motion.div 
            initial={{ opacity: 0, x: -35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden border-2 border-[#7E1118] bg-[#4E070B] p-4 shadow-2xl group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#280305]">
                <img
                  src={IMAGES.storefrontKoko}
                  alt="Bakpaonya Koko Alam Sutera Storefront"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Top Badge: Name */}
                <div className="absolute top-4 left-4 bg-[#BA1822] text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow tracking-wider uppercase flex items-center gap-1.5">
                  <Store className="w-3.5 h-3.5" />
                  <span>BAKPAONYA KOKO ALAM SUTERA</span>
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-4 right-4 bg-emerald-700/90 backdrop-blur-xs text-white text-xs font-extrabold px-3 py-1 rounded-full shadow flex items-center gap-1.5 border border-emerald-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                  <span>BUKA SEKARANG</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Outlet Address & Ordering Details */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5E090E] text-[#F9BF29] text-xs font-bold uppercase tracking-wider mb-3 border border-[#7D1119]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SINGGAH &amp; NIKMATI HANGAT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight uppercase">
                A LITTLE RED SHOP FULL OF BAO.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#EAD5C8] leading-relaxed">
                Kunjungi toko bernuansa merah hangat kami. Cium aroma kukusan bambu yang semerbak 
                dan pilih bakpao favoritmu langsung dari steamer!
              </p>
            </div>

            {/* Info Card (Cream / White aesthetic) */}
            <div className="bg-[#FFFDF9] text-[#2C0A0E] rounded-3xl p-6 shadow-2xl border border-[#F3E8E2] space-y-4">
              <div className="flex items-start justify-between border-b border-[#F0DDD4] pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#851118] font-display">
                    {OUTLET_DATA.name}
                  </h3>
                  <span className="text-xs text-[#735154] font-medium">
                    {OUTLET_DATA.tagline}
                  </span>
                </div>

                <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full shrink-0">
                  {OUTLET_DATA.status}
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#45272B]">
                <MapPin className="w-4 h-4 text-[#BA1822] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{OUTLET_DATA.address}</span>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#45272B]">
                <Clock className="w-4 h-4 text-[#BA1822] shrink-0" />
                <span>{OUTLET_DATA.hours}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#45272B]">
                <Phone className="w-4 h-4 text-[#BA1822] shrink-0" />
                <span className="font-bold">{OUTLET_DATA.phone}</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={OUTLET_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#BA1822] hover:bg-[#D41C27] text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-full transition shadow"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Petunjuk Arah (Maps)</span>
                </a>

                <a
                  href={OUTLET_DATA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F6ECE6] hover:bg-[#EBD8CE] text-[#4A0609] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full border border-[#D5BEB4] transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Chat Outlet</span>
                </a>
              </div>
            </div>

            {/* Delivery Platforms Strip */}
            <div className="pt-1 text-xs text-[#D8BFB3] flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-bold text-[#F9BF29] tracking-wider uppercase">
                TERSEDIA JUGA DI:
              </span>
              <span className="bg-[#4E070B] border border-[#751118] px-3 py-1 rounded-full text-white font-medium">
                GrabFood
              </span>
              <span className="bg-[#4E070B] border border-[#751118] px-3 py-1 rounded-full text-white font-medium">
                GoFood
              </span>
              <span className="bg-[#4E070B] border border-[#751118] px-3 py-1 rounded-full text-white font-medium">
                ShopeeFood
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
