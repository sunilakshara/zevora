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
    whyUs: string;
    sustainability: string;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    items: {
      expertiseTitle: string;
      expertiseDesc: string;
      productsTitle: string;
      productsDesc: string;
      sourcingTitle: string;
      sourcingDesc: string;
      logisticsTitle: string;
      logisticsDesc: string;
      qualityTitle: string;
      qualityDesc: string;
      networkTitle: string;
      networkDesc: string;
      customerTitle: string;
      customerDesc: string;
      partnershipsTitle: string;
      partnershipsDesc: string;
      innovationTitle: string;
      innovationDesc: string;
    }
  };
  qualityPage: {
    title: string;
    commitmentTitle: string;
    commitmentDesc: string;
    assuranceTitle: string;
    assuranceDesc: string;
    labTestingTitle: string;
    labTestingDesc: string;
    documentationTitle: string;
    documentationDesc: string;
    standardsTitle: string;
    standardsDesc: string;
  };
  sustainabilityPage: {
    introText: string;
    title: string;
    subtitle: string;
    initiativesTitle: string;
    sourcingTitle: string;
    sourcingDesc: string;
    partnershipsTitle: string;
    partnershipsDesc: string;
    packagingTitle: string;
    packagingDesc: string;
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
    cinnamon: string;
    cinnamonDesc: string;
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
  };
  exportProcess: {
    title: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
  };
  contact: {
    onTimeRate: string;
    verified: string;
  };
  marketsPage: {
    tagline: string;
    title1: string;
    title2: string;
    description: string;
    europe: string;
    europeDesc: string;
    gcc: string;
    gccDesc: string;
    us: string;
    usDesc: string;
    canada: string;
    canadaDesc: string;
    apac: string;
    apacDesc: string;
    customTitle: string;
    customSubtitle: string;
    customButton: string;
  };
  aboutPage: {
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    storyP4: string;
    storyP5: string;
    storyP6: string;
    storyHighlight1: string;
    storyHighlight2: string;
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
      sustainability: "Sustainability",
      contact: "Contact",
      requestQuote: "Request Quote",
      tasteBeyondBorders: "Taste Beyond Borders",
      whyUs: "Why Choose Us",
    },
    whyChooseUs: {
      title: "WHY ZEVORA GROUPE",
      subtitle: "Every partnership we build is driven by authenticity, quality, responsible sourcing, and a commitment to delivering India's finest products to international markets.",
      items: {
        expertiseTitle: "International Expertise",
        expertiseDesc: "Combining international market expertise with deep regional knowledge to build trusted trade relationships worldwide.",
        productsTitle: "Premium Product Selection",
        productsDesc: "Carefully sourced spices, seafood, food & beverages, and agricultural products selected for exceptional quality and authenticity.",
        sourcingTitle: "Ethical & Sustainable Sourcing",
        sourcingDesc: "Working closely with trusted producers who follow responsible and sustainable sourcing practices.",
        logisticsTitle: "Reliable Logistics",
        logisticsDesc: "Efficient export operations supported by dependable logistics and documentation for global delivery.",
        qualityTitle: "Quality Assurance",
        qualityDesc: "Every product is handled under strict quality standards to ensure freshness, consistency, and international compliance.",
        networkTitle: "Trusted Global Trade Network",
        networkDesc: "Building long-term relationships with buyers, distributors, wholesalers, and importers across international markets.",
        customerTitle: "Customer-Centric Approach",
        customerDesc: "Dedicated support, transparent communication, and customized solutions for every client.",
        partnershipsTitle: "Long-Term Business Partnerships",
        partnershipsDesc: "Focused on creating sustainable partnerships built on trust, integrity, and mutual growth.",
        innovationTitle: "Innovation",
        innovationDesc: "Continuously improving sourcing, trade processes, and customer experience through modern technologies.",
      }
    },
    qualityPage: {
      title: "Quality & Compliance",
      commitmentTitle: "Our Commitment",
      commitmentDesc: "At Zevora Groupe, quality is not just a promise; it is the foundation of our entire export operation. We maintain uncompromising standards from sourcing to final delivery.",
      assuranceTitle: "Quality Assurance",
      assuranceDesc: "Continuous monitoring and strict quality control protocols ensure that every product meets rigorous international standards before export.",
      labTestingTitle: "Laboratory Testing",
      labTestingDesc: "Comprehensive scientific analysis and purity verification through accredited third-party laboratories.",
      documentationTitle: "Export Documentation",
      documentationDesc: "Flawless customs handling, phytosanitary certifications, and meticulous tracking for seamless global delivery.",
      standardsTitle: "International Standards Compliance",
      standardsDesc: "Full adherence to ISO, HACCP, and specific destination country import regulations.",
    },
    sustainabilityPage: {
      introText: "We believe that sustainable growth begins with responsible sourcing. By working closely with trusted producers, promoting ethical business practices, and supporting environmentally conscious operations, Zevora Groupe is committed to delivering premium products while creating long-term value for our partners, communities, and the planet",
      title: "Sustainability",
      subtitle: "Committed to a better future.",
      initiativesTitle: "Our Sustainability Initiatives",
      sourcingTitle: "Sustainable Sourcing",
      sourcingDesc: "We partner directly with farmers who employ eco-friendly agricultural practices, ensuring biodiversity and soil health.",
      partnershipsTitle: "Ethical Partnerships",
      partnershipsDesc: "Supporting local communities through fair trade principles and guaranteeing equitable compensation for all workers.",
      packagingTitle: "Responsible Packaging",
      packagingDesc: "Utilizing biodegradable materials and minimizing plastic use across our entire export supply chain.",
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
        "At Zevora Groupe, we believe every product tells a story. From hand-selected spices and premium seafood to carefully sourced food and agricultural products, we connect the authentic taste of India with customers across the globe through responsible sourcing and trusted international trade.",
      pillar1Title: "Authentic Farm Sourcing",
      pillar1Desc:
        "Direct origin partnerships with certified heritage farms across Kerala and India, ensuring pure botanical purity.",
      pillar2Title: "Global Cold-Chain Logistics",
      pillar2Desc:
        "Precision climate-controlled sea and air shipping preserving aroma, volatile oils, and peak freshness worldwide.",
      pillar3Title: "Certified Export Purity",
      pillar3Desc:
        "Rigorous multi-stage laboratory compliance with strict international food safety benchmarks.",
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
      cinnamon: "Ceylon & Cassia Cinnamon",
      cinnamonDesc: "Premium, aromatic rolled quills with high essential oil content, prized for sweet and savory dishes.",
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
      docTitle: "Export Documentation",
      docDesc: "Complete regulatory compliance, phytosanitary certifications, and smooth customs clearance.",
    },
    exportProcess: {
      title: "Export Process",
      step1: "Product Selection",
      step2: "Quality Inspection",
      step3: "Packaging",
      step4: "Documentation",
      step5: "International Shipping",
    },
    contact: {
      onTimeRate: "ON-TIME DELIVERY RATE",
      verified: "VERIFIED",
    },
    marketsPage: {
      tagline: "GLOBAL REACH",
      title1: "Connecting Global Markets with",
      title2: "India's Finest Gourmet Products",
      description: "A trusted supplier of premium spices and food products serving Europe, GCC countries, North America, and beyond. Explore the regions we supply globally.",
      europe: "Europe",
      europeDesc: "Strict compliance with EU phytosanitary and safety standards.",
      gcc: "GCC Countries",
      gccDesc: "Rapid transit and deep market penetration across the Middle East.",
      us: "United States",
      usDesc: "Full regulatory compliance ensuring premium quality for American consumers.",
      canada: "Canada",
      canadaDesc: "Meeting stringent CFIA requirements for the Canadian market.",
      apac: "Asia-Pacific",
      apacDesc: "Strategic distribution hubs serving the fastest-growing region.",
      customTitle: "Looking for a Reliable Export Partner?",
      customSubtitle: "Get in touch with our export team today and discover how Zevora Groupe can support your global sourcing needs.",
      customButton: "Request Quotation",
    },
    aboutPage: {
      storyTitle: "Three friends. One journey. One idea.",
      storyP1: "In 2018, three friends, Akshara, Dinu and Akarsh met for the first time when they joined college to pursue their BTech. What started as a college friendship slowly grew into something much bigger — a shared ambition to build something of their own.",
      storyP2: "Over the years, each of them followed their own path, gaining different experiences, perspectives and a better understanding of the world around them. One of them built experience in the Food & Beverage industry, discovering the world of quality products, sourcing, hospitality and international markets.",
      storyP3: "The idea began to take shape through conversations about food, about businesses, about opportunities, and about how great products could find their way to the right people and places.",
      storyP4: "What began as three friends with different experiences became three friends with one common vision: to create a company that connects people, products and opportunities across borders.",
      storyP5: "In 2026, that vision became Zevora Groupe.",
      storyP6: "Today, Zevora Groupe is built on the same foundation that brought the three friends together in 2018, trust, friendship, curiosity and the belief that something meaningful can be created when different experiences come together.",
      storyHighlight1: "Three friends. Different experiences. One shared vision.",
      storyHighlight2: "Zevora Groupe",
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
      hqAddress: "ZEVORA GROUPE PRIVATE LIMITED\nCIN: U46305KL2026PTC103763\nReg. Office: Door No 283/A, Mas Arcade, Mekkadampu P.O, Mekkadambu, Muvattupuzha, Ernakulam district, Kerala, India, 682316\nMob: +91 9544433282",
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
      markets: "الأسواق",
      quality: "الجودة",
      sustainability: "الاستدامة",
      contact: "اتصل بنا",
      requestQuote: "طلب عرض سعر",
      tasteBeyondBorders: "نكهات تتخطى الحدود",
      whyUs: "لماذا نحن",
    },
    whyChooseUs: {
      title: "لماذا مجموعة زيفورا",
      subtitle: "كل شراكة نبنيها مدفوعة بالأصالة والجودة والتوريد المسؤول والالتزام بتقديم أفضل منتجات الهند إلى الأسواق الدولية.",
      items: {
        expertiseTitle: "خبرة دولية",
        expertiseDesc: "نجمع بين خبرة الأسواق الدولية والمعرفة الإقليمية العميقة لبناء علاقات تجارية موثوقة في جميع أنحاء العالم.",
        productsTitle: "مجموعة منتجات فاخرة",
        productsDesc: "توابل ومأكولات بحرية ومنتجات زراعية تم الحصول عليها بعناية لضمان الجودة الفائقة.",
        sourcingTitle: "توريد أخلاقي ومستدام",
        sourcingDesc: "نعمل عن كثب مع منتجين موثوقين يتبعون ممارسات توريد مسؤولة ومستدامة.",
        logisticsTitle: "لوجستيات موثوقة",
        logisticsDesc: "عمليات تصدير فعالة تدعمها لوجستيات ووثائق موثوقة للتسليم العالمي.",
        qualityTitle: "ضمان الجودة",
        qualityDesc: "يتم التعامل مع كل منتج وفق معايير جودة صارمة لضمان النضارة والاتساق والامتثال الدولي.",
        networkTitle: "شبكة تجارة عالمية موثوقة",
        networkDesc: "بناء علاقات طويلة الأمد مع المشترين والموزعين وتجار الجملة والمستوردين.",
        customerTitle: "نهج يركز على العميل",
        customerDesc: "دعم مخصص وتواصل شفاف وحلول مصممة خصيصًا لكل عميل.",
        partnershipsTitle: "شراكات عمل طويلة الأمد",
        partnershipsDesc: "نركز على إنشاء شراكات مستدامة مبنية على الثقة والنزاهة والنمو المتبادل.",
        innovationTitle: "الابتكار",
        innovationDesc: "تحسين مستمر لعمليات التوريد والتجارة وتجربة العملاء من خلال التقنيات الحديثة.",
      }
    },
    qualityPage: {
      title: "الجودة والامتثال",
      commitmentTitle: "التزامنا",
      commitmentDesc: "في مجموعة زيفورا، الجودة ليست مجرد وعد بل هي أساس عملية التصدير بأكملها. نحن نحافظ على معايير لا هوادة فيها من التوريد إلى التسليم النهائي.",
      assuranceTitle: "ضمان الجودة",
      assuranceDesc: "المراقبة المستمرة وبروتوكولات مراقبة الجودة الصارمة تضمن تلبية كل منتج للمعايير الدولية الصارمة قبل التصدير.",
      labTestingTitle: "الاختبارات المعملية",
      labTestingDesc: "تحليل علمي شامل والتحقق من النقاء من خلال مختبرات معتمدة تابعة لجهات خارجية.",
      documentationTitle: "وثائق التصدير",
      documentationDesc: "التعامل الخالي من العيوب مع الجمارك وشهادات الصحة النباتية والتتبع الدقيق لتسليم عالمي سلس.",
      standardsTitle: "الامتثال للمعايير الدولية",
      standardsDesc: "الالتزام الكامل بـ ISO و HACCP ولوائح الاستيراد الخاصة ببلد الوجهة.",
    },
    sustainabilityPage: {
      introText: "We believe that sustainable growth begins with responsible sourcing. By working closely with trusted producers, promoting ethical business practices, and supporting environmentally conscious operations, Zevora Groupe is committed to delivering premium products while creating long-term value for our partners, communities, and the planet",
      title: "الاستدامة",
      subtitle: "ملتزمون بمستقبل أفضل.",
      initiativesTitle: "مبادراتنا للاستدامة",
      sourcingTitle: "مصادر مستدامة",
      sourcingDesc: "نحن نتشارك مباشرة مع المزارعين الذين يستخدمون ممارسات زراعية صديقة للبيئة، مما يضمن التنوع البيولوجي وصحة التربة.",
      partnershipsTitle: "شراكات أخلاقية",
      partnershipsDesc: "دعم المجتمعات المحلية من خلال مبادئ التجارة العادلة وضمان تعويض منصف لجميع العمال.",
      packagingTitle: "تغليف مسؤول",
      packagingDesc: "استخدام مواد قابلة للتحلل البيولوجي وتقليل استخدام البلاستيك عبر سلسلة توريد التصدير بأكملها.",
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
        "امتثال مخبري صارم لأعلى معايير السلامة الغذائية الدولية.",
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
      cinnamon: "قرفة سيلان وكاسيا الفاخرة",
      cinnamonDesc: "لفائف عطرية فاخرة بنسبة عالية من الزيوت الأساسية، مثالية للأطباق الحلوة والمالحة.",
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
      docTitle: "وثائق التصدير",
      docDesc: "امتثال تنظيمي كامل، شهادات صحة نباتية، وتخليص جمركي سلس.",
    },
    exportProcess: {
      title: "عملية التصدير",
      step1: "اختيار المنتج",
      step2: "فحص الجودة",
      step3: "التعبئة والتغليف",
      step4: "التوثيق",
      step5: "الشحن الدولي",
    },
    contact: {
      onTimeRate: "معدل التسليم في الوقت المحدد",
      verified: "معتمد",
    },
    marketsPage: {
      tagline: "امتداد عالمي",
      title1: "ربط الأسواق العالمية بـ",
      title2: "أفضل المنتجات الفاخرة الهندية",
      description: "مورد موثوق للتوابل الفاخرة والمنتجات الغذائية لأوروبا ودول الخليج وأمريكا الشمالية وغيرها. استكشف المناطق التي نورد لها عالمياً.",
      europe: "أوروبا",
      europeDesc: "امتثال صارم لمعايير الصحة النباتية والسلامة الأوروبية.",
      gcc: "دول مجلس التعاون الخليجي",
      gccDesc: "عبور سريع واختراق عميق للأسواق في جميع أنحاء الشرق الأوسط.",
      us: "الولايات المتحدة",
      usDesc: "امتثال كامل للوائح التنظيمية لضمان الجودة الفائقة للمستهلكين الأمريكيين.",
      canada: "كندا",
      canadaDesc: "تلبية متطلبات وكالة فحص الأغذية الكندية الصارمة للسوق الكندي.",
      apac: "آسيا والمحيط الهادئ",
      apacDesc: "مراكز توزيع استراتيجية تخدم المنطقة الأسرع نمواً.",
      customTitle: "هل تبحث عن شريك تصدير موثوق؟",
      customSubtitle: "تواصل مع فريق التصدير لدينا اليوم واكتشف كيف يمكن لمجموعة زيفورا دعم احتياجاتك العالمية.",
      customButton: "اطلب تسعيرة",
    },
    aboutPage: {
      storyTitle: "ثلاثة أصدقاء. رحلة واحدة. فكرة واحدة.",
      storyP1: "في عام 2018، التقى ثلاثة أصدقاء: أكشارا، دينو وأكارش لأول مرة عندما انضموا إلى الكلية لمتابعة درجة البكالوريوس في التكنولوجيا. ما بدأ كصداقة جامعية نما ببطء ليصبح شيئًا أكبر بكثير - طموح مشترك لبناء شيء خاص بهم.",
      storyP2: "على مر السنين، اتبع كل منهم مساره الخاص، واكتسبوا خبرات مختلفة، ووجهات نظر وفهمًا أفضل للعالم من حولهم. بنى أحدهم خبرة في صناعة الأغذية والمشروبات، واكتشف عالم المنتجات عالية الجودة، وتحديد المصادر، والضيافة والأسواق الدولية.",
      storyP3: "بدأت الفكرة تتبلور من خلال المحادثات حول الطعام، حول الأعمال، حول الفرص، وحول كيف يمكن للمنتجات الرائعة أن تجد طريقها إلى الأشخاص والأماكن المناسبة.",
      storyP4: "ما بدأ كثلاثة أصدقاء بخبرات مختلفة أصبح ثلاثة أصدقاء برؤية مشتركة واحدة: إنشاء شركة تربط الأشخاص والمنتجات والفرص عبر الحدود.",
      storyP5: "في عام 2026، أصبحت تلك الرؤية مجموعة زيفورا.",
      storyP6: "اليوم، بنيت مجموعة زيفورا على نفس الأساس الذي جمع الأصدقاء الثلاثة معًا في عام 2018: الثقة، الصداقة، الفضول، والاعتقاد بأنه يمكن إنشاء شيء ذي معنى عندما تتلاقى التجارب المختلفة.",
      storyHighlight1: "ثلاثة أصدقاء. تجارب مختلفة. رؤية مشتركة واحدة.",
      storyHighlight2: "مجموعة زيفورا",
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
      hqAddress: "ZEVORA GROUPE PRIVATE LIMITED\nCIN: U46305KL2026PTC103763\nالمكتب المسجل: Door No 283/A, Mas Arcade, Mekkadampu P.O, Mekkadambu, Muvattupuzha, Ernakulam district, Kerala, India, 682316\nالجوال: +91 9544433282",
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
      markets: "Marchés",
      quality: "Qualité",
      sustainability: "Durabilité",
      contact: "Contact",
      requestQuote: "Demander un Devis",
      tasteBeyondBorders: "Le Goût au-delà des Frontières",
      whyUs: "Pourquoi Nous Choisir",
    },
    whyChooseUs: {
      title: "POURQUOI ZEVORA GROUPE",
      subtitle: "Chaque partenariat que nous établissons est guidé par l'authenticité, la qualité, un approvisionnement responsable et un engagement à livrer les meilleurs produits de l'Inde aux marchés internationaux.",
      items: {
        expertiseTitle: "Expertise Internationale",
        expertiseDesc: "Combiner l'expertise des marchés internationaux avec une connaissance régionale approfondie pour bâtir des relations de confiance mondiales.",
        productsTitle: "Sélection de Produits Premium",
        productsDesc: "Des épices, des fruits de mer et des produits agricoles soigneusement sélectionnés pour leur qualité et leur authenticité exceptionnelles.",
        sourcingTitle: "Approvisionnement Éthique & Durable",
        sourcingDesc: "Travailler en étroite collaboration avec des producteurs de confiance qui suivent des pratiques responsables et durables.",
        logisticsTitle: "Logistique Fiable",
        logisticsDesc: "Des opérations d'exportation efficaces soutenues par une logistique et une documentation fiables pour une livraison mondiale.",
        qualityTitle: "Assurance Qualité",
        qualityDesc: "Chaque produit est manipulé selon des normes de qualité strictes pour assurer la fraîcheur, la constance et la conformité internationale.",
        networkTitle: "Réseau Commercial Mondial de Confiance",
        networkDesc: "Établir des relations à long terme avec les acheteurs, distributeurs, grossistes et importateurs à travers le monde.",
        customerTitle: "Approche Axée sur le Client",
        customerDesc: "Un soutien dédié, une communication transparente et des solutions personnalisées pour chaque client.",
        partnershipsTitle: "Partenariats Commerciaux à Long Terme",
        partnershipsDesc: "Axés sur la création de partenariats durables fondés sur la confiance, l'intégrité et la croissance mutuelle.",
        innovationTitle: "Innovation",
        innovationDesc: "Améliorer continuellement l'approvisionnement, les processus commerciaux et l'expérience client grâce aux technologies modernes.",
      }
    },
    qualityPage: {
      title: "Qualité et Conformité",
      commitmentTitle: "Notre Engagement",
      commitmentDesc: "Chez Zevora Groupe, la qualité n'est pas seulement une promesse; c'est le fondement de toute notre opération d'exportation. Nous maintenons des normes intransigeantes de l'approvisionnement à la livraison finale.",
      assuranceTitle: "Assurance Qualité",
      assuranceDesc: "Une surveillance continue et des protocoles de contrôle de qualité stricts garantissent que chaque produit répond à des normes internationales rigoureuses avant l'exportation.",
      labTestingTitle: "Essais en Laboratoire",
      labTestingDesc: "Analyse scientifique complète et vérification de la pureté par des laboratoires tiers accrédités.",
      documentationTitle: "Documentation d'Exportation",
      documentationDesc: "Gestion douanière irréprochable, certifications phytosanitaires et suivi méticuleux pour une livraison mondiale sans faille.",
      standardsTitle: "Conformité aux Normes Internationales",
      standardsDesc: "Adhésion totale aux normes ISO, HACCP et aux réglementations d'importation spécifiques du pays de destination.",
    },
    sustainabilityPage: {
      introText: "We believe that sustainable growth begins with responsible sourcing. By working closely with trusted producers, promoting ethical business practices, and supporting environmentally conscious operations, Zevora Groupe is committed to delivering premium products while creating long-term value for our partners, communities, and the planet",
      title: "Durabilité",
      subtitle: "Engagés pour un avenir meilleur.",
      initiativesTitle: "Nos Initiatives de Durabilité",
      sourcingTitle: "Approvisionnement Durable",
      sourcingDesc: "Nous collaborons directement avec des agriculteurs qui emploient des pratiques agricoles respectueuses de l'environnement.",
      partnershipsTitle: "Partenariats Éthiques",
      partnershipsDesc: "Soutenir les communautés locales grâce aux principes du commerce équitable et garantir une rémunération juste.",
      packagingTitle: "Emballage Responsable",
      packagingDesc: "Utilisation de matériaux biodégradables et minimisation de l'utilisation de plastique dans toute notre chaîne d'approvisionnement.",
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
        "Conformité rigoureuse en laboratoire aux normes internationales de sécurité alimentaire les plus strictes.",
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
      cinnamon: "Cannelle de Ceylan & Cassia",
      cinnamonDesc: "Bâtons roulés aromatiques haut de gamme, prisés pour les plats sucrés et salés.",
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
      docTitle: "Documentation d'Exportation",
      docDesc: "Conformité réglementaire complète, certifications phytosanitaires et dédouanement fluide.",
    },
    exportProcess: {
      title: "Processus d'Exportation",
      step1: "Sélection des Produits",
      step2: "Inspection de Qualité",
      step3: "Emballage",
      step4: "Documentation",
      step5: "Expédition Internationale",
    },
    contact: {
      onTimeRate: "TAUX DE LIVRAISON DANS LES DÉLAIS",
      verified: "VÉRIFIÉ",
    },
    marketsPage: {
      tagline: "PORTÉE MONDIALE",
      title1: "Connecter les marchés mondiaux avec",
      title2: "les meilleurs produits gourmets d'Inde",
      description: "Un fournisseur de confiance d'épices et de produits alimentaires haut de gamme desservant l'Europe, les pays du CCG, l'Amérique du Nord, et au-delà.",
      europe: "Europe",
      europeDesc: "Conformité stricte aux normes de sécurité et phytosanitaires de l'UE.",
      gcc: "Pays du CCG",
      gccDesc: "Transit rapide et forte pénétration du marché à travers le Moyen-Orient.",
      us: "États-Unis",
      usDesc: "Conformité réglementaire totale garantissant une qualité supérieure pour les consommateurs américains.",
      canada: "Canada",
      canadaDesc: "Répondant aux exigences strictes de l'ACIA pour le marché canadien.",
      apac: "Asie-Pacifique",
      apacDesc: "Hubs de distribution stratégiques desservant la région à la croissance la plus rapide.",
      customTitle: "À la recherche d'un partenaire d'exportation fiable ?",
      customSubtitle: "Contactez notre équipe dès aujourd'hui et découvrez comment Zevora Groupe peut soutenir vos besoins d'approvisionnement mondiaux.",
      customButton: "Demander un devis",
    },
    aboutPage: {
      storyTitle: "Trois amis. Un voyage. Une idée.",
      storyP1: "En 2018, trois amis, Akshara, Dinu et Akarsh se sont rencontrés pour la première fois lorsqu'ils ont rejoint l'université pour poursuivre leur BTech. Ce qui a commencé comme une amitié universitaire s'est lentement transformé en quelque chose de bien plus grand — une ambition partagée de construire quelque chose par eux-mêmes.",
      storyP2: "Au fil des années, chacun d'eux a suivi sa propre voie, acquérant différentes expériences, perspectives et une meilleure compréhension du monde qui les entoure. L'un d'eux a acquis de l'expérience dans l'industrie de la restauration, découvrant le monde des produits de qualité, de l'approvisionnement, de l'hospitalité et des marchés internationaux.",
      storyP3: "L'idée a commencé à prendre forme à travers des conversations sur l'alimentation, les entreprises, les opportunités, et sur la façon dont de bons produits pourraient trouver leur chemin vers les bonnes personnes et les bons endroits.",
      storyP4: "Ce qui a commencé comme trois amis avec des expériences différentes est devenu trois amis avec une vision commune : créer une entreprise qui relie les gens, les produits et les opportunités à travers les frontières.",
      storyP5: "En 2026, cette vision est devenue Zevora Groupe.",
      storyP6: "Aujourd'hui, Zevora Groupe est construit sur la même fondation qui a réuni les trois amis en 2018 : la confiance, l'amitié, la curiosité et la conviction que quelque chose de significatif peut être créé lorsque différentes expériences se rejoignent.",
      storyHighlight1: "Trois amis. Des expériences différentes. Une vision partagée.",
      storyHighlight2: "Zevora Groupe",
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
      hqAddress: "ZEVORA GROUPE PRIVATE LIMITED\nCIN: U46305KL2026PTC103763\nSiège social: Door No 283/A, Mas Arcade, Mekkadampu P.O, Mekkadambu, Muvattupuzha, Ernakulam district, Kerala, India, 682316\nMob: +91 9544433282",
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
