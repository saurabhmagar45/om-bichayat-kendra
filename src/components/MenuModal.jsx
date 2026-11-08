import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X,
  UtensilsCrossed,
  Check,
  ArrowRight,
  Calculator,
  Users,
  ChefHat
} from 'lucide-react';
import { useWedding } from '../context/WeddingContext';

export function MenuModal() {
  const { activeMenuPackage, setActiveMenuPackage } = useWedding();
  const [guests, setGuests] = useState(250);
  const navigate = useNavigate();

  if (!activeMenuPackage) return null;

  const pkg = activeMenuPackage;

  const handleRequestCatering = () => {
    setActiveMenuPackage(null);
    const chefParam = pkg.assignedChef ? `&chef=${encodeURIComponent(pkg.assignedChef.name)}` : '';
    navigate(`/booking?service=catering&package=${encodeURIComponent(pkg.title)}&guests=${guests}${chefParam}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 font-sans">
      {/* Backdrop */}
      <div
        onClick={() => setActiveMenuPackage(null)}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#C6A15B]/40 z-10 animate-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="bg-[#701F35] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#C6A15B]/30">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-5 h-5 text-[#C6A15B]" />
            <h3 className="font-cinzel text-lg font-bold tracking-wide">
              {pkg.title}
            </h3>
          </div>
          <button
            onClick={() => setActiveMenuPackage(null)}
            className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="max-h-[75vh] overflow-y-auto p-6 space-y-6">
          {/* Quick Stats Banner */}
          <div className="p-4 bg-white rounded-xl border border-[#C6A15B]/25 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider block">
                Cuisine Style
              </span>
              <span className="text-sm font-bold text-[#701F35]">{pkg.cuisine}</span>
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                {pkg.type === 'veg' ? 'Pure Vegetarian' : 'Non-Veg Specialties'}
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-[#574F4A] tracking-wider block">
                सोहळा क्षमता
              </span>
              <span className="text-[11px] text-[#574F4A] block mt-1">
                किमान {pkg.minGuests} पाहुणे
              </span>
            </div>
          </div>

          {/* Assigned Catering Chef Sub-Option Card */}
          {pkg.assignedChef && (
            <div className="p-3.5 bg-gradient-to-r from-[#FFFDF9] to-white rounded-xl border border-[#C6A15B]/35 flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#701F35] text-[#FAF7F2] flex items-center justify-center shrink-0 border border-[#C6A15B]/40">
                  <ChefHat className="w-5 h-5 text-[#C6A15B]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider block">
                    या मेनूचे मुख्य आचारी / केटरिंग शेफ (Master Chef)
                  </span>
                  <span className="text-sm font-bold text-[#701F35] block">
                    {pkg.assignedChef.name}
                  </span>
                  <span className="text-[11px] text-[#574F4A]">
                    {pkg.assignedChef.role} • {pkg.assignedChef.experience}
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200 shrink-0">
                पथकासह उपलब्ध
              </span>
            </div>
          )}

          {/* Interactive Guest Count Planner */}
          <div className="p-4 bg-[#FFFDF9] rounded-xl border border-[#C6A15B]/30 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#701F35] flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#C6A15B]" />
                अपेक्षित पाहुण्यांची संख्या निवडा
              </span>
              <span className="font-bold text-[#282321] text-sm bg-white px-3 py-1 rounded-lg border border-[#C6A15B]/30">
                {guests} पाहुणे
              </span>
            </div>
            <input
              type="range"
              min={pkg.minGuests}
              max={1500}
              step={25}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full accent-[#701F35] cursor-pointer"
            />
            <div className="flex items-center justify-between text-xs pt-1 border-t border-[#C6A15B]/20">
              <span className="text-[#574F4A]">
                {guests} पाहुण्यांसाठी सविस्तर मेनू व अधिकृत कोटेशन उपलब्ध
              </span>
              <span className="text-xs font-bold text-[#701F35]">
                कोटेशन मागणी करा
              </span>
            </div>
          </div>

          {/* Multi-Course Menu Grid */}
          <div className="space-y-4">
            <h4 className="font-royal text-lg font-bold text-[#701F35] border-b border-[#C6A15B]/30 pb-2">
              Curated Multi-Course Spread
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Welcome Drinks */}
              {pkg.menuBreakdown?.welcomeDrinks && (
                <div className="p-4 bg-white rounded-xl border border-[#C6A15B]/20">
                  <h5 className="font-cinzel text-xs font-bold text-[#C6A15B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>✦ Welcome Elixirs</span>
                  </h5>
                  <ul className="space-y-1 text-xs text-[#282321]">
                    {pkg.menuBreakdown.welcomeDrinks.map((d, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Appetizers */}
              {pkg.menuBreakdown?.appetizers && (
                <div className="p-4 bg-white rounded-xl border border-[#C6A15B]/20">
                  <h5 className="font-cinzel text-xs font-bold text-[#C6A15B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>✦ Starters &amp; Kebabs</span>
                  </h5>
                  <ul className="space-y-1 text-xs text-[#282321]">
                    {pkg.menuBreakdown.appetizers.map((a, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Main Course */}
              {pkg.menuBreakdown?.mainCourse && (
                <div className="p-4 bg-white rounded-xl border border-[#C6A15B]/20">
                  <h5 className="font-cinzel text-xs font-bold text-[#C6A15B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>✦ Royal Main Course Gravies</span>
                  </h5>
                  <ul className="space-y-1 text-xs text-[#282321]">
                    {pkg.menuBreakdown.mainCourse.map((m, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Breads & Rice */}
              {pkg.menuBreakdown?.breadsRice && (
                <div className="p-4 bg-white rounded-xl border border-[#C6A15B]/20">
                  <h5 className="font-cinzel text-xs font-bold text-[#C6A15B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>✦ Artisanal Breads &amp; Dum Rice</span>
                  </h5>
                  <ul className="space-y-1 text-xs text-[#282321]">
                    {pkg.menuBreakdown.breadsRice.map((b, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Desserts */}
              {pkg.menuBreakdown?.desserts && (
                <div className="p-4 bg-white rounded-xl border border-[#C6A15B]/20">
                  <h5 className="font-cinzel text-xs font-bold text-[#C6A15B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>✦ Shahi Mithai &amp; Desserts</span>
                  </h5>
                  <ul className="space-y-1 text-xs text-[#282321]">
                    {pkg.menuBreakdown.desserts.map((ds, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{ds}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Live Counters */}
              {pkg.menuBreakdown?.liveCounters && (
                <div className="p-4 bg-white rounded-xl border border-[#C6A15B]/20">
                  <h5 className="font-cinzel text-xs font-bold text-[#C6A15B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>✦ Interactive Live Counters</span>
                  </h5>
                  <ul className="space-y-1 text-xs text-[#282321]">
                    {pkg.menuBreakdown.liveCounters.map((l, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-[#C6A15B]/25 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#574F4A]">
            Includes uniformed royal stewards, copper chafing setups &amp; garbage management.
          </div>
          <button
            onClick={handleRequestCatering}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Request Catering For {guests} Guests</span>
            <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
          </button>
        </div>
      </div>
    </div>
  );
}