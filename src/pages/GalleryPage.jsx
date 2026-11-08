import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, MapPin, Search } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GALLERY_ITEMS } from '../data/weddingData';
import { useWedding } from '../context/WeddingContext';

export function GalleryPage() {
  const { setActiveLightboxImage, toggleWishlist, isWishlisted } = useWedding();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchKeyword, setSearchKeyword] = useState('');

  const categories = [
    'All',
    'Royal wedding decoration',
    'Floral decoration',
    'Stage decoration',
    'Mandap decoration',
    'Entrance decoration',
    'Haldi ceremony decoration',
    'Mehendi decoration',
    'Reception decoration'
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.location.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.tags?.some((t) => t.toLowerCase().includes(searchKeyword.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      <SectionHeader
        badge="पारंपारिक विवाह दालन (Royal Visual Archive)"
        title="भारतीय पारंपारिक विवाह व सजावट दालन"
        subtitle="पवित्र वैदिक मंडप, सप्तपदी, हळदी-मेहंदी सोहळे, भव्य प्रवेशद्वार व स्वागत कमान — ओम बिछायत केंद्र चिखली द्वारे साकारलेले मंगल सोहळे."
      />

      {/* Category Filter Pills & Search */}
      <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-[#C6A15B]/30 mb-8 sm:mb-10 shadow-sm space-y-4">
        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-[#574F4A] absolute left-3 top-3" />
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="नाव, ठिकाण किंवा टॅगने शोधा (उदा. चिखली, मंडप, सप्तपदी, हळद, तोरण)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#C6A15B]/30 text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2 border-t border-[#C6A15B]/20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#701F35] text-[#FAF7F2] shadow-sm border border-[#701F35]'
                  : 'bg-[#FAF7F2] text-[#282321] border border-[#C6A15B]/30 hover:border-[#701F35]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredItems.length === 0 ? (
        <div className="p-12 sm:p-16 text-center bg-white rounded-2xl border border-[#C6A15B]/30 space-y-3">
          <p className="text-sm font-bold text-[#701F35]">No gallery themes found matching your query</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchKeyword('');
            }}
            className="px-4 py-2 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredItems.map((item, idx) => {
            const wishlisted = isWishlisted(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveLightboxImage(item)}
                className="luxury-card rounded-2xl overflow-hidden group cursor-pointer relative"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-60 sm:h-72 overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top Bar Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#701F35]/90 text-[#FAF7F2] text-[10px] font-semibold tracking-wider uppercase border border-[#C6A15B]/40 backdrop-blur-xs">
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
                          : 'bg-white/80 text-[#701F35] hover:bg-white'
                      }`}
                      title={wishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <h3 className="font-royal text-xl font-bold leading-snug drop-shadow-md">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-[#FAF7F2]/80 pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>{item.location}</span>
                      </span>

                      <span className="flex items-center gap-1 text-[#DFBF7E] text-[11px] font-semibold">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Theme</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-Card Description & Tags */}
                <div className="p-4 bg-white space-y-2">
                  <p className="text-xs text-[#574F4A] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags?.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#701F35] font-medium border border-[#C6A15B]/25"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
