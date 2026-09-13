import React, { useState, useEffect } from 'react';
import { KokoLogo } from './KokoLogo';
import { ShoppingBag, Menu, X, PhoneCall, UtensilsCrossed } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenOrderModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Cerita Koko', href: '#story' },
    { name: 'Outlet', href: '#outlet' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#4E0609]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#731017]'
          : 'bg-[#55070A]/85 backdrop-blur-sm py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <KokoLogo size={44} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-[#F9BF29] text-sm font-semibold tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              id="cart-trigger-btn"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#6E0D12] hover:bg-[#851118] text-white border border-[#961922] transition-colors flex items-center justify-center cursor-pointer"
              title="Lihat Keranjang"
              aria-label="Keranjang Pesanan"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#F9BF29] text-[#4A0609] text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Main CTA: PESAN SEKARANG */}
            <button
              id="navbar-order-btn"
              onClick={onOpenOrderModal}
              className="hidden sm:inline-flex items-center gap-2 bg-[#F9BF29] hover:bg-[#FFCF4D] text-[#4A0609] font-extrabold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full shadow-lg hover:shadow-yellow-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>PESAN SEKARANG</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-[#6E0D12] transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#4A0609] border-b border-[#731017] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white/90 font-semibold hover:text-[#F9BF29] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-3 bg-[#F9BF29] hover:bg-[#FFCF4D] text-[#4A0609] font-extrabold text-center rounded-full text-sm uppercase tracking-wider shadow"
            >
              PESAN SEKARANG VIA WHATSAPP
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
