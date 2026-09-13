import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustTicker } from './components/TrustTicker';
import { MeetTheBao } from './components/MeetTheBao';
import { FeaturedHighlight } from './components/FeaturedHighlight';
import { PickYourMood } from './components/PickYourMood';
import { QualityStory } from './components/QualityStory';
import { OutletSection } from './components/OutletSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramSection } from './components/InstagramSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { ReheatModal } from './components/ReheatModal';
import { OrderModal } from './components/OrderModal';
import { BaoProduct, CartItem } from './types';
import { MEET_THE_BAO_PRODUCTS } from './data';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bakpaonyakoko_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<BaoProduct | null>(null);
  const [reheatModalOpen, setReheatModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('bakpaonyakoko_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const handleAddToCart = (product: BaoProduct, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, newQty: number) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity: newQty } : item
        )
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppDirect = () => {
    window.open(
      'https://wa.me/6281398768046?text=Halo%20Koko!%20Saya%20ingin%20memesan%20bakpao%20hangat.',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-[#45060A] text-[#FFFDF9] selection:bg-[#F9BF29] selection:text-[#4A0609]">
      {/* Sticky Header Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenOrderModal={() => setOrderModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOrderClick={() => setOrderModalOpen(true)}
          onExploreClick={scrollToMenu}
        />

        {/* 2. Trust Ticker Strip */}
        <TrustTicker />

        {/* 3. Curated Best Sellers: Meet The Bao */}
        <MeetTheBao
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onViewAllMenu={scrollToMenu}
        />

        {/* 4. Featured Highlight: Bukan Bakpao Biasa */}
        <FeaturedHighlight
          onOrderBundling={() => setOrderModalOpen(true)}
        />

        {/* 5. Menu Navigator: Pick Your Mood */}
        <PickYourMood
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* 6. Craftsmanship & Japanese Flour Story: Soft is Serious Business */}
        <QualityStory
          onReheatTipsClick={() => setReheatModalOpen(true)}
        />

        {/* 7. Boutique Storefront: A Little Red Shop Full of Bao */}
        <OutletSection />

        {/* 8. Social Proof & Reviews: Loved By Our Bao People */}
        <TestimonialsSection />

        {/* 9. Instagram Gallery: Warning May Cause Bao Cravings */}
        <InstagramSection />

        {/* 10. Final Call To Action */}
        <FinalCTA onWhatsAppClick={handleWhatsAppDirect} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Detailed Product Preview Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Reheating Guide Modal */}
      <ReheatModal
        isOpen={reheatModalOpen}
        onClose={() => setReheatModalOpen(false)}
      />

      {/* Ordering Options Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Floating WhatsApp Quick Contact Button on Bottom Left */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/6281398768046?text=Halo%20Koko!%20Saya%20mau%20tanya%20menu%20bakpao%20hari%20ini."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Koko via WhatsApp"
        className="fixed bottom-6 left-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-white/20"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.109-.523-1.808-.748-2.969-2.586-3.059-2.705-.09-.119-.728-.968-.728-1.848 0-.879.461-1.312.625-1.488.164-.176.357-.22.476-.22.119 0 .238.002.342.007.108.006.253-.041.396.302.144.343.491 1.196.534 1.285.043.088.072.191.014.307-.058.117-.087.19-.174.293-.087.103-.183.23-.261.309-.089.09-.182.187-.078.366.104.179.462.763.992 1.235.682.608 1.258.796 1.437.885.179.088.284.073.39-.05.105-.123.454-.528.575-.709.121-.182.242-.151.405-.091.164.06 1.042.492 1.22.58.179.089.298.133.342.208.044.075.044.436-.1.841zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.174L2 22l4.981-1.307A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
      </a>

      {/* Floating Cart Trigger on Bottom Right (when items exist) */}
      {totalCartCount > 0 && (
        <button
          id="floating-cart-pill"
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#F9BF29] hover:bg-[#FFCF4D] text-[#4A0609] font-black py-3.5 px-6 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 border-2 border-[#E5A817] cursor-pointer animate-scaleUp"
        >
          <div className="relative">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="absolute -top-2 -right-2.5 bg-[#BA1822] text-white text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center">
              {totalCartCount}
            </span>
          </div>
          <span className="text-xs uppercase tracking-wider">
            Lihat Pesanan ({totalCartCount})
          </span>
        </button>
      )}
    </div>
  );
}
