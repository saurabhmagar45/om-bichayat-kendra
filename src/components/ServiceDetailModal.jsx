import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, CheckCircle, ArrowRight, PhoneCall } from 'lucide-react';
import { useWedding } from '../context/WeddingContext';
import { BRAND_INFO } from '../data/weddingData';

export function ServiceDetailModal() {
  const { activeServiceDetail, setActiveServiceDetail } = useWedding();
  const navigate = useNavigate();

  if (!activeServiceDetail) return null;

  const service = activeServiceDetail;

  const handleInquire = () => {
    setActiveServiceDetail(null);
    navigate(`/booking?service=${encodeURIComponent(service.title)}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 font-sans">
      {/* Backdrop */}
      <div
        onClick={() => setActiveServiceDetail(null)}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#C6A15B]/40 z-10 animate-in zoom-in-95 duration-200">
        <div className="relative h-44 sm:h-56 bg-stone-900 shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <button
            onClick={() => setActiveServiceDetail(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-white">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#C6A15B] mb-1 block">
              {service.category} Division
            </span>
            <h3 className="font-royal text-lg sm:text-2xl font-bold leading-snug">{service.title}</h3>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto">
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#C6A15B]/25">
            <div>
              <span className="text-[10px] text-[#574F4A] uppercase font-bold tracking-wider block">
                सेवा माहिती व सल्लागार
              </span>
              <span className="text-xs font-semibold text-[#701F35]">
                ओम बिछायत केंद्र, चिखली
              </span>
            </div>
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C6A15B]/40 text-xs font-semibold text-[#701F35] hover:bg-[#C6A15B]/10"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Call Specialist</span>
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold text-[#282321] tracking-wider mb-2">
              Service Scope &amp; Craftsmanship
            </h4>
            <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed">
              {service.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold text-[#282321] tracking-wider mb-2">
              Included Deliverables &amp; Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-white rounded-lg border border-[#C6A15B]/20 flex items-start gap-2 text-xs text-[#282321]"
                >
                  <CheckCircle className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleInquire}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Book Consultation For This Service</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
            </button>
            <button
              onClick={() => setActiveServiceDetail(null)}
              className="px-4 py-3 rounded-xl border border-[#C6A15B]/40 text-xs font-semibold text-[#574F4A] hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
