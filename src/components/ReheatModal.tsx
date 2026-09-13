import React from 'react';
import { X, Flame, Waves, Wind, ThermometerSnowflake, Check } from 'lucide-react';

interface ReheatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReheatModal: React.FC<ReheatModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-[#FFFDF9] text-[#2C0A0E] rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#F0DDD4] p-6 space-y-5 animate-scaleUp">
        <div className="flex items-center justify-between border-b border-[#F0DDD4] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FCEEE8] text-[#BA1822] flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-black text-[#260507] font-display">
              PANDUAN HANGATKAN BAKPAO
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#735154] hover:bg-[#F2E5DF] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3.5 text-xs text-[#3E2125]">
          {/* Kukus */}
          <div className="p-3.5 bg-[#FAF0EA] rounded-2xl border border-[#EADBCE] flex gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#BA1822] text-white flex items-center justify-center shrink-0">
              <Waves className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-sm font-bold text-[#851118] block font-display">
                1. Kukusan Bambu / Steamer (Rekomendasi Terbaik)
              </strong>
              <p className="mt-1 text-[#5E383D] leading-relaxed">
                Panaskan air hingga mendidih. Kukus bakpao selama <strong>5 - 7 menit</strong>. Kulit akan kembali mengembang empuk selembut kapas layaknya baru matang dari outlet.
              </p>
            </div>
          </div>

          {/* Microwave */}
          <div className="p-3.5 bg-[#FAF0EA] rounded-2xl border border-[#EADBCE] flex gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#BA1822] text-white flex items-center justify-center shrink-0">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-sm font-bold text-[#851118] block font-display">
                2. Microwave Cepat
              </strong>
              <p className="mt-1 text-[#5E383D] leading-relaxed">
                Beri sedikit percikan air bersih di atas kulit bakpao atau letakkan segelas air kecil di dalam microwave. Hangatkan selama <strong>40 - 50 detik</strong> (daya medium).
              </p>
            </div>
          </div>

          {/* Air Fryer */}
          <div className="p-3.5 bg-[#FAF0EA] rounded-2xl border border-[#EADBCE] flex gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#BA1822] text-white flex items-center justify-center shrink-0">
              <Wind className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-sm font-bold text-[#851118] block font-display">
                3. Air Fryer (Crispy Outside, Molten Inside)
              </strong>
              <p className="mt-1 text-[#5E383D] leading-relaxed">
                Oles tipis mentega atau minyak wijen di kulit luar, lalu panaskan di suhu 160°C selama <strong>3 - 4 menit</strong> untuk sensasi kulit renyah keemasan.
              </p>
            </div>
          </div>

          {/* Storage */}
          <div className="p-3.5 bg-[#F2F7F4] rounded-2xl border border-[#D5E6DC] flex gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
              <ThermometerSnowflake className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-sm font-bold text-emerald-900 block font-display">
                Daya Tahan Simpan
              </strong>
              <p className="mt-1 text-emerald-800 leading-relaxed">
                Suhu Ruang: 24 jam • Kulkas (Chiller): 3 - 4 hari • Freezer: hingga 1 bulan dalam wadah kedap udara.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#BA1822] hover:bg-[#D41C27] text-white font-bold text-xs uppercase tracking-wider rounded-full transition shadow"
        >
          Mengerti, Tutup
        </button>
      </div>
    </div>
  );
};
