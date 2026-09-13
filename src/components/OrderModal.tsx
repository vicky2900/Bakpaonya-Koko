import React from 'react';
import { X, MessageCircle, ShoppingBag, Store, ExternalLink } from 'lucide-react';
import { OUTLET_DATA } from '../data';
import { KokoLogo } from './KokoLogo';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCart: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  onOpenCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-[#FFFDF9] text-[#2C0A0E] rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#F0DDD4] p-6 space-y-6 animate-scaleUp">
        <div className="flex items-center justify-between border-b border-[#F0DDD4] pb-4">
          <div className="flex items-center gap-2.5">
            <KokoLogo size={42} showText={false} />
            <div>
              <h3 className="text-lg font-black text-[#260507] font-display">
                CARA PEMESANAN
              </h3>
              <p className="text-[11px] text-[#8C6064]">
                Pilih opsi pengiriman atau kunjungi toko kami
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#735154] hover:bg-[#F2E5DF] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Ordering Options */}
        <div className="space-y-3">
          
          {/* Option 1: WhatsApp Direct */}
          <a
            href="https://wa.me/6281398768046?text=Halo%20Koko!%20Saya%20mau%20pesan%20bakpao%20hangat%20Bakpaonya%20Koko."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF0EA] hover:bg-[#F3E3D9] border border-[#E9D6CB] transition group"
          >
            <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-[#260508] font-display">
                  Pesan via WhatsApp
                </span>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                  Fast Response
                </span>
              </div>
              <p className="text-xs text-[#70484D] mt-0.5">
                Pengiriman Instant / Sameday &amp; Paket Hampers Box
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-[#8C6064] group-hover:text-[#BA1822]" />
          </a>

          {/* Option 2: Order Online Delivery */}
          <div className="p-4 rounded-2xl bg-[#FAF0EA] border border-[#E9D6CB] space-y-2">
            <span className="text-xs font-bold text-[#8C464C] uppercase tracking-wider block">
              Aplikasi Delivery Online:
            </span>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
              <a
                href="https://grab.onelink.me"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 bg-white rounded-xl border border-[#D5BEB4] hover:border-[#BA1822] text-[#2C0A0E] transition"
              >
                GrabFood
              </a>
              <a
                href="https://gofood.link"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 bg-white rounded-xl border border-[#D5BEB4] hover:border-[#BA1822] text-[#2C0A0E] transition"
              >
                GoFood
              </a>
              <a
                href="https://shopee.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 bg-white rounded-xl border border-[#D5BEB4] hover:border-[#BA1822] text-[#2C0A0E] transition"
              >
                ShopeeFood
              </a>
            </div>
          </div>

          {/* Option 3: Visit Outlet */}
          <a
            href={OUTLET_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF0EA] hover:bg-[#F3E3D9] border border-[#E9D6CB] transition group"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#BA1822] text-white flex items-center justify-center shrink-0 shadow">
              <Store className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-extrabold text-[#260508] font-display block">
                Beli Langsung di Toko
              </span>
              <p className="text-xs text-[#70484D] mt-0.5">
                Verona Junction Blok B-07, Alam Sutera (08.00 - 20.00 WIB)
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-[#8C6064] group-hover:text-[#BA1822]" />
          </a>

        </div>

        {/* View Menu or Cart */}
        <div className="pt-2 border-t border-[#F0DDD4]">
          <button
            onClick={() => {
              onClose();
              onOpenCart();
            }}
            className="w-full py-3 bg-[#F9BF29] hover:bg-[#FFCF4D] text-[#4A0609] font-black text-xs uppercase tracking-wider rounded-full transition shadow flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Lihat Keranjang Belanja</span>
          </button>
        </div>

      </div>
    </div>
  );
};
