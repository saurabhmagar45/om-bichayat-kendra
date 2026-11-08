import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = ""
}) {
  return (
    <div className={`mb-8 sm:mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase border border-[#C6A15B]/40 bg-[#C6A15B]/10 text-[#701F35]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
          <span>{badge}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-2xl sm:text-3xl md:text-5xl font-royal font-bold tracking-normal leading-snug mb-3 sm:mb-4 px-1 break-words ${
          dark ? 'text-[#FAF7F2]' : 'text-[#701F35]'
        }`}
      >
        {title}
      </motion.h2>

      {/* Decorative Gold Filigree Divider with Traditional Swastik */}
      <div className={`flex items-center gap-2 sm:gap-3 my-3 sm:my-4 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-[#C6A15B]" />
        <span className="text-[#C6A15B] text-sm sm:text-base font-bold select-none drop-shadow">卐</span>
        <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-[#C6A15B]" />
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed px-2 ${
            centered ? 'mx-auto' : ''
          } ${dark ? 'text-[#FAF7F2]/80' : 'text-[#574F4A]'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
