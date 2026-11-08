import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check,
  Star,
  ArrowRight,
  Clock,
  Users,
  Sliders
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { WEDDING_PACKAGES } from '../data/weddingData';

export function PackagesPage() {
  const navigate = useNavigate();

  const handleBookPackage = (pkg) => {
    navigate(`/booking?package=${encodeURIComponent(pkg.name)}&tier=${pkg.tier}`);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      <SectionHeader
        badge="Curated Turnkey Experiences"
        title="Complete Wedding Packages"
        subtitle="Transparent, all-inclusive luxury wedding collections designed to liberate you from multi-vendor headaches and deliver pure royal celebration."
      />

      {/* Packages Cards Grid (3 Packages) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
        {WEDDING_PACKAGES.map((pkg, idx) => {
          return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`rounded-3xl p-7 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#FAF7F2] to-[#FFFDF9] border-2 border-[#C6A15B] shadow-2xl scale-102 lg:-translate-y-2'
                  : 'bg-white border border-[#C6A15B]/30 shadow-md'
              }`}
            >
              {/* Most Popular Floating Tag */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#DFBF7E] text-xs font-bold uppercase tracking-widest border border-[#C6A15B] shadow-md flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Most Selected Collection</span>
                </div>
              )}

              {/* Top Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#C6A15B]/15 text-[#701F35] border border-[#C6A15B]/30">
                    {pkg.tier} Tier Collection
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#574F4A]">
                    <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-royal text-2xl font-bold text-[#701F35]">{pkg.name}</h3>
                  <p className="text-xs text-[#C6A15B] font-semibold mt-0.5">{pkg.tag}</p>
                </div>

                <div className="pt-2 pb-1 border-b border-[#C6A15B]/20">
                  <span className="text-[10px] text-[#574F4A] uppercase font-bold tracking-wider block">
                    सोहळा पॅकेज नियोजन
                  </span>
                  <span className="block text-[11px] text-[#574F4A] mt-1 flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#C6A15B]" />
                    <span>पाहुण्यांची क्षमता: {pkg.guestRange}</span>
                  </span>
                </div>

                <p className="text-xs text-[#574F4A] leading-relaxed pt-1">
                  {pkg.description}
                </p>

                {/* Included Services Checklist */}
                <div className="pt-2 space-y-2.5">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#282321]">
                    What's Included:
                  </span>
                  <ul className="space-y-2">
                    {pkg.includedServices.map((service, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-[#282321]">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Customization Options */}
                {pkg.customizationOptions && (
                  <div className="pt-4 border-t border-[#C6A15B]/20">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#C6A15B] mb-2 flex items-center gap-1">
                      <Sliders className="w-3 h-3" />
                      <span>Customization Add-ons:</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.customizationOptions.map((opt, oIdx) => (
                        <span
                          key={oIdx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#574F4A] border border-[#C6A15B]/25 font-medium"
                        >
                          + {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-[#C6A15B]/25">
                <button
                  onClick={() => handleBookPackage(pkg)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                    pkg.popular
                      ? 'gold-btn'
                      : 'bg-[#701F35] text-[#FAF7F2] hover:bg-[#8C2743]'
                  }`}
                >
                  <span>Select {pkg.name.split(' ')[0]} Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Feature Comparison Table */}
      <div className="bg-white rounded-3xl border border-[#C6A15B]/30 p-6 sm:p-8 shadow-sm overflow-hidden">
        <h3 className="font-royal text-2xl font-bold text-[#701F35] mb-2 text-center">
          Compare Wedding Package Inclusions
        </h3>
        <p className="text-xs text-[#574F4A] text-center mb-8 max-w-xl mx-auto">
          Detailed comparison of infrastructure, seating, sound engineering, and dedicated event coordinators provided across our 3 tiers.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-[#C6A15B]/40 bg-[#FAF7F2]">
                <th className="py-3 px-4 font-bold text-[#701F35] uppercase tracking-wider">Features</th>
                <th className="py-3 px-4 font-bold text-[#701F35] text-center">Basic (Shubh)</th>
                <th className="py-3 px-4 font-bold text-[#701F35] text-center bg-[#C6A15B]/10">Premium (Mangal)</th>
                <th className="py-3 px-4 font-bold text-[#701F35] text-center">Royal (Rajwada)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C6A15B]/20 text-[#282321]">
              <tr>
                <td className="py-3 px-4 font-semibold">Events Covered</td>
                <td className="py-3 px-4 text-center">1 Function (Wedding Day)</td>
                <td className="py-3 px-4 text-center bg-[#C6A15B]/5 font-medium">2 Functions (Haldi + Wedding)</td>
                <td className="py-3 px-4 text-center font-bold text-[#701F35]">3-4 Functions (Turnkey)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Mandap Setup</td>
                <td className="py-3 px-4 text-center">4-Pillar Floral Setup</td>
                <td className="py-3 px-4 text-center bg-[#C6A15B]/5 font-medium">8-Pillar Dome with Fresh Exotics</td>
                <td className="py-3 px-4 text-center font-bold text-[#701F35]">Architectural Palace / Lake Mandap</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Seating &amp; Furniture</td>
                <td className="py-3 px-4 text-center">150 Banquet Chairs + Linens</td>
                <td className="py-3 px-4 text-center bg-[#C6A15B]/5 font-medium">400 Gold Chiavari Chairs + Sofas</td>
                <td className="py-3 px-4 text-center font-bold text-[#701F35]">800+ Chiavari, Maharaja Thrones</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Sound &amp; Lighting System</td>
                <td className="py-3 px-4 text-center">Standard JBL Sound + Ambient Par</td>
                <td className="py-3 px-4 text-center bg-[#C6A15B]/5 font-medium">Line Array Audio + Sharpies + LED Wall</td>
                <td className="py-3 px-4 text-center font-bold text-[#701F35]">Concert Arena Line Array + Laser SFX</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Utensils &amp; Buffet Setup</td>
                <td className="py-3 px-4 text-center">Tableware + Basic Warmers</td>
                <td className="py-3 px-4 text-center bg-[#C6A15B]/5 font-medium">Copper Roll-Top Chafing Dishes</td>
                <td className="py-3 px-4 text-center font-bold text-[#701F35]">Onyx Buffet Bars + Silver Thalis</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">On-site Coordination Team</td>
                <td className="py-3 px-4 text-center">1 Day Lead Coordinator</td>
                <td className="py-3 px-4 text-center bg-[#C6A15B]/5 font-medium">Senior Planner + 3 Coordinators</td>
                <td className="py-3 px-4 text-center font-bold text-[#701F35]">8 Event Managers + Bride/Groom Shadows</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
