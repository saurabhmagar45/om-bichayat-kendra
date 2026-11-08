import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Sparkles,
  ShoppingBag,
  Heart,
  User,
  ShieldCheck,
  Menu,
  X,
  PhoneCall,
  CalendarCheck,
  MapPin
} from 'lucide-react';
import { useWedding } from '../context/WeddingContext';
import { BRAND_INFO } from '../data/weddingData';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartTotalItems, setIsCartDrawerOpen, wishlist } = useWedding();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Rentals', path: '/rentals', badge: 'Equipment' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Catering', path: '/catering' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Royal Announcement Bar with Authentic Heritage Texture */}
      <div className="relative overflow-hidden bg-[#4A1222] text-[#FAF7F2] text-xs py-1.5 px-4 text-center border-b border-[#C6A15B]/30 flex items-center justify-between font-sans">
        {/* Subtle Jali Pattern Overlay */}
        <div className="absolute inset-0 royal-jali-texture-dark opacity-25 pointer-events-none" />

        <div className="relative z-10 hidden md:flex items-center gap-4 text-[#FAF7F2]/85">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            Now Booking 2026 – 2027 Wedding Seasons
          </span>
          <span className="text-[#C6A15B]">|</span>
          <span className="flex items-center gap-1 text-[#DFBF7E] font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Chikhli Dist. Buldhana</span>
          </span>
        </div>
        <div className="relative z-10 mx-auto md:mx-0 flex items-center gap-4 text-xs">
          <a
            href="tel:9881392562"
            className="flex items-center gap-1.5 hover:text-[#C6A15B] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>VIP Helpline: <strong className="text-[#DFBF7E] tracking-wider">9881392562</strong></span>
          </a>

          {/* Secret Invisible Admin Button (No visible name or icon) */}
          <Link
            to="/admin"
            className="w-4 h-4 opacity-0 cursor-default select-none -ml-2"
            tabIndex={-1}
            aria-label="Secret Portal"
            title=""
          >
            &zwnj;
          </Link>
        </div>
      </div>

      {/* Main Luxury Header with Handcrafted Royal Indian Jali Texture */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 relative overflow-hidden ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3 border-b border-[#C6A15B]/35'
            : 'bg-gradient-to-r from-[#FAF7F2] via-[#FFFDF9] to-[#FAF7F2] py-4 border-b border-[#C6A15B]/30'
        }`}
      >
        {/* Delicate Royal Jali Texture Background Overlay */}
        <div className="absolute inset-0 royal-jali-texture opacity-35 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF7F2]/20 to-[#FAF7F2]/60 pointer-events-none z-0" />

        {/* Delicate Golden Accent Rim at Bottom of Navbar */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C6A15B]/70 to-transparent pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-[#701F35] to-[#4A1222] flex items-center justify-center border-2 border-[#C6A15B] shadow-md shadow-[#701F35]/20 group-hover:scale-105 transition-transform">
              <span className="font-bold text-xl text-[#C6A15B] leading-none">ॐ</span>
            </div>
            <div>
              <span className="block font-bold text-lg md:text-xl tracking-wide text-[#701F35] leading-none">
                ओम बिछायत केंद्र
              </span>
              <span className="block text-[9px] md:text-[10px] tracking-[0.18em] text-[#C6A15B] font-bold uppercase mt-0.5">
                OM BICHAYAT KENDRA
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive
                      ? 'text-[#701F35] font-semibold'
                      : 'text-[#282321]/80 hover:text-[#701F35] hover:bg-[#C6A15B]/10'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-[#701F35] text-[#FAF7F2]">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#701F35] via-[#C6A15B] to-[#701F35] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Wishlist Link */}
            <Link
              to="/dashboard?tab=wishlist"
              title="My Wishlist"
              className="relative p-2 rounded-full hover:bg-[#C6A15B]/15 text-[#701F35] transition-colors"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#701F35] text-[#FAF7F2] text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Rental Cart Trigger (only when items present) */}
            {cartTotalItems > 0 && (
              <button
                onClick={() => setIsCartDrawerOpen(true)}
                title="Rental Cart"
                className="relative p-2 rounded-full hover:bg-[#C6A15B]/15 text-[#701F35] transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-[#C6A15B] text-[#701F35] text-[10px] font-bold flex items-center justify-center shadow">
                  {cartTotalItems}
                </span>
              </button>
            )}

            {/* Customer Dashboard Link */}
            <Link
              to="/dashboard"
              title="Customer Dashboard"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-[#C6A15B]/40 hover:bg-[#C6A15B]/10 text-[#701F35] transition-colors"
            >
              <User className="w-4 h-4 text-[#C6A15B]" />
              <span>Dashboard</span>
            </Link>

            {/* Book Event CTA Button */}
            <Link
              to="/booking"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] hover:shadow-lg hover:shadow-[#701F35]/25 hover:from-[#8C2743] hover:to-[#5C1D2E] transition-all"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Plan Your Wedding</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#701F35] hover:bg-[#C6A15B]/15 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#C6A15B]/30 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-[#701F35] text-[#FAF7F2]'
                      : 'text-[#282321] hover:bg-[#C6A15B]/15'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C6A15B] text-[#701F35] font-bold">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}

            <div className="pt-3 border-t border-[#C6A15B]/20 flex flex-col gap-2">
              <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] text-sm font-semibold tracking-wide"
              >
                Plan Your Wedding
              </Link>
              <div className="flex items-center gap-2 text-center text-xs">
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2 rounded-lg border border-[#C6A15B]/40 text-[#701F35] font-semibold"
                >
                  My Dashboard
                </Link>
                {/* Secret Invisible Admin Button in Mobile */}
                <Link
                  to="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-4 h-8 opacity-0 cursor-default select-none"
                  tabIndex={-1}
                  aria-label="Secret Portal"
                >
                  &zwnj;
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
