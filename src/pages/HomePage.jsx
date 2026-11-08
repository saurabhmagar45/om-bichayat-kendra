import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  CalendarCheck,
  ArrowRight,
  UtensilsCrossed,
  ShoppingBag,
  Star,
  CheckCircle,
  MapPin,
  Heart,
  ChevronRight,
  Eye,
  Plus,
  Phone,
  ChefHat
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { AuspiciousSwastik } from '../components/AuspiciousSwastik';
import { OmNamahShivaya } from '../components/OmNamahShivaya';
import {
  BRAND_INFO,
  SERVICES_DATA,
  RENTAL_PRODUCTS,
  CATERING_PACKAGES,
  GALLERY_ITEMS,
  TESTIMONIALS
} from '../data/weddingData';
import { useWedding } from '../context/WeddingContext';

export function HomePage() {
  const {
    addToRentalCart,
    setActiveLightboxImage,
    setActiveMenuPackage,
    setActiveServiceDetail,
    toggleWishlist,
    isWishlisted
  } = useWedding();

  const [activeDecorTab, setActiveDecorTab] = useState('All');

  const decorTabs = ['All', 'Mandap decoration', 'Stage decoration', 'Floral decoration'];
  const filteredGallery =
    activeDecorTab === 'All'
      ? GALLERY_ITEMS.slice(0, 6)
      : GALLERY_ITEMS.filter((g) => g.category === activeDecorTab).slice(0, 6);

  const featuredRentals = RENTAL_PRODUCTS.slice(0, 6);
  const featuredCatering = CATERING_PACKAGES.slice(0, 3);

  return (
    <div className="font-sans">
      {/* 1. HERO SECTION: Cinematic Royal Indian Wedding Experience */}
      <section className="relative flex flex-col justify-between overflow-hidden bg-[#240A13]">
        {/* Cinematic Backdrop Image with Deep Royal Burgundy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2000&q=85"
            alt="मराठमोळा पारंपरिक वैदिक संस्कार मंडप व शुभ विवाह"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-10000"
          />
          {/* Deep Royal Wine Burgundy Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#240A13]/98 via-[#350C19]/94 to-[#1E060F]/98" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#240A13]/90 via-transparent to-[#240A13]/90" />
          {/* Authentic Indian Royal Jali Brocade Texture Layer */}
          <div className="absolute inset-0 royal-jali-texture-dark opacity-30 pointer-events-none" />
        </div>

        {/* TOP MERGE TRANSPARENCY SHADE (Soft feathering from Ivory Navbar into Royal Burgundy) */}
        <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/30 to-transparent z-10 pointer-events-none" />

        {/* Floating Decorative Gold Sparkles / Ring Accents */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#C6A15B]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-[#701F35]/25 blur-3xl pointer-events-none" />

        {/* HIGH-GRAPHIC SACRED VEDIC SWASTIK IN BACKGROUND WITH TRANSPARENCY */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <AuspiciousSwastik
              size={640}
              opacity={0.24}
              glow={true}
              className="animate-[spin_240s_linear_infinite]"
            />
          </motion.div>
        </div>

        {/* Ambient Corner Swastik Emblems */}
        <div className="hidden lg:block absolute top-24 left-12 pointer-events-none z-1 opacity-20 hover:opacity-40 transition-opacity">
          <AuspiciousSwastik size={150} opacity={0.16} glow={false} />
        </div>
        <div className="hidden lg:block absolute bottom-36 right-12 pointer-events-none z-1 opacity-20 hover:opacity-40 transition-opacity">
          <AuspiciousSwastik size={160} opacity={0.16} glow={false} />
        </div>

        {/* Hero Content Container - Fully encompasses heading, CTA buttons, AND stats bar */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 text-center">
          {/* Royal Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#DFBF7E]/50 bg-[#380E1B]/80 backdrop-blur-md text-[#DFBF7E] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-lg shadow-black/25"
          >
            <Sparkles className="w-4 h-4 text-[#C6A15B]" />
            <span>ओम बिछायत केंद्र • OM BICHAYAT KENDRA</span>
            <Sparkles className="w-4 h-4 text-[#C6A15B]" />
          </motion.div>

          {/* Master Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-royal font-bold tracking-tight text-[#FAF7F2] leading-[1.1] mb-5 drop-shadow-md"
          >
            Create Your Dream <br className="hidden sm:inline" />
            <span className="gold-shimmer-text">Wedding With Us</span>
          </motion.h1>

          {/* Sacred Calligraphic Masterpiece: ॐ नमः शिवाय with Tripundra & Trishul (Pure Vector SVG) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex items-center justify-center my-6 sm:my-8 mb-10 sm:mb-14"
          >
            <OmNamahShivaya className="w-[320px] sm:w-[480px] md:w-[600px] lg:w-[680px] max-w-[92vw] h-auto drop-shadow-[0_4px_16px_rgba(223,191,126,0.45)] hover:scale-[1.02] transition-transform duration-500" />
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl gold-btn text-sm uppercase tracking-wider font-bold shadow-xl flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-[#282321] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/booking"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] border border-[#DFBF7E]/50 backdrop-blur-md text-sm uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <CalendarCheck className="w-4 h-4 text-[#C6A15B]" />
              <span>Plan Your Wedding</span>
            </Link>
          </motion.div>

          {/* Floating Heritage Stats Bar - Rich Gold on Pure Deep Burgundy, completely unobstructed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-[#DFBF7E]/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-[#FAF7F2]"
          >
            {BRAND_INFO.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <span className="block font-cinzel text-3xl sm:text-4xl font-bold text-[#DFBF7E] drop-shadow-sm">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm text-[#FAF7F2]/85 font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM MERGE TRANSPARENCY SHADE (Smooth feathered gradient from Royal Burgundy into Warm Ivory below) */}
        <div className="relative w-full h-24 sm:h-32 bg-gradient-to-b from-[#240A13] via-[#350C19]/80 to-[#FAF7F2] z-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 royal-jali-texture opacity-20 pointer-events-none" />
        </div>
      </section>

      {/* 2. BESPOKE SERVICES OVERVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="राजेशाही सेवा व सुविधा"
          title="अस्सल मराठमोळी विवाह व मंगल सोहळा सेवा"
          subtitle="पारंपरिक वैदिक संस्कार मंडप, सुवर्ण नक्षीदार सजावट, केळीच्या पानावरील शाही पंगत ते संपूर्ण विवाह नियोजनापर्यंत — प्रत्येक क्षण राजेशाही थाटात आणि आपुलकीने साकारला जातो."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.slice(0, 4).map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs uppercase font-bold text-[#C6A15B] tracking-wider">
                  {service.category}
                </span>
                {service.popular && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#701F35] text-[#FAF7F2] text-[10px] font-bold border border-[#C6A15B]/40">
                    High Demand
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-royal text-xl font-bold text-[#701F35] mb-2 group-hover:text-[#8C2743] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#574F4A] line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C6A15B]/20 flex items-center justify-end">
                  <button
                    onClick={() => setActiveServiceDetail(service)}
                    className="px-4 py-1.5 rounded-lg border border-[#C6A15B]/50 text-xs font-semibold text-[#701F35] hover:bg-[#701F35] hover:text-[#FAF7F2] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#701F35] text-[#701F35] font-semibold text-xs uppercase tracking-wider hover:bg-[#701F35] hover:text-[#FAF7F2] transition-all"
          >
            <span>सर्व ८ वैशिष्ट्यपूर्ण विवाह सेवा पहा</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. FEATURED DECORATIONS WITH TAB FILTER */}
      <section className="py-20 bg-[#F5EFEB] border-y border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="पारंपारिक विवाह दालन"
            title="भारतीय पारंपारिक विवाह सजावट दालन"
            subtitle="पवित्र वैदिक मंडप, सप्तपदी, हळदी-मेहंदी, भव्य प्रवेशद्वार आणि राजेशाही सजावटीसह साकारलेले अविस्मरणीय मंगल सोहळे."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {decorTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveDecorTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeDecorTab === tab
                    ? 'bg-[#701F35] text-[#FAF7F2] shadow-md border border-[#701F35]'
                    : 'bg-white text-[#282321] border border-[#C6A15B]/30 hover:border-[#701F35]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => {
              const wishlisted = isWishlisted(item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="luxury-card rounded-2xl overflow-hidden group relative"
                >
                  <div className="relative h-64 overflow-hidden bg-stone-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Action Pills */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-[#701F35]/85 text-[#FAF7F2] text-[10px] font-semibold tracking-wide border border-[#C6A15B]/30">
                        {item.category}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(item);
                        }}
                        className={`p-2 rounded-full backdrop-blur-md cursor-pointer transition-colors ${
                          wishlisted
                            ? 'bg-[#701F35] text-[#FAF7F2]'
                            : 'bg-white/70 text-[#701F35] hover:bg-white'
                        }`}
                        title="Save to Wishlist"
                      >
                        <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Bottom Preview Trigger */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <h4 className="font-royal text-lg font-bold drop-shadow">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[#FAF7F2]/80 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-[#C6A15B]" />
                          <span>{item.location}</span>
                        </p>
                      </div>

                      <button
                        onClick={() => setActiveLightboxImage(item)}
                        className="p-2 rounded-full bg-[#C6A15B] text-[#701F35] hover:bg-[#DFBF7E] transition-colors cursor-pointer shadow-lg"
                        title="View Full Showcase"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#701F35] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider hover:bg-[#8C2743] transition-all"
            >
              <span>View Full Wedding Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. UTENSILS & EQUIPMENT RENTAL SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="बिछायत व भांडी साहित्य भाड्याने"
          title="विवाह भांडी व बिछायत साहित्य भाड्याने"
          subtitle="अस्सल तांब्या-पितळेची भांडी, महाराजा थाळी सेट्स, हलवाई कढई, लाकडी पाट, गाद्या, लोड, तक्के व पंगत साहित्यासह विदर्भातील सर्वात मोठा साठा."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRentals.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-48 bg-stone-100 overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white/90 text-[#701F35] text-[10px] font-bold border border-[#C6A15B]/30">
                  {prod.category}
                </span>
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-[#282321]/80 text-[#FAF7F2] text-[10px]">
                  Stock: {prod.availableQty} units
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-[#282321] line-clamp-1">{prod.name}</h4>
                  <p className="text-[11px] text-[#574F4A] line-clamp-2 mt-1">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C6A15B]/20">
                  <a
                    href="tel:9881392562"
                    className="w-full py-2 rounded-lg bg-[#701F35] hover:bg-[#8C2743] text-[#FAF7F2] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>चौकशी: 9881392562</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/rentals"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#701F35] text-[#701F35] font-semibold text-xs uppercase tracking-wider hover:bg-[#701F35] hover:text-[#FAF7F2] transition-all"
          >
            <span>सर्व १० बिछायत व भांडी साहित्य प्रकार पहा</span>
            <ShoppingBag className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. POPULAR CATERING PACKAGES SPOTLIGHT */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#C6A15B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="अस्सल मराठमोळी चव"
            title="शाही केटरिंग व पारंपारिक पंगत पॅकेजेस"
            subtitle="गावरान तुपातील पुरणपोळी, विदर्भ वऱ्हाडी भोजन, खान्देशी मांडे, दम बिर्याणी आणि अनुभवी महाराज व आचारी पथकासह अविस्मरणीय पंगत थाट."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCatering.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div className="relative h-56 bg-stone-900 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#701F35] text-[#FAF7F2] text-[10px] font-bold border border-[#C6A15B]/30">
                    {pkg.cuisine}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="inline-block text-xs font-bold text-[#DFBF7E] bg-black/50 px-3 py-1 rounded-full backdrop-blur-xs border border-[#C6A15B]/40">
                      शाही मेनू
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-royal text-xl font-bold text-[#701F35] mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-[#574F4A] leading-relaxed mb-3">
                      {pkg.description}
                    </p>

                    {pkg.assignedChef && (
                      <div className="flex items-center gap-1.5 text-xs text-[#701F35] font-semibold mb-3 bg-[#FAF7F2] p-2 rounded-lg border border-[#C6A15B]/20">
                        <ChefHat className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                        <span className="truncate">मुख्य आचारी: {pkg.assignedChef.name}</span>
                      </div>
                    )}

                    <div className="space-y-1.5 text-xs">
                      <span className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider block">
                        Signature Highlights:
                      </span>
                      {pkg.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[#282321]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#C6A15B]/20 flex gap-2">
                    <button
                      onClick={() => setActiveMenuPackage(pkg)}
                      className="flex-1 py-2.5 rounded-xl border border-[#701F35] text-[#701F35] text-xs font-semibold hover:bg-[#701F35] hover:text-[#FAF7F2] transition-colors cursor-pointer"
                    >
                      View Full Menu
                    </button>
                    <Link
                      to={`/booking?service=catering&package=${encodeURIComponent(pkg.title)}`}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] text-xs font-semibold hover:shadow-md transition-all flex items-center justify-center"
                    >
                      Request
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/catering"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#701F35] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider hover:bg-[#8C2743] transition-all"
            >
              <span>सर्व केटरिंग पॅकेजेस व मुख्य आचारी (महाराज) संघ पहा</span>
              <ChefHat className="w-4 h-4 text-[#C6A15B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. OUR RECENT ROYAL WEDDING PROJECTS */}
      <section className="py-20 bg-[#380E1B] text-[#FAF7F2] relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern-dark opacity-35 pointer-events-none" />

        {/* Ambient Swastik in Recent Projects */}
        <div className="absolute -right-20 -top-20 pointer-events-none opacity-15">
          <AuspiciousSwastik size={420} opacity={0.15} glow={true} className="animate-[spin_280s_linear_infinite]" />
        </div>
        <div className="absolute -left-20 -bottom-20 pointer-events-none opacity-15">
          <AuspiciousSwastik size={360} opacity={0.12} glow={false} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            dark
            badge="आमची यशस्वी कामे"
            title="चिखली व बुलढाणा परिसरातील शाही विवाह"
            subtitle="अस्सल मराठमोळी परंपरा, भव्य वैदिक मंडप आणि चवदार पंगत जिथे ओम बिछायत केंद्राने प्रत्येक विवाह सोहळा अविस्मरणीय केला."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="dark-luxury-card rounded-2xl p-5 space-y-4">
              <div className="h-48 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=800&q=80"
                  alt="Vedic Mandap Wedding"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-[10px] text-[#C6A15B] font-bold uppercase tracking-wider block">
                  चिखली • शाही पॅलेस मंडप
                </span>
                <h4 className="font-royal text-xl font-bold text-[#FAF7F2] mt-1">
                  देशमुख शाही विवाह सोहळा
                </h4>
                <p className="text-xs text-[#FAF7F2]/75 leading-relaxed mt-2">
                  पारंपारिक वैदिक विवाह मंडप, १०,००० झेंडू व मोगऱ्याची नक्षीदार आरास, आणि १००० पाहुण्यांसाठी शाही केटरिंग व बिछायत व्यवस्था.
                </p>
              </div>
            </div>

            <div className="dark-luxury-card rounded-2xl p-5 space-y-4">
              <div className="h-48 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
                  alt="Royal Couple Wedding"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-[10px] text-[#C6A15B] font-bold uppercase tracking-wider block">
                  बुलढाणा • भव्य रिसेप्शन लॉन
                </span>
                <h4 className="font-royal text-xl font-bold text-[#FAF7F2] mt-1">
                  पाटील व कदम राजेशाही विवाह
                </h4>
                <p className="text-xs text-[#FAF7F2]/75 leading-relaxed mt-2">
                  पारंपारिक मराठमोळा शाही पोशाख, भव्य प्रवेशद्वार कमान, शुद्ध पितळी-तांब्याची भांडी व भोजन व्यवस्था.
                </p>
              </div>
            </div>

            <div className="dark-luxury-card rounded-2xl p-5 space-y-4">
              <div className="h-48 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
                  alt="Traditional Haldi Ceremony"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="text-[10px] text-[#C6A15B] font-bold uppercase tracking-wider block">
                  चिखली • पारंपारिक हळदी सोहळा
                </span>
                <h4 className="font-royal text-xl font-bold text-[#FAF7F2] mt-1">
                  जोशी परिवार हळदी व संगीत उत्सव
                </h4>
                <p className="text-xs text-[#FAF7F2]/75 leading-relaxed mt-2">
                  पितळी उरळी, पिवळाधमक झेंडूच्या फुलांची सजावट, ढोल-ताशा गजर आणि खास बैठक बिछायत व्यवस्था.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="ग्राहकांचे मनोगत व आशीर्वाद"
          title="आमच्या आनंदी यजमानांचे अनुभव"
          subtitle="ज्या कुटुंबांनी आपल्या घरातील पवित्र मंगल कार्याची संपूर्ण जबाबदारी ओम बिछायत केंद्रावर सोपवली, त्यांच्या काही प्रातिनिधिक भावना."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="luxury-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#C6A15B]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#C6A15B]/20">
                <img
                  src={t.image}
                  alt={t.couple}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C6A15B]"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#701F35]">{t.couple}</h4>
                  <p className="text-[11px] text-[#574F4A]">{t.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. GRAND CALL TO ACTION BANNER */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#701F35] via-[#4A1222] to-[#380E1B] text-[#FAF7F2] p-8 sm:p-14 border border-[#C6A15B]/50 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#C6A15B]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF7F2]/10 text-[#C6A15B] text-xs font-semibold tracking-wider uppercase border border-[#C6A15B]/30">
              <Sparkles className="w-3.5 h-3.5" />
              विवाह तारखांची आगाऊ नोंदणी सुरू (२०२६ – २०२७)
            </span>

            <h2 className="font-royal text-3xl sm:text-5xl font-bold leading-tight text-[#FAF7F2]">
              आपल्या घरातील मंगल सोहळा राजेशाही थाटात साकारूया!
            </h2>

            <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
              आमच्या तज्ज्ञ व्यवस्थापकांशी थेट संपर्क साधा. संपूर्ण मंडप डिझाइन, केटरिंग मेनू आणि बिछायत साहित्याची परिपूर्ण योजना एकाच छताखाली मिळवा.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/booking"
                className="px-8 py-3.5 rounded-xl gold-btn text-xs uppercase tracking-wider font-bold shadow-xl text-center"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl border border-[#DFBF7E]/60 text-[#FAF7F2] hover:bg-[#FAF7F2]/10 text-xs uppercase tracking-wider font-semibold text-center transition-all"
              >
                Contact Concierge Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
