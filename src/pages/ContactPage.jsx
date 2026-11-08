import React, { useState } from 'react';
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { BRAND_INFO } from '../data/weddingData';
import { useWedding } from '../context/WeddingContext';

export function ContactPage() {
  const { addToast } = useWedding();

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'चिखली (Chikhli)',
    eventType: 'पारंपरिक विवाह व रिसेप्शन',
    message: ''
  });

  const [formSent, setFormSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: "लग्नकार्यासाठी ओम बिछायत केंद्राचे बुकिंग किती दिवस आधी करावे?",
      a: "शुभ मुहूर्ताच्या तारखांसाठी (विशेषतः नोव्हेंबर ते मे महिना) आपण किमान १ ते ३ महिने आधी तारीख निश्चित करणे सोयीचे ठरते. केवळ भांडी व बिछायत साहित्यासाठी १५ दिवस आधी संपर्क केला तरी नियोजन करता येते."
    },
    {
      q: "चिखली व बुलढाणा जिल्ह्याबाहेर देखील आपली सेवा उपलब्ध आहे का?",
      a: "होय, बुलढाणा जिल्ह्यासह अकोला, जालना, वाशीम, छ. संभाजीनगर व लगतच्या सर्व विदर्भ-मराठवाडा भागात आमची मंडप, केटरिंग व बिछायत साहित्य वाहतूक व्यवस्था उपलब्ध आहे."
    },
    {
      q: "भांडी आणि केटरिंगचे साहित्य स्वच्छ व निर्जंतुक असते का?",
      a: "नक्कीच! तांब्या-पितळेची भांडी, डेग, कढई, ताटे व वाट्या प्रत्येक कार्यक्रमानंतर उच्च दर्जाच्या गरम पाण्याने आणि वाफेने स्वच्छ करून व्यवस्थित पॅक करूनच दिल्या जातात."
    },
    {
      q: "Can we request a menu tasting before confirming catering?",
      a: "Yes. Once an initial event scope is agreed, we arrange an exclusive private Maharaj tasting session at our studio kitchen for up to 6 family members."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.email) {
      addToast('Please fill out all required contact fields', 'error');
      return;
    }

    setFormSent(true);
    addToast('Your inquiry has been submitted! Our concierge will call you shortly.', 'success');
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      <SectionHeader
        badge="संपर्क व मार्गदर्शन"
        title="ओम बिछायत केंद्र (OM BICHAYAT KENDRA)"
        subtitle="चिखली, जि. बुलढाणा येथील मध्यवर्ती कार्यालय किंवा थेट ९८८१३९२५६२ क्रमांकावर लग्नकार्यांच्या आयोजनासाठी संपर्क साधा."
      />

      {/* Contact Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
        {/* Phone */}
        <div className="luxury-card rounded-2xl p-6 space-y-3 bg-white flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#701F35]/10 text-[#701F35] flex items-center justify-center">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h4 className="font-royal text-lg font-bold text-[#701F35]">Telephonic Concierge</h4>
            <p className="text-xs text-[#574F4A]">
              Direct assistance with date availability, rental inventory, and wedding consultations.
            </p>
          </div>
          <div className="pt-3 border-t border-[#C6A15B]/20">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="font-bold text-sm text-[#701F35] hover:text-[#C6A15B] transition-colors block"
            >
              {BRAND_INFO.phone}
            </a>
            <span className="text-[10px] text-[#574F4A]">Mon – Sun, 9:00 AM – 10:00 PM IST</span>
          </div>
        </div>

        {/* WhatsApp VIP */}
        <div className="luxury-card rounded-2xl p-6 space-y-3 bg-[#FFFDF9] border border-[#25D366]/40 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#0B2E13] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[#25D366] fill-current" />
            </div>
            <h4 className="font-royal text-lg font-bold text-[#701F35]">Instant WhatsApp Desk</h4>
            <p className="text-xs text-[#574F4A]">
              Receive quick PDF brochures, rental catalog price sheets, and venue video tours.
            </p>
          </div>
          <div className="pt-3 border-t border-[#C6A15B]/20">
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp}?text=नमस्कार%20ओम%20बिछायत%20केंद्र,%20मला%20लग्नकार्य%20व%20साहित्य%20चौकशी%20करायची%20आहे.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-[#0B2E13] text-xs font-bold hover:bg-[#20bd5a] transition-all"
            >
              <span>Chat on WhatsApp</span>
              <Sparkles className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="luxury-card rounded-2xl p-6 space-y-3 bg-white flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#701F35]/10 text-[#701F35] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-royal text-lg font-bold text-[#701F35]">Written Proposals</h4>
            <p className="text-xs text-[#574F4A]">
              Send detailed RFPs, floor plans, and customized event briefs directly to our directors.
            </p>
          </div>
          <div className="pt-3 border-t border-[#C6A15B]/20">
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="font-bold text-xs text-[#701F35] hover:text-[#C6A15B] transition-colors block truncate"
            >
              {BRAND_INFO.email}
            </a>
            <span className="text-[10px] text-[#574F4A]">Response within 4 business hours</span>
          </div>
        </div>
      </div>

      {/* Main Form & Map/Branches Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Form (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#C6A15B]/30 shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-bold text-[#C6A15B] uppercase tracking-wider block">
              Inquiry Form
            </span>
            <h3 className="font-royal text-2xl font-bold text-[#701F35]">
              Send an Official Event Inquiry
            </h3>
          </div>

          {formSent ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-royal text-2xl font-bold text-[#701F35]">
                Inquiry Successfully Delivered!
              </h4>
              <p className="text-xs text-[#574F4A] max-w-md mx-auto">
                Thank you, {contactForm.name}. A senior coordinator from our {contactForm.city} office will reach out to you at {contactForm.phone} shortly.
              </p>
              <button
                onClick={() => {
                  setFormSent(false);
                  setContactForm({
                    name: '',
                    phone: '',
                    email: '',
                    city: 'Mumbai',
                    eventType: 'Wedding & Reception',
                    message: ''
                  });
                }}
                className="px-5 py-2 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs font-semibold cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#282321] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="e.g. Radhika Deshmukh"
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#C6A15B]/30 text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#282321] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="e.g. +91 98200 12345"
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#C6A15B]/30 text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#282321] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="e.g. radhika@gmail.com"
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#C6A15B]/30 text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#282321] mb-1">
                    Preferred Studio City
                  </label>
                  <select
                    value={contactForm.city}
                    onChange={(e) => setContactForm({ ...contactForm, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#C6A15B]/30 text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                  >
                    <option>Mumbai</option>
                    <option>Pune</option>
                    <option>Jaipur</option>
                    <option>Udaipur</option>
                    <option>Delhi NCR</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#282321] mb-1">
                  Nature of Event
                </label>
                <input
                  type="text"
                  value={contactForm.eventType}
                  onChange={(e) => setContactForm({ ...contactForm, eventType: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#C6A15B]/30 text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#282321] mb-1">
                  Your Message &amp; Vision
                </label>
                <textarea
                  rows="4"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Tell us about your wedding vision, venue choice, dates, or rental requirements..."
                  className="w-full p-3 rounded-xl bg-[#FAF7F2] border border-[#C6A15B]/30 text-xs text-[#282321] focus:outline-none focus:border-[#701F35]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#701F35] to-[#4A1222] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Submit Inquiry to Concierge</span>
              </button>
            </form>
          )}
        </div>

        {/* Studios & Map Placeholder (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Headquarters Address */}
          <div className="p-6 bg-[#FFFDF9] rounded-3xl border border-[#C6A15B]/30 space-y-3">
            <span className="text-[10px] font-bold text-[#C6A15B] uppercase tracking-wider block">
              Flagship Design Studio
            </span>
            <h4 className="font-royal text-xl font-bold text-[#701F35]">
              Mumbai Headquarters
            </h4>
            <div className="flex items-start gap-2 text-xs text-[#574F4A] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
              <span>{BRAND_INFO.address}</span>
            </div>
            <div className="pt-2 text-xs text-[#574F4A]">
              <strong>Valet Parking:</strong> Available for client appointments.
            </div>
          </div>

          {/* Regional Branches */}
          <div className="p-6 bg-white rounded-3xl border border-[#C6A15B]/25 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#701F35] uppercase tracking-wider">
              Regional Experience Studios
            </h4>
            <div className="divide-y divide-[#C6A15B]/20 text-xs">
              {BRAND_INFO.branches.map((b, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between">
                  <div>
                    <strong className="text-[#282321] block">{b.city}</strong>
                    <span className="text-[10px] text-[#574F4A]">{b.area}</span>
                  </div>
                  <span className="font-mono text-[#701F35] text-[11px] font-semibold">
                    {b.phone}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder Graphic */}
          <div className="h-48 rounded-3xl overflow-hidden border border-[#C6A15B]/30 bg-[#280A12] relative flex items-center justify-center text-center p-6 text-[#FAF7F2]">
            <div className="space-y-2">
              <MapPin className="w-8 h-8 text-[#C6A15B] mx-auto animate-bounce" />
              <span className="font-cinzel text-sm font-bold text-[#DFBF7E] block">
                Interactive Map &amp; Studio Directions
              </span>
              <p className="text-[10px] text-[#FAF7F2]/70 max-w-xs mx-auto">
                Senapati Bapat Marg, Lower Parel, Mumbai. Landmark: Opposite Palladium World Crest.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto pt-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-[#C6A15B] uppercase tracking-wider block">
            Common Inquiries
          </span>
          <h3 className="font-royal text-2xl sm:text-3xl font-bold text-[#701F35] mt-1">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#C6A15B]/30 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#701F35] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-[#574F4A] leading-relaxed border-t border-[#C6A15B]/20 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
