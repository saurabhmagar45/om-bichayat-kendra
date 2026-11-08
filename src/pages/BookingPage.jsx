import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Calculator
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { useWedding } from '../context/WeddingContext';

export function BookingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { submitBooking, addToast } = useWedding();

  // Pre-fill query parameters if navigated from package/service card
  const paramService = searchParams.get('service') || '';
  const paramPackage = searchParams.get('package') || '';
  const paramGuests = searchParams.get('guests') || '';
  const paramChef = searchParams.get('chef') || '';

  const initialServices = () => {
    if (paramService === 'catering_chef') {
      return ['Catering Services', 'Catering Chef & Maharaj Team (केटरिंग शेफ व आचारी पथक)'];
    }
    if (paramService) return [paramService];
    return ['Wedding Decoration', 'Mandap Decoration', 'Catering Services'];
  };

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    eventType: 'मराठमोळा पारंपरिक विवाह सोहळा',
    eventDate: '',
    eventLocation: 'चिखली (Chikhli)',
    expectedGuests: paramGuests ? Number(paramGuests) : 350,
    estimatedBudget: paramPackage ? 'भव्य राजेशाही पॅकेज' : 'प्रमाणित शुभ पॅकेज',
    packageSelected: paramPackage || 'Custom Bespoke Selection',
    requiredServices: initialServices(),
    additionalRequirements: paramChef ? `निवडलेले मुख्य आचारी / महाराज: ${paramChef}` : ''
  });

  const [submittedBooking, setSubmittedBooking] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventTypes = [
    'मराठमोळा पारंपरिक विवाह सोहळा',
    'शाही साखरपुडा समारंभ',
    'पारंपरिक हळद व संगीत सोहळा',
    'सत्यनारायण पूजा व धार्मिक विधी',
    'भव्य रिसेप्शन सोहळा',
    'गृहप्रवेश व वास्तुशांती सोहळा',
    'सार्वजनिक व कौटुंबिक स्नेहसंमेलन'
  ];

  const cityOptions = [
    'चिखली (Chikhli)',
    'बुलढाणा (Buldhana)',
    'खामगाव (Khamgaon)',
    'मलकापूर (Malkapur)',
    'मेहकर (Mehkar)',
    'जालना (Jalna)',
    'अकोला (Akola)',
    'छ. संभाजीनगर (Aurangabad)',
    'पुणे (Pune)',
    'नागपूर (Nagpur)',
    'इतर ठिकाण (Other)'
  ];

  const budgetTiers = [
    'प्रमाणित शुभ पॅकेज (Standard Auspicious)',
    'भव्य राजेशाही पॅकेज (Royal Palace Edition)',
    'शाही प्रीमियम पॅकेज (Grand Imperial Edition)',
    'आवश्यकतेनुसार सानुकूल नियोजन (Customized Plan)'
  ];

  const availableServices = [
    'Wedding Decoration',
    'Mandap Decoration',
    'Catering Services',
    'Catering Chef & Maharaj Team (केटरिंग शेफ व आचारी पथक)',
    'Utensils & Equipment Rental',
    'Stage Decoration',
    'Lighting & Sound',
    'Wedding Furniture Rental',
    'Complete Wedding Management'
  ];

  const handleServiceToggle = (srv) => {
    setFormData((prev) => {
      const exists = prev.requiredServices.includes(srv);
      return {
        ...prev,
        requiredServices: exists
          ? prev.requiredServices.filter((s) => s !== srv)
          : [...prev.requiredServices, srv]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.customerName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      addToast('Please complete all required contact fields', 'error');
      return;
    }

    if (formData.requiredServices.length === 0) {
      addToast('Please choose at least one required service', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const bookingRecord = submitBooking({
        customerName: formData.customerName,
        phone: formData.phone,
        email: formData.email,
        eventType: formData.eventType,
        eventDate: formData.eventDate || '2026-12-20',
        venue: `${formData.eventLocation} Heritage Venue`,
        guestCount: formData.expectedGuests,
        packageSelected: formData.packageSelected,
        services: formData.requiredServices,
        budget: formData.estimatedBudget,
        notes: formData.additionalRequirements,
        estimatedTotal:
          formData.expectedGuests * 1800 +
          formData.requiredServices.length * 65000
      });

      setIsSubmitting(false);
      setSubmittedBooking(bookingRecord);
    }, 700);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      <SectionHeader
        badge="Direct Concierge Booking"
        title="Plan Your Royal Wedding Celebration"
        subtitle="Submit your celebration dates, desired services, and venue specifications. Our principal wedding architect will formulate an exclusive customized proposal within 24 hours."
      />

      {/* Submission Success Dialog */}
      {submittedBooking ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl border-2 border-[#C6A15B] p-8 sm:p-12 text-center shadow-2xl space-y-6"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-[#701F35]/10 text-[#701F35] flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#C6A15B] tracking-widest uppercase">
              Booking Request Received
            </span>
            <h3 className="font-royal text-3xl font-bold text-[#701F35]">
              Congratulations, {submittedBooking.customerName}!
            </h3>
            <p className="text-sm text-[#574F4A] leading-relaxed max-w-md mx-auto">
              Your celebration request has been registered under VIP Reference Code{' '}
              <strong className="text-[#701F35] font-mono text-base px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#C6A15B]/30">
                {submittedBooking.id}
              </strong>
              .
            </p>
          </div>

          <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#C6A15B]/30 text-left text-xs space-y-2.5">
            <div className="flex justify-between border-b border-[#C6A15B]/20 pb-1.5">
              <span className="text-[#574F4A]">Event Type:</span>
              <span className="font-semibold text-[#282321]">{submittedBooking.eventType}</span>
            </div>
            <div className="flex justify-between border-b border-[#C6A15B]/20 pb-1.5">
              <span className="text-[#574F4A]">Scheduled Date:</span>
              <span className="font-semibold text-[#282321]">{submittedBooking.eventDate}</span>
            </div>
            <div className="flex justify-between border-b border-[#C6A15B]/20 pb-1.5">
              <span className="text-[#574F4A]">Venue / City:</span>
              <span className="font-semibold text-[#282321]">{submittedBooking.venue}</span>
            </div>
            <div className="flex justify-between border-b border-[#C6A15B]/20 pb-1.5">
              <span className="text-[#574F4A]">Expected Guests:</span>
              <span className="font-semibold text-[#282321]">{submittedBooking.guestCount} Guests</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-[#574F4A]">दर पत्रक स्थिती:</span>
              <span className="font-bold text-[#701F35] text-xs">
                सविस्तर कोटेशन WhatsApp वर पाठवले जाईल
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-[#8C2743] transition-all cursor-pointer shadow-md"
            >
              Track in Customer Dashboard
            </button>
            <button
              onClick={() => {
                setSubmittedBooking(null);
                setFormData({
                  customerName: '',
                  phone: '',
                  email: '',
                  eventType: 'Traditional Hindu Wedding',
                  eventDate: '',
                  eventLocation: 'Mumbai',
                  expectedGuests: 350,
                  estimatedBudget: 'भव्य राजेशाही पॅकेज',
                  packageSelected: 'Custom Bespoke Selection',
                  requiredServices: ['Wedding Decoration', 'Mandap Decoration'],
                  additionalRequirements: ''
                });
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[#C6A15B]/50 text-xs font-semibold text-[#574F4A] hover:bg-stone-50 cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        </motion.div>
      ) : (
        /* Main Booking Form Grid */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl border border-[#C6A15B]/30 p-4 sm:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Section 1: Contact Details */}
              <div>
                <h4 className="font-cinzel text-sm font-bold text-[#701F35] uppercase tracking-wider mb-4 pb-2 border-b border-[#C6A15B]/20 flex items-center gap-2">
                  <span>1. Contact Details</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#282321] mb-1.5">
                      Customer Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.customerName}
                      onChange={(e) =>
                        setFormData({ ...formData, customerName: e.target.value })
                      }
                      placeholder="e.g. Siddharth Singhania"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#282321] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. +91 98200 12345"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#282321] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. sid@singhania.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Event Details */}
              <div>
                <h4 className="font-cinzel text-sm font-bold text-[#701F35] uppercase tracking-wider mb-4 pb-2 border-b border-[#C6A15B]/20 flex items-center gap-2">
                  <span>2. Event Specifications</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#282321] mb-1.5">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({ ...formData, eventType: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                    >
                      {eventTypes.map((et) => (
                        <option key={et} value={et}>
                          {et}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#282321] mb-1.5">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) =>
                        setFormData({ ...formData, eventDate: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#282321] mb-1.5">
                      Event Location / City
                    </label>
                    <select
                      value={formData.eventLocation}
                      onChange={(e) =>
                        setFormData({ ...formData, eventLocation: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                    >
                      {cityOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guest Count Slider & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#C6A15B]/25">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-[#282321]">Expected Guest Count:</span>
                      <strong className="text-[#701F35]">{formData.expectedGuests} Guests</strong>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="1500"
                      step="25"
                      value={formData.expectedGuests}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          expectedGuests: Number(e.target.value)
                        })
                      }
                      className="w-full accent-[#701F35] cursor-pointer"
                    />
                  </div>

                  <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#C6A15B]/25">
                    <label className="block text-xs font-semibold text-[#282321] mb-1">
                      Estimated Event Budget
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) =>
                        setFormData({ ...formData, estimatedBudget: e.target.value })
                      }
                      className="w-full px-2 py-1 rounded-lg border border-[#C6A15B]/30 bg-white text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                    >
                      {budgetTiers.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Required Services Multi-Select */}
              <div>
                <h4 className="font-cinzel text-sm font-bold text-[#701F35] uppercase tracking-wider mb-3 pb-2 border-b border-[#C6A15B]/20">
                  <span>3. Required Services &amp; Inclusions *</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {availableServices.map((srv) => {
                    const isSelected = formData.requiredServices.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => handleServiceToggle(srv)}
                        className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex flex-col justify-between min-h-[70px] ${
                          isSelected
                            ? 'bg-[#701F35] text-[#FAF7F2] border-[#701F35] shadow-xs'
                            : 'bg-[#FAF7F2] text-[#282321] border-[#C6A15B]/30 hover:border-[#701F35]'
                        }`}
                      >
                        <span className="leading-tight">{srv}</span>
                        <span className={`text-[10px] self-end mt-1 ${isSelected ? 'text-[#DFBF7E]' : 'text-stone-400'}`}>
                          {isSelected ? '✓ Included' : '+ Select'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Section 4: Additional Requirements */}
              <div>
                <label className="block text-xs font-semibold text-[#282321] mb-1.5">
                  Additional Notes / Specific Traditions (Optional)
                </label>
                <textarea
                  rows="3"
                  value={formData.additionalRequirements}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalRequirements: e.target.value })
                  }
                  placeholder="Share details about your preferred mandap aesthetics, dietary preferences (Jain, Halal, Pure Veg), artist entries, or specific auspicious Muhurat timings..."
                  className="w-full p-3 rounded-xl border border-[#C6A15B]/30 bg-[#FAF7F2] text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#701F35] via-[#5C1D2E] to-[#4A1222] text-[#FAF7F2] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:shadow-[#701F35]/30 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                  <span>
                    {isSubmitting ? 'Registering Booking Request...' : 'Submit Booking Request'}
                  </span>
                </button>
                <p className="text-[10px] text-center text-[#574F4A] mt-2">
                  🔒 Frontend Demonstration — simulated instant confirmation. No payment processed at this stage.
                </p>
              </div>
            </form>
          </div>

          {/* Right Summary Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#FFFDF9] rounded-3xl border border-[#C6A15B]/35 shadow-sm space-y-5">
              <span className="text-[10px] font-bold text-[#C6A15B] uppercase tracking-wider block">
                Preliminary Summary
              </span>

              <h4 className="font-royal text-xl font-bold text-[#701F35]">
                {formData.packageSelected || 'Custom Selection'}
              </h4>

              <div className="space-y-2 text-xs text-[#574F4A] border-t border-[#C6A15B]/20 pt-3">
                <div className="flex justify-between">
                  <span>Guest Estimate:</span>
                  <strong className="text-[#282321]">{formData.expectedGuests} Guests</strong>
                </div>
                <div className="flex justify-between">
                  <span>City:</span>
                  <strong className="text-[#282321]">{formData.eventLocation}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Services Selected:</span>
                  <strong className="text-[#701F35]">
                    {formData.requiredServices.length} Services
                  </strong>
                </div>
              </div>

              {/* Approximate Estimate Calculation */}
              <div className="p-4 bg-white rounded-2xl border border-[#C6A15B]/20 space-y-2 text-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#574F4A] flex items-center gap-1">
                  <Calculator className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Estimated Total Range:</span>
                </span>
                <p className="text-xl font-black text-[#701F35]">
                  {formData.estimatedBudget}
                </p>
                <p className="text-[10px] text-[#574F4A]">
                  Final quotation prepared post-site inspection and theme mockups.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#C6A15B]/20 text-xs text-[#574F4A]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>Dedicated Senior Wedding Director Assigned</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>Complimentary 3D Theme Visualizer Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
