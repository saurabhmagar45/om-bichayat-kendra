import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  ArrowRight,
  Send,
  MessageCircle,
  Heart
} from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '../data/weddingData';
import { useWedding } from '../context/WeddingContext';

export function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { addToast } = useWedding();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      addToast('Please enter a valid email address', 'info');
      return;
    }
    setSubscribed(true);
    addToast('ओम बिछायत केंद्राच्या माहितीपत्रकाची नोंदणी झाली आहे!', 'success');
    setEmailInput('');
  };

  return (
    <footer className="bg-[#380E1B] text-[#FAF7F2] relative border-t-2 border-[#C6A15B]/40 overflow-hidden font-sans">
      {/* Decorative Top Gold Fringe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#DFBF7E] via-[#C6A15B] to-[#9A7733]" />

      {/* Background Mandala Watermark */}
      <div className="absolute inset-0 mandala-pattern-dark opacity-40 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
          {/* Column 1: Brand & Philosophy (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#701F35] to-[#280A12] flex items-center justify-center border-2 border-[#C6A15B]">
                <span className="font-bold text-2xl text-[#C6A15B]">ॐ</span>
              </div>
              <div>
                <span className="block font-bold text-xl sm:text-2xl tracking-wide text-[#FAF7F2]">
                  ओम बिछायत केंद्र
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-[#C6A15B] font-bold uppercase">
                  OM BICHAYAT KENDRA • लग्नकार्य व बिछायत साहित्य
                </span>
              </div>
            </Link>

            <p className="text-[#FAF7F2]/80 text-sm leading-relaxed max-w-md">
              <strong>ओम बिछायत केंद्र (OM BICHAYAT KENDRA)</strong> — महाराष्ट्रातील विवाह सोहळे, मुंज, वास्तुशांत, स्वागत समारंभ व धार्मिक उत्सवांसाठी भव्य मंडप डेकोरेशन, केटरिंगची तांब्या-पितळेची भांडी, जर्मन व स्टील भांडी, रोषणाई, ध्वनिक्षेपक आणि बिछायत साहित्य भाड्याने मिळण्याचे विश्वसनीय केंद्र.
            </p>

            {/* WhatsApp VIP Concierge Action */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}?text=नमस्कार%20ओम%20बिछायत%20केंद्र,%20मला%20लग्नकार्य%20व%20साहित्य%20चौकशी%20करायची%20आहे.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#25D366] text-[#0B2E13] font-semibold text-xs tracking-wide shadow-md hover:bg-[#20bd5a] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Chat with Senior Wedding Concierge</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/60 pt-1">
              <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Available 7 Days a Week: 9:00 AM – 10:00 PM IST</span>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="font-cinzel text-base font-semibold text-[#DFBF7E] tracking-wider mb-4 flex items-center gap-2">
              <span>Bespoke Services</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/80">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="hover:text-[#C6A15B] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#C6A15B] text-xs">›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-[#C6A15B] font-medium hover:underline text-xs flex items-center gap-1 mt-1"
                >
                  <span>View All 8 Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Rentals & Packages */}
          <div>
            <h4 className="font-cinzel text-base font-semibold text-[#DFBF7E] tracking-wider mb-4">
              Equipment &amp; Menus
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/80">
              <li>
                <Link to="/rentals" className="hover:text-[#C6A15B] transition-colors">
                  Copper &amp; Brass Chafing Dishes
                </Link>
              </li>
              <li>
                <Link to="/rentals" className="hover:text-[#C6A15B] transition-colors">
                  Gold Rim Bone China Plates
                </Link>
              </li>
              <li>
                <Link to="/rentals" className="hover:text-[#C6A15B] transition-colors">
                  Maharaja Thali Brass Sets
                </Link>
              </li>
              <li>
                <Link to="/rentals" className="hover:text-[#C6A15B] transition-colors">
                  Chiavari &amp; Royal Chairs
                </Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-[#C6A15B] transition-colors">
                  Shahi Rajwada Catering
                </Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-[#C6A15B] transition-colors">
                  Peshwai Maharashtrian Thali
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-[#C6A15B] transition-colors text-[#DFBF7E] font-medium">
                  Royal Wedding Packages ✦
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Offices */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-base font-semibold text-[#DFBF7E] tracking-wider">
              Royal Gazette
            </h4>
            <p className="text-xs text-[#FAF7F2]/75 leading-relaxed">
              Subscribe to receive wedding decor trend forecasts, auspicious Muhurat guides, and private rental offers.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-3 pr-10 py-2.5 rounded-lg bg-[#280A12]/90 border border-[#C6A15B]/40 text-xs text-[#FAF7F2] placeholder-[#FAF7F2]/40 focus:outline-none focus:border-[#C6A15B]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-[#C6A15B] text-[#380E1B] rounded-md hover:bg-[#DFBF7E] transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#C6A15B]">✓ You are on our VIP mailing list!</p>
              )}
            </form>

            <div className="pt-2">
              <span className="block text-xs font-semibold text-[#DFBF7E] mb-1">
                मुख्य कार्यालय व संपर्क:
              </span>
              <p className="text-xs text-[#FAF7F2]/90 font-medium">
                चिखली, जि. बुलढाणा (Chikhli Dist. Buldhana)
              </p>
              <p className="text-xs text-[#DFBF7E] font-bold mt-1">
                हेल्पलाइन: 9881392562
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-14 pt-6 border-t border-[#C6A15B]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <p>
            © 2026 ओम बिछायत केंद्र (OM BICHAYAT KENDRA). All rights reserved
            {/* Secret Invisible Admin Button */}
            <Link
              to="/admin"
              className="inline-block w-2 h-2 text-transparent hover:text-transparent select-none cursor-default ml-0.5"
              tabIndex={-1}
              aria-label="Secret Portal"
            >
              .
            </Link>
          </p>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#C6A15B] transition-colors">
              About Maison
            </Link>
            <Link to="/contact" className="hover:text-[#C6A15B] transition-colors">
              Privacy &amp; Terms
            </Link>
          </div>

          <div className="flex items-center gap-1 text-[#C6A15B]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-[#C6A15B]" />
            <span>for Timeless Indian Weddings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
