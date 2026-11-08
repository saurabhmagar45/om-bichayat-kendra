import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { Link } from 'react-router-dom';

export function AboutPage() {
  const pillars = [
    {
      title: "पवित्र वैदिक परंपरा",
      desc: "सप्तपदी, धूरविरहित होमकुंड, रांगोळी, कलश ते शुभ मुहूर्तानुसार सर्व विधींचे पावित्र्य आणि शाश्वत हिंदू परंपरांचे तंतोतंत पालन."
    },
    {
      title: "स्वतःचे भव्य भांडी व बिछायत कोठार",
      desc: "कोणत्याही मध्यस्थाशिवाय ५०,०००+ हून अधिक तांब्या-पितळेची भांडी, जर्मन शेगड्या, व्हीआयपी सोफे व गाद्या-उशांचे स्वतःचे कोठार; १००% शुद्ध स्वच्छता."
    },
    {
      title: "समर्पित सोहळा समन्वयक",
      desc: "कुटुंबातील सदस्याप्रमाणे राहून वधू-वर स्वागत, ज्येष्ठ पाहुण्यांची विशेष काळजी व संपूर्ण लग्नकार्याचे शांततेत व वेळेवर व्यवस्थापन."
    },
    {
      title: "३D मंडप व स्टेज डिझायनिंग",
      desc: "प्रत्यक्ष सजावट उभारण्यापूर्वी तुमचा विवाह मंडप आणि स्टेज कसा दिसेल याचे आधुनिक ३D संगणकीय डिझाईन पाहण्याची विशेष सुविधा."
    }
  ];

  const milestones = [
    { year: "२००१", event: "महाराष्ट्रात एका छोट्या बिछायत केंद्राने नम्र सुरुवात — पारंपारिक गाद्या व भांड्यांसह सेवा आरंभ" },
    { year: "२०१०", event: "भव्य राजेशाही मंडप सजावट व तांब्या-पितळेच्या पारंपारिक भांड्यांच्या विशाल कोठाराची उभारणी" },
    { year: "२०१८", event: "संपूर्ण महाराष्ट्रभर विस्तार — पुणे, मुंबई, नाशिक, छत्रपती संभाजीनगर व नागपूर येथे शाखा" },
    { year: "२०२६", event: "८५०+ हून अधिक यशस्वी शाही विवाह सोहळे आणि ९९.८% समाधानी कुटुंबांचा अखंड आशीर्वाद" }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      <SectionHeader
        badge="आमचा गौरवशाली वारसा"
        title="ओम बिछायत केंद्र (OM BICHAYAT KENDRA)"
        subtitle="महाराष्ट्रातील लग्नकार्ये, धार्मिक विधी व भव्य सोहळ्यांसाठी अखंड २५ वर्षांपासून दर्जेदार बिछायत साहित्य, मंडप सजावट व केटरिंग व्यवस्था देणारे अग्रगण्य नाव."
      />

      {/* Story Hero Two-Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
        <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#574F4A] leading-relaxed">
          <span className="text-xs uppercase font-bold text-[#C6A15B] tracking-widest block">
            शुभ सुरुवात व अखंड परंपरा
          </span>

          <h3 className="font-royal text-2xl sm:text-4xl font-bold text-[#701F35] leading-tight">
            "लग्न म्हणजे केवळ एक सोहळा नव्हे, तर दोन घराण्यांचा पवित्र आणि मंगल संगम."
          </h3>

          <p>
            <strong className="text-[#701F35]">ओम बिछायत केंद्र</strong> म्हणजे विश्वासाची, परंपरेची आणि आपुलकीची २५ वर्षांची अखंड सेवा. गेल्या अडीच दशकांपासून आम्ही हजारो कुटुंबांच्या लग्नाची स्वप्ने सत्यात उतरवली आहेत. मग तो पारंपारिक वैदिक विवाह मंडप असो, राजेशाही स्टेज सजावट असो, वा हजारो पाहुण्यांसाठी भव्य पंगत असो — आमचे प्रत्येक काम परिपूर्णता आणि निष्ठेने साकारले जाते.
          </p>

          <p>
            खऱ्या राजेशाही सोहळ्याचे सौंदर्य परंपरेच्या सन्मानात असते — जिथे सुवासिक फुलांची आरास, मंगल समयी तेवणारे नंदादीप, तांब्या-पितळेच्या अस्सल भांड्यांचा थाट आणि चवदार शाही पंगत यांचा मनमोहक संगम घडतो.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <Link
              to="/booking"
              className="px-6 py-3 rounded-xl bg-[#701F35] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-[#8C2743] transition-all"
            >
              नियोजन सल्लामसलत करा
            </Link>
            <Link
              to="/gallery"
              className="px-6 py-3 rounded-xl border border-[#C6A15B]/50 text-xs font-semibold text-[#701F35] hover:bg-[#C6A15B]/10"
            >
              आमची कामे पहा
            </Link>
          </div>
        </div>

        {/* Image Mosaic */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-56 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
                alt="वधू-वर शुभ सोहळा"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="h-40 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/maharashtrian-wedding-mandap.jpg"
                alt="पवित्र वैदिक मंडप व तोरण"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <div className="h-40 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
                alt="शाही मराठमोळी पंगत"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="h-56 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
                alt="भव्य पारंपारिक वैदिक मंडप"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-[#C6A15B]/30 mb-20 shadow-xs relative overflow-hidden">
        <div className="absolute inset-0 royal-jali-texture opacity-25 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C6A15B] uppercase tracking-wider block">
              आमचे मुख्य ध्येय
            </span>
            <h4 className="font-royal text-2xl sm:text-3xl font-bold text-[#701F35]">
              महाराष्ट्राची समृद्ध विवाह संस्कृती जपत प्रत्येक सोहळा परिपूर्ण बनवणे
            </h4>
            <p className="text-xs sm:text-sm text-[#574F4A] leading-relaxed">
              लग्नकार्यात वेगवेगळ्या कंत्राटदारांमागे धावण्याची चिंता आम्ही कायमची दूर करतो. मंडप, भव्य स्टेज सजावट, संपूर्ण बिछायत साहित्य, तांब्या-पितळेची भांडी, साउंड सिस्टिम आणि पारंपरिक शाही केटरिंग — सर्वकाही एकाच छताखाली परिपूर्ण जबाबदारीने उपलब्ध करून देतो.
            </p>
          </div>

          <div className="space-y-3 p-6 bg-white rounded-2xl border border-[#C6A15B]/25 shadow-xs">
            <h5 className="font-cinzel text-xs font-bold text-[#C6A15B] uppercase tracking-wider">
              ओम बिछायत केंद्राचे तीन सुवर्ण नियम
            </h5>
            <ul className="space-y-2 text-xs text-[#282321]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>पारदर्शक व्यवहार — कोणताही छुपा खर्च नाही, स्पष्ट व लिखित हमी</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>२४/७ व्यक्तिगत सेवा — सोहळ्याच्या प्रत्येक क्षणी आमचे तज्ज्ञ उपस्थित</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>वेळेची काटेकोर हमी — शुभ मुहूर्ताच्या ४ तास आधी स्टेज व मंडप सुपूर्द</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Us: 4 Heritage Pillars */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#C6A15B] uppercase tracking-wider block">
            हजारो कुटुंबे आम्हालाच का निवडतात?
          </span>
          <h3 className="font-royal text-3xl font-bold text-[#701F35] mt-1">
            ओम बिछायत केंद्राची चार प्रमुख वैशिष्ट्ये
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="luxury-card rounded-2xl p-6 space-y-3 bg-white"
            >
              <div className="w-10 h-10 rounded-xl bg-[#701F35]/10 text-[#701F35] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#C6A15B]" />
              </div>
              <h4 className="font-royal text-lg font-bold text-[#701F35]">{p.title}</h4>
              <p className="text-xs text-[#574F4A] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Heritage Journey Timeline */}
      <div className="bg-[#380E1B] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#C6A15B]/30">
        <div className="absolute inset-0 royal-jali-texture-dark opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mb-8">
          <span className="text-xs font-bold text-[#DFBF7E] uppercase tracking-wider block">
            २५ वर्षांचा अखंड विश्वास
          </span>
          <h3 className="font-royal text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
            आमचा यशस्वी परंपरा प्रवास
          </h3>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-xs">
              <span className="font-cinzel text-2xl font-bold text-[#DFBF7E] block">
                {m.year}
              </span>
              <p className="text-xs text-[#FAF7F2]/85 leading-relaxed">{m.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
