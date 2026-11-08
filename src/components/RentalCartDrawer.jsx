import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ShieldCheck,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useWedding } from '../context/WeddingContext';

export function RentalCartDrawer() {
  const {
    rentalCart,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    updateRentalCartQty,
    removeFromRentalCart,
    clearRentalCart,
    cartTotalItems,
    cartSubtotal,
    cartDeposit,
    cartGrandTotal,
    submitBooking,
    addToast
  } = useWedding();

  const [eventDate, setEventDate] = useState('');
  const [eventCity, setEventCity] = useState('Mumbai');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const navigate = useNavigate();

  if (!isCartDrawerOpen) return null;

  const handleRequestRentalQuote = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      addToast('Please enter your name and contact phone number', 'info');
      return;
    }
    if (rentalCart.length === 0) {
      addToast('Your rental cart is currently empty', 'info');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      submitBooking({
        eventType: "Utensils & Equipment Rental",
        eventDate: eventDate || "2026-12-25",
        venue: `${eventCity} Event Lawn`,
        customerName,
        phone: customerPhone,
        packageSelected: `Equipment Rental (${cartTotalItems} items)`,
        guestCount: Math.round(cartTotalItems / 3) || 150,
        estimatedTotal: cartGrandTotal,
        services: ["Tableware & Cooking Rentals", "Sanitized Delivery", "Security Deposit"]
      });

      setIsSubmitting(false);
      setOrderSubmitted(true);
    }, 600);
  };

  const handleFinish = () => {
    setOrderSubmitted(false);
    clearRentalCart();
    setIsCartDrawerOpen(false);
    navigate('/dashboard');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartDrawerOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-[#C6A15B]/30">
          {/* Header */}
          <div className="px-5 py-4 bg-[#701F35] text-[#FAF7F2] flex items-center justify-between border-b border-[#C6A15B]/30">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C6A15B]" />
              <h3 className="font-cinzel text-base font-bold tracking-wide">
                Rental Cart ({cartTotalItems} units)
              </h3>
            </div>
            <button
              onClick={() => setIsCartDrawerOpen(false)}
              className="p-1 rounded-full text-[#FAF7F2]/80 hover:text-[#FAF7F2] hover:bg-[#FAF7F2]/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {orderSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#701F35]/10 text-[#701F35] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-royal text-2xl font-bold text-[#701F35]">
                  Rental Quote Requested!
                </h4>
                <p className="text-sm text-[#574F4A] leading-relaxed px-4">
                  Our logistics director has reserved your utensils and equipment inventory. A sanitized dispatch quote has been generated.
                </p>
                <div className="p-4 bg-[#FFFDF9] rounded-xl border border-[#C6A15B]/30 text-left text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#574F4A]">Customer:</span>
                    <span className="font-semibold text-[#282321]">{customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#574F4A]">Phone:</span>
                    <span className="font-semibold text-[#282321]">{customerPhone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#574F4A]">दर पत्रक स्थिती:</span>
                    <span className="font-bold text-[#701F35]">कोटेशन लवकरच पाठवले जाईल</span>
                  </div>
                </div>
                <button
                  onClick={handleFinish}
                  className="w-full py-3 rounded-lg bg-[#701F35] text-[#FAF7F2] font-semibold text-sm hover:bg-[#8C2743] transition-all cursor-pointer"
                >
                  View in Customer Dashboard
                </button>
              </div>
            ) : rentalCart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#C6A15B]/15 text-[#C6A15B] flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-royal text-xl font-bold text-[#701F35]">Your Cart is Empty</h4>
                <p className="text-xs text-[#574F4A] max-w-xs mx-auto">
                  Browse our inventory of copper chafing dishes, brass maharaja thalis, crystal stemware, and banquet furniture.
                </p>
                <button
                  onClick={() => {
                    setIsCartDrawerOpen(false);
                    navigate('/rentals');
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#701F35] text-[#FAF7F2] text-xs font-semibold hover:bg-[#8C2743] transition-all cursor-pointer"
                >
                  Explore Rental Products
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#574F4A] pb-1 border-b border-[#C6A15B]/20">
                    <span>Selected Equipment</span>
                    <button
                      onClick={clearRentalCart}
                      className="text-red-700 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear All</span>
                    </button>
                  </div>

                  {rentalCart.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-[#FFFFFF] rounded-xl border border-[#C6A15B]/25 flex gap-3 shadow-xs"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover border border-[#C6A15B]/20 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider">
                          {item.category}
                        </span>
                        <h5 className="text-xs font-semibold text-[#282321] truncate">
                          {item.name}
                        </h5>

                        {/* Quantity Counter */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="inline-flex items-center border border-[#C6A15B]/40 rounded-md bg-[#FAF7F2]">
                            <button
                              onClick={() => updateRentalCartQty(item.id, item.quantity - 10)}
                              className="px-2 py-0.5 text-xs text-[#701F35] hover:bg-[#C6A15B]/20 cursor-pointer"
                              title="Decrease by 10"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-[#282321]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateRentalCartQty(item.id, item.quantity + 10)}
                              className="px-2 py-0.5 text-xs text-[#701F35] hover:bg-[#C6A15B]/20 cursor-pointer"
                              title="Increase by 10"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-[#574F4A]">
                              {item.quantity} नग
                            </span>
                            <button
                              onClick={() => removeFromRentalCart(item.id)}
                              className="text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rental Event Details Form */}
                <form onSubmit={handleRequestRentalQuote} className="pt-2 space-y-3">
                  <div className="p-3 bg-[#FFFDF9] rounded-xl border border-[#C6A15B]/30 space-y-2">
                    <span className="block text-xs font-bold text-[#701F35] uppercase tracking-wider">
                      Event &amp; Delivery Details
                    </span>

                    <div>
                      <label className="block text-[11px] text-[#574F4A] mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Vikram Singhania"
                        className="w-full px-3 py-1.5 rounded-lg border border-[#C6A15B]/30 bg-white text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-[#574F4A] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="e.g. +91 98200 12345"
                        className="w-full px-3 py-1.5 rounded-lg border border-[#C6A15B]/30 bg-white text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] text-[#574F4A] mb-1">Event Date</label>
                        <input
                          type="date"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          className="w-full px-2 py-1.5 rounded-lg border border-[#C6A15B]/30 bg-white text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-[#574F4A] mb-1">City Hub</label>
                        <select
                          value={eventCity}
                          onChange={(e) => setEventCity(e.target.value)}
                          className="w-full px-2 py-1.5 rounded-lg border border-[#C6A15B]/30 bg-white text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                        >
                          <option>Mumbai</option>
                          <option>Pune</option>
                          <option>Jaipur</option>
                          <option>Udaipur</option>
                          <option>Delhi NCR</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Quote Summary Card */}
                  <div className="p-3.5 bg-white rounded-xl border border-[#C6A15B]/30 space-y-2 text-xs">
                    <div className="flex justify-between text-[#574F4A]">
                      <span>साहित्याचे प्रकार:</span>
                      <span className="font-semibold text-[#282321]">{rentalCart.length} प्रकार</span>
                    </div>

                    <div className="flex justify-between text-[#574F4A]">
                      <span>एकूण साहित्य संख्या:</span>
                      <span className="font-bold text-[#701F35]">{cartTotalItems} नग</span>
                    </div>

                    <div className="flex justify-between text-[#574F4A]">
                      <span className="flex items-center gap-1">
                        <span>स्वच्छता व निर्जंतुकीकरण:</span>
                        <ShieldCheck className="w-3 h-3 text-[#C6A15B]" />
                      </span>
                      <span className="text-emerald-700 font-medium">१००% मोफत व प्रमाणित</span>
                    </div>

                    <div className="pt-2 border-t border-[#C6A15B]/20 flex justify-between items-baseline font-bold text-xs">
                      <span className="text-[#701F35]">अधिकृत दरपत्रक:</span>
                      <span className="text-[#701F35] text-xs font-semibold">
                        कोटेशनद्वारे लगेच पाठवले जाईल
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#701F35]/25 transition-all cursor-pointer"
                  >
                    <span>{isSubmitting ? 'मागणी नोंदवत आहे...' : 'अधिकृत कोटेशन मागणी पाठवा'}</span>
                    <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
