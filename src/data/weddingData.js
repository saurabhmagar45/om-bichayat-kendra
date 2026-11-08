// Premium Indian Wedding & Event Management Mock Database

export const BRAND_INFO = {
  name: "ओम बिछायत केंद्र",
  englishName: "OM BICHAYAT KENDRA",
  shortName: "ओम बिछायत",
  tagline: "लग्नकार्य व शुभकार्यांचे भव्य नियोजन आणि बिछायत साहित्य भाड्याने मिळण्याचे विश्वसनीय केंद्र",
  phone: "+91 98813 92562",
  altPhone: "+91 98813 92562",
  email: "contact@ombichayat.com",
  inquiryEmail: "contact@ombichayat.com",
  whatsapp: "919881392562",
  address: "चिखली, जि. बुलढाणा, महाराष्ट्र (Chikhli, Dist. Buldhana, Maharashtra)",
  location: "Chikhli Dist. Buldhana",
  branches: [
    { city: "चिखली (Chikhli, Dist. Buldhana)", phone: "+91 98813 92562", area: "मुख्य कार्यालय व मध्यवर्ती कोठार, चिखली" },
    { city: "बुलढाणा (Buldhana)", phone: "+91 98813 92562", area: "जिल्हा मुख्यालय केंद्र" },
    { city: "पुणे (Pune)", phone: "+91 98813 92562", area: "शुक्रवार पेठ, बाणेर व कोथरूड" },
    { city: "छत्रपती संभाजीनगर", phone: "+91 98813 92562", area: "कॅनॉट प्लेस व सिडको" },
    { city: "नागपूर (Nagpur)", phone: "+91 98813 92562", area: "धरमपेठ व रामदासपेठ" }
  ],
  stats: [
    { value: "850+", label: "यशस्वी शाही लग्नकार्ये" },
    { value: "25+", label: "वर्षांची अखंड परंपरा" },
    { value: "50,000+", label: "बिछायत व केटरिंग भांडी साहित्य" },
    { value: "99.8%", label: "समाधानी कुटुंबे व ग्राहक" }
  ]
};

export const SERVICES_DATA = [
  {
    id: "wedding-decor",
    title: "पारंपरिक विवाह सजावट (Wedding Decoration)",
    category: "Decor",
    startingPrice: 0,
    priceLabel: "",
    image: "/images/maharashtrian-wedding-mandap.jpg",
    description: "केळीचे खांब, पिवळे-भगवे झेंडू, आंब्याची पाने, सुवासिक मोगरा, पितळी समई व तोरण सजावटीसह अस्सल मराठमोळी विवाह सजावट.",
    features: ["पारंपरिक केळीचे खांब व झेंडू तोरण", "पितळी समई, कलश व रांगोळी मांडणी", "साखरपुडा, हळद व लग्न सजावट", "भव्य स्वागत कमान व वरात मार्ग"],
    popular: true
  },
  {
    id: "mandap-decor",
    title: "मराठमोळा वैदिक संस्कार मंडप (Vedic Mandap)",
    category: "Decor",
    startingPrice: 0,
    priceLabel: "",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    description: "सप्तपदी, मंगलाष्टका व होम-हवन विधीसाठी ४-खांबी व ८-खांबी पारंपरिक वैदिक मंडप, अक्षता व्यवस्था व पाट-चौरंग बैठक.",
    features: ["४ व ८ खांबी वैदिक संस्कार मंडप", "पवित्र होम-हवन वेदी व सुरक्षित व्यवस्था", "वर-वधूसाठी लाकडी नक्षीदार पाट व चौरंग", "पितळी गंगाजळी व पूजेचे साहित्य"],
    popular: true
  },
  {
    id: "catering-services",
    title: "मराठमोळी शाही पंगत व केटरिंग (Shahi Pangat)",
    category: "Hospitality",
    startingPrice: 0,
    priceLabel: "",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80",
    description: "केळीच्या पानावर गावरान तुपातील पुरणपोळी, आळूची वडी, मसाला भात, कटाची आमटी, बटाटा भाजी व श्रीखंड-बासुंदीची अविस्मरणीय पंगत.",
    features: ["केळीच्या पानावर पारंपरिक पंगत", "चांदी व पितळी ताटांमधील भोजन सोहळा", "महाराज आचाऱ्यांद्वारे १००% शुद्ध शाकाहारी स्वयंपाक", "अमर्यादित आग्रह व शाही आदरतिथ्य"],
    popular: true
  },
  {
    id: "utensils-rental",
    title: "बिछायत केंद्र व तांब्या-पितळेची भांडी (Bichayat Rentals)",
    category: "Rentals",
    startingPrice: 0,
    priceLabel: "",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
    description: "मोठे पितळी व तांब्याचे हंडे, पातेले, कढई, परात, अन्न वाढण्याची भांडी, तसेच सतरंज्या, गाद्या, लोड, तक्के व खुर्च्या भाड्याने उपलब्ध.",
    features: ["५०,०००+ तांब्या-पितळेची भांडी व साहित्य साठा", "हलवाई भट्टी, शेगडी व गॅस सिलिंडर व्यवस्था", "स्वच्छ धुतलेल्या कॉटन सतरंज्या, गाद्या व लोड", "लग्न मंडप व कार्यक्रम स्थळी वेळेवर वाहतूक"],
    popular: true
  },
  {
    id: "stage-decor",
    title: "शाही रिसेप्शन मंच व वर-वधू सोफा (Reception Stage)",
    category: "Decor",
    startingPrice: 0,
    priceLabel: "",
    image: "/images/royal-reception-stage.jpg",
    description: "राजेशाही सुवर्ण कमान, नक्षीदार जाळी, पारंपरिक फुलांची झालर आणि वर-वधूंसाठी आरामदायक मराठमोळा सोफा मंच.",
    features: ["सुवर्ण नक्षीदार छत्रपती कालीन कमान", "झेंडू, गुलाब व मोगऱ्याची नयनरम्य आरास", "वर-वधूसाठी शाही मखमली सोफा बैठक", "फॅमिली फोटोसाठी आकर्षक प्रकाशयोजना"],
    popular: false
  },
  {
    id: "lighting-sound",
    title: "पारंपरिक तुतारी, ढोल-ताशा व रोषणाई (Tutari & Sound)",
    category: "Production",
    startingPrice: 0,
    priceLabel: "",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1200&q=80",
    description: "वरातीसाठी मानाचे तुतारी वादक, अस्सल नाशिक-पुणेरी ढोल-ताशा पथक, संबळ आणि संपूर्ण विवाह परिसराची झगमगती रोषणाई.",
    features: ["मानाचे पारंपरिक तुतारी वादक", "अस्सल ढोल-ताशा व लेझीम पथक", "मंडप व लॉन्ससाठी फोकस व सिरीयल रोषणाई", "डिजिटल साऊंड सिस्टीम"],
    popular: false
  },
  {
    id: "furniture-rental",
    title: "लग्नाची बैठक, गाद्या, लोड व खुर्च्या (Furniture & Baithak)",
    category: "Rentals",
    startingPrice: 0,
    priceLabel: "",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    description: "पारंपरिक बैठक गाद्या, मखमली लोड, तक्के, व्हीआयपी सोफा सेट्स, शाही चेअर्स आणि भोजनाच्या पंगतीसाठी मजबूत टेबल-पाट.",
    features: ["स्वच्छ पांढऱ्या चादरीसह गादी-लोड बैठक", "शाही व्हीआयपी सोफा व लाउंज", "गोल्डन चेअर्स व डायनिंग टेबल्स", "पंगतीसाठी लाकडी पाट व सतरंज्या"],
    popular: false
  },
  {
    id: "full-wedding-management",
    title: "संपूर्ण विवाह सोहळा नियोजन (Turnkey Vivah)",
    category: "Turnkey",
    startingPrice: 0,
    priceLabel: "",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    description: "मुहूर्त व साखरपुड्यापासून ते हळद, सीमांतपूजन, विवाह विधी, पंगत व सत्यनारायण पूजेपर्यंत सर्व व्यवस्था एकाच छताखाली.",
    features: ["चिखली व बुलढाणा परिसरातील अखंड व्यवस्था", "मंडप, बिछायत व केटरिंगची एकत्रित सेवा", "अनुभवी व्यवस्थापकांचे प्रत्यक्ष मार्गदर्शन", "निश्चिंत व आनंददायी विवाह सोहळा"],
    popular: true
  }
];

export const RENTAL_CATEGORIES = [
  "All Items",
  "Dinner plates",
  "Serving plates",
  "Spoons and forks",
  "Glasses and cups",
  "Water jugs",
  "Cooking vessels",
  "Serving bowls",
  "Buffet counters",
  "Tables and chairs",
  "Food serving equipment"
];

export const RENTAL_PRODUCTS = [
  {
    id: "rent-01",
    name: "पारंपरिक पितळी व चांदी-पॉलिश पंगत ताट (Royal Pangat Thali)",
    category: "Dinner plates",
    price: 35,
    originalPrice: 50,
    unitLabel: "per plate / day",
    availableQty: 1800,
    minOrder: 50,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    description: "पारंपरिक महाराष्ट्रीयन पंगतीसाठी अस्सल पितळी व चांदी-पॉलिश ताट, वाट्या व आदरतिथ्य भांडी.",
    material: "Pure Brass & Stainless Steel Food Grade",
    inStock: true
  },
  {
    id: "rent-02",
    name: "Traditional Handcrafted Brass Maharaja Thali (6 Katori)",
    category: "Dinner plates",
    price: 95,
    originalPrice: 120,
    unitLabel: "per set / day",
    availableQty: 650,
    minOrder: 25,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    description: "Solid bell-metal brass thali set including 4 curio katoris, 1 sweet bowl, and brass glass for authentic royal feasts.",
    material: "Solid Brass (Pital) Food Grade",
    inStock: true
  },
  {
    id: "rent-03",
    name: "Hammered Copper Oval Serving Platter (Large)",
    category: "Serving plates",
    price: 65,
    originalPrice: 85,
    unitLabel: "per platter / day",
    availableQty: 320,
    minOrder: 10,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
    description: "Hand-hammered pure copper exterior with tin lined interior for serving hot tandoori kebabs and appetizers.",
    material: "Hand-hammered Copper & Tin",
    inStock: true
  },
  {
    id: "rent-04",
    name: "Engraved Silver-Plated Starter Tray with Handles",
    category: "Serving plates",
    price: 85,
    originalPrice: 110,
    unitLabel: "per tray / day",
    availableQty: 180,
    minOrder: 5,
    image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
    description: "Ornate Victorian silver-plated tray with filigree border work for dry fruits, drinks, and mithai distribution.",
    material: "Silver Electroplated Brass",
    inStock: true
  },
  {
    id: "rent-05",
    name: "Luxury Rose Gold Stainless Cutlery Set (Fork & Spoon)",
    category: "Spoons and forks",
    price: 18,
    originalPrice: 25,
    unitLabel: "per pair / day",
    availableQty: 3500,
    minOrder: 100,
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80",
    description: "Heavy gauge 304 food-grade stainless steel with scratch-resistant rose gold PVD coating.",
    material: "304 Stainless Steel PVD Coated",
    inStock: true
  },
  {
    id: "rent-06",
    name: "Antique Brass Handi Serving Spoons (Set of 4)",
    category: "Spoons and forks",
    price: 45,
    originalPrice: 60,
    unitLabel: "per set / day",
    availableQty: 240,
    minOrder: 10,
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80",
    description: "Long-handle traditional ladle and rice paddle designed for buffet handis and dal makhani pots.",
    material: "Cast Brass with Wooden Grip",
    inStock: true
  },
  {
    id: "rent-07",
    name: "पारंपरिक तांब्या-पितळी पाणी ग्लास व तांब्या (Brass Water Glass)",
    category: "Glasses and cups",
    price: 22,
    originalPrice: 30,
    unitLabel: "per piece / day",
    availableQty: 2400,
    minOrder: 50,
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80",
    description: "पंगतीमध्ये पाणी वाढण्यासाठी पारंपरिक पितळी ग्लास, तांब्या व आयुर्वेदिक गुणधर्मयुक्त भांडी.",
    material: "Solid Brass & Copper (Pital)",
    inStock: true
  },
  {
    id: "rent-08",
    name: "Embossed Brass Water Goblets (Royal Lota Style)",
    category: "Glasses and cups",
    price: 28,
    originalPrice: 38,
    unitLabel: "per glass / day",
    availableQty: 900,
    minOrder: 50,
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80",
    description: "Keeps drinking water naturally cool while offering the signature vintage feel of royal Rajasthani banquets.",
    material: "Pure Brass (Pital)",
    inStock: true
  },
  {
    id: "rent-09",
    name: "Royal Copper & Brass Water Jug (2 Litre)",
    category: "Water jugs",
    price: 75,
    originalPrice: 100,
    unitLabel: "per jug / day",
    availableQty: 220,
    minOrder: 10,
    image: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?auto=format&fit=crop&w=800&q=80",
    description: "Ayurvedic copper pitcher with ornate curved brass handle, non-drip spout, and etched floral accents.",
    material: "Handcrafted Copper & Brass",
    inStock: true
  },
  {
    id: "rent-10",
    name: "Heavy Silver-Tone Banquet Pitcher with Ice Guard",
    category: "Water jugs",
    price: 55,
    originalPrice: 75,
    unitLabel: "per pitcher / day",
    availableQty: 300,
    minOrder: 15,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    description: "Commercial stainless pitcher with mirror chrome shine and built-in ice strainer for uninterrupted pouring.",
    material: "Mirror Polished Stainless Steel",
    inStock: true
  },
  {
    id: "rent-11",
    name: "Heavy Dum Biryani Copper Degchi with Lid (25 KG)",
    category: "Cooking vessels",
    price: 450,
    originalPrice: 600,
    unitLabel: "per degchi / day",
    availableQty: 45,
    minOrder: 2,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    description: "Authentic Lucknowi hand-hammered copper degchi with heavy rim designed for slow dum cooking on coal or gas.",
    material: "Heavy Gauge Copper (Kalai Coated)",
    inStock: true
  },
  {
    id: "rent-12",
    name: "Commercial Stainless Halwai Kadai (50 Litre Capacity)",
    category: "Cooking vessels",
    price: 380,
    originalPrice: 500,
    unitLabel: "per kadai / day",
    availableQty: 35,
    minOrder: 1,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    description: "Tri-ply heavy-bottom cooking kadai with sturdy riveted hoop handles for frying pooris, jalebis, and making gravies.",
    material: "Heavy-Gauge Stainless Steel 304",
    inStock: true
  },
  {
    id: "rent-13",
    name: "Royal Copper & Brass Handi Bowl with Tealight Warmer",
    category: "Serving bowls",
    price: 110,
    originalPrice: 150,
    unitLabel: "per set / day",
    availableQty: 180,
    minOrder: 10,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    description: "Double-walled food warmer handi for tableside dal, gravies, and paneer curries with brass lids.",
    material: "Dual Layer Copper-Brass",
    inStock: true
  },
  {
    id: "rent-14",
    name: "Carved Crystal Dessert Bowls (Set of 6)",
    category: "Serving bowls",
    price: 40,
    originalPrice: 60,
    unitLabel: "per set / day",
    availableQty: 600,
    minOrder: 20,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    description: "Vintage scalloped rim bowls ideal for serving hot Gulab Jamun, Moong Dal Halwa, and Kulfi Falooda.",
    material: "Crystal Glass",
    inStock: true
  },
  {
    id: "rent-15",
    name: "मराठमोळी पंगत व बुफे मांडणी काउंटर (Shahi Pangat Buffet Bar)",
    category: "Buffet counters",
    price: 3500,
    originalPrice: 4500,
    unitLabel: "per counter / day",
    availableQty: 18,
    minOrder: 1,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    description: "पारंपरिक मराठमोळी पंगत आणि शाही बुफेसाठी सुशोभित लाकडी व पितळी नक्षीकाम केलेला काउंटर.",
    material: "Solid Teak Wood & Brass Lattice",
    inStock: true
  },
  {
    id: "rent-16",
    name: "पारंपरिक तांब्याची हंडी व पंगत शेगडी (Copper Handi & Shegdi)",
    category: "Buffet counters",
    price: 4800,
    originalPrice: 6000,
    unitLabel: "per counter / day",
    availableQty: 10,
    minOrder: 1,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    description: "भोजनाच्या पंगतीमध्ये गरमागरम आमटी, वरण व भाज्या वाढण्यासाठी पारंपरिक तांब्याची हंडी व सुरक्षित बर्नर.",
    material: "Pure Copper & Brass",
    inStock: true
  },
  {
    id: "rent-17",
    name: "लग्नाची गादी-लोड बैठक, पाट व चौरंग (Baithak & Pat-Chourang)",
    category: "Tables and chairs",
    price: 180,
    originalPrice: 240,
    unitLabel: "per set / day",
    availableQty: 1200,
    minOrder: 50,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    description: "पारंपरिक विवाह विधी, अक्षता व सत्यनारायण पूजेसाठी स्वच्छ पांढऱ्या चादरीसह गाद्या, मखमली लोड व नक्षीदार पाट.",
    material: "Cotton Mattresses, Velvet Bolsters & Wood",
    inStock: true
  },
  {
    id: "rent-18",
    name: "पंगतीसाठी लाकडी डायनिंग टेबल व पाट-सतरंजी (Pangat Dining Setup)",
    category: "Tables and chairs",
    price: 450,
    originalPrice: 600,
    unitLabel: "per table / day",
    availableQty: 160,
    minOrder: 10,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    description: "केळीच्या पानावर जेवणासाठी पारंपरिक लाकडी पाट, आसन सतरंज्या व ज्येष्ठ नागरिकांसाठी मजबूत डायनिंग टेबल्स.",
    material: "Teak Wood & Heavy Cotton Carpets",
    inStock: true
  },
  {
    id: "rent-19",
    name: "Hydraulic Roll-Top Copper Chafing Dish (9 Litre)",
    category: "Food serving equipment",
    price: 320,
    originalPrice: 420,
    unitLabel: "per unit / day",
    availableQty: 95,
    minOrder: 4,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    description: "Slow-closing hydraulic roll top with dual burner gel holder and view window. Keeps gravies piping hot.",
    material: "Hammered Pure Copper Exterior",
    inStock: true
  },
  {
    id: "rent-20",
    name: "पारंपरिक पितळी समई व पूजा थाळी (Brass Samai & Serving Vessel)",
    category: "Food serving equipment",
    price: 420,
    originalPrice: 550,
    unitLabel: "per unit / day",
    availableQty: 30,
    minOrder: 1,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    description: "विवाह मंडप व पंगतीसाठी मानाची ५-वाती पितळी समई, कलश आणि अन्न वाढण्यासाठी पितळी परात.",
    material: "Solid Brass (Pital)",
    inStock: true
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-01",
    title: "मराठमोळा वैदिक विवाह मंडप (Maharashtrian Mandap)",
    category: "Mandap decoration",
    image: "/images/maharashtrian-wedding-mandap.jpg",
    location: "चिखली, जि. बुलढाणा",
    description: "केळीचे खांब, पिवळे-भगवे झेंडू, आंब्याची पाने, पितळी समई आणि कलश मांडणीसह साकारलेला अस्सल मराठमोळा वैदिक विवाह मंडप.",
    tags: ["मराठमोळा मंडप", "केळीचे खांब", "झेंडू तोरण", "चिखली"],
    guestCapacity: "५०० - १५०० पाहुणे"
  },
  {
    id: "gal-02",
    title: "पारंपरिक नऊवारी पैठणी व पेशवाई फेटा (Nauvari & Pheta)",
    category: "Royal wedding decoration",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    location: "शाही पॅलेस लॉन्स, चिखली",
    description: "अस्सल पैठणी नऊवारी साडी, मोत्यांची नथ, मुंडावळ्या, कोल्हापुरी साज आणि मानाचा पेशवाई फेटा परिधान केलेले राजेशाही मराठमोळे जोडपे.",
    tags: ["नऊवारी पैठणी", "पेशवाई फेटा", "मुंडावळ्या", "मराठमोळी नथ"],
    guestCapacity: "१०००+ पाहुणे"
  },
  {
    id: "gal-03",
    title: "पवित्र मंगलाष्टका व सप्तपदी विधी (Mangalashtaka & Saptapadi)",
    category: "Mandap decoration",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    location: "वैदिक संस्कार मंडप, बुलढाणा",
    description: "शुभमंगल सावधानच्या मंगल गजरात अक्षता, हस्तमिलाप आणि पवित्र अग्नी साक्षीने सात फेरे (सप्तपदी) पार पाडणारा संस्कार सोहळा.",
    tags: ["मंगलाष्टका", "सप्तपदी", "अक्षता विधी", "अग्नी हवन"],
    guestCapacity: "पारंपरिक कुटुंब सोहळा"
  },
  {
    id: "gal-04",
    title: "मराठमोळा हळद सोहळा व उरळी आरास (Traditional Halad)",
    category: "Haldi ceremony decoration",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
    location: "पारंपरिक अंगण, चिखली",
    description: "सुवासिनींची हळद, पितळी उरळी, पिवळाधमक झेंडूच्या फुलांची सजावट आणि ढोल-ताशाच्या गजरात सजलेला मांगलिक हळद सोहळा.",
    tags: ["हळद सोहळा", "पितळी उरळी", "झेंडू आरास", "ढोल ताशा"],
    guestCapacity: "३५० पाहुणे"
  },
  {
    id: "gal-05",
    title: "साखरपुडा व हिरवा चुडा मेहंदी (Sakharpuda & Mehendi)",
    category: "Mehendi decoration",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1200&q=80",
    location: "राजेशाही गार्डन लॉन, चिखली",
    description: "अस्सल मराठमोळा साखरपुडा सोहळा, हिरवा चुडा, नक्षीदार हात आणि सुवासिक मोगऱ्याच्या गजरयासह पारंपरिक बैठक थाट.",
    tags: ["हिरवा चुडा", "मराठमोळी मेहंदी", "साखरपुडा", "मोगरा"],
    guestCapacity: "२५० पाहुणे"
  },
  {
    id: "gal-06",
    title: "मराठमोळी वरात, तुतारी व स्वागत कमान (Grand Varat & Tutari)",
    category: "Entrance decoration",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    location: "भव्य मुख्य प्रवेशद्वार, चिखली",
    description: "तुतारीचा मंगल ललकार, मानाची बग्गी व घोडी, लेझीम-ढोल पथक आणि ताजी झेंडूची फुले-आंब्याच्या पानांचे भव्य प्रवेशद्वार.",
    tags: ["मराठमोळी वरात", "तुतारी वादक", "भव्य प्रवेशद्वार", "तोशखाना"],
    guestCapacity: "१५००+ पाहुणे"
  },
  {
    id: "gal-07",
    title: "झेंडूची तोरणे व पितळी समई आरास (Marigold Toran & Samai)",
    category: "Floral decoration",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=80",
    location: "पारंपरिक मंडप, बुलढाणा",
    description: "अस्सल पिवळे-भगवे झेंडू, आंब्याची पाने, सुवासिक मोगऱ्याचे तोरण आणि तेवत्या पितळी समईंची मांगलिक आरास.",
    tags: ["झेंडू तोरण", "पितळी समई", "फुलांची आरास", "शुभमंगल"],
    guestCapacity: "८०० पाहुणे"
  },
  {
    id: "gal-08",
    title: "शाही मराठा मंच व सोफा बैठक (Royal Maratha Stage)",
    category: "Stage decoration",
    image: "/images/royal-reception-stage.jpg",
    location: "रॉयल पॅलेस हॉल, चिखली",
    description: "राजेशाही सुवर्ण कमान, आकर्षक रोषणाई, मराठमोळा सोफा व ऐतिहासिक भव्यतेसह सजलेला रिसेप्शन मंच.",
    tags: ["राजेशाही मंच", "सोफा बैठक", "भव्य रोषणाई", "शाही थाट"],
    guestCapacity: "१२०० पाहुणे"
  }
];

export const CATERING_PACKAGES = [
  {
    id: "cat-01",
    title: "Peshwai & Puneri Shahi Pangat (मराठमोळी पंगत)",
    cuisine: "मराठमोळी पंगत",
    type: "veg",
    pricePerPerson: 950,
    minGuests: 100,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    description: "केळीच्या पानावर गावरान तुपातील गरमागरम पुरणपोळी, आळूची वडी, मसाला भात, कटाची आमटी आणि केशर श्रीखंड.",
    highlights: ["गावरान तुपातील पुरणपोळी", "इंद्रायणी मसाला भात", "केशर बासुंदी व श्रीखंड", "आळूची वडी व कोथिंबीर वडी"],
    assignedChef: {
      name: "महाराज गजाननराव जोशी",
      role: "मुख्य पंगत व पुरणपोळी महाराज",
      experience: "२८+ वर्षे अनुभव"
    },
    menuBreakdown: {
      welcomeDrinks: ["पियुष", "कैरीचे पन्हे", "कोकम सरबत"],
      appetizers: ["कोथिंबीर वडी", "अळू वडी (तीळ परतून)", "खमंग बटाटा वडा बाइट्स"],
      mainCourse: ["भरली वांगी (गावरान मसाला)", "कटाची झणझणीत आमटी", "मटकी उसळ", "बटाट्याची पिवळी भाजी"],
      breadsRice: ["गावरान तुपातील पुरणपोळी", "गरमागरम पुरी", "ज्वारीची भाकरी", "इंद्रायणी सुवासिक मसाला भात"],
      desserts: ["केशर मँगो श्रीखंड", "सीताफळ बासुंदी", "उकडीचे मोदक (लाईव्ह स्टीमर)"],
      liveCounters: ["लाईव्ह गरमागरम पुरणपोळी काउंटर", "मिसळ व फरसाण प्लॅटर"]
    }
  },
  {
    id: "cat-02",
    title: "Varhadi & Vidarbha Shahi Feast (विदर्भ वऱ्हाडी भोजन)",
    cuisine: "विदर्भ वऱ्हाडी भोजन",
    type: "veg",
    pricePerPerson: 850,
    minGuests: 100,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    description: "बुलढाणा व विदर्भाची अस्सल चव - झणझणीत पाटवडी, शेव भाजी, ज्वारीची भाकरी, वांग्याचे भरीत आणि बुंदी लाडू.",
    highlights: ["झणझणीत विदर्भ पाटवडी रस्सा", "ज्वारीची गरमागरम भाकरी", "गावरान वांग्याचे भरीत", "मोतीचूर लाडू व ताक"],
    assignedChef: {
      name: "शेफ विठ्ठलराव पाटील",
      role: "विदर्भ वऱ्हाडी पंगत तज्ज्ञ",
      experience: "२०+ वर्षे अनुभव"
    },
    menuBreakdown: {
      welcomeDrinks: ["गुळ-लिंबू सरबत", "मसाला ताक (हिंग-जिरे)", "जलजीरा"],
      appetizers: ["पाटवडी बाइट्स", "कांदा भजी", "सांडगे व कुरडया"],
      mainCourse: ["विदर्भ स्पेशल शेव भाजी", "गावरान वांग्याचे भरीत", "काळ्या मसाल्याची डाळ", "पिठलं"],
      breadsRice: ["गरमागरम ज्वारीची भाकरी", "घडीची चपाती", "वरण-भात व गावरान तूप"],
      desserts: ["शुद्ध तुपातील मोतीचूर लाडू", "रवा शिरा (बदाम-मनुका)", "गुलाब जामून"],
      liveCounters: ["चुलीवरील गरमागरम भाकरी काउंटर", "ठेचा व खमंग चटणी बार"]
    }
  },
  {
    id: "cat-03",
    title: "Traditional Maharashtrian Satvik Bhojan (वैदिक सात्विक भोजन)",
    cuisine: "वैदिक सात्विक भोजन",
    type: "veg",
    pricePerPerson: 800,
    minGuests: 100,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    description: "सत्यनारायण पूजा व संस्कार विधीसाठी १००% सात्विक शुद्ध शाकाहारी जेवण, उकडीचे मोदक, मट्ठा व पुरी भाजी.",
    highlights: ["उकडीचे मोदक (तूप-नारळ)", "पुरी, बटाटा भाजी व आमटी", "सात्विक केशर खीर", "मसाला ताक / मट्ठा"],
    assignedChef: {
      name: "महाराज गजाननराव जोशी",
      role: "वैदिक सात्विक पाककला तज्ज्ञ",
      experience: "२८+ वर्षे अनुभव"
    },
    menuBreakdown: {
      welcomeDrinks: ["पंचामृत", "तुळस-वेलची सरबत", "नारळ पाणी"],
      appetizers: ["उपवास बटाटा वडा", "साबुदाणा वडा", "केळीची भजी"],
      mainCourse: ["सात्विक बटाटा भाजी", "मुग डाळ वरण", "भोपळ्याची गोड भाजी", "सात्विक कढी"],
      breadsRice: ["फुलके", "पुरी", "जीरा भात व साधे वरण"],
      desserts: ["उकडीचे मोदक (ओले खोबरे व गूळ)", "शेवयांची खीर", "रवा लाडू"],
      liveCounters: ["लाईव्ह मोदक स्टॉल", "सात्विक सूप व कढी काउंटर"]
    }
  },
  {
    id: "cat-04",
    title: "Shahi Savji & Varhadi Non-Veg (शाही सावजी व मटण सोहळा)",
    cuisine: "शाही नॉन-व्हेज",
    type: "non-veg",
    pricePerPerson: 1450,
    minGuests: 120,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    description: "अस्सल काळ्या मसाल्याचे मटन, झणझणीत चिकन रस्सा, बाजरीची भाकरी आणि तांब्याची हंडी दम बिर्याणी.",
    highlights: ["अस्सल विदर्भ सावजी मटन", "तांब्या हंडी चिकन बिर्याणी", "गरमागरम बाजरी भाकरी", "सुक्या मटनाची प्लेट"],
    assignedChef: {
      name: "उस्ताद रहीमभाई शेख",
      role: "शाही सावजी व दम बिर्याणी उस्ताद",
      experience: "२२+ वर्षे अनुभव"
    },
    menuBreakdown: {
      welcomeDrinks: ["सोलकढी (अस्सल कोकणी नारळ दूध)", "मसाला ताक", "पुदिना लेमन क्रश"],
      appetizers: ["मटन सुक्का बाइट्स", "चिकन ६५ विदर्भ स्टाईल", "तवा फिश फ्राय"],
      mainCourse: ["अस्सल सावजी मटन रस्सा", "गावरान चिकन सुक्का", "कोल्हापुरी तांबडा-पांढरा रस्सा"],
      breadsRice: ["बाजरीची भाकरी", "तांब्याची हंडी मटन दम बिर्याणी", "जिरा राईस"],
      desserts: ["शाही तुकडा", "मटका कुल्फी", "गुलाब जामून"],
      liveCounters: ["लाईव्ह सिगडी कबाब काउंटर", "लाईव्ह तवा रोटी व भाकरी"]
    }
  },
  {
    id: "cat-05",
    title: "Shahi Rajwada Royal Buffet (शाही राजवाडा बुफे)",
    cuisine: "शाही राजवाडा बुफे",
    type: "veg",
    pricePerPerson: 1250,
    minGuests: 150,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    description: "पनीर लबाबदार, दाल बुखारी, दम पुलाव, नान, जिलबी-रबडी आणि ५ लाईव्ह चाट काउंटर्ससह राजेशाही बुफे.",
    highlights: ["शाही पनीर व दाल मखनी", "दम व्हेज बिर्याणी", "लाईव्ह गरम जिलबी-रबडी", "लाईव्ह चाट व डोसा काउंटर"],
    assignedChef: {
      name: "शेफ आनंद कुलकर्णी",
      role: "रॉयल बुफे व मल्टी-कुझिन मास्टर",
      experience: "१८+ वर्षे अनुभव"
    },
    menuBreakdown: {
      welcomeDrinks: ["बदाम ठंडाई", "मँगो लस्सी", "ब्लू कुराकाओ मॉकसेल"],
      appetizers: ["पनीर टिक्का अंगारा", "दही के कबाब", "व्हेज क्रिस्पी रोल"],
      mainCourse: ["पनीर लबाबदार", "दाल मखनी २४ तास दम", "काजू करी", "व्हेज कोल्हापुरी"],
      breadsRice: ["बटर नान", "मिसळ रोटी", "शाही व्हेज दम बिर्याणी", "जिरा राईस"],
      desserts: ["लाईव्ह केशर जिलबी व रबडी", "गाजर हलवा (प्युअर तूप)", "आइसक्रीम विथ गुलाब जामून"],
      liveCounters: ["५ फ्लेवर पाणीपुरी व चाट स्टॉल", "लाईव्ह डोसा व उत्तप्पा आयलँड"]
    }
  },
  {
    id: "cat-06",
    title: "Khandeshi Mande & Aamras Feast (खान्देशी मांडे व आमरस)",
    cuisine: "खान्देशी मांडे व आमरस",
    type: "veg",
    pricePerPerson: 900,
    minGuests: 100,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    description: "खापरवरील अस्सल मांडे, हापूस आमरस, बटाट्याची पिवळी भाजी, गुळवणी आणि कुरकुरीत पापड-लोणचे.",
    highlights: ["खापरवरील गरमागरम मांडे", "शुद्ध हापूस आमरस", "गुळवणी व शेव भाजी", "पारंपरिक पंगत आग्रह"],
    assignedChef: {
      name: "शेफ विठ्ठलराव पाटील व हलवाई रामेश्वरजी",
      role: "मांडे व आमरस-मिठाई तज्ज्ञ",
      experience: "२५+ वर्षे अनुभव"
    },
    menuBreakdown: {
      welcomeDrinks: ["कैरीचे पन्हे", "मट्ठा", "लिंबू शिकंजी"],
      appetizers: ["कुरकुरीत पापड व सांडगे", "कांदा भजी", "बटाटा वडा"],
      mainCourse: ["अस्सल खान्देशी शेव भाजी", "बटाटा भाजी", "गुळवणी रस्सा", "कढी"],
      breadsRice: ["खापरवरील मांडे (रुमाली खांडवी)", "पुरी", "सुवासिक भात व वरण"],
      desserts: ["अमर्यादित शुद्ध हापूस आमरस", "खीर", "मोतीचूर लाडू"],
      liveCounters: ["खापरवरील लाईव्ह मांडे बनवणे", "आमरस व थंडगार मट्ठा स्टॉल"]
    }
  }
];

export const CATERING_CHEFS = [
  {
    id: "chef-01",
    name: "महाराज गजाननराव जोशी",
    title: "मुख्य पंगत व पुरणपोळी महाराज (Head Traditional Maharaj)",
    cuisine: "मराठमोळी पंगत व सात्विक भोजन",
    experience: "२८+ वर्षे अखंड सेवा",
    signatureDishes: [
      "गावरान तुपातील पुरणपोळी",
      "कटाची आमटी व मसाला भात",
      "उकडीचे मोदक व केशर बासुंदी",
      "अस्सल आळू व कोथिंबीर वडी"
    ],
    teamStrength: "१५ अनुभवी आचारी व वाढपी",
    speciality: "पंगत शिस्त, शुद्ध शाकाहारी स्वयंपाक, अमर्यादित आग्रह पंगत व्यवस्था",
    eventsHandled: "६५०+ लग्नकार्ये",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    phone: "9881392562"
  },
  {
    id: "chef-02",
    name: "उस्ताद रहीमभाई शेख",
    title: "शाही सावजी व दम बिर्याणी उस्ताद (Royal Dum & Savji Chef)",
    cuisine: "शाही नॉन-व्हेज व दम बिर्याणी",
    experience: "२२+ वर्षे खानदानी अनुभव",
    signatureDishes: [
      "अस्सल विदर्भ सावजी मटन",
      "तांब्याची हंडी चिकन दम बिर्याणी",
      "कोल्हापुरी तांबडा-पांढरा रस्सा",
      "सिगडीवरील मटन सीख कबाब"
    ],
    teamStrength: "१२ भट्टी कारागीर व शेफ",
    speciality: "विदर्भातील प्रसिद्ध काळा मसाला, तांब्याच्या हंडीत मंद विस्तवावर २४ तास दम",
    eventsHandled: "४८०+ सोहळे",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    phone: "9881392562"
  },
  {
    id: "chef-03",
    name: "हलवाई रामेश्वरजी शर्मा",
    title: "शाही मिठाई व पक्वान्न हेड शेफ (Master Mithai & Halwai Chef)",
    cuisine: "मिठाई, पक्वान्न व लाईव्ह स्टॉल्स",
    experience: "२५+ वर्षे राजस्थानी व महाराष्ट्रीयन अनुभव",
    signatureDishes: [
      "लाईव्ह गरमागरम केशर जिलबी व रबडी",
      "शुद्ध देशी तुपातील मोतीचूर लाडू",
      "शाही मलाई पेढा व काजू कतली",
      "गरमागरम मावा गुलाब जामून"
    ],
    teamStrength: "१० कुशल हलवाई कारागीर",
    speciality: "१००% शुद्ध म्हशीचे व गाईचे तूप, पारंपरिक कढईमधील हलवाई कला",
    eventsHandled: "५५०+ लग्नकार्ये",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    phone: "9881392562"
  },
  {
    id: "chef-04",
    name: "शेफ विठ्ठलराव पाटील",
    title: "खान्देशी मांडे व वऱ्हाडी पंगत तज्ज्ञ (Mande & Varhadi Specialist)",
    cuisine: "खान्देशी मांडे व विदर्भ वऱ्हाडी",
    experience: "२०+ वर्षे पारंपारिक अनुभव",
    signatureDishes: [
      "खापरवरील अस्सल पातळ मांडे",
      "झणझणीत शेव भाजी व गावरान ठेचा",
      "चुलीवरील गरमागरम ज्वारीची भाकरी",
      "वांग्याचे भरित व गुळवणी"
    ],
    teamStrength: "१४ महिला व पुरुष स्वयंपाकी",
    speciality: "खापराच्या मटक्यावर हाताने फिरवून उडवलेले अस्सल खान्देशी मांडे",
    eventsHandled: "४२०+ सोहळे",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    phone: "9881392562"
  },
  {
    id: "chef-05",
    name: "शेफ आनंद कुलकर्णी",
    title: "रॉयल बुफे व मल्टी-कुझिन मास्टर (Executive Banquet Chef)",
    cuisine: "शाही राजवाडा बुफे व मॉडर्न फ्यूजन",
    experience: "१८+ वर्षे फाइव्ह स्टार अनुभव",
    signatureDishes: [
      "पनीर लबाबदार व दाल बुखारी",
      "५ फ्लेवर लाईव्ह चाट आयलँड",
      "इटालियन पास्ता व लाईव्ह डोसा स्टेशन",
      "शाही तुकडा व मटका कुल्फी"
    ],
    teamStrength: "२० प्रशिक्षित शेफ व युनिफॉर्म वाढपी",
    speciality: "भव्य राजवाडा बुफे मांडणी, हायजेनिक लाईव्ह स्टेशन्स व मॉडर्न प्रेझेंटेशन",
    eventsHandled: "३८०+ सोहळे",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    phone: "9881392562"
  }
];

export const WEDDING_PACKAGES = [
  {
    id: "pkg-basic",
    name: "शुभ विवाह संस्कार (Shubh Vivah)",
    tier: "Silver",
    tag: "Ideal for Intimate Weddings & Engagements",
    priceEst: "",
    priceNumber: 0,
    guestRange: "150 – 250 Guests",
    duration: "1 Day (8 Hours)",
    popular: false,
    description: "An elegant, tasteful foundation for beautiful sacred beginnings. Complete mandap decor, floral aisle, sound, and dining setup.",
    includedServices: [
      "Traditional 4-Pillar Floral Vedic Mandap",
      "Welcome Entrance Arch with Marigolds & Brass Urlis",
      "Couple Stage Backdrop with Velvet Draping & Lighting",
      "Seating Setup: 150 Banquet Chairs + 10 Round Tables",
      "Standard JBL Sound System for Rituals & Mantras",
      "Professional On-Site Event Coordinator on Wedding Day",
      "Full Tableware & Chafing Dish Utensils Package",
      "Basic Ambience Warm Spotlights & LED Washes"
    ],
    highlights: ["Affordable Elegance", "Zero Stress Setup", "Heritage Look"],
    customizationOptions: ["Upgrade to Chiavari Chairs", "Add Live Chaat Counter", "Custom Welcome Signboard"]
  },
  {
    id: "pkg-premium",
    name: "Mangalotsav (Premium)",
    tier: "Gold",
    tag: "Most Popular for Destination & Grand Celebrations",
    priceEst: "",
    priceNumber: 0,
    guestRange: "300 – 600 Guests",
    duration: "2 Days (Haldi, Sangeet & Wedding)",
    popular: true,
    description: "Our hallmark luxury package. Curated themes across 3 distinct functions, exotic floral installations, line-array audio, and dedicated concierge.",
    includedServices: [
      "Custom 3D-Designed 8-Pillar Dome Mandap with Fresh Exotic Florals",
      "Separate Vibrant Haldi / Mehendi Courtyard Setup with Photo Booths",
      "Grand 40-Foot Sangeet Stage with Moving Beam Lights & LED Wall",
      "Seating: 400 Gold Chiavari Chairs with Velvet Cushions + 25 Round Tables",
      "Concert-Grade Line Array Sound System + DJ Setup & Wireless Mics",
      "Cold Pyro SFX, Dry Ice Low Fog for Varmala & Grand Entry",
      "Dedicated Senior Wedding Planner + 3 Coordinator Team",
      "Premium Brass & Copper Handi Buffet Setup with Roll-Top Warmers",
      "Hospitality Desk for Hotel Check-ins & Welcome Hampers"
    ],
    highlights: ["Multi-Event Coverage", "Exotic Dutch Florals", "Special Effects Included"],
    customizationOptions: ["Drone Aerial Videography Coordination", "Celebrity Artist Booking Assistance", "Custom Monogram Dance Floor"]
  },
  {
    id: "pkg-royal",
    name: "Rajwada Splendor (Royal Elite)",
    tier: "Platinum",
    tag: "For Palace & Royal Scale Imperial Weddings",
    priceEst: "",
    priceNumber: 0,
    guestRange: "600 – 1500+ Guests",
    duration: "3 Days Complete Management",
    popular: false,
    description: "Pure aristocratic grandeur. Handcrafted palace facades, 50,000+ imported stems, celebrity management, and turnkey guest hospitality.",
    includedServices: [
      "Architectural Palace-Inspired Custom Mandap (Waterbody / Elevated)",
      "Theme Design for 4 Events: Mehendi, Sangeet, Varmala & Reception",
      "Illuminated Tunnel Walkways, Crystal Chandeliers & Heritage Jharokhas",
      "Seating: 800+ Royal Chiavari & Maharaja Throne Sofas + Carved Diwans",
      "Arena-Level Sound, Intelligent Sharpies, Laser Symphony & Pyro Displays",
      "Turnkey Hospitality: Airport Fleet Transfers & 24/7 Hotel Concierge",
      "Full Team of 8 Event Managers + Personal Shadow Planners for Family",
      "Carved Teakwood & Translucent Onyx Buffet Counters + Silver Dining",
      "Vintage Car / Royal Carriage (Baggi) Coordination for Baraat"
    ],
    highlights: ["Palace & Arena Grade", "Bespoke Royal Setups", "Dedicated Butler & Shadows"],
    customizationOptions: ["Fireworks Show Permitted Displays", "Helicopter Flower Shower Assistance", "Custom Perfume & Souvenir Bar"]
  }
];

export const TESTIMONIALS = [
  {
    id: "test-01",
    couple: "सौ. अनघा व श्री. सिद्धार्थ देशमुख",
    event: "शाही मराठमोळा विवाह, चिखली",
    quote: "ओम बिछायत केंद्राने आमचे लग्न अत्यंत राजेशाही पद्धतीने साकारले. केळीच्या खांबांचा पारंपरिक वैदिक मंडप आणि १००० लोकांची अस्सल पंगत सर्वांच्या स्मरणात राहिली.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    date: "फेब्रुवारी २०२६"
  },
  {
    id: "test-02",
    couple: "डॉ. राधिका व श्री. निलेश पाटील",
    event: "पारंपरिक विवाह सोहळा, बुलढाणा",
    quote: "अस्सल पुरणपोळी व मसाला भाताची पंगत, शुद्ध तांब्या-पितळेची भांडी आणि तेवत्या समईंची मांडणी पाहून पाहुणे थक्क झाले. वेळेवर आणि उत्कृष्ट व्यवस्था!",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    date: "जानेवारी २०२६"
  },
  {
    id: "test-03",
    couple: "सौ. पूजा व श्री. अमोल कदम",
    event: "हळद व लग्न समारंभ, चिखली",
    quote: "हळदीची पितळी उरळी, तुतारी वादक, ध्वनी यंत्रणा आणि बिछायत साहित्याची स्वच्छता अतिशय दर्जेदार होती. ओम बिछायत केंद्र चिखलीचे मनःपूर्वक आभार!",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    date: "डिसेंबर २०२५"
  }
];

export const INITIAL_USER_BOOKINGS = [
  {
    id: "BK-8921",
    eventType: "Grand Wedding & Reception",
    eventDate: "2026-12-18",
    venue: "शाही पॅलेस लॉन्स, चिखली (जि. बुलढाणा)",
    packageSelected: "शुभ विवाह संस्कार (Shubh Vivah)",
    guestCount: 450,
    status: "Confirmed",
    estimatedTotal: 975000,
    paidAmount: 250000,
    services: ["Mandap Decoration", "Catering Services", "Lighting & Sound", "Chiavari Seating"],
    createdDate: "2026-10-15"
  },
  {
    id: "BK-9034",
    eventType: "Haldi & Mehendi Celebration",
    eventDate: "2026-12-17",
    venue: "Sun-n-Sand Courtyard, Juhu",
    packageSelected: "Custom Haldi Package",
    guestCount: 200,
    status: "In Review",
    estimatedTotal: 280000,
    paidAmount: 50000,
    services: ["Sunshine Marigold Decor", "Live Chaat Station", "Dhol & Brass Urlis"],
    createdDate: "2026-11-01"
  }
];

export const INITIAL_RENTAL_CART = [
  {
    ...RENTAL_PRODUCTS[0],
    quantity: 150
  },
  {
    ...RENTAL_PRODUCTS[4],
    quantity: 150
  },
  {
    ...RENTAL_PRODUCTS[18],
    quantity: 8
  }
];

export const ADMIN_STATS = {
  totalBookings: 148,
  activeInquiries: 34,
  totalRentalProducts: 42000,
  monthlyRevenue: "₹84,50,000",
  growthRate: "+22.5% this quarter"
};

export const ADMIN_BOOKINGS = [
  {
    id: "BK-8921",
    customer: "Siddharth Singhania",
    phone: "+91 98201 11223",
    eventType: "Wedding & Reception",
    eventDate: "2026-12-18",
    city: "Mumbai",
    guests: 450,
    total: 975000,
    status: "Confirmed"
  },
  {
    id: "BK-9034",
    customer: "Radhika Deshmukh",
    phone: "+91 98202 22334",
    eventType: "Haldi & Mehendi",
    eventDate: "2026-12-17",
    city: "Pune",
    guests: 200,
    total: 280000,
    status: "In Review"
  },
  {
    id: "BK-9102",
    customer: "Karan Mehra",
    phone: "+91 98203 33445",
    eventType: "Sangeet Night",
    eventDate: "2027-01-14",
    city: "Jaipur",
    guests: 500,
    total: 620000,
    status: "Confirmed"
  },
  {
    id: "BK-9145",
    customer: "Dr. Neil Chopra",
    phone: "+91 98204 44556",
    eventType: "Royal Wedding",
    eventDate: "2027-02-05",
    city: "Udaipur",
    guests: 850,
    total: 2150000,
    status: "Pending"
  },
  {
    id: "BK-9190",
    customer: "Meera Oberoi",
    phone: "+91 98205 55667",
    eventType: "Engagement Gala",
    eventDate: "2027-01-28",
    city: "Delhi NCR",
    guests: 300,
    total: 450000,
    status: "Completed"
  }
];
