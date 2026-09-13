import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, newQty: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const formattedTotalPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(totalPrice);

  const handleCheckoutWhatsApp = () => {
    let message = `Halo Koko! Saya ingin memesan Bakpaonya Koko:\n\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name} (${item.quantity}x) - Rp ${(
        item.product.price * item.quantity
      ).toLocaleString('id-ID')}\n`;
    });
    message += `\n*Total: ${formattedTotalPrice}* (${totalItems} pcs)\n\nMohon info ketersediaan & ongkos kirim ke alamat saya ya Koko. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6281398768046?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Content */}
      <div className="relative w-full max-w-md bg-[#FFFDF9] text-[#2D0A0E] h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
        {/* Header */}
        <div className="p-5 border-b border-[#F0DDD4] flex items-center justify-between bg-[#52070B] text-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#F9BF29]" />
            <h3 className="text-lg font-black font-display tracking-tight">
              KERANJANG PESANAN
            </h3>
            <span className="bg-[#F9BF29] text-[#4A0609] text-xs font-black px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 transition cursor-pointer text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#7E575C]">
              <div className="w-16 h-16 rounded-full bg-[#FCEEE8] flex items-center justify-center mb-3">
                <ShoppingBag className="w-8 h-8 text-[#BA1822]" />
              </div>
              <p className="font-extrabold text-[#2E070B] text-base font-display">
                Keranjang masih kosong
              </p>
              <p className="text-xs text-[#7A565A] mt-1 max-w-xs">
                Yuk pilih bakpao favoritmu sekarang. Daging melimpah, ubi lumer, dan keju siap hangatkan harimu!
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-[#F0DDD4] shadow-sm"
              >
                {/* Image */}
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#F5ECE8]"
                />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-extrabold text-sm text-[#260508] truncate font-display">
                    {item.product.name}
                  </h4>
                  <p className="text-xs font-bold text-[#BA1822]">
                    {item.product.priceFormatted}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2.5 mt-2">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-6 h-6 rounded-full bg-[#F4EBE6] hover:bg-[#E8D8D0] flex items-center justify-center text-[#4A0609] transition"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-black min-w-[16px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-6 h-6 rounded-full bg-[#BA1822] hover:bg-[#D41C27] text-white flex items-center justify-center transition"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Subtotal & Delete */}
                <div className="text-right flex flex-col items-end justify-between self-stretch">
                  <button
                    onClick={() => onUpdateQuantity(item.product.id, 0)}
                    className="text-[#967074] hover:text-[#BA1822] p-1 transition"
                    title="Hapus"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-extrabold text-[#260508]">
                    Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#F0DDD4] bg-[#FFF8F4] space-y-4">
            {/* Box packaging suggestion */}
            <div className="bg-[#FAF0EA] p-3 rounded-xl border border-[#E8D6CB] text-xs text-[#593438] flex items-center justify-between">
              <span>
                {totalItems < 6
                  ? `💡 Tambah ${6 - totalItems} lagi untuk Box isi 6`
                  : totalItems < 12
                  ? `💡 Tambah ${12 - totalItems} lagi untuk Box isi 12`
                  : '✨ Siap dikemas dalam Box Hampers Eksklusif!'}
              </span>
              <span className="font-bold text-[#BA1822]">
                {totalItems} Pcs
              </span>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#66464A]">
                Total Pesanan:
              </span>
              <span className="text-xl font-black text-[#BA1822] font-display">
                {formattedTotalPrice}
              </span>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button
                id="btn-cart-checkout-whatsapp"
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 bg-[#BA1822] hover:bg-[#D41C27] text-white font-extrabold rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-red-900/20 active:scale-95 transition cursor-pointer text-sm uppercase tracking-wider"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pesan via WhatsApp Sekarang</span>
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-center text-xs font-semibold text-[#8C666A] hover:text-[#BA1822] py-1 transition"
              >
                Kosongkan Keranjang
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
