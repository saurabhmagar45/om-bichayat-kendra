import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, MapPin, Users, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { useWedding } from '../context/WeddingContext';

export function LightboxModal() {
  const {
    activeLightboxImage,
    setActiveLightboxImage,
    toggleWishlist,
    isWishlisted
  } = useWedding();
  const navigate = useNavigate();

  if (!activeLightboxImage) return null;

  const item = activeLightboxImage;
  const wishlisted = isWishlisted(item.id);

  const handleInquire = () => {
    setActiveLightboxImage(null);
    navigate('/booking');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 font-sans">
      {/* Backdrop */}
      <div
        onClick={() => setActiveLightboxImage(null)}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#C6A15B]/40 z-10 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setActiveLightboxImage(null)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
          {/* Large High-Res Image (7 cols) */}
          <div className="md:col-span-7 relative bg-stone-900 flex items-center justify-center min-h-[220px] sm:min-h-[320px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover max-h-[300px] sm:max-h-[550px]"
            />
            <div className="absolute bottom-3 left-3 bg-[#701F35]/90 text-[#FAF7F2] text-xs px-3 py-1 rounded-full border border-[#C6A15B]/40 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{item.category}</span>
            </div>
          </div>

          {/* Details Column (5 cols) */}
          <div className="md:col-span-5 p-4 sm:p-7 flex flex-col justify-between space-y-4 sm:space-y-5 bg-[#FAF7F2]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-[#C6A15B] tracking-wider">
                  Royal Decor Showcase
                </span>
                <button
                  onClick={() => toggleWishlist(item)}
                  className={`p-2 rounded-full border transition-colors cursor-pointer ${
                    wishlisted
                      ? 'bg-[#701F35] text-[#FAF7F2] border-[#701F35]'
                      : 'border-[#C6A15B]/40 text-[#701F35] hover:bg-[#C6A15B]/15'
                  }`}
                  title={wishlisted ? 'Saved to Wishlist' : 'Save to Wishlist'}
                >
                  <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <h3 className="font-royal text-2xl font-bold text-[#701F35] leading-tight">
                {item.title}
              </h3>

              <div className="space-y-2 text-xs text-[#574F4A]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span className="font-medium text-[#282321]">{item.location}</span>
                </div>
                {item.guestCapacity && (
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <span>Scale: {item.guestCapacity}</span>
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed pt-1">
                {item.description}
              </p>

              {item.tags && item.tags.length > 0 && (
                <div className="pt-2">
                  <span className="block text-[11px] font-bold text-[#282321] uppercase tracking-wider mb-2">
                    Design Highlights
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] rounded-md bg-[#C6A15B]/15 text-[#701F35] font-medium border border-[#C6A15B]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#C6A15B]/25 space-y-2">
              <button
                onClick={handleInquire}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#701F35]/25 transition-all cursor-pointer"
              >
                <span>Plan This Theme For Your Wedding</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
              </button>
              <p className="text-[10px] text-center text-[#574F4A]/70">
                Customizable 3D decor renders provided upon consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
