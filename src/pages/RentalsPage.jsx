import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Search,
  Plus,
  Minus,
  Sparkles,
  ShieldCheck,
  RotateCcw,
  SlidersHorizontal,
  Phone
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { RENTAL_CATEGORIES, RENTAL_PRODUCTS } from '../data/weddingData';
import { useWedding } from '../context/WeddingContext';

export function RentalsPage() {
  const { addToRentalCart, setIsCartDrawerOpen, cartTotalItems } = useWedding();

  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  // Quantity state per product card: { [productId]: number }
  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    RENTAL_PRODUCTS.forEach((p) => {
      initial[p.id] = p.minOrder || 10;
    });
    return initial;
  });

  const handleQtyChange = (id, delta, minOrder) => {
    setQuantities((prev) => {
      const current = prev[id] || minOrder || 10;
      const step = minOrder >= 50 ? 25 : minOrder >= 10 ? 5 : 1;
      const updated = Math.max(minOrder || 1, current + delta * step);
      return { ...prev, [id]: updated };
    });
  };

  const filteredProducts = useMemo(() => {
    return RENTAL_PRODUCTS.filter((prod) => {
      const matchesCategory =
        selectedCategory === 'All Items' || prod.category === selectedCategory;
      const matchesSearch =
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return b.availableQty - a.availableQty;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleAddToCart = (product) => {
    const qty = quantities[product.id] || product.minOrder || 1;
    addToRentalCart(product, qty);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      <SectionHeader
        badge="४५,०००+ भांडी व बिछायत साहित्य साठा"
        title="विवाह भांडी व बिछायत साहित्य भाड्याने"
        subtitle="अस्सल तांब्या-पितळेची भांडी, महाराजा थाळी सेट्स, हलवाई कढई, लाकडी पाट, गाद्या, लोड, तक्के व पंगत साहित्यासह विदर्भातील सर्वात मोठा साठा."
      />

      {/* Trust Badges Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-10 p-3 sm:p-5 bg-[#FFFDF9] rounded-2xl border border-[#C6A15B]/25 text-center">
        <div className="space-y-1">
          <ShieldCheck className="w-5 h-5 text-[#C6A15B] mx-auto" />
          <span className="block text-xs font-bold text-[#701F35]">100% Food-Grade &amp; Sanitized</span>
          <span className="block text-[10px] text-[#574F4A]">Steam-cleaned before every dispatch</span>
        </div>
        <div className="space-y-1">
          <Sparkles className="w-5 h-5 text-[#C6A15B] mx-auto" />
          <span className="block text-xs font-bold text-[#701F35]">Authentic Brass &amp; Copper</span>
          <span className="block text-[10px] text-[#574F4A]">Real kalai-coated traditional vessels</span>
        </div>
        <div className="space-y-1">
          <RotateCcw className="w-5 h-5 text-[#C6A15B] mx-auto" />
          <span className="block text-xs font-bold text-[#701F35]">Refundable Security Deposit</span>
          <span className="block text-[10px] text-[#574F4A]">Instant return post event inspection</span>
        </div>
        <div className="space-y-1">
          <ShoppingBag className="w-5 h-5 text-[#C6A15B] mx-auto" />
          <span className="block text-xs font-bold text-[#701F35]">Logistics &amp; Onsite Setup</span>
          <span className="block text-[10px] text-[#574F4A]">Delivered directly to your venue</span>
        </div>
      </div>

      {/* Control Panel: Search & Filters */}
      <div className="bg-white p-5 rounded-2xl border border-[#C6A15B]/30 mb-8 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input (8 cols) */}
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-[#574F4A] absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="भांडी, तांबे, पितळ, प्लेट्स किंवा साहित्याचे नाव शोधा..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#C6A15B]/30 text-xs text-[#282321] placeholder-[#574F4A]/60 focus:outline-none focus:border-[#701F35]"
            />
          </div>

          {/* Sort Selector (4 cols) */}
          <div className="md:col-span-4 flex items-center justify-end gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#C6A15B]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#C6A15B]/30 text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
            >
              <option value="popular">उपलब्धतेनुसार (Most Available)</option>
              <option value="name">नावानुसार (A to Z)</option>
            </select>
          </div>
        </div>

        {/* Category Pills (Horizontal Scrollable) */}
        <div className="pt-2 border-t border-[#C6A15B]/20 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {RENTAL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#701F35] text-[#FAF7F2] shadow-xs'
                  : 'bg-[#FAF7F2] text-[#282321] border border-[#C6A15B]/30 hover:bg-[#C6A15B]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6 text-xs text-[#574F4A]">
        <span>
          Showing <strong className="text-[#701F35]">{filteredProducts.length}</strong> rental products
          {selectedCategory !== 'All Items' && ` in "${selectedCategory}"`}
        </span>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-2xl border border-[#C6A15B]/30 space-y-3">
          <p className="text-sm font-bold text-[#701F35]">No rental equipment matches your filters</p>
          <p className="text-xs text-[#574F4A]">Try adjusting your search keywords or selecting another category.</p>
          <button
            onClick={() => {
              setSelectedCategory('All Items');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((prod, idx) => {
            const currentQty = quantities[prod.id] || prod.minOrder || 10;
            const lineTotal = prod.price * currentQty;

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-stone-100 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white/95 text-[#701F35] text-[10px] font-bold border border-[#C6A15B]/30 shadow-xs">
                    {prod.category}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-[#282321]/80 text-[#FAF7F2] text-[10px]">
                    {prod.availableQty} units available
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="text-sm font-bold text-[#282321] line-clamp-1" title={prod.name}>
                      {prod.name}
                    </h4>
                    <p className="text-[11px] text-[#574F4A] line-clamp-2 mt-1">
                      {prod.description}
                    </p>
                    <p className="text-[10px] text-[#C6A15B] font-semibold mt-1">
                      Material: {prod.material}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#C6A15B]/20">
                    <a
                      href="tel:9881392562"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] text-xs font-semibold flex items-center justify-center gap-2 hover:shadow-md transition-all cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>चौकशी व बुकिंग: 9881392562</span>
                    </a>
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
