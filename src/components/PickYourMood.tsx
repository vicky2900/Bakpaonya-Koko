import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BaoProduct, BaoCategory } from '../types';
import { MOOD_PRODUCTS } from '../data';
import { Compass, Plus, Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface PickYourMoodProps {
  onAddToCart: (product: BaoProduct) => void;
  onSelectProduct: (product: BaoProduct) => void;
}

export const PickYourMood: React.FC<PickYourMoodProps> = ({
  onAddToCart,
  onSelectProduct,
}) => {
  const [activeCategory, setActiveCategory] = useState<BaoCategory>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories: { key: BaoCategory; label: string }[] = [
    { key: 'all', label: 'Semua Rasa' },
    { key: 'savory', label: '🥩 Daging & Asin Gurih' },
    { key: 'sweet', label: '🍠 Sweet & Lembut' },
    { key: 'cheese', label: '🧀 Keju Lumer' },
    { key: 'spicy', label: '🌶️ Sensasi Pedas' },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? MOOD_PRODUCTS
      : MOOD_PRODUCTS.filter((p) => p.category === activeCategory);

  const handleAdd = (product: BaoProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="mood" className="py-20 bg-[#380407] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#59090E] text-[#F9BF29] text-xs font-bold uppercase tracking-wider mb-3 border border-[#7D1119]">
            <Compass className="w-3.5 h-3.5" />
            <span>MENU NAVIGATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight uppercase">
            PICK YOUR MOOD
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#E6D4CA] leading-relaxed">
            Pilih suasana hatimu hari ini — apakah butuh yang manis menenangkan, 
            gurih berdaging mantap, atau lelehan keju creamy?
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#F9BF29] text-[#4A0609] shadow-lg scale-105'
                      : 'bg-[#52080D] text-white/80 hover:bg-[#680C12] hover:text-white border border-[#7D1119]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Carousel / Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => {
              const isJustAdded = addedId === product.id;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 35, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{
                    duration: 0.5,
                    delay: (idx % 3) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group bg-[#48060A] border border-[#6D0E15] hover:border-[#F9BF29]/60 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl flex flex-col justify-between cursor-pointer"
                >
                <div>
                  {/* Top Image Box */}
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#280305] mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Badge Pill */}
                    <div className="absolute top-2.5 left-2.5 bg-[#BA1822] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow">
                      {product.badge.text}
                    </div>

                    {/* Price Pill */}
                    <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-[#F9BF29] text-xs font-black px-2.5 py-1 rounded-lg">
                      {product.priceFormatted}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-black text-white font-display group-hover:text-[#F9BF29] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs text-[#DEC8BD] leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="mt-5 pt-3 border-t border-[#610C12] flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {product.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-bold uppercase tracking-wider text-[#F9BF29] bg-[#5C080E] px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => handleAdd(product, e)}
                    className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wide transition shadow cursor-pointer active:scale-95 ${
                      isJustAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#F9BF29] hover:bg-[#FFCF4D] text-[#4A0609]'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Ditambah</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 stroke-[3]" />
                        <span>+ Tambah</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
