import React, { useState } from 'react';
import { BaoProduct } from '../types';
import { X, Plus, Minus, ShoppingBag, Check, Sparkles, Flame, ShieldCheck } from 'lucide-react';

interface ProductModalProps {
  product: BaoProduct | null;
  onClose: () => void;
  onAddToCart: (product: BaoProduct, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#FFFDF9] text-[#2C0A0E] rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#F0DDD4] animate-scaleUp max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Banner */}
        <div className="relative aspect-video w-full bg-[#3B0407] overflow-hidden shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#BA1822] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
            {product.badge.text}
          </div>
          {product.fillingRatio && (
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xs text-[#F9BF29] text-xs font-bold px-3 py-1 rounded-lg">
              {product.fillingRatio}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black text-[#260507] font-display">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-[#8C6064] uppercase tracking-wider">
                  {product.tags.join(' • ')}
                </span>
              </div>
            </div>

            <span className="text-xl font-black text-[#BA1822] font-display shrink-0">
              {product.priceFormatted}
            </span>
          </div>

          <p className="text-sm text-[#4E2D32] leading-relaxed">
            {product.description}
          </p>

          {/* Highlights */}
          {product.features && product.features.length > 0 && (
            <div className="bg-[#FAF0EA] p-3.5 rounded-2xl border border-[#EADBCE]">
              <span className="text-xs font-bold text-[#8C464C] uppercase tracking-wider block mb-2">
                Keistimewaan Rasa:
              </span>
              <ul className="space-y-1.5 text-xs text-[#3A1B20]">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#BA1822] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quantity and Add Button */}
          <div className="pt-2 flex items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center gap-3 bg-[#F4EAE4] px-3 py-2 rounded-full border border-[#E2D1C7]">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-7 h-7 rounded-full bg-white text-[#4A0609] flex items-center justify-center font-bold shadow-xs hover:bg-[#EBE0D8] transition"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-extrabold text-sm min-w-[20px] text-center">
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-7 h-7 rounded-full bg-[#BA1822] text-white flex items-center justify-center font-bold shadow-xs hover:bg-[#D41C27] transition"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAdd}
              disabled={added}
              className={`flex-1 py-3 px-6 rounded-full font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition shadow cursor-pointer active:scale-95 ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#BA1822] hover:bg-[#D41C27] text-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Berhasil Ditambahkan!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    + Masukkan Keranjang (Rp{' '}
                    {(product.price * qty).toLocaleString('id-ID')})
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
