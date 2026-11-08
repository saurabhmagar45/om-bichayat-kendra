import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { SERVICES_DATA, BRAND_INFO } from '../data/weddingData';
import { useWedding } from '../context/WeddingContext';

export function ServicesPage() {
  const { setActiveServiceDetail } = useWedding();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', 'Decor', 'Hospitality', 'Rentals', 'Production', 'Turnkey'];

  const filteredServices =
    selectedFilter === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      <SectionHeader
        badge="राजेशाही सेवा व सुविधा"
        title="आमच्या सर्वसमावेशक विवाह सोहळा सेवा"
        subtitle="वैदिक संस्कार मंडप, सुवर्ण नक्षीदार फुलांची सजावट, शाही पंगत ते बिछायत व भांडी साहित्यापर्यंत — प्रत्येक सोहळा अविस्मरणीय."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelectedFilter(opt)}
            className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              selectedFilter === opt
                ? 'bg-[#701F35] text-[#FAF7F2] shadow-md border border-[#701F35]'
                : 'bg-white text-[#282321] border border-[#C6A15B]/30 hover:border-[#701F35]'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Services Grid (8 Services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
        {filteredServices.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="luxury-card rounded-2xl overflow-hidden flex flex-col sm:flex-row group"
          >
            {/* Service Thumbnail */}
            <div className="relative w-full sm:w-2/5 min-h-[200px] sm:min-h-[240px] overflow-hidden bg-stone-900">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/70 to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#701F35]/90 text-[#FAF7F2] text-[10px] font-bold border border-[#C6A15B]/40">
                {service.category}
              </span>
              {service.popular && (
                <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-[#C6A15B] text-[#701F35] text-[10px] font-bold">
                  Signature
                </span>
              )}
            </div>

            {/* Service Body */}
            <div className="p-4 sm:p-6 sm:w-3/5 flex flex-col justify-between space-y-3 sm:space-y-4">
              <div>
                <h3 className="font-royal text-xl sm:text-2xl font-bold text-[#701F35] mb-2 leading-snug group-hover:text-[#8C2743] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed mb-3 sm:mb-4">
                  {service.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-1.5">
                  {service.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-[#282321]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-3 sm:pt-4 border-t border-[#C6A15B]/25 flex items-center justify-end">
                <button
                  onClick={() => setActiveServiceDetail(service)}
                  className="w-full sm:w-auto justify-center px-4 py-2.5 sm:py-2 rounded-xl bg-[#701F35] hover:bg-[#8C2743] text-[#FAF7F2] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Consultation Strip */}
      <div className="mt-16 p-8 bg-[#FFFDF9] rounded-2xl border border-[#C6A15B]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="font-royal text-xl font-bold text-[#701F35]">
            Need a Bespoke Combination of Services?
          </h4>
          <p className="text-xs text-[#574F4A] max-w-xl">
            Customise any mix of decoration, catering, furniture, sound, and utensils into a single, cohesive royal package with guaranteed price transparency.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${BRAND_INFO.phone}`}
            className="px-5 py-2.5 rounded-xl border border-[#701F35] text-[#701F35] text-xs font-semibold hover:bg-[#701F35]/10 flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Call Concierge</span>
          </a>
          <button
            onClick={() => setActiveServiceDetail(SERVICES_DATA[7])}
            className="px-6 py-2.5 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold hover:bg-[#8C2743] transition-all cursor-pointer"
          >
            Request Custom Plan
          </button>
        </div>
      </div>
    </div>
  );
}
