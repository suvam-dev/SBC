export interface Mentor {
  id: string;
  name: string;
  designation: string;
  organization: string;
  batchAndDept: string;
  isAlumnus: boolean;
  photoUrl: string;
  linkedinUrl: string;
  sectorTag: string;
  bio?: string;
}

export interface Coordinator {
  name: string;
  role: string;
  department: string;
  phone: string;
  whatsapp: string;
  email: string;
  linkedinUrl: string;
  photoUrl: string;
}

export const sbcConfig = {
  name: "Startup Bootcamp 9.0",
  shortName: "SBC 9.0",
  edition: "9th Edition",
  institution: "E-Cell IIT Kharagpur",
  tagline: "Register your startup for two rounds of one-on-one mentorship and a live pitch before investors on campus",
  subTagline: "India's Flagship University Venture Acceleration & Mentorship Program",
  applyUrl: "#register",
  applyMentorUrl: "#apply-mentor",
  brochureUrl: "#about",

  // SECTION 1: Form Constants
  sectors: [
    "SaaS",
    "Consumer",
    "Fintech",
    "Healthcare",
    "Deeptech / AI-ML",
    "Social Impact",
    "D2C",
    "Other"
  ],

  yearsOfStudy: [
    "1st Year (Undergraduate)",
    "2nd Year (Undergraduate)",
    "3rd Year (Undergraduate)",
    "4th Year (Undergraduate)",
    "5th Year / Dual Degree",
    "Postgraduate (M.Tech / MBA / MS / M.Sc)",
    "Ph.D. / Research Scholar",
    "Recent Alumnus / Other"
  ],

  departments: [
    "Computer Science & Engineering",
    "Electrical & Electronics Engineering",
    "Electronics & Electrical Communication",
    "Mechanical Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "Industrial & Systems Engineering",
    "Metallurgical & Materials Engineering",
    "Aerospace Engineering",
    "Biotechnology & Biochemical Engineering",
    "Vinod Gupta School of Management (VGSoM)",
    "Rajiv Gandhi School of IP Law (RGSOIPL)",
    "Physics / Chemistry / Mathematics",
    "Architecture & Regional Planning",
    "Other Department / External Institute"
  ],

  // SECTION 2: What is Startup Bootcamp?
  aboutSection: {
    heading: "What is Startup Bootcamp?",
    subHeading: "Ninth Edition • E-Cell IIT Kharagpur",
    officialDescription:
      "Startup Boot Camp (SBC) is the Entrepreneurship Cell, IIT Kharagpur's mentorship programme for early-stage student ventures, now in its ninth edition. Selected startups are paired with founders, alumni, and investors for two rounds of one-on-one mentorship on business model, strategy, and pitch, and the strongest ten pitch live on campus to venture capitalists.",
    stats: [
      { value: "9.0", label: "Ninth Edition", sub: "Mentorship Cohort" },
      { value: "2", label: "Rounds of Mentorship", sub: "1-on-1 Expert Pairing" },
      { value: "Top 10", label: "Campus Finalists", sub: "Live Pitch to VCs" },
      { value: "₹50L+", label: "Incubation & Grants", sub: "STEP IIT Kharagpur" },
      { value: "0%", label: "Zero Equity", sub: "Non-Dilutive Program" }
    ],
    pillars: [
      {
        step: "ROUND 01",
        title: "Strategy & Business Model Teardown",
        format: "1-on-1 Mentorship Session",
        duration: "Deep-Dive Clinic",
        description:
          "Startups are paired with seasoned founders and alumni operators to dissect product-market fit, unit economics, regulatory landscape, and customer acquisition channels.",
        keyTakeaways: [
          "First-principles customer problem validation",
          "Unit economics and monetization sanity-check",
          "Go-to-market and distribution channel roadmap"
        ],
        badge: "MENTORSHIP ROUND 1"
      },
      {
        step: "ROUND 02",
        title: "Pitch Deck & Investment Readiness",
        format: "1-on-1 Mentorship Session",
        duration: "Investor Review",
        description:
          "Founders work with active venture capital investors and alumni angels to polish their pitch narrative, financial forecasts, traction metrics, and demo story.",
        keyTakeaways: [
          "Institutional pitch deck framing and storyline",
          "Valuation frameworks & term-sheet readiness",
          "Q&A stress-testing with active venture investors"
        ],
        badge: "MENTORSHIP ROUND 2"
      },
      {
        step: "GRAND FINALE",
        title: "Top 10 Live Pitch on Campus",
        format: "In-Person Investor Showcase",
        duration: "IIT Kharagpur Campus",
        description:
          "The strongest 10 startups from across India travel to the historic IIT Kharagpur campus to pitch live before a curated panel of institutional venture capitalists and marquee angels.",
        keyTakeaways: [
          "Live stage presentation to 20+ top venture funds",
          "Direct fast-tracked term sheet considerations",
          "STEP IIT Kharagpur incubation and grant access"
        ],
        badge: "ON-CAMPUS DEMO DAY"
      }
    ]
  },

  // SECTION 3: Past Mentors
  pastMentors: [
    {
      id: "mentor-1",
      name: "Arjun Malhotra",
      designation: "Co-Founder",
      organization: "HCL Technologies & Headstrong",
      batchAndDept: "Batch of '70, Electronics & Electrical Communication",
      isAlumnus: true,
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      linkedinUrl: "https://www.linkedin.com/in/arjun-malhotra-549b06/",
      sectorTag: "Deeptech / Enterprise",
      bio: "Pioneer of the Indian IT industry, co-founder of HCL, angel investor and mentor to hundreds of deep tech and software enterprises globally."
    },
    {
      id: "mentor-2",
      name: "Anuradha Acharya",
      designation: "Founder & CEO",
      organization: "Mapmygenome",
      batchAndDept: "Batch of '95, Physics & MIS",
      isAlumnus: true,
      photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
      linkedinUrl: "https://www.linkedin.com/in/anuacharya/",
      sectorTag: "Healthcare / Deeptech",
      bio: "Genomics and healthcare innovator, pioneer in personal genomics in India, mentoring life-sciences, biotech and consumer health startups."
    },
    {
      id: "mentor-3",
      name: "Rahul Jaimini",
      designation: "Co-Founder",
      organization: "Swiggy & WRK@",
      batchAndDept: "Batch of '10, Computer Science & Engineering",
      isAlumnus: true,
      photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      linkedinUrl: "https://www.linkedin.com/in/rahul-jaimini-58535a16/",
      sectorTag: "Consumer / SaaS",
      bio: "Co-founder of Swiggy, scaled India's largest hyper-local delivery network from scratch, now building AI-powered workspace intelligence."
    },
    {
      id: "mentor-4",
      name: "Suvonil Chatterjee",
      designation: "Chief Product & Design Officer",
      organization: "Livspace (Ex-Housing.com, Flipkart)",
      batchAndDept: "Batch of '12, Industrial Engineering",
      isAlumnus: true,
      photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
      linkedinUrl: "https://www.linkedin.com/in/suvonil/",
      sectorTag: "D2C / Consumer",
      bio: "Product and design leader who shaped product architecture at Flipkart, Housing.com, and Livspace. Specializes in UX and conversion loops."
    },
    {
      id: "mentor-5",
      name: "Apoorv Gautam",
      designation: "Partner & Head of India",
      organization: "Guild Capital",
      batchAndDept: "Batch of '11, Mechanical Engineering",
      isAlumnus: true,
      photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
      linkedinUrl: "https://www.linkedin.com/in/apoorvgautam/",
      sectorTag: "Fintech / SaaS",
      bio: "Early-stage venture capitalist backing category-defining consumer, fintech, and cross-border SaaS companies across India and Southeast Asia."
    },
    {
      id: "mentor-6",
      name: "Rohit Koshy",
      designation: "Venture Partner",
      organization: "Speciale Invest",
      batchAndDept: "Batch of '08, Chemical Engineering",
      isAlumnus: true,
      photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
      linkedinUrl: "https://www.linkedin.com/in/rohit-koshy-29007412/",
      sectorTag: "Deeptech / AI-ML",
      bio: "Deep tech venture investor focusing on space-tech, advanced materials, robotics, semiconductors, and green energy innovations."
    },
    {
      id: "mentor-7",
      name: "Siddharth Nautiyal",
      designation: "Partner",
      organization: "Omidyar Network India",
      batchAndDept: "Batch of '98, Electrical Engineering",
      isAlumnus: true,
      photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
      linkedinUrl: "https://www.linkedin.com/in/siddharth-nautiyal-5096181/",
      sectorTag: "Social Impact / Fintech",
      bio: "Invests in technologies driving inclusion across the Next Half Billion in India, spanning micro-commerce, vernacular tech, and financial health."
    },
    {
      id: "mentor-8",
      name: "Prashant Tandon",
      designation: "Co-Founder & CEO",
      organization: "Tata 1mg",
      batchAndDept: "Batch of '04, Chemical Engineering",
      isAlumnus: true,
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      linkedinUrl: "https://www.linkedin.com/in/prashant-tandon-803a601/",
      sectorTag: "Healthcare / D2C",
      bio: "Built India's premier digital health platform 1mg (acquired by Tata Group). Mentors founders on healthcare supply chains and regulatory strategy."
    }
  ] as Mentor[],

  // SECTION 4: Contact Us
  contactSection: {
    heading: "Contact Us",
    subHeading: "Entrepreneurship Cell, IIT Kharagpur",
    description:
      "Have queries regarding your application, mentorship rounds, or on-campus demo day? Reach out to our student coordinators or visit our office at STEP IIT Kharagpur.",
    address: {
      title: "Office of Entrepreneurship Cell",
      building: "Science & Technology Entrepreneurs' Park (STEP)",
      institution: "Indian Institute of Technology Kharagpur",
      location: "Kharagpur, West Bengal - 721302, India",
      landmark: "Opposite Nehru Museum of Asian Heritage"
    },
    coordinators: [
      {
        name: "Suvam Ghosh",
        role: "Associate Manager • Startup Bootcamp",
        department: "IIT Kharagpur",
        phone: "+91 98765 43210",
        whatsapp: "919876543210",
        email: "suvam.ghosh@ecell-iitkgp.org",
        linkedinUrl: "https://www.linkedin.com/company/ecell-iitkgp",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop&q=80"
      },
      {
        name: "Ananya Sharma",
        role: "Associate Manager • Mentorship & Investor Relations",
        department: "IIT Kharagpur",
        phone: "+91 98123 45678",
        whatsapp: "919812345678",
        email: "ananya.sharma@ecell-iitkgp.org",
        linkedinUrl: "https://www.linkedin.com/company/ecell-iitkgp",
        photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80"
      },
      {
        name: "Arjun Verma",
        role: "Head of Cohort Operations",
        department: "IIT Kharagpur",
        phone: "+91 97456 12389",
        whatsapp: "919745612389",
        email: "arjun.verma@ecell-iitkgp.org",
        linkedinUrl: "https://www.linkedin.com/company/ecell-iitkgp",
        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=300&auto=format&fit=crop&q=80"
      }
    ] as Coordinator[],
    helpdeskEmail: "sbc@ecell-iitkgp.org",
    generalEmail: "contact@ecell-iitkgp.org"
  },

  hero: {
    badge: "APPLICATIONS OPEN • COHORT 9.0",
    title: "STARTUP BOOTCAMP 9.0",
    subtitle: "E-CELL IIT KHARAGPUR",
    tagline: "Register your startup for two rounds of one-on-one mentorship and a live pitch before investors on campus.",
    manifesto: [
      "Building a company is not about pitch decks. It is an unrelenting loop: identify friction, build prototypes, put them in front of real users, watch them fail, and iterate until product-market truth emerges.",
      "Startup Bootcamp 9.0 (SBC) gives you two rounds of one-on-one mentorship from founders, alumni, and investors, culminating in a live pitch before venture capitalists on the IIT Kharagpur campus."
    ],
    stats: [
      { value: "9.0", label: "Cohort Edition" },
      { value: "2", label: "1-on-1 Mentorship Rounds" },
      { value: "Top 10", label: "On-Campus VC Pitches" },
      { value: "0%", label: "Equity Taken" }
    ],
    image: "/images/sbc/hero/hero_prototype.jpg"
  },

  journeyStages: [
    {
      id: "round1",
      phase: "ROUND 01 — MENTORSHIP",
      title: "Strategy & Business Model Teardown",
      subtitle: "First-principles validation of problem, customer, and unit economics.",
      description: "During Round 1, selected startups are paired 1-on-1 with founders and alumni operators to dissect product-market fit, unit economics, regulatory moats, and customer acquisition strategies.",
      bulletPoints: [
        "1-on-1 deep-dive with matched alumni founders",
        "Unit economic analysis and pricing strategy",
        "Go-to-market and distribution channel roadmap"
      ],
      image: "/images/sbc/journey/ideation_spark.jpg",
      badgeText: "ROUND 01: STRATEGY"
    },
    {
      id: "round2",
      phase: "ROUND 02 — MENTORSHIP",
      title: "Pitch Deck & Investment Readiness",
      subtitle: "Refining the narrative and financial model with active venture investors.",
      description: "Startups work with venture capital investors and angel syndicates to refine their institutional pitch deck, traction metrics, capitalization table, and investor Q&A readiness.",
      bulletPoints: [
        "Direct 1-on-1 investor pitch teardown",
        "Financial modeling & valuation stress testing",
        "Institutional narrative and traction framing"
      ],
      image: "/images/sbc/journey/testing_iteration.jpg",
      badgeText: "ROUND 02: PITCH DECK"
    },
    {
      id: "finale",
      phase: "STAGE 03 — GRAND FINALE",
      title: "Top 10 Live Pitch on Campus",
      subtitle: "Pitch live before top institutional VCs at the IIT Kharagpur campus.",
      description: "The strongest 10 startups from across India travel to IIT Kharagpur to present their venture live before 20+ marquee venture capitalists, angels, and incubation leaders.",
      bulletPoints: [
        "Live stage presentation to institutional investors",
        "Direct fast-tracked term sheet considerations",
        "STEP IIT Kharagpur incubation and grant access"
      ],
      image: "/images/sbc/journey/pitch_demoday.jpg",
      badgeText: "GRAND FINALE: TOP 10"
    }
  ],

  tracks: [
    {
      id: "saas-enterprise",
      name: "SaaS & AI Frontiers",
      desc: "For startups building applied AI agents, enterprise software, developer tools, and workflow automation.",
      perks: "1-on-1 enterprise mentors, compute credits, VC introductions"
    },
    {
      id: "fintech-consumer",
      name: "Fintech, D2C & Consumer",
      desc: "For ventures rewiring payments, consumer brands, logistics, and digital services across India.",
      perks: "Distribution channels, regulatory mentors, growth teardowns"
    },
    {
      id: "deeptech-healthcare",
      name: "Healthcare & Deeptech",
      desc: "For teams working on biotechnology, hardware, medical devices, space-tech, and sustainability.",
      perks: "Research lab access, patent filing support, prototyping grants"
    }
  ],

  ecosystem: {
    title: "The IIT Kharagpur Advantage",
    subtitle: "Built on seven decades of technological leadership and India's most prolific startup alumni network.",
    description: "Startup Bootcamp leverages the full weight of IIT Kharagpur's institutional ecosystem: Science & Technology Entrepreneurs Park (STEP), Centre of Excellence in AI, advanced fabrication centres, and an alumni network responsible for some of India's largest unicorns and public tech giants.",
    image: "/images/sbc/ecosystem/campus_ecosystem.jpg",
    pillars: [
      { title: "STEP Incubation", desc: "Physical co-working, wet labs, and seed funding support on campus." },
      { title: "Prototyping Grants", desc: "Non-dilutive milestone grants to build physical and software prototypes." },
      { title: "Alumni Angel Network", desc: "Direct mentorship and capital access from senior IIT KGP founders and VCs." },
      { title: "IP & Legal Support", desc: "Complete patent filing, incorporation, and cap table architecture guidance." }
    ]
  },

  timeline: [
    { date: "AUG 01", title: "Applications Open", desc: "Startup submission of idea, sector, founder details, and pitch deck." },
    { date: "AUG 25", title: "Round 1 Mentorship", desc: "1-on-1 business model and strategy teardown with matched mentors." },
    { date: "SEP 15", title: "Round 2 Mentorship", desc: "1-on-1 pitch deck and investment readiness session with VCs." },
    { date: "OCT 10", title: "Top 10 Finalists Announced", desc: "Selection of top 10 startups invited to campus." },
    { date: "OCT 25", title: "Grand Finale Live Pitch", desc: "Live stage pitches before VCs on the IIT Kharagpur campus." }
  ],

  faqs: [
    {
      q: "Who is eligible to apply for Startup Bootcamp (SBC 9.0)?",
      a: "SBC 9.0 is open to early-stage student ventures across India. Teams can range from 1 to 5 members. Cross-college and cross-departmental teams are warmly welcomed."
    },
    {
      q: "Does SBC 9.0 take any equity in our startup?",
      a: "No. Startup Bootcamp 9.0 is a 100% zero-equity, non-dilutive mentorship and acceleration initiative by E-Cell IIT Kharagpur."
    },
    {
      q: "What does the mentorship format look like?",
      a: "Shortlisted startups receive two structured rounds of 1-on-1 mentorship: Round 1 focuses on business model and strategy; Round 2 focuses on pitch deck refinement and investor readiness."
    },
    {
      q: "What happens during the Grand Finale?",
      a: "The top 10 startups pitch live on campus at IIT Kharagpur directly before marquee venture capitalists, angel investors, and STEP incubation leaders."
    }
  ],

  socials: {
    instagram: "https://www.instagram.com/ecell_iitkgp",
    linkedin: "https://www.linkedin.com/company/ecell-iitkgp",
    website: "https://www.ecell-iitkgp.org",
    twitter: "https://twitter.com/ecell_iitkgp",
    youtube: "https://www.youtube.com/@ecell_iitkgp",
    facebook: "https://www.facebook.com/ecell.iitkgp"
  }
};
