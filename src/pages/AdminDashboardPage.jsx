import React, { useState } from 'react';
import {
  CalendarCheck,
  Users,
  ShoppingBag,
  TrendingUp,
  Search,
  Plus,
  Edit,
  ArrowUpRight
} from 'lucide-react';
import {
  ADMIN_STATS,
  ADMIN_BOOKINGS,
  SERVICES_DATA,
  RENTAL_PRODUCTS,
  CATERING_PACKAGES,
  GALLERY_ITEMS
} from '../data/weddingData';
import { useWedding } from '../context/WeddingContext';

export function AdminDashboardPage() {
  const { addToast } = useWedding();
  const [adminTab, setAdminTab] = useState('bookings');
  const [searchBooking, setSearchBooking] = useState('');
  const [bookingsList, setBookingsList] = useState(ADMIN_BOOKINGS);

  // Status changer for bookings
  const handleUpdateStatus = (id, newStatus) => {
    setBookingsList((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
    addToast(`Booking ${id} status updated to "${newStatus}"`, 'info');
  };

  const filteredBookings = bookingsList.filter((b) => {
    return (
      b.customer.toLowerCase().includes(searchBooking.toLowerCase()) ||
      b.id.toLowerCase().includes(searchBooking.toLowerCase()) ||
      b.city.toLowerCase().includes(searchBooking.toLowerCase()) ||
      b.status.toLowerCase().includes(searchBooking.toLowerCase())
    );
  });

  // Mock Customers Data
  const customersList = [
    { name: "Siddharth Singhania", phone: "+91 98201 11223", city: "Mumbai", event: "Palace Wedding", spent: "₹9,75,000", date: "Dec 2026" },
    { name: "Radhika Deshmukh", phone: "+91 98202 22334", city: "Pune", event: "Peshwai Haldi", spent: "₹2,80,000", date: "Dec 2026" },
    { name: "Karan Mehra", phone: "+91 98203 33445", city: "Jaipur", event: "Sangeet Night", spent: "₹6,20,000", date: "Jan 2027" },
    { name: "Dr. Neil Chopra", phone: "+91 98204 44556", city: "Udaipur", event: "Royal Wedding", spent: "₹21,50,000", date: "Feb 2027" },
    { name: "Meera Oberoi", phone: "+91 98205 55667", city: "Delhi NCR", event: "Engagement", spent: "₹4,50,000", date: "Jan 2027" }
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B]">
              ओम बिछायत केंद्र • OM BICHAYAT KENDRA OPERATIONS
            </span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl font-bold text-[#701F35] mt-1">
            बिछायत व लग्नकार्य व्यवस्थापन (Admin Portal)
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-xl bg-white border border-[#C6A15B]/30 text-[#574F4A]">
            Current FY 2026-27
          </span>
          <button
            onClick={() => addToast('Exported CSV audit log to downloads (Simulation)', 'success')}
            className="px-4 py-1.5 rounded-xl bg-[#701F35] text-[#FAF7F2] font-semibold hover:bg-[#8C2743] transition-colors cursor-pointer"
          >
            Export Audit Report
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="luxury-card rounded-2xl p-5 bg-white space-y-2">
          <div className="flex items-center justify-between text-[#574F4A]">
            <span className="text-xs font-semibold">Total Bookings</span>
            <CalendarCheck className="w-4 h-4 text-[#C6A15B]" />
          </div>
          <div className="text-2xl font-black text-[#701F35]">{ADMIN_STATS.totalBookings}</div>
          <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+18% from last quarter</span>
          </div>
        </div>

        <div className="luxury-card rounded-2xl p-5 bg-white space-y-2">
          <div className="flex items-center justify-between text-[#574F4A]">
            <span className="text-xs font-semibold">Active Customers</span>
            <Users className="w-4 h-4 text-[#C6A15B]" />
          </div>
          <div className="text-2xl font-black text-[#701F35]">94 Families</div>
          <div className="text-[11px] text-[#574F4A]">Across 5 metropolitan studios</div>
        </div>

        <div className="luxury-card rounded-2xl p-5 bg-white space-y-2">
          <div className="flex items-center justify-between text-[#574F4A]">
            <span className="text-xs font-semibold">Rental Inventory Units</span>
            <ShoppingBag className="w-4 h-4 text-[#C6A15B]" />
          </div>
          <div className="text-2xl font-black text-[#701F35]">42,000+</div>
          <div className="text-[11px] text-emerald-700 font-semibold">
            98.5% sanitized ready stock
          </div>
        </div>

        <div className="luxury-card rounded-2xl p-5 bg-white space-y-2">
          <div className="flex items-center justify-between text-[#574F4A]">
            <span className="text-xs font-semibold">Monthly Gross Pipeline</span>
            <TrendingUp className="w-4 h-4 text-[#C6A15B]" />
          </div>
          <div className="text-2xl font-black text-[#701F35]">{ADMIN_STATS.monthlyRevenue}</div>
          <div className="text-[11px] text-emerald-700 font-semibold">
            {ADMIN_STATS.growthRate}
          </div>
        </div>
      </div>

      {/* Interactive Visual Revenue Trend Chart (SVG) */}
      <div className="bg-white p-6 rounded-3xl border border-[#C6A15B]/30 mb-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="font-royal text-lg font-bold text-[#701F35]">
              Revenue &amp; Booking Distribution (Last 6 Months)
            </h3>
            <p className="text-xs text-[#574F4A]">
              Peak season surge during Kartik &amp; Magha wedding months
            </p>
          </div>
          <span className="text-xs font-bold text-[#C6A15B] px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#C6A15B]/30">
            Average Booking Size: ₹14.5 Lakhs
          </span>
        </div>

        {/* CSS/SVG Bar Graph */}
        <div className="h-48 flex items-end justify-between gap-3 pt-6 border-b border-[#C6A15B]/20 pb-2">
          {[
            { month: "Jun", val: 32, rev: "₹38L" },
            { month: "Jul", val: 28, rev: "₹34L" },
            { month: "Aug", val: 45, rev: "₹52L" },
            { month: "Sep", val: 62, rev: "₹71L" },
            { month: "Oct", val: 88, rev: "₹96L" },
            { month: "Nov", val: 100, rev: "₹1.15Cr" }
          ].map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span className="text-[10px] text-[#701F35] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                {bar.rev}
              </span>
              <div
                style={{ height: `${bar.val}%` }}
                className="w-full max-w-[42px] rounded-t-lg bg-gradient-to-t from-[#701F35] to-[#C6A15B] group-hover:from-[#8C2743] group-hover:to-[#DFBF7E] transition-all shadow-xs"
              />
              <span className="text-[11px] font-semibold text-[#574F4A]">{bar.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Sub-Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 border-b border-[#C6A15B]/25 scrollbar-none">
        {[
          { id: 'bookings', label: 'Manage Bookings', count: bookingsList.length },
          { id: 'services', label: 'Manage Services', count: SERVICES_DATA.length },
          { id: 'utensils', label: 'Manage Utensils', count: RENTAL_PRODUCTS.length },
          { id: 'catering', label: 'Manage Catering', count: CATERING_PACKAGES.length },
          { id: 'gallery', label: 'Manage Gallery', count: GALLERY_ITEMS.length },
          { id: 'customers', label: 'Manage Customers', count: customersList.length }
        ].map((tab) => {
          const isActive = adminTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setAdminTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#701F35] text-[#FAF7F2] shadow-sm'
                  : 'bg-white text-[#282321] border border-[#C6A15B]/25 hover:border-[#701F35]'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-[#C6A15B] text-[#701F35]' : 'bg-[#701F35]/15 text-[#701F35]'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: MANAGE BOOKINGS */}
      {adminTab === 'bookings' && (
        <div className="bg-white p-6 rounded-3xl border border-[#C6A15B]/30 space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <h3 className="font-royal text-lg font-bold text-[#701F35]">
              Real-time Client Bookings ({filteredBookings.length})
            </h3>
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-[#574F4A] absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchBooking}
                onChange={(e) => setSearchBooking(e.target.value)}
                placeholder="Search booking ID, client, city..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#C6A15B]/30 bg-[#FAF7F2]">
                  <th className="py-3 px-4 font-bold text-[#701F35]">Booking ID</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Customer</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Event Type</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">City</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Event Date</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Guests</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Total</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Status</th>
                  <th className="py-3 px-4 font-bold text-[#701F35] text-right">Quick Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C6A15B]/20">
                {filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-[#FAF7F2]/50">
                    <td className="py-3 px-4 font-mono font-bold text-[#701F35]">{b.id}</td>
                    <td className="py-3 px-4">
                      <strong className="block text-[#282321]">{b.customer}</strong>
                      <span className="text-[10px] text-[#574F4A]">{b.phone}</span>
                    </td>
                    <td className="py-3 px-4 font-medium text-[#282321]">{b.eventType}</td>
                    <td className="py-3 px-4 text-[#574F4A]">{b.city}</td>
                    <td className="py-3 px-4 text-[#574F4A]">{b.eventDate}</td>
                    <td className="py-3 px-4 text-[#574F4A]">{b.guests}</td>
                    <td className="py-3 px-4 font-bold text-[#282321]">
                      ₹{b.total.toLocaleString('en-IN')}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          b.status === 'Confirmed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : b.status === 'Completed'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {b.status !== 'Confirmed' && (
                          <button
                            onClick={() => handleUpdateStatus(b.id, 'Confirmed')}
                            className="px-2 py-1 rounded bg-emerald-700 text-white text-[10px] font-semibold hover:bg-emerald-800 cursor-pointer"
                          >
                            Approve
                          </button>
                        )}
                        {b.status !== 'Completed' && (
                          <button
                            onClick={() => handleUpdateStatus(b.id, 'Completed')}
                            className="px-2 py-1 rounded bg-[#701F35] text-white text-[10px] font-semibold hover:bg-[#8C2743] cursor-pointer"
                          >
                            Complete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: MANAGE SERVICES */}
      {adminTab === 'services' && (
        <div className="bg-white p-6 rounded-3xl border border-[#C6A15B]/30 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-royal text-lg font-bold text-[#701F35]">
              Active Services Catalog ({SERVICES_DATA.length})
            </h3>
            <button
              onClick={() => addToast('Opened Add Service modal (Simulation)', 'info')}
              className="px-3 py-1.5 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add New Service</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES_DATA.map((s) => (
              <div
                key={s.id}
                className="p-4 rounded-xl border border-[#C6A15B]/25 flex items-center justify-between gap-3 bg-[#FAF7F2]"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-14 h-14 rounded-lg object-cover border border-[#C6A15B]/30"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#C6A15B]">{s.category}</span>
                    <h4 className="text-xs font-bold text-[#282321]">{s.title}</h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-800 font-bold">
                    Active
                  </span>
                  <button
                    onClick={() => addToast(`Editing "${s.title}" (Simulation)`, 'info')}
                    className="p-1.5 text-stone-500 hover:text-[#701F35] cursor-pointer"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: MANAGE UTENSILS */}
      {adminTab === 'utensils' && (
        <div className="bg-white p-6 rounded-3xl border border-[#C6A15B]/30 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-royal text-lg font-bold text-[#701F35]">
              Utensils &amp; Equipment Inventory Stock
            </h3>
            <button
              onClick={() => addToast('Add Inventory Stock modal (Simulation)', 'info')}
              className="px-3 py-1.5 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Stock Item</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#C6A15B]/30 bg-[#FAF7F2]">
                  <th className="py-3 px-4 font-bold text-[#701F35]">Item Name</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Category</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Price / Day</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Available Units</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Min Order</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C6A15B]/20">
                {RENTAL_PRODUCTS.slice(0, 10).map((r) => (
                  <tr key={r.id}>
                    <td className="py-3 px-4 font-semibold text-[#282321]">{r.name}</td>
                    <td className="py-3 px-4 text-[#574F4A]">{r.category}</td>
                    <td className="py-3 px-4 font-bold text-[#701F35]">₹{r.price}</td>
                    <td className="py-3 px-4 font-medium text-[#282321]">{r.availableQty} Units</td>
                    <td className="py-3 px-4 text-[#574F4A]">{r.minOrder}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        In Stock
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: MANAGE CATERING */}
      {adminTab === 'catering' && (
        <div className="bg-white p-6 rounded-3xl border border-[#C6A15B]/30 space-y-4 shadow-sm">
          <h3 className="font-royal text-lg font-bold text-[#701F35]">
            Wedding Catering Packages Overview ({CATERING_PACKAGES.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CATERING_PACKAGES.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-xl border border-[#C6A15B]/25 bg-[#FAF7F2] flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#C6A15B]">{c.cuisine}</span>
                  <h4 className="text-sm font-bold text-[#282321]">{c.title}</h4>
                  <span className="text-xs font-bold text-[#701F35]">₹{c.pricePerPerson} / plate</span>
                  <span className="text-[10px] text-[#574F4A] block">Min Guests: {c.minGuests}</span>
                </div>
                <button
                  onClick={() => addToast(`Editing catering package "${c.title}" (Simulation)`, 'info')}
                  className="px-3 py-1.5 rounded-lg border border-[#701F35] text-[#701F35] text-xs font-semibold hover:bg-[#701F35] hover:text-white cursor-pointer"
                >
                  Edit Menu
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: MANAGE GALLERY */}
      {adminTab === 'gallery' && (
        <div className="bg-white p-6 rounded-3xl border border-[#C6A15B]/30 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-royal text-lg font-bold text-[#701F35]">
              Theme &amp; Decor Showcase Portfolio ({GALLERY_ITEMS.length})
            </h3>
            <button
              onClick={() => addToast('Upload High-Res Decor Shoot (Simulation)', 'info')}
              className="px-3 py-1.5 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Upload New Project Shoot</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((g) => (
              <div key={g.id} className="rounded-xl overflow-hidden border border-[#C6A15B]/30 space-y-1.5 p-2 bg-[#FAF7F2]">
                <div className="h-28 rounded-lg overflow-hidden bg-stone-900">
                  <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
                </div>
                <span className="text-[9px] uppercase font-bold text-[#C6A15B] block">{g.category}</span>
                <h5 className="text-xs font-bold text-[#282321] truncate">{g.title}</h5>
                <span className="text-[10px] text-[#574F4A] block truncate">{g.location}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 6: MANAGE CUSTOMERS */}
      {adminTab === 'customers' && (
        <div className="bg-white p-6 rounded-3xl border border-[#C6A15B]/30 space-y-4 shadow-sm">
          <h3 className="font-royal text-lg font-bold text-[#701F35]">
            Registered Wedding Families &amp; Accounts
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#C6A15B]/30 bg-[#FAF7F2]">
                  <th className="py-3 px-4 font-bold text-[#701F35]">Customer Name</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Phone</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">City</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Event Type</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Wedding Date</th>
                  <th className="py-3 px-4 font-bold text-[#701F35]">Contract Value</th>
                  <th className="py-3 px-4 font-bold text-[#701F35] text-right">Concierge Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C6A15B]/20">
                {customersList.map((c, idx) => (
                  <tr key={idx}>
                    <td className="py-3 px-4 font-bold text-[#282321]">{c.name}</td>
                    <td className="py-3 px-4 text-[#574F4A]">{c.phone}</td>
                    <td className="py-3 px-4 text-[#574F4A]">{c.city}</td>
                    <td className="py-3 px-4 font-medium text-[#701F35]">{c.event}</td>
                    <td className="py-3 px-4 text-[#574F4A]">{c.date}</td>
                    <td className="py-3 px-4 font-extrabold text-[#282321]">{c.spent}</td>
                    <td className="py-3 px-4 text-right">
                      <a
                        href={`tel:${c.phone}`}
                        className="px-2.5 py-1 rounded bg-[#FAF7F2] border border-[#C6A15B]/40 text-[#701F35] font-semibold text-[11px] hover:bg-[#701F35] hover:text-white transition-colors"
                      >
                        Call Family
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
