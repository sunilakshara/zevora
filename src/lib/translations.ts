export type Locale = "en" | "ar" | "fr";

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    markets: string;
    quality: string;
    contact: string;
    requestQuote: string;
    tasteBeyondBorders: string;
  };
  hero: {
    tagline: string;
    title1: string;
    title2: string;
    description: string;
    exploreProducts: string;
    ourStory: string;
  };
  stats: {
    stat1Value: string;
    stat1Label: string;
    stat1Sublabel: string;
    stat2Value: string;
    stat2Label: string;
    stat2Sublabel: string;
    stat3Value: string;
    stat3Label: string;
    stat3Sublabel: string;
    stat4Value: string;
    stat4Label: string;
    stat4Sublabel: string;
    stat5Value: string;
    stat5Label: string;
    stat5Sublabel: string;
  };
  aboutPreview: {
    tagline: string;
    title: string;
    description: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    exploreHeritage: string;
  };
  products: {
    tagline: string;
    title: string;
    subtitle: string;
    viewAll: string;
    inquireNow: string;
    origin: string;
    grade: string;
    cardamom: string;
    cardamomDesc: string;
    blackPepper: string;
    blackPepperDesc: string;
    turmeric: string;
    turmericDesc: string;
    cloves: string;
    clovesDesc: string;
    marine: string;
    marineDesc: string;
    beverages: string;
    beveragesDesc: string;
  };
  logistics: {
    tagline: string;
    title1: string;
    title2: string;
    description: string;
    seaCargoTitle: string;
    seaCargoDesc: string;
    surfaceTitle: string;
    surfaceDesc: string;
    docTitle: string;
    docDesc: string;
    onTimeRate: string;
    verified: string;
  };
  servicesPage: {
    tagline: string;
    title1: string;
    title2: string;
    description: string;
    learnMore: string;
    service1Title: string;
    service1Desc: string;
    service2Title: string;
    service2Desc: string;
    service3Title: string;
    service3Desc: string;
    service4Title: string;
    service4Desc: string;
    service5Title: string;
    service5Desc: string;
    service6Title: string;
    service6Desc: string;
    customTitle: string;
    customSubtitle: string;
    customButton: string;
  };
  aboutPage: {
    heritageTag: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    yearsExcellence: string;
    countriesReached: string;
    valuesTitle: string;
    valuesSubtitle: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    val3Title: string;
    val3Desc: string;
    val4Title: string;
    val4Desc: string;
  };
  contactPage: {
    tagline: string;
    title1: string;
    title2: string;
    description: string;
    hqTitle: string;
    hqAddress: string;
    emailTitle: string;
    phoneTitle: string;
    formTitle: string;
    fullName: string;
    emailAddress: string;
    phone: string;
    company: string;
    productInterest: string;
    selectProduct: string;
    message: string;
    sendInquiry: string;
    submitting: string;
    successMessage: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    globalPresence: string;
    contactUs: string;
    rights: string;
    privacy: string;
    terms: string;
    compliance: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      markets: "Markets",
      quality: "Quality",
      contact: "Contact",
      requestQuote: "Request Quote",
      tasteBeyondBorders: "Taste Beyond Borders",
    },
    hero: {
      tagline: "PREMIUM INDIAN PRODUCTS",
      title1: "Taste Beyond",
      title2: "Borders",
      description:
        "Zevora Groupe connects the authentic flavors of India—particularly the rich heritage of Kerala—with global markets through premium quality, ethical sourcing, and trusted international trade.",
      exploreProducts: "Explore Products",
      ourStory: "Our Story",
    },
    stats: {
      stat1Value: "35+",
      stat1Label: "Countries",
      stat1Sublabel: "Served",
      stat2Value: "150+",
      stat2Label: "Premium",
      stat2Sublabel: "Products",
      stat3Value: "100+",
      stat3Label: "Global",
      stat3Sublabel: "Partners",
      stat4Value: "5000+",
      stat4Label: "Containers",
      stat4Sublabel: "Delivered",
      stat5Value: "100%",
      stat5Label: "Ethical & Sustainable",
      stat5Sublabel: "Sourcing",
    },
    aboutPreview: {
      tagline: "ABOUT ZEVORA GROUPE",
      title: "Bridging India to the World",
      description:
        "Rooted in three decades of trade mastery, Zevora Groupe orchestrates seamless international supply chains for premium Indian spices, seafood, agricultural treasures, and specialized food commodities.",
      pillar1Title: "Authentic Farm Sourcing",
      pillar1Desc:
        "Direct origin partnerships with certified heritage farms across Kerala and India, ensuring pure botanical purity.",
      pillar2Title: "Global Cold-Chain Logistics",
      pillar2Desc:
        "Precision climate-controlled sea and air shipping preserving aroma, volatile oils, and peak freshness worldwide.",
      pillar3Title: "Certified Export Purity",
      pillar3Desc:
        "Rigorous multi-stage laboratory compliance with US-FDA, EU, HACCP, ISO, and GCC food safety benchmarks.",
      exploreHeritage: "Explore Our Heritage",
    },
    products: {
      tagline: "PREMIUM EXPORT PORTFOLIO",
      title: "The Epicurean Collection",
      subtitle:
        "Hand-selected, ethically harvested commodities meeting the highest international standards of purity and flavor.",
      viewAll: "View Complete Catalog",
      inquireNow: "Inquire Now",
      origin: "Origin",
      grade: "Grade",
      cardamom: "Alleppey Green Cardamom",
      cardamomDesc: "Bold 8mm+ emerald pods with unmatched volatile essential oil content and sweet floral aroma.",
      blackPepper: "Malabar Tellicherry Garbled Extra Bold",
      blackPepperDesc: "Large mature peppercorns with intense pungency, citrus undertones, and high piperine density.",
      turmeric: "Salem Golden Turmeric Fingers",
      turmericDesc: "High curcumin content (5.5%+), deep golden color, and rich earthy aroma for culinary and nutraceuticals.",
      cloves: "Zanzibar & Kerala Handpicked Cloves",
      clovesDesc: "High eugenol oil content, intact crown heads, aromatic warmth and rich crimson-brown hue.",
      marine: "Pristine Indian Ocean Black Tiger Prawns",
      marineDesc: "Individually quick frozen (IQF) jumbo grade seafood sustainably caught from pure coastal waters.",
      beverages: "Highland Single-Estate Black Tea & Coffee",
      beveragesDesc: "Munnar orthodox whole-leaf tea and shade-grown Coorg Arabica coffee beans.",
    },
    logistics: {
      tagline: "GLOBAL LOGISTICS MASTERY",
      title1: "Unrivaled Reach.",
      title2: "Seamless Execution.",
      description:
        "From precision temperature-controlled air freight to large-scale maritime operations, our logistics network is built for the demands of modern trade.",
      seaCargoTitle: "Strategic Sea Cargo",
      seaCargoDesc: "Optimized bulk container transport with real-time IoT tracking and climate control.",
      surfaceTitle: "Priority Surface Logistics",
      surfaceDesc: "Reliable inland multimodal transportation connecting farm-gates directly to export terminals.",
      docTitle: "Secure Documentation",
      docDesc: "Full transparency in phytosanitary certificates, bill of lading, and automated customs clearance.",
      onTimeRate: "ON-TIME DELIVERY RATE",
      verified: "VERIFIED",
    },
    servicesPage: {
      tagline: "CORE COMPETENCIES",
      title1: "End-to-End",
      title2: "Logistical Excellence",
      description:
        "We provide a comprehensive suite of services designed to bridge the gap between Indian agricultural excellence and global market demands. Our integrated approach ensures quality at every touchpoint.",
      learnMore: "Learn More",
      service1Title: "Ocean Freight Solutions",
      service1Desc:
        "Full Container Load (FCL) and Less than Container Load (LCL) shipping with strategic port partnerships for competitive transit times.",
      service2Title: "Air Freight Logistics",
      service2Desc:
        "Urgent delivery solutions for high-value premium harvests with active cold-chain monitoring for temperature-sensitive products.",
      service3Title: "Quality Assurance",
      service3Desc:
        "Rigorous testing protocols in our in-house laboratories to ensure compliance with ASTA, ESA, US-FDA, and GCC food safety standards.",
      service4Title: "Bespoke Packaging",
      service4Desc:
        "Customized export packaging solutions including vacuum sealing, nitrogen flushing, and private labeling for retail-ready distribution.",
      service5Title: "Documentation & Compliance",
      service5Desc:
        "Expert handling of all export documentation, phytosanitary certifications, and customs clearance protocols for a friction-less experience.",
      service6Title: "Inland Distribution",
      service6Desc:
        "Secure and efficient surface transportation from farm-gate to our processing units and onward to major international ports.",
      customTitle: "Need a Custom Logistics Solution?",
      customSubtitle:
        "Our specialists can design a bespoke supply chain strategy for your specific volume and destination requirements.",
      customButton: "Speak to a Logistics Specialist",
    },
    aboutPage: {
      heritageTag: "OUR HERITAGE",
      title1: "A Legacy of Quality,",
      title2: "Rooted in Tradition",
      p1: "Founded in 1994 in the heart of Kerala's spice belt, Zevora Groupe began with a simple vision: to bring the authentic flavors of India to the world without compromise.",
      p2: "Over three decades, we have evolved from a local trading house into a global logistics powerhouse, while maintaining our core values of integrity, transparency, and deep respect for the farmers who are the backbone of our industry.",
      yearsExcellence: "Years of Excellence",
      countriesReached: "Countries Reached",
      valuesTitle: "Driven by Excellence",
      valuesSubtitle: "Our operations are guided by four pillars that ensure consistency and trust across borders.",
      val1Title: "Uncompromising Quality",
      val1Desc: "Multi-stage lab testing and certified purity for every batch exported.",
      val2Title: "Farmer Empowerment",
      val2Desc: "Direct partnerships ensuring fair trade and long-term sustainable agriculture.",
      val3Title: "Global Traceability",
      val3Desc: "Complete batch transparency from the harvest farm-gate to final buyer delivery.",
      val4Title: "Trusted Reliability",
      val4Desc: "Decades of flawless contract execution with leading global food enterprises.",
    },
    contactPage: {
      tagline: "GLOBAL COMMUNICATIONS",
      title1: "Connect with our",
      title2: "Global Network",
      description:
        "Tailoring excellence in international trade from the heart of our global hubs. Whether you're seeking strategic commodity sourcing or complex container logistics, our specialist teams are ready to facilitate your vision.",
      hqTitle: "Global Headquarters",
      hqAddress: "Level 5, Trade Tower, MG Road\nCochin, Kerala 682011, India",
      emailTitle: "Direct Inquiries",
      phoneTitle: "Commercial Desk",
      formTitle: "Submit Export Inquiry",
      fullName: "Full Name",
      emailAddress: "Business Email",
      phone: "Phone Number",
      company: "Company Name",
      productInterest: "Product of Interest",
      selectProduct: "Select Commodity / Product",
      message: "Specification / Volume Requirements",
      sendInquiry: "Send Inquiry",
      submitting: "Submitting...",
      successMessage: "Your export inquiry has been received. Our commercial desk will reach out within 24 hours.",
    },
    footer: {
      description:
        "Mastering the art of global trade through heritage, innovation, and logistical excellence. Connecting elite harvests and agricultural commodities to global destinations.",
      quickLinks: "Quick Links",
      globalPresence: "Global Presence",
      contactUs: "Contact Us",
      rights: "© 2025 ZEVORA GROUPE. ALL RIGHTS RESERVED.",
      privacy: "Privacy Policy",
      terms: "Terms of Export",
      compliance: "Compliance",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      products: "المنتجات",
      markets: "الأسواق والخدمات",
      quality: "الجودة",
      contact: "اتصل بنا",
      requestQuote: "طلب عرض سعر",
      tasteBeyondBorders: "نكهات تتخطى الحدود",
    },
    hero: {
      tagline: "منتجات هندية فاخرة",
      title1: "نكهات تتخطى",
      title2: "الحدود",
      description:
        "تربط مجموعة زيفورا النكهات الأصيلة للهند - وخاصة التراث العريق لولاية كيرلا - بالأسواق العالمية من خلال الجودة الفائقة والتوريد الأخلاقي والتجارة الدولية الموثوقة.",
      exploreProducts: "استكشف المنتجات",
      ourStory: "قصتنا",
    },
    stats: {
      stat1Value: "+٣٥",
      stat1Label: "دولة",
      stat1Sublabel: "نخدمها",
      stat2Value: "+١٥٠",
      stat2Label: "منتج",
      stat2Sublabel: "فاخر",
      stat3Value: "+١٠٠",
      stat3Label: "شريك",
      stat3Sublabel: "عالمي",
      stat4Value: "+٥٠٠٠",
      stat4Label: "حاوية",
      stat4Sublabel: "تم تسليمها",
      stat5Value: "١٠٠٪",
      stat5Label: "توريد أخلاقي",
      stat5Sublabel: "ومستدام",
    },
    aboutPreview: {
      tagline: "عن مجموعة زيفورا",
      title: "جسر يربط الهند بالعالم",
      description:
        "انطلاقاً من ثلاثة عقود من الريادة التجارية، تدير مجموعة زيفورا سلاسل إمداد دولية سلسة لأفخر التوابل الهندية والمأكولات البحرية والمنتجات الزراعية والسلع الغذائية المتخصصة.",
      pillar1Title: "توريد مباشر من المزارع",
      pillar1Desc:
        "شراكات أصيلة مع مزارع تراثية معتمدة في كيرلا والهند، تضمن نقاءً طبيعياً لا مثيل له.",
      pillar2Title: "لوجستيات التبريد العالمية",
      pillar2Desc:
        "شحن بحري وجوي دقيق ومتحكم بدرجة الحرارة يحافظ على النكهة والزيوت العطرية ونضارة المنتج.",
      pillar3Title: "نقاء معتمد للتصدير",
      pillar3Desc:
        "امتثال مخبري صارم لمعايير هيئة الغذاء والدواء الأمريكية والاتحاد الأوروبي ومجلس التعاون الخليجي وHACCP وISO.",
      exploreHeritage: "استكشف تراثنا",
    },
    products: {
      tagline: "محفظة التصدير الفاخرة",
      title: "مجموعة التذوق الرفيعة",
      subtitle:
        "سلع منتقاة يدوياً ومحصودة بأعلى معايير النقاء والنكهة العالمية.",
      viewAll: "عرض الكتالوج الكامل",
      inquireNow: "استفسر الآن",
      origin: "المنشأ",
      grade: "الدرجة",
      cardamom: "هيل أليبي الأخضر الفاخر",
      cardamomDesc: "حبوب خضراء بحجم 8 مم+ مع تركيز استثنائي للزيوت العطرية ونكهة زهرية غنية.",
      blackPepper: "فلفل مالابار تيليتشيري الأسود عالي الجودة",
      blackPepperDesc: "حبات فلفل ناضجة وكبيرة بنكهة حارة مركزة وكثافة عالية من البيبيرين.",
      turmeric: "أصابع كركم سالم الذهبي",
      turmericDesc: "نسبة عالية من الكركمين (+5.5%) ولون ذهبي غني ورائحة نقية للطهي والمكملات الغذائية.",
      cloves: "قرنفل زنجبار وكيرلا المنتقى يدوياً",
      clovesDesc: "تركيز عالٍ لزيت الأوجينول، رؤوس سليمة، ورائحة دافئة ولون قرمزي غني.",
      marine: "روبيان النمر الأسود من المحيط الهندي",
      marineDesc: "مأكولات بحرية مجمدة فردياً وسريعة (IQF) بدرجة جامبو مصطادة من مياه ساحلية نقية.",
      beverages: "شاي أسود وقهوة أرابيكا من المزارع المرتفعة",
      beveragesDesc: "شاي مونار الأرثوذكسي الفاخر وحبوب قهوة كوغ أرابيكا المزروعة في الظل.",
    },
    logistics: {
      tagline: "إتقان اللوجستيات العالمية",
      title1: "وصول لا مثيل له.",
      title2: "تنفيذ فائق الدقة.",
      description:
        "من الشحن الجوي المتحكم بدرجات الحرارة بدقة إلى العمليات البحرية الضخمة، تم بناء شبكتنا اللوجستية لتلبية متطلبات التجارة الدولية الحديثة.",
      seaCargoTitle: "الشحن البحري الاستراتيجي",
      seaCargoDesc: "نقل حاويات متطور مع تتبع آني عبر إنترنت الأشياء والتحكم بالمناخ.",
      surfaceTitle: "النقل البري ذو الأولوية",
      surfaceDesc: "نقل بري موثوق يربط المزارع مباشرة بالموانئ ومحطات التصدير.",
      docTitle: "توثيق آمن وتخليص جمركي",
      docDesc: "شفافية كاملة في الشهادات الصحية النباتية وسندات الشحن والتخليص الجمركي الفوري.",
      onTimeRate: "معدل التسليم في الوقت المحدد",
      verified: "معتمد",
    },
    servicesPage: {
      tagline: "الكفاءات الأساسية",
      title1: "حلول لوجستية متكاملة",
      title2: "من البداية إلى النهاية",
      description:
        "نقدم باقة شاملة من الخدمات المصممة لربط التميز الزراعي الهندي باحتياجات الأسواق العالمية، مع ضمان أعلى معايير الجودة في كل نقطة اتصال.",
      learnMore: "اكتشف المزيد",
      service1Title: "حلول الشحن البحري",
      service1Desc:
        "شحن الحاويات الكاملة (FCL) والمجزأة (LCL) مع شراكات استراتيجية بالموانئ لتقليل فترات الترانزيت.",
      service2Title: "لوجستيات الشحن الجوي",
      service2Desc:
        "حلول تسليم سريعة للمحاصيل الفاخرة مع مراقبة نشطة لسلاسل التبريد للمنتجات الحساسة للحرارة.",
      service3Title: "ضمان الجودة والفحص المخبري",
      service3Desc:
        "بروتوكولات فحص دقيقة في مختبراتنا لضمان الامتثال لمعايير ASTA وESA وFDA الأمريكية ودول الخليج.",
      service4Title: "التعبئة والتغليف المخصص",
      service4Desc:
        "حلول تغليف تصدير مخصصة تشمل التفريغ الهوائي، حقن النيتروجين، والتسمية التجارية الخاصة للبيع بالتجزئة.",
      service5Title: "التوثيق والامتثال الجمركي",
      service5Desc:
        "إدارة خبيرة لجميع وثائق التصدير والشهادات الصحية النباتية وإجراءات التخليص الجمركي السلس.",
      service6Title: "التوزيع والنقل الداخلي",
      service6Desc:
        "نقل بري آمن وفعال من المزرعة إلى وحدات المعالجة ومنها مباشرة إلى كبرى الموانئ الدولية.",
      customTitle: "هل تحتاج إلى حل لوجستي مخصص؟",
      customSubtitle:
        "يمكن لخبرائنا تصميم استراتيجية سلسلة إمداد مخصصة وفقاً لحجم شحنتك والوجهة المطلوبة.",
      customButton: "تحدث مع خبير اللوجستيات",
    },
    aboutPage: {
      heritageTag: "تراثنا العريق",
      title1: "إرث من الجودة،",
      title2: "متجذر في التقاليد",
      p1: "تأسست مجموعة زيفورا عام 1994 في قلب حزام التوابل في كيرلا، وبدأت برؤية واضحة: إيصال نكهات الهند الأصيلة إلى العالم بلا مساومة على الجودة.",
      p2: "على مدار ثلاثة عقود، تطورنا من بيت تجاري محلي إلى رائد عالمي في سلاسل الإمداد اللوجستية، مع الحفاظ على قيم النزاهة والشفافية والاحترام العميق للمزارعين.",
      yearsExcellence: "عاماً من التميز",
      countriesReached: "دولة حول العالم",
      valuesTitle: "مدفوعون بالتميز",
      valuesSubtitle: "تسترشد عملياتنا بأربع ركائز تضمن الاتساق والموثوقية عبر الحدود.",
      val1Title: "جودة لا تهاون فيها",
      val1Desc: "فحوصات مخبرية متعددة المراحل ونقاء معتمد لكل شحنة يتم تصديرها.",
      val2Title: "تمكين المزارعين",
      val2Desc: "شراكات مباشرة تضمن التجارة العادلة والاستدامة الزراعية طويلة الأمد.",
      val3Title: "تتبع عالمي شامل",
      val3Desc: "شفافية تامة للمنتج من المزرعة حتى التسليم النهائي للمستورد.",
      val4Title: "موثوقية راسخة",
      val4Desc: "ثلاثة عقود من التنفيذ المثالي للعقود مع كبرى شركات الأغذية العالمية.",
    },
    contactPage: {
      tagline: "التواصل الدولي",
      title1: "تواصل مع شبكتنا",
      title2: "العالمية",
      description:
        "نصنع التميز في التجارة الدولية من قلب مراكزنا العالمية. سواء كنت تبحث عن توريد سلع استراتيجية أو حلول لوجستية متكاملة، فإن فرقنا المتخصصة مستعدة لتلبية متطلباتك.",
      hqTitle: "المقر الرئيسي العالمي",
      hqAddress: "الطابق 5، برج التجارة، طريق إم جي\nكوتشين، كيرلا 682011، الهند",
      emailTitle: "الاستفسارات المباشرة",
      phoneTitle: "مكتب المبيعات الدولية",
      formTitle: "إرسال طلب استفسار تصدير",
      fullName: "الاسم الكامل",
      emailAddress: "البريد الإلكتروني للعمل",
      phone: "رقم الهاتف",
      company: "اسم الشركة",
      productInterest: "المنتج المطلوب",
      selectProduct: "اختر السلعة / المنتج",
      message: "المواصفات ومتطلبات الحجم",
      sendInquiry: "إرسال الاستفسار",
      submitting: "جاري الإرسال...",
      successMessage: "تم استلام طلبكم بنجاح. سيتواصل معكم فريق المبيعات التجارية خلال 24 ساعة.",
    },
    footer: {
      description:
        "إتقان فن التجارة العالمية من خلال التراث والابتكار والتميز اللوجستي. نربط أرقى المحاصيل والسلع الزراعية بالوجهات العالمية.",
      quickLinks: "روابط سريعة",
      globalPresence: "التواجد العالمي",
      contactUs: "اتصل بنا",
      rights: "© 2025 مجموعة زيفورا. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط التصدير",
      compliance: "الامتثال والمعايير",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      products: "Produits",
      markets: "Marchés & Services",
      quality: "Qualité",
      contact: "Contact",
      requestQuote: "Demander un Devis",
      tasteBeyondBorders: "Le Goût au-delà des Frontières",
    },
    hero: {
      tagline: "PRODUITS INDIENS D'EXCEPTION",
      title1: "Le Goût au-delà des",
      title2: "Frontières",
      description:
        "Zevora Groupe relie les saveurs authentiques de l'Inde — en particulier le riche patrimoine du Kerala — aux marchés internationaux grâce à une qualité supérieure, un approvisionnement éthique et un commerce fiable.",
      exploreProducts: "Découvrir les Produits",
      ourStory: "Notre Histoire",
    },
    stats: {
      stat1Value: "35+",
      stat1Label: "Pays",
      stat1Sublabel: "Desservis",
      stat2Value: "150+",
      stat2Label: "Produits",
      stat2Sublabel: "Premium",
      stat3Value: "100+",
      stat3Label: "Partenaires",
      stat3Sublabel: "Mondiaux",
      stat4Value: "5000+",
      stat4Label: "Conteneurs",
      stat4Sublabel: "Livrés",
      stat5Value: "100%",
      stat5Label: "Approvisionnement",
      stat5Sublabel: "Éthique & Durable",
    },
    aboutPreview: {
      tagline: "À PROPOS DE ZEVORA GROUPE",
      title: "Relier l'Inde au Reste du Monde",
      description:
        "Fort de trois décennies de maîtrise commerciale, Zevora Groupe orchestre des chaînes d'approvisionnement internationales fluides pour les épices indiennes de premier choix, les produits de la mer et les denrées agricoles spécialisées.",
      pillar1Title: "Approvisionnement Direct aux Domaines",
      pillar1Desc:
        "Partenariats directs avec des exploitations patrimoniales certifiées au Kerala et en Inde, garantissant une pureté botanique absolue.",
      pillar2Title: "Logistique Frigorifique Internationale",
      pillar2Desc:
        "Transport maritime et aérien à température dirigée préservant les arômes, les huiles essentielles et la fraîcheur optimale.",
      pillar3Title: "Pureté Certifiée à l'Export",
      pillar3Desc:
        "Conformité rigoureuse en laboratoire aux normes US-FDA, Union Européenne, HACCP, ISO et réglementations GCC.",
      exploreHeritage: "Découvrir Notre Héritage",
    },
    products: {
      tagline: "PORTFOLIO D'EXPORTATION PREMIUM",
      title: "La Collection Épicurienne",
      subtitle:
        "Des denrées récoltées avec rigueur et sélectionnées à la main, répondant aux standards internationaux les plus exigeants.",
      viewAll: "Consulter le Catalogue Complet",
      inquireNow: "Demander des Renseignements",
      origin: "Origine",
      grade: "Calibre",
      cardamom: "Cardamome Verte d'Alleppey",
      cardamomDesc: "Gousses émeraudes 8mm+ avec une teneur exceptionnelle en huiles essentielles et un arôme floral délicat.",
      blackPepper: "Poivre Noir Tellicherry Garbled Extra Bold",
      blackPepperDesc: "Grains mûrs d'un calibre exceptionnel, offrant un piquant intense et une forte densité en pipérine.",
      turmeric: "Doigts de Curcuma Doré de Salem",
      turmericDesc: "Haute teneur en curcumine (+5,5%), couleur dorée intense et arôme chaud pour la gastronomie et la nutraceutique.",
      cloves: "Clous de Girofle Triés à la Main",
      clovesDesc: "Teneur élevée en eugénol, têtes intactes, chaleur aromatique envoûtante et robe pourpre profond.",
      marine: "Crevettes Géantes Black Tiger de l'Océan Indien",
      marineDesc: "Fruits de mer surgelés individuellement (IQF), pêchés de manière responsable dans des eaux côtières pures.",
      beverages: "Thé Noir des Hauts Plateaux & Café Arabica",
      beveragesDesc: "Thé orthodoxe à feuilles entières de Munnar et grains de café Arabica de Coorg cultivés sous ombrage.",
    },
    logistics: {
      tagline: "MAÎTRISE LOGISTIQUE MONDIALE",
      title1: "Une Portée Inégalée.",
      title2: "Une Exécution Sans Faille.",
      description:
        "Du fret aérien ultra-précis sous température contrôlée aux opérations maritimes à grande échelle, notre réseau répond aux exigences du commerce moderne.",
      seaCargoTitle: "Fret Maritime Stratégique",
      seaCargoDesc: "Transport conteneurisé optimisé avec suivi IoT en temps réel et régulation thermique continue.",
      surfaceTitle: "Logistique Terrestre Prioritaire",
      surfaceDesc: "Réseau multimodal fiable reliant directement les exploitations agricoles aux terminaux d'exportation.",
      docTitle: "Documentation Sécurisée",
      docDesc: "Transparence absolue : certificats phytosanitaires, connaissements et dédouanement accéléré.",
      onTimeRate: "TAUX DE LIVRAISON DANS LES DÉLAIS",
      verified: "VÉRIFIÉ",
    },
    servicesPage: {
      tagline: "COMPÉTENCES CLÉS",
      title1: "Excellence Logistique",
      title2: "De Bout en Bout",
      description:
        "Nous proposons une gamme complète de services conçus pour relier l'excellence agricole indienne aux exigences des marchés mondiaux, garantissant une qualité optimale à chaque étape.",
      learnMore: "En savoir plus",
      service1Title: "Fret Maritime International",
      service1Desc:
        "Expéditions en conteneurs complets (FCL) et de groupage (LCL) avec des partenariats portuaires stratégiques pour des délais optimisés.",
      service2Title: "Logistique de Fret Aérien",
      service2Desc:
        "Solutions d'acheminement express pour les récoltes haut de gamme avec surveillance active de la chaîne du froid.",
      service3Title: "Assurance & Contrôle Qualité",
      service3Desc:
        "Protocoles de tests rigoureux dans nos laboratoires internes pour garantir la conformité aux normes ASTA, ESA, US-FDA et GCC.",
      service4Title: "Conditionnement Sur-Mesure",
      service4Desc:
        "Solutions d'emballage d'exportation personnalisées incluant mise sous vide, injection d'azote et étiquetage privé pour la distribution.",
      service5Title: "Documentation & Dédouanement",
      service5Desc:
        "Prise en charge intégrale des formalités douanières, certificats phytosanitaires et documents d'exportation.",
      service6Title: "Distribution Terrestre",
      service6Desc:
        "Transport routier sécurisé et efficace depuis les zones de culture jusqu'à nos unités de conditionnement et ports d'embarquement.",
      customTitle: "Besoin d'une Solution Logistique Personnalisée ?",
      customSubtitle:
        "Nos experts conçoivent une stratégie logistique sur mesure adaptée à vos volumes et destinations cibles.",
      customButton: "Contacter un Spécialiste",
    },
    aboutPage: {
      heritageTag: "NOTRE HÉRITAGE",
      title1: "Un Héritage d'Excellence,",
      title2: "Ancré dans la Tradition",
      p1: "Fondé en 1994 au cœur du terroir des épices du Kerala, Zevora Groupe est né d'une vision simple : apporter les saveurs authentiques de l'Inde au monde entier sans aucun compromis.",
      p2: "En trois décennies, nous sommes passés d'une maison de négoce locale à une référence logistique internationale, tout en restant fidèles à nos valeurs d'intégrité, de transparence et de profond respect pour les producteurs agricoles.",
      yearsExcellence: "Années d'Excellence",
      countriesReached: "Pays Desservis",
      valuesTitle: "Guidés par l'Excellence",
      valuesSubtitle: "Nos opérations s'appuient sur quatre piliers fondamentaux garantissant rigueur et confiance à travers les frontières.",
      val1Title: "Qualité Inflexible",
      val1Desc: "Analyses de laboratoire multi-niveaux et certification de pureté pour chaque lot exporté.",
      val2Title: "Valorisation des Producteurs",
      val2Desc: "Partenariats directs assurant un commerce équitable et une agriculture durable à long terme.",
      val3Title: "Traçabilité Globale",
      val3Desc: "Transparence totale des lots, de la récolte à la livraison finale chez l'acheteur.",
      val4Title: "Fiabilité Reconnue",
      val4Desc: "Trois décennies d'exécution contractuelle exemplaire auprès des plus grands groupes agroalimentaires.",
    },
    contactPage: {
      tagline: "RELATIONS INTERNATIONALES",
      title1: "Connectez-vous à Notre",
      title2: "Réseau Mondial",
      description:
        "L'excellence sur mesure dans le commerce international depuis nos hubs stratégiques. Que vous recherchiez un approvisionnement en matières premières ou des solutions logistiques complètes, nos équipes d'experts sont à votre écoute.",
      hqTitle: "Siège Social International",
      hqAddress: "Niveau 5, Trade Tower, MG Road\nCochin, Kerala 682011, Inde",
      emailTitle: "Demandes Directes",
      phoneTitle: "Bureau Commercial",
      formTitle: "Formulaire de Demande d'Exportation",
      fullName: "Nom Complet",
      emailAddress: "Email Professionnel",
      phone: "Numéro de Téléphone",
      company: "Nom de l'Entreprise",
      productInterest: "Produit Recherché",
      selectProduct: "Sélectionner un Produit / Matière",
      message: "Spécifications & Volumes Souhaités",
      sendInquiry: "Envoyer la Demande",
      submitting: "Envoi en cours...",
      successMessage: "Votre demande d'exportation a bien été reçue. Notre bureau commercial vous répondra sous 24 heures.",
    },
    footer: {
      description:
        "Maîtriser l'art du commerce international à travers l'héritage, l'innovation et l'excellence logistique. Relier les récoltes d'élite aux destinations du monde entier.",
      quickLinks: "Liens Rapides",
      globalPresence: "Présence Globale",
      contactUs: "Contactez-nous",
      rights: "© 2025 ZEVORA GROUPE. TOUS DROITS RÉSERVÉS.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions Générales d'Export",
      compliance: "Conformité & Normes",
    },
  },
};
