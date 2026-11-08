import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ShieldCheck,
  Coffee,
  Flame,
  Award,
  ArrowRight,
  ChefHat,
  UtensilsCrossed,
  Users,
  Phone,
  Sparkles,
  X,
  Star
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { CATERING_PACKAGES, CATERING_CHEFS, BRAND_INFO } from '../data/weddingData';
import { useWedding } from '../context/WeddingContext';

export function CateringPage() {
  const { setActiveMenuPackage } = useWedding();
  const navigate = useNavigate();

  // Sub-option tab: 'packages' | 'chefs'
  const [activeSubTab, setActiveSubTab] = useState('packages');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [guestCountCalc, setGuestCountCalc] = useState(300);
  const [selectedChefModal, setSelectedChefModal] = useState(null);

  const cuisineCategories = [
    'All',
    'मराठमोळी पंगत',
    'विदर्भ वऱ्हाडी भोजन',
    'वैदिक सात्विक भोजन',
    'शाही नॉन-व्हेज',
    'शाही राजवाडा बुफे',
    'खान्देशी मांडे व आमरस'
  ];

  const filteredPackages =
    selectedCuisine === 'All'
      ? CATERING_PACKAGES
      : CATERING_PACKAGES.filter((p) => p.cuisine === selectedCuisine);

  const handleBookChef = (chef) => {
    navigate(`/booking?service=catering_chef&chef=${encodeURIComponent(chef.name)}`);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      <SectionHeader
        badge="Imperial Royal Kitchens & Master Chefs"
        title="Royal Wedding Catering & Master Chefs"
        subtitle="अस्सल खानदानी चव, २५+ वर्षांचा अनुभव असलेले मुख्य आचारी, केळीच्या पानावर शाही पंगत आणि शुद्ध गावरान तुपातील मराठमोळे पक्वान्न — ओम बिछायत केंद्र चिखली."
      />

      {/* Culinary Pillars Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 p-5 bg-[#FFFDF9] rounded-2xl border border-[#C6A15B]/30 text-center">
        <div className="space-y-1">
          <Flame className="w-5 h-5 text-[#C6A15B] mx-auto" />
          <span className="block text-xs font-bold text-[#701F35]">अस्सल मंद चूल व दम स्वयंपाक</span>
          <span className="block text-[10px] text-[#574F4A]">तांब्याच्या हंडीत पारंपारिक मंद विस्तवावर</span>
        </div>
        <div className="space-y-1">
          <ShieldCheck className="w-5 h-5 text-[#C6A15B] mx-auto" />
          <span className="block text-xs font-bold text-[#701F35]">१००% शुद्ध गावरान तूप व मसाले</span>
          <span className="block text-[10px] text-[#574F4A]">घरगुती पद्धतीने कुटलेले अस्सल विदर्भ मसाले</span>
        </div>
        <div className="space-y-1">
          <Award className="w-5 h-5 text-[#C6A15B] mx-auto" />
          <span className="block text-xs font-bold text-[#701F35]">खानदानी मुख्य आचारी व महाराज</span>
          <span className="block text-[10px] text-[#574F4A]">पेशवाई पंगत, वऱ्हाडी व मिठाई तज्ज्ञ</span>
        </div>
        <div className="space-y-1">
          <Coffee className="w-5 h-5 text-[#C6A15B] mx-auto" />
          <span className="block text-xs font-bold text-[#701F35]">लाईव्ह पक्वान्न काउंटर्स</span>
          <span className="block text-[10px] text-[#574F4A]">गरम पुरणपोळी, जिलबी-रबडी व चाट आयलँड</span>
        </div>
      </div>

      {/* Sub-Option Switcher: Packages vs Catering Chef */}
      <div className="flex items-center justify-center mb-10">
        <div className="inline-flex p-1.5 bg-white rounded-2xl border border-[#C6A15B]/40 shadow-sm max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('packages')}
            className={`px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'packages'
                ? 'bg-[#701F35] text-[#FAF7F2] shadow-md border border-[#701F35]'
                : 'text-[#282321] hover:text-[#701F35]'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4 text-[#C6A15B]" />
            <span>शाही केटरिंग पॅकेजेस (Catering Packages)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('chefs')}
            className={`px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'chefs'
                ? 'bg-[#701F35] text-[#FAF7F2] shadow-md border border-[#701F35]'
                : 'text-[#282321] hover:text-[#701F35]'
            }`}
          >
            <ChefHat className="w-4 h-4 text-[#C6A15B]" />
            <span>केटरिंग शेफ व मुख्य आचारी (Catering Chefs)</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-[#C6A15B] text-[#701F35] font-extrabold uppercase">
              उपलब्ध
            </span>
          </button>
        </div>
      </div>

      {/* VIEW 1: CATERING PACKAGES */}
      {activeSubTab === 'packages' && (
        <div>
          {/* Cuisine Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {cuisineCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCuisine(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCuisine === cat
                    ? 'bg-[#701F35] text-[#FAF7F2] shadow-md border border-[#701F35]'
                    : 'bg-white text-[#282321] border border-[#C6A15B]/30 hover:border-[#701F35]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPackages.map((pkg, idx) => {
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  {/* Header Image */}
                  <div className="relative h-60 bg-stone-900 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#701F35] text-[#FAF7F2] text-[10px] font-bold tracking-wider uppercase border border-[#C6A15B]/40">
                        {pkg.cuisine}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white text-[#701F35] text-[10px] font-bold">
                        {pkg.type === 'veg' ? 'Pure Veg' : 'Non-Veg'}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white flex items-end justify-between">
                      <div>
                        <span className="inline-block text-xs font-bold text-[#DFBF7E] bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs border border-[#C6A15B]/40">
                          कस्टम शाही मेनू
                        </span>
                      </div>
                      <span className="text-[11px] text-[#FAF7F2]/90 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                        किमान {pkg.minGuests} पाहुणे
                      </span>
                    </div>
                  </div>

                  {/* Package Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-royal text-xl font-bold text-[#701F35] mb-2 leading-snug">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-[#574F4A] leading-relaxed mb-4">
                        {pkg.description}
                      </p>

                      {/* Dedicated Master Chef Badge */}
                      {pkg.assignedChef && (
                        <div className="mb-4 p-3 rounded-xl bg-[#FFFDF9] border border-[#C6A15B]/35 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <ChefHat className="w-4 h-4 text-[#701F35] shrink-0" />
                            <div>
                              <span className="block text-[9px] uppercase font-bold text-[#C6A15B] tracking-wider">
                                नियुक्त मुख्य आचारी / महाराज
                              </span>
                              <span className="block text-xs font-bold text-[#701F35]">
                                {pkg.assignedChef.name}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              const found =
                                CATERING_CHEFS.find((c) => c.name.includes(pkg.assignedChef.name)) ||
                                CATERING_CHEFS[0];
                              setSelectedChefModal(found);
                            }}
                            className="text-[10px] font-bold text-[#701F35] underline hover:text-[#8C2743] shrink-0 cursor-pointer"
                          >
                            शेफ माहिती
                          </button>
                        </div>
                      )}

                      {/* Highlights */}
                      <div className="space-y-1.5 text-xs bg-[#FAF7F2] p-3.5 rounded-xl border border-[#C6A15B]/25">
                        <span className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider block mb-1">
                          Menu Inclusions:
                        </span>
                        {pkg.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[#282321]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-[#C6A15B]/20 flex flex-col gap-2">
                      <button
                        onClick={() => setActiveMenuPackage(pkg)}
                        className="w-full py-2.5 rounded-xl border border-[#701F35] text-[#701F35] text-xs font-semibold hover:bg-[#701F35] hover:text-[#FAF7F2] transition-colors cursor-pointer"
                      >
                        View Multi-Course Menu
                      </button>

                      <button
                        onClick={() => setActiveMenuPackage(pkg)}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] text-xs font-semibold hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Request Catering Quote</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Guest Count Estimator Section */}
          <div className="p-8 bg-gradient-to-r from-[#4A1222] to-[#280A12] text-[#FAF7F2] rounded-3xl border border-[#C6A15B]/40 shadow-xl space-y-6">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider block mb-1">
                Budget Planning &amp; Custom Menus
              </span>
              <h3 className="font-royal text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                Calculate Catering Estimate For Your Guests
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/80 mt-1">
                आपल्या लग्नकार्यातील अंदाजे पाहुण्यांची संख्या निवडा आणि मुख्य आचारी संघासहित संपूर्ण केटरिंग कोटेशन मिळवा.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-[#DFBF7E]">
                <span>Expected Guest Count:</span>
                <strong className="text-base text-[#FAF7F2]">{guestCountCalc} Guests</strong>
              </div>
              <input
                type="range"
                min="100"
                max="1500"
                step="25"
                value={guestCountCalc}
                onChange={(e) => setGuestCountCalc(Number(e.target.value))}
                className="w-full accent-[#DFBF7E] cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#C6A15B]/30 text-center">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[10px] text-[#DFBF7E] block uppercase">पारंपरिक महाराष्ट्रीयन पंगत</span>
                <span className="text-sm font-semibold text-[#FAF7F2] mt-1 block">
                  १००% शुद्ध शाकाहारी • अमर्यादित पंगत
                </span>
              </div>

              <div className="p-3 bg-[#701F35]/70 rounded-xl border border-[#C6A15B]/40">
                <span className="text-[10px] text-[#DFBF7E] block uppercase">शाही राजवाडा रॉयल बुफे</span>
                <span className="text-base font-bold text-[#DFBF7E] mt-1 block">
                  पंचपक्वान्न • लाइव्ह काउंटर्स • मुख्य आचारी
                </span>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[10px] text-[#DFBF7E] block uppercase">विदर्भ सावजी व मटन सोहळा</span>
                <span className="text-sm font-semibold text-[#FAF7F2] mt-1 block">
                  दम बिर्याणी • अस्सल काळा मसाला
                </span>
              </div>
            </div>

            <div className="pt-4 text-center">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl gold-btn text-xs uppercase font-bold tracking-wider"
              >
                <span>{guestCountCalc} पाहुण्यांसाठी सविस्तर दरपत्रक (Quotation) मिळवा</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#282321]" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: CATERING CHEFS & MAHARAJ SQUAD */}
      {activeSubTab === 'chefs' && (
        <div className="space-y-12">
          {/* Chef Section Header Intro */}
          <div className="p-8 bg-gradient-to-r from-[#FFFDF9] via-white to-[#FAF7F2] rounded-3xl border border-[#C6A15B]/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-[#701F35] text-[#FAF7F2] text-[10px] font-bold tracking-wider uppercase border border-[#C6A15B]/40">
                खानदानी आचारी परंपरा (Master Culinary Artists)
              </span>
              <h3 className="font-royal text-2xl sm:text-3xl font-bold text-[#701F35]">
                आमचे मुख्य आचारी व केटरिंग शेफ (Catering Chefs &amp; Maharaj)
              </h3>
              <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed">
                विवाह, साखरपुडा आणि सत्यनारायण पूजेच्या पंगतीसाठी २५+ वर्षांचा समृद्ध वारसा असलेले मुख्य आचारी. १००% शुद्ध गावरान तूप, सात्विक शिस्त आणि एकाच वेळी हजारो पाहुण्यांना तृप्त करण्याची क्षमता.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="px-5 py-2.5 rounded-xl border border-[#701F35] text-[#701F35] text-xs font-bold hover:bg-[#701F35]/10 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C6A15B]" />
                <span>शेफ समुपदेशन: 9881392562</span>
              </a>
              <Link
                to="/booking?service=catering_chef"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider hover:shadow-md transition-all"
              >
                आचारी पथक बुक करा
              </Link>
            </div>
          </div>

          {/* Chefs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATERING_CHEFS.map((chef, idx) => (
              <motion.div
                key={chef.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Chef Image Banner */}
                  <div className="relative h-64 bg-stone-900 overflow-hidden">
                    <img
                      src={chef.image}
                      alt={chef.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Experience Tag */}
                    <div className="absolute top-3 left-3 bg-[#701F35]/90 text-[#FAF7F2] text-[10px] font-bold px-3 py-1 rounded-full border border-[#C6A15B]/40 flex items-center gap-1.5 shadow-sm">
                      <Star className="w-3 h-3 text-[#DFBF7E] fill-current" />
                      <span>{chef.experience}</span>
                    </div>

                    {/* Scale Tag */}
                    <div className="absolute top-3 right-3 bg-black/60 text-[#DFBF7E] text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs border border-white/20">
                      {chef.eventsHandled}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider block mb-0.5">
                        {chef.cuisine}
                      </span>
                      <h4 className="font-royal text-xl font-bold leading-tight">
                        {chef.name}
                      </h4>
                      <p className="text-[11px] text-[#FAF7F2]/90 mt-0.5">
                        {chef.title}
                      </p>
                    </div>
                  </div>

                  {/* Chef Bio Body */}
                  <div className="p-5 space-y-4">
                    {/* Speciality Badge */}
                    <div className="p-3 bg-[#FFFDF9] rounded-xl border border-[#C6A15B]/25">
                      <span className="text-[9px] uppercase font-bold text-[#C6A15B] tracking-wider block mb-1">
                        पाककला वैशिष्ट्य (Culinary Craft):
                      </span>
                      <p className="text-xs text-[#282321] font-medium leading-relaxed">
                        {chef.speciality}
                      </p>
                    </div>

                    {/* Team Strength Info */}
                    <div className="flex items-center gap-2 text-xs text-[#574F4A] bg-[#FAF7F2] p-2.5 rounded-lg border border-[#C6A15B]/20">
                      <Users className="w-4 h-4 text-[#C6A15B] shrink-0" />
                      <span>
                        पथक सामर्थ्य: <strong className="text-[#701F35]">{chef.teamStrength}</strong>
                      </span>
                    </div>

                    {/* Signature Dishes */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-bold text-[#701F35] tracking-wider block">
                        स्वाक्षरी पक्वान्न (Signature Dishes):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {chef.signatureDishes.map((dish, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-white border border-[#C6A15B]/30 text-[11px] text-[#282321] font-medium flex items-center gap-1 shadow-2xs"
                          >
                            <Sparkles className="w-3 h-3 text-[#C6A15B]" />
                            <span>{dish}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedChefModal(chef)}
                      className="py-2 rounded-xl border border-[#701F35] text-[#701F35] text-xs font-bold hover:bg-[#701F35]/10 transition-colors cursor-pointer"
                    >
                      सविस्तर माहिती
                    </button>
                    <a
                      href={`tel:${chef.phone}`}
                      className="py-2 rounded-xl bg-white border border-[#C6A15B]/40 text-[#701F35] text-xs font-bold hover:bg-[#FAF7F2] transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>कॉल करा</span>
                    </a>
                  </div>

                  <button
                    onClick={() => handleBookChef(chef)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] text-xs font-bold tracking-wider uppercase hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>हा शेफ / आचारी संघ बुक करा</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chef Team Commitment Strip */}
          <div className="p-8 bg-[#FFFDF9] rounded-2xl border border-[#C6A15B]/30 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
            <h4 className="font-royal text-xl font-bold text-[#701F35]">
              आपल्या विवाह सोहळ्यासाठी स्वतंत्र मुख्य आचारी संघ का निवडावा?
            </h4>
            <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed">
              ओम बिछायत केंद्राचे सर्व मुख्य आचारी व महाराज स्वयंपाकापूर्वी पवित्र स्नान, शुद्ध गावरान तेल-तूप आणि स्वच्छ तांब्या-पितळ्याच्या भांड्यांचा वापर करतात. पंगतीमध्ये आदरतिथ्य आणि अमर्यादित आग्रह करण्याची आमची अस्सल विदर्भ परंपरा आहे.
            </p>
            <div className="pt-2">
              <a
                href="tel:9881392562"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider hover:bg-[#8C2743] shadow-md transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>थेट मुख्य व्यवस्थापकांशी बोला: 9881392562</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Chef Details Modal */}
      {selectedChefModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 font-sans">
          <div
            onClick={() => setSelectedChefModal(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
          />

          <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#C6A15B]/40 z-10 animate-in zoom-in-95 duration-200">
            {/* Header Image */}
            <div className="relative h-60 bg-stone-900">
              <img
                src={selectedChefModal.image}
                alt={selectedChefModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              <button
                onClick={() => setSelectedChefModal(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#C6A15B] mb-1 block">
                  {selectedChefModal.cuisine}
                </span>
                <h3 className="font-royal text-2xl font-bold">{selectedChefModal.name}</h3>
                <p className="text-xs text-[#FAF7F2]/90 mt-0.5">{selectedChefModal.title}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-white rounded-xl border border-[#C6A15B]/25">
                  <span className="text-[10px] text-[#574F4A] uppercase font-bold block">अनुभव</span>
                  <strong className="text-sm text-[#701F35] font-bold mt-0.5 block">{selectedChefModal.experience}</strong>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#C6A15B]/25">
                  <span className="text-[10px] text-[#574F4A] uppercase font-bold block">यशस्वी सोहळे</span>
                  <strong className="text-sm text-[#701F35] font-bold mt-0.5 block">{selectedChefModal.eventsHandled}</strong>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-[#282321] tracking-wider mb-2">
                  आचारी पथकाचे विशेष कौशल्य
                </h4>
                <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed bg-white p-3.5 rounded-xl border border-[#C6A15B]/20">
                  {selectedChefModal.speciality}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-[#282321] tracking-wider mb-2">
                  स्वाक्षरी पक्वान्न व मेनू (Signature Dishes)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedChefModal.signatureDishes.map((dish, i) => (
                    <div
                      key={i}
                      className="p-2.5 bg-white rounded-lg border border-[#C6A15B]/25 flex items-center gap-2 text-xs text-[#282321]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#C6A15B] shrink-0" />
                      <span>{dish}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${selectedChefModal.phone}`}
                  className="sm:w-1/2 py-2.5 rounded-xl border border-[#701F35] text-[#701F35] text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#701F35]/10"
                >
                  <Phone className="w-4 h-4 text-[#C6A15B]" />
                  <span>थेट फोन करा: {selectedChefModal.phone}</span>
                </a>
                <button
                  onClick={() => {
                    const chef = selectedChefModal;
                    setSelectedChefModal(null);
                    handleBookChef(chef);
                  }}
                  className="sm:w-1/2 py-2.5 rounded-xl bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>हा शेफ बुक करा</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}