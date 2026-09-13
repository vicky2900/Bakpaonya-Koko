import React from 'react';
import { motion } from 'motion/react';
import { INSTAGRAM_POSTS } from '../data';
import { Instagram, Heart, ExternalLink, Sparkles } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#3B0407] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6 text-left"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#59080D] text-[#F9BF29] text-xs font-bold uppercase tracking-wider mb-3 border border-[#781017]">
              <Instagram className="w-3.5 h-3.5" />
              <span>@BAKPAONYAKOKO ON INSTAGRAM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight uppercase">
              WARNING: MAY CAUSE BAO CRAVINGS.
            </h2>
          </div>

          <a
            href="https://instagram.com/bakpaonyakoko"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#600A0F] hover:bg-[#790F16] text-[#F9BF29] hover:text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border border-[#851118] transition self-start sm:self-end"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @bakpaonyakoko</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              href="https://instagram.com/bakpaonyakoko"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden bg-[#4E070B] border border-[#6F1017] shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-1 block"
            >
              <div className="relative aspect-square overflow-hidden bg-[#2C0305]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Heart className="w-3 h-3 text-[#FF6B81] fill-[#FF6B81]" />
                  <span>{post.likes}</span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-bold text-[#F9BF29] tracking-wider uppercase">
                    {post.tag}
                  </span>
                  <h4 className="text-sm font-black text-white font-display mt-0.5">
                    {post.title}
                  </h4>
                  <p className="text-[11px] text-[#E0CEBF] line-clamp-1 mt-0.5">
                    {post.subtitle}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
