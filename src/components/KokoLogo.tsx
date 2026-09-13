import React from 'react';
import { IMAGES } from '../assets';

interface KokoLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const KokoLogo: React.FC<KokoLogoProps> = ({
  className = '',
  size = 48,
  showText = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Bakpaonya Koko Sticker Logo from user image */}
      <div 
        className="relative shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <img
          src={IMAGES.logo}
          alt="Bakpaonya Koko Logo"
          className="w-full h-full object-contain filter drop-shadow-md"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Typography Brand Name */}
      {showText && (
        <div className="flex flex-col leading-none text-left">
          <span className="font-extrabold tracking-tight text-white font-display text-lg sm:text-xl">
            BAKPAONYA KOKO
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#F9BF29] uppercase mt-0.5">
            Artisanal Steamed Bun
          </span>
        </div>
      )}
    </div>
  );
};
