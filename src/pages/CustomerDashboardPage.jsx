import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  User,
  CalendarCheck,
  ShoppingBag,
  Heart,
  CreditCard,
  Bell,
  Clock,
  MapPin,
  Download,
  Trash2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useWedding } from '../context/WeddingContext';
import { RENTAL_PRODUCTS, GALLERY_ITEMS, WEDDING_PACKAGES } from '../data/weddingData';

export function CustomerDashboardPage() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'bookings';

  const [activeTab, setActiveTab] = useState(initialTab);
  const {
    bookings,
    rentalCart,
    removeFromRentalCart,
    updateRentalCartQty,
    cartTotalItems,
    cartGrandTotal,
    wishlist,
    toggleWishlist,
    addToast
  } = useWedding();

  // User Profile State (Local)
  const [profile, setProfile] = useState({
    name: 'Vikram Singhania',
    partnerName: 'Ananya Singhania',
    phone: '+91 98201 54321',
    email: 'vikram.singhania@heritage.com',
    city: 'Mumbai',
    weddingDate: '2026-12-18',
    weddingVenue: 'Taj Santacruz & Jagmandir Udaipur'
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Mock Payment History
  const paymentHistory = [
    {
      id: "TXN-98421",
      date: "2026-10-15",
      bookingRef: "BK-8921",
      description: "Booking Advance Token (Taj Santacruz Wedding)",
      amount: 250000,
      mode: "HDFC NetBanking (NEFT)",
      status: "Successful"
    },
    {
      id: "TXN-87110",
      date: "2026-11-01",
      bookingRef: "BK-9034",
      description: "Haldi Decor Initial Deposit",
      amount: 50000,
      mode: "ICICI Corporate Credit Card",
      status: "Successful"
    }
  ];

  // Mock Notifications
  const notifications = [
    {
      id: "notif-1",
      title: "3D Mandap Renders Ready",
      time: "2 hours ago",
      desc: "Architectural 3D renders for your Jagmandir Lake Mandap have been uploaded for review.",
      unread: true
    },
    {
      id: "notif-2",
      title: "Maharaj Food Tasting Scheduled",
      time: "Yesterday",
      desc: "Private royal Peshwai & Awadhi tasting confirmed for Saturday at 1:00 PM.",
      unread: false
    },
    {
      id: "notif-3",
      title: "Utensil Inventory Reserved",
      time: "3 days ago",
      desc: "150 Bone China plates and 8 roll-top copper chafing dishes reserved for BK-8921.",
      unread: false
    }
  ];

  // Resolve Wishlist items
  const wishlistedItems = wishlist
    .map((id) => {
      return (
        RENTAL_PRODUCTS.find((p) => p.id === id) ||
        GALLERY_ITEMS.find((g) => g.id === id) ||
        WEDDING_PACKAGES.find((pkg) => pkg.id === id)
      );
    })
    .filter(Boolean);

  const tabs = [
    { id: 'bookings', label: 'My Bookings', icon: CalendarCheck, badge: bookings.length },
    { id: 'cart', label: 'Rental Cart', icon: ShoppingBag, badge: cartTotalItems },
    { id: 'status', label: 'Booking Tracker', icon: Clock },
    { id: 'wishlist', label: 'Wishlist', icon: Heart, badge: wishlist.length },
    { id: 'payments', label: 'Payment History', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: 1 },
    { id: 'profile', label: 'My Profile', icon: User }
  ];

  const handleDownloadInvoice = (txnId) => {
    addToast(`Generated PDF receipt for ${txnId} (Simulation)`, 'success');
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      {/* Top Welcome Card */}
      <div className="bg-gradient-to-r from-[#701F35] via-[#4A1222] to-[#380E1B] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 mb-8 border border-[#C6A15B]/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#DFBF7E] to-[#C6A15B] text-[#701F35] font-cinzel font-bold text-2xl flex items-center justify-center border-2 border-[#FAF7F2] shadow-md">
            {profile.name[0]}
          </div>
          <div>
            <span className="text-[10px] text-[#DFBF7E] font-bold uppercase tracking-widest block">
              Royal Member Concierge
            </span>
            <h2 className="font-royal text-2xl sm:text-3xl font-bold">
              Namaste, {profile.name}
            </h2>
            <p className="text-xs text-[#FAF7F2]/80 mt-0.5">
              Wedding: {profile.weddingDate} • {profile.city}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/booking"
            className="px-5 py-2.5 rounded-xl gold-btn text-xs uppercase tracking-wider font-bold shadow-md"
          >
            + New Booking Request
          </Link>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 border-b border-[#C6A15B]/25 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#701F35] text-[#FAF7F2] shadow-sm'
                  : 'bg-white text-[#282321] border border-[#C6A15B]/25 hover:border-[#701F35]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#C6A15B]' : 'text-[#574F4A]'}`} />
              <span>{tab.label}</span>
              {typeof tab.badge === 'number' && tab.badge > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-[#C6A15B] text-[#701F35]' : 'bg-[#701F35] text-[#FAF7F2]'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div>
        {/* 1. MY BOOKINGS */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-royal text-xl font-bold text-[#701F35]">
                Active &amp; Past Wedding Bookings ({bookings.length})
              </h3>
            </div>

            {bookings.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-2xl border border-[#C6A15B]/30">
                <p className="text-sm font-semibold text-[#701F35]">No bookings found</p>
                <Link
                  to="/booking"
                  className="mt-3 inline-block px-4 py-2 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs font-semibold"
                >
                  Plan Your Wedding Now
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="luxury-card rounded-2xl p-6 bg-white space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-[#C6A15B]/20 pb-3">
                        <div>
                          <span className="font-mono text-xs font-bold text-[#701F35]">
                            {b.id}
                          </span>
                          <span className="text-[10px] text-[#574F4A] block">
                            Submitted on {b.createdDate}
                          </span>
                        </div>
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-bold ${
                            b.status === 'Confirmed'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {b.status}
                        </span>
                      </div>

                      <h4 className="font-royal text-xl font-bold text-[#282321]">
                        {b.eventType}
                      </h4>

                      <div className="space-y-1.5 text-xs text-[#574F4A]">
                        <div className="flex items-center gap-2">
                          <CalendarCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
                          <span>Event Date: <strong>{b.eventDate}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                          <span>Venue: {b.venue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                          <span>Package / Scope: {b.packageSelected}</span>
                        </div>
                      </div>

                      {/* Services Pills */}
                      {b.services && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {b.services.map((s, i) => (
                            <span
                              key={i}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#701F35] border border-[#C6A15B]/25 font-medium"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#C6A15B]/20 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-[#574F4A] block">कोटेशन स्थिती</span>
                        <span className="text-xs font-bold text-[#701F35] bg-[#701F35]/5 px-2.5 py-1 rounded-full border border-[#C6A15B]/30 inline-block mt-0.5">
                          दर मंजूर (Quote Approved)
                        </span>
                      </div>

                      <button
                        onClick={() => setActiveTab('status')}
                        className="px-3 py-1.5 rounded-lg border border-[#701F35] text-xs font-semibold text-[#701F35] hover:bg-[#701F35] hover:text-[#FAF7F2] transition-colors cursor-pointer"
                      >
                        Track Status
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 2. RENTAL CART TAB */}
        {activeTab === 'cart' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-royal text-xl font-bold text-[#701F35]">
                Utensils &amp; Equipment Rental Cart ({cartTotalItems} items)
              </h3>
              <Link
                to="/rentals"
                className="text-xs text-[#701F35] font-bold hover:underline flex items-center gap-1"
              >
                <span>Browse Rental Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {rentalCart.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-2xl border border-[#C6A15B]/30 space-y-3">
                <p className="text-sm font-semibold text-[#701F35]">Your rental cart is empty</p>
                <p className="text-xs text-[#574F4A]">
                  Reserve chafing dishes, brass thalis, dinner plates, and furniture for your event.
                </p>
                <Link
                  to="/rentals"
                  className="mt-2 inline-block px-5 py-2.5 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs font-semibold"
                >
                  Explore Rentals Catalog
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  {rentalCart.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-white rounded-2xl border border-[#C6A15B]/25 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-xl object-cover border border-[#C6A15B]/20"
                        />
                        <div>
                          <span className="text-[10px] uppercase font-bold text-[#C6A15B]">
                            {item.category}
                          </span>
                          <h4 className="text-sm font-bold text-[#282321]">{item.name}</h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-[#C6A15B]/40 rounded-lg bg-[#FAF7F2]">
                          <button
                            onClick={() => updateRentalCartQty(item.id, item.quantity - 10)}
                            className="px-2 py-1 text-xs text-[#701F35] cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-bold text-[#282321]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateRentalCartQty(item.id, item.quantity + 10)}
                            className="px-2 py-1 text-xs text-[#701F35] cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-xs font-bold text-[#701F35] min-w-16 text-right">
                          {item.quantity} नग
                        </span>

                        <button
                          onClick={() => removeFromRentalCart(item.id)}
                          className="text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-4 p-6 bg-[#FFFDF9] rounded-2xl border border-[#C6A15B]/30 space-y-4">
                  <h4 className="font-royal text-lg font-bold text-[#701F35]">
                    कोटेशन सारांश (Quote Summary)
                  </h4>
                  <div className="space-y-2 text-xs border-b border-[#C6A15B]/20 pb-4">
                    <div className="flex justify-between text-[#574F4A]">
                      <span>साहित्याचे प्रकार:</span>
                      <strong>{rentalCart.length} प्रकार</strong>
                    </div>
                    <div className="flex justify-between text-[#574F4A]">
                      <span>एकूण संख्या:</span>
                      <strong className="text-[#701F35]">{cartTotalItems} नग</strong>
                    </div>
                    <div className="flex justify-between text-[#574F4A]">
                      <span>दर पत्रक स्थिती:</span>
                      <strong className="text-[#701F35]">कोटेशन उपलब्ध होईल</strong>
                    </div>
                  </div>
                  <Link
                    to="/booking?service=Utensils%20Rental"
                    className="w-full py-3 rounded-xl bg-[#701F35] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#8C2743]"
                  >
                    <span>अधिकृत कोटेशन मागणी करा</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. BOOKING TRACKER STEPPER */}
        {activeTab === 'status' && (
          <div className="bg-white p-8 rounded-3xl border border-[#C6A15B]/30 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#C6A15B] uppercase tracking-wider block">
                Live Progression
              </span>
              <h3 className="font-royal text-2xl font-bold text-[#701F35]">
                Event Fulfillment Milestone Tracker
              </h3>
              <p className="text-xs text-[#574F4A] mt-1">
                Tracking Booking Ref: <strong>BK-8921 (Taj Santacruz &amp; Udaipur Wedding)</strong>
              </p>
            </div>

            {/* Visual Stepper */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {[
                { step: '1', title: 'Requested', desc: 'Initial Brief Received', done: true },
                { step: '2', title: 'Consultation', desc: 'Theme & Menu Tasting', done: true },
                { step: '3', title: 'Quotation Approved', desc: 'Scope Confirmed', done: true },
                { step: '4', title: 'Decor & Logistics', desc: 'Floral & Utensils Packing', current: true },
                { step: '5', title: 'Wedding Day', desc: 'Ritual Execution', done: false }
              ].map((s, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border text-center space-y-2 ${
                    s.done
                      ? 'bg-emerald-50 border-emerald-300'
                      : s.current
                      ? 'bg-[#701F35] text-[#FAF7F2] border-[#C6A15B] shadow-md'
                      : 'bg-[#FAF7F2] border-[#C6A15B]/20 text-stone-400'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center font-bold text-xs ${
                      s.done
                        ? 'bg-emerald-600 text-white'
                        : s.current
                        ? 'bg-[#C6A15B] text-[#701F35]'
                        : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    {s.done ? '✓' : s.step}
                  </div>
                  <h5 className={`font-royal font-bold text-sm ${s.current ? 'text-[#FAF7F2]' : 'text-[#282321]'}`}>
                    {s.title}
                  </h5>
                  <p className={`text-[10px] ${s.current ? 'text-[#FAF7F2]/80' : 'text-[#574F4A]'}`}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#FFFDF9] rounded-2xl border border-[#C6A15B]/30 flex items-center justify-between text-xs">
              <span className="text-[#574F4A]">
                Assigned Lead Planner: <strong>Arjun Kulkarni (+91 98201 54321)</strong>
              </span>
              <a
                href="tel:+919820154321"
                className="px-3 py-1.5 rounded-lg bg-[#701F35] text-[#FAF7F2] font-semibold"
              >
                Call Lead Planner
              </a>
            </div>
          </div>
        )}

        {/* 4. WISHLIST TAB */}
        {activeTab === 'wishlist' && (
          <div className="space-y-6">
            <h3 className="font-royal text-xl font-bold text-[#701F35]">
              Saved Themes &amp; Products ({wishlistedItems.length})
            </h3>

            {wishlistedItems.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-2xl border border-[#C6A15B]/30">
                <p className="text-sm font-semibold text-[#701F35]">Your wishlist is empty</p>
                <p className="text-xs text-[#574F4A]">
                  Click the heart icon on any gallery photo, catering package, or rental product to save it here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistedItems.map((item) => (
                  <div
                    key={item.id}
                    className="luxury-card rounded-2xl overflow-hidden bg-white flex flex-col justify-between"
                  >
                    <div className="relative h-48 bg-stone-900">
                      <img
                        src={item.image}
                        alt={item.name || item.title}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => toggleWishlist(item)}
                        className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-red-600 shadow cursor-pointer"
                        title="Remove from Wishlist"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                    </div>

                    <div className="p-4 space-y-2">
                      <h4 className="font-bold text-sm text-[#282321]">
                        {item.name || item.title}
                      </h4>
                      <p className="text-xs text-[#574F4A] line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 5. PAYMENT HISTORY */}
        {activeTab === 'payments' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#C6A15B]/30 space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-royal text-xl font-bold text-[#701F35]">
                Payment Receipts &amp; Invoices (UI Only)
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#C6A15B]/30 bg-[#FAF7F2]">
                    <th className="py-3 px-4 font-bold text-[#701F35]">Transaction ID</th>
                    <th className="py-3 px-4 font-bold text-[#701F35]">Date</th>
                    <th className="py-3 px-4 font-bold text-[#701F35]">Description</th>
                    <th className="py-3 px-4 font-bold text-[#701F35]">Mode</th>
                    <th className="py-3 px-4 font-bold text-[#701F35]">Amount</th>
                    <th className="py-3 px-4 font-bold text-[#701F35]">Status</th>
                    <th className="py-3 px-4 font-bold text-[#701F35] text-right">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C6A15B]/20">
                  {paymentHistory.map((p) => (
                    <tr key={p.id}>
                      <td className="py-3 px-4 font-mono font-bold text-[#701F35]">{p.id}</td>
                      <td className="py-3 px-4 text-[#574F4A]">{p.date}</td>
                      <td className="py-3 px-4 font-medium text-[#282321]">{p.description}</td>
                      <td className="py-3 px-4 text-[#574F4A]">{p.mode}</td>
                      <td className="py-3 px-4 font-bold text-[#282321]">
                        ₹{p.amount.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          {p.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => handleDownloadInvoice(p.id)}
                          className="inline-flex items-center gap-1 text-[#701F35] hover:text-[#C6A15B] font-semibold cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 6. NOTIFICATIONS */}
        {activeTab === 'notifications' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#C6A15B]/30 space-y-4 shadow-sm">
            <h3 className="font-royal text-xl font-bold text-[#701F35]">
              Concierge Alerts &amp; Updates
            </h3>
            <div className="divide-y divide-[#C6A15B]/20">
              {notifications.map((n) => (
                <div key={n.id} className="py-4 flex items-start gap-4">
                  <div
                    className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${
                      n.unread ? 'bg-[#701F35]' : 'bg-stone-300'
                    }`}
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-[#282321]">{n.title}</h4>
                      <span className="text-[10px] text-[#574F4A]">{n.time}</span>
                    </div>
                    <p className="text-xs text-[#574F4A]">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. PROFILE */}
        {activeTab === 'profile' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#C6A15B]/30 space-y-6 shadow-sm max-w-2xl">
            <div className="flex items-center justify-between border-b border-[#C6A15B]/20 pb-4">
              <div>
                <h3 className="font-royal text-xl font-bold text-[#701F35]">Client Profile</h3>
                <p className="text-xs text-[#574F4A]">Personal and auspicious wedding preferences</p>
              </div>
              <button
                onClick={() => {
                  if (isEditingProfile) addToast('Profile details saved', 'success');
                  setIsEditingProfile(!isEditingProfile);
                }}
                className="px-4 py-1.5 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs font-semibold cursor-pointer"
              >
                {isEditingProfile ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#574F4A] mb-1">Your Full Name</label>
                  <input
                    disabled={!isEditingProfile}
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] font-semibold text-[#282321]"
                  />
                </div>
                <div>
                  <label className="block text-[#574F4A] mb-1">Fiancé / Partner Name</label>
                  <input
                    disabled={!isEditingProfile}
                    value={profile.partnerName}
                    onChange={(e) => setProfile({ ...profile, partnerName: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] font-semibold text-[#282321]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#574F4A] mb-1">Contact Phone</label>
                  <input
                    disabled={!isEditingProfile}
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] font-semibold text-[#282321]"
                  />
                </div>
                <div>
                  <label className="block text-[#574F4A] mb-1">Email</label>
                  <input
                    disabled={!isEditingProfile}
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] font-semibold text-[#282321]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#574F4A] mb-1">Selected Venues</label>
                <input
                  disabled={!isEditingProfile}
                  value={profile.weddingVenue}
                  onChange={(e) => setProfile({ ...profile, weddingVenue: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] font-semibold text-[#282321]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
