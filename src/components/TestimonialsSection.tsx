import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#45060A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#65090F] text-[#F9BF29] text-xs font-black uppercase tracking-wider mb-3 border border-[#851118]">
              <div className="flex text-[#F9BF29]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="ml-1 text-white">4.9 / 5.0 (2.500+ Reviews)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight uppercase">
              LOVED BY OUR BAO PEOPLE
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#DEC9BE] max-w-md leading-relaxed">
            Apa kata mereka yang sudah merasakan sensasi bakpao lembut dengan filling melimpah khas Koko?
          </p>
        </motion.div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#FFFDF9] text-[#2C0A0E] rounded-3xl p-6 sm:p-7 shadow-xl border border-[#F3E8E2] flex flex-col justify-between relative group hover:-translate-y-1 transition duration-300"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-[#D97706] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#3E2125] leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="mt-6 pt-4 border-t border-[#F0DDD4] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#BA1822] text-[#FFFDF9] font-black text-xs flex items-center justify-center shrink-0 shadow">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2A0507]">
                    {review.name}
                  </h4>
                  <span className="text-[11px] text-[#8C6266]">
                    {review.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
