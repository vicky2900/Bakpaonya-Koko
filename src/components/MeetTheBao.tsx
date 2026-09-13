import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BaoProduct } from '../types';
import { MEET_THE_BAO_PRODUCTS } from '../data';
import { Plus, Check, ArrowRight, Sparkles, Heart } from 'lucide-react';

interface MeetTheBaoProps {
  onAddToCart: (product: BaoProduct) => void;
  onSelectProduct: (product: BaoProduct) => void;
  onViewAllMenu: () => void;
}

export const MeetTheBao: React.FC<MeetTheBaoProps> = ({
  onAddToCart,
  onSelectProduct,
  onViewAllMenu,
}) => {
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (product: BaoProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const getBadgeStyle = (type: BaoProduct['badge']['type']) => {
    switch (type) {
      case 'best':
        return 'bg-[#BA1822] text-white';
      case 'viral':
        return 'bg-[#D97706] text-white';
      case 'kids':
        return 'bg-[#EA580C] text-white';
      case 'tradisi':
        return 'bg-[#7C3AED] text-white';
      case 'pedas':
        return 'bg-[#DC2626] text-white';
      case 'nusantara':
        return 'bg-[#92400E] text-white';
      default:
        return 'bg-[#851118] text-white';
    }
  };

  return (
    <section id="menu" className="py-20 bg-[#420508] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E0D12] text-[#F9BF29] text-xs font-bold uppercase tracking-wider mb-3 border border-[#8C161E]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>KURASI FAVORIT WARGA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight uppercase">
              MEET THE BAO
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#EAD8CE] max-w-xl leading-relaxed">
              6 varian terfavorit yang wajib kamu coba pertama kali. Tekstur kenyal lembut 
              dengan isian padat penuh rasa otentik.
            </p>
          </div>

          <button
            onClick={onViewAllMenu}
            className="self-start md:self-end inline-flex items-center gap-2 text-sm font-bold text-[#F9BF29] hover:text-white bg-[#5F0A0F] hover:bg-[#780F15] px-5 py-2.5 rounded-full border border-[#8A141C] transition cursor-pointer"
          >
            <span>Lihat Semua 18 Rasa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MEET_THE_BAO_PRODUCTS.map((product, idx) => {
            const isJustAdded = addedId === product.id;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: (idx % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => onSelectProduct(product)}
                className="group relative bg-[#FFFDF9] text-[#2C0A0E] rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between border border-[#F3E8E2] cursor-pointer"
              >
                {/* Top Badge & Price Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[11px] font-black tracking-wider uppercase px-3 py-1 rounded-full shadow-sm ${getBadgeStyle(
                      product.badge.type
                    )}`}
                  >
                    {product.badge.text}
                  </span>

                  <span className="text-sm font-black text-[#851118] bg-[#F9EFE9] px-3 py-1 rounded-full font-display">
                    {product.priceFormatted}
                  </span>
                </div>

                {/* Product Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#F5EBE6] mb-4 group-hover:shadow-md transition">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {product.fillingRatio && (
                    <div className="absolute bottom-2.5 left-2.5 bg-black/65 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {product.fillingRatio}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-[#260507] font-display group-hover:text-[#BA1822] transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] text-[#553034] leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Card Bottom: Tags & Action Button */}
                  <div className="mt-5 pt-3 border-t border-[#F0DFD7] flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-[#8C6064] tracking-wider uppercase">
                      {product.tags.join(' • ')}
                    </span>

                    <button
                      id={`btn-add-${product.id}`}
                      onClick={(e) => handleAdd(product, e)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black tracking-wide uppercase transition-all shadow cursor-pointer active:scale-95 ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#BA1822] hover:bg-[#D41C27] text-white hover:shadow-red-900/30'
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
                          <span>+ Pesan</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
