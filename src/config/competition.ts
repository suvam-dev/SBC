export const competition = {
  name: "THE GREAT REWIRING",
  subtitle: "SBC E-Cell's Case-Build Competition 2026",
  organization: "SBC E-Cell",
  institution: "IIT Kharagpur",
  tagline: "India's Flagship Case & Product Strategy Competition",
  theme: "THE GREAT REWIRING: AGENTIC INDIA 2026",
  heroManifesto: [
    "Every business in India built on owning your attention, your habit, or your indecision will discover that the next wave has none of the three. This is the Great Rewiring.",
    "In this year's edition, teams pick unique and interesting problems India's consumers have shared first-hand, find surprising insights nobody noticed, design the agent or strategy that solves the problem, then take it to the companies who own the rails and find out where it breaks."
  ],
  tracksOverview: "Two tracks: one for product strategy to work out what to build, and one for builders who build it. No code is required to advance, reach the finale, or win.",
  prizePool: "₹20 lakh",
  prizePoolSubtext: "in cash prizes + VC incubation access & mentorship",
  eligibilityCallout: "Open to full-time college students across India, in any discipline.",
  registrationUrl: "/register",
  brochureUrl: "#case",
  surveyUrl: "#survey",

  opportunitySpaces: [
    {
      id: "whatsapp-filing",
      title: "The Modern Desi Filing System",
      category: "Personal Data & Identity",
      tag: "VINTAGE POSTCARD #01",
      badge: "CONSUMER WORKAROUND",
      description: "A WhatsApp chat with yourself holding PAN card photos, insurance PDFs, car RC, and receipts you meant to remember. How do agents index, retrieve, and act on raw unstructured media without invasive apps?",
      suggestedRails: ["Voice & Regional AI", "Payments & Escrow", "Identity & Locker"],
      popular: true
    },
    {
      id: "holiday-group",
      title: "The Holiday Group & Tatkal Chaos",
      category: "Group Decision & Travel",
      tag: "VINTAGE POSTCARD #02",
      badge: "COORDINATION FRICTION",
      description: "Countless options, multiple opinions, weeks of indecision, and every good hotel booked. Can an autonomous agent gather group constraints, negotiate tradeoffs, and execute synchronous bookings on IRCTC/OTAs?",
      suggestedRails: ["Voice & Language", "Payments & Authorisation", "Logistics & Fulfillment"],
      popular: true
    },
    {
      id: "mandi-logistics",
      title: "The Mandi & Small Vendor Rail",
      category: "Supply Chain & Commerce",
      tag: "VINTAGE POSTCARD #03",
      badge: "BHARAT COMMERCE",
      description: "Small merchants, kiranas, and mandi suppliers communicating in regional dialects with zero formal digital ERPs. Translating spoken orders directly into logistics pickup, inventory dispatch, and UPI escrow.",
      suggestedRails: ["Voice Interface", "Logistics & Physical Action", "UPI Escrow"],
      popular: false
    },
    {
      id: "vernacular-banking",
      title: "Vernacular Voice Banking & Senior Concierge",
      category: "Fintech & Accessibility",
      tag: "VINTAGE POSTCARD #04",
      badge: "INCLUSION & FINTECH",
      description: "Millions of Tier 2-4 Indians struggle with complex banking apps, OTP scams, and KYC bureaucracy. Building an ultra-safe, voice-first agent that speaks 12+ Indian languages with fail-safe human verification.",
      suggestedRails: ["Voice & Language", "Payments & Authorisation", "Security Rails"],
      popular: true
    },
    {
      id: "family-bookkeeping",
      title: "Messy Family Bookkeeping & Tax Compliance",
      category: "Finance & Taxation",
      tag: "VINTAGE POSTCARD #05",
      badge: "TAX & COMPLIANCE",
      description: "Scattered paper receipts, mixed personal and business expenses, and year-end panic filing. Automatic invoice parsing, GST input credit reconciliation, and proactive deduction discovery.",
      suggestedRails: ["Payments & Authorisation", "Document Intelligence", "Accounting Rails"],
      popular: false
    },
    {
      id: "custom-problem",
      title: "Custom Problem: Propose Your Own Friction",
      category: "Open Innovation",
      tag: "OPEN THESIS #06",
      badge: "OPEN INNOVATION",
      description: "Notice a unique, infuriating friction in everyday Indian consumer or enterprise life? Frame your own thesis backed by primary user evidence and build the strategy/agent to rewire it.",
      suggestedRails: ["Voice & Language", "Payments & Authorisation", "Logistics & Physical Action"],
      popular: false
    }
  ],

  partnerTiers: {
    primary: { title: "In partnership with", name: "IIT KGP INNOVATION HUB" },
    rails: [
      { role: "Logistics", name: "DELHIVERY" },
      { role: "Voice Interface", name: "GNANI.AI" },
      { role: "Payments", name: "PINE LABS" },
      { role: "Venture Partner", name: "BHARAT VENTURES" }
    ]
  },

  tickerPhases: [
    { phase: "PHASE I", title: "PROBLEM DISCOVERY", status: "COMPLETED" },
    { phase: "PHASE II", title: "REGISTRATION", status: "OPEN NOW" },
    { phase: "PHASE III", title: "SOLUTION ASSEMBLY", status: "FROM 31 AUG" },
    { phase: "PHASE IV", title: "GRAND FINALE AT IIT KHARAGPUR", status: "10 OCT" }
  ],

  liveFeed: {
    newUpdates: [
      {
        date: "15 AUGUST",
        text: "Registration is open to students in every discipline. Form your team, then answer a few questions about who you are and how you think.",
        linkText: "Register Now →",
        linkUrl: "/register"
      },
      {
        date: "06 AUGUST",
        text: "The Great Rewiring nationwide survey is live. Readers and consumers across India are stating all the friction points they face every day, and their answers become the problems teams pick from.",
        linkText: "Start with yours →",
        linkUrl: "#survey"
      }
    ],
    upcoming: [
      {
        date: "25 AUGUST",
        text: "Around 30 curated opportunity spaces are published, drawn directly from the survey with verified consumer signals behind each. This is the list teams pick from."
      },
      {
        date: "31 AUGUST",
        text: "Solution assembly opens. Teams submit how their strategy or product rewires the friction for the problem they've identified."
      },
      {
        date: "15 SEPTEMBER",
        text: "Shortlist announcement for the Top 20 National Finalists."
      },
      {
        date: "10 OCTOBER",
        text: "Grand Finale Live Pitching & Demonstration at the IIT Kharagpur Campus."
      }
    ]
  },

  caseNarrative: {
    title: "The Case",
    introParagraphs: [
      "Sometime soon, Indians will stop doing things they've done for decades. They'll stop comparing the same product across three e-commerce apps before they buy it. They'll stop sharing their location with every delivery partner on WhatsApp. They'll stop setting a 9:58 AM alarm to fight for a tatkal ticket.",
      "An intelligent system will do all of it, and more.",
      "For twenty years, Indian businesses have been built on owning your attention, your habit, or your indecision. The next decade will rewrite all three. As value pools shift from legacy platforms to automated intelligence, this competition exists to work out where value goes, in what order, and what strange new companies get built in the space that opens up."
    ],
    stages: [
      {
        number: "Stage 1",
        name: "Choose",
        subheading: "First, you'll have to pick what you want to solve.",
        description: "You'll get actual problems handed over by actual humans. Thousands of consumers and professionals across India are submitting the annoying, frustrating, and repetitive parts of their daily lives—from health and fitness to tax compliance, travel logistics, and messy family bookkeeping. We cluster those into dozens of verified opportunity spaces: each one a job someone urgently wants done, with evidence behind it, and no good solution yet.",
        card: {
          tag: "VINTAGE POSTCARD #01",
          title: "THE HOLIDAY GROUP",
          subtitle: "Countless options, multiple opinions, weeks of indecision. Every good place gone. Happens in every friends' WhatsApp chat.",
          punchline: "But it doesn't have to be this way.",
          meta: "5 minutes. Anonymous. Results come to you first.",
          buttonText: "Tell your problems",
          theme: "coral"
        }
      },
      {
        number: "Stage 2",
        name: "Assembly",
        subheading: "Then you put the pieces together to design your solution.",
        description: "This is where your product strategy chops are tested. You'll have to discover a unique consumer insight around which you assemble your solution. As with most breakthrough products, this insight is often unexpected and surprising—sometimes it's about asking users to hand over something they own, like their payment history or WhatsApp media. In return, you make the case for how your solution fundamentally rewires their life.",
        railsHeading: "Finally, you'll design across the three essential rails of Indian commerce:",
        rails: [
          { name: "Voice & Language", desc: "How it converses with everyday Indians in regional dialects." },
          { name: "Payments & Authorisation", desc: "What it is allowed to do, how it handles UPI & escrow, and how value flows." },
          { name: "Logistics & Physical Action", desc: "How digital decisions translate into real-world fulfillment." }
        ],
        card: {
          tag: "CONSUMER TEARDOWN #02",
          title: "THE MODERN DESI FILING SYSTEM",
          subtitle: "A WhatsApp chat with yourself holding PAN card photos, insurance PDFs, car RC, and receipts you meant to remember.",
          punchline: "The chat is very messy, but it works.",
          meta: "Over 1,000+ student teams pick the worst of these hacks and build solutions.",
          buttonText: "Explore Opportunity",
          theme: "mint"
        }
      },
      {
        number: "Stage 3",
        name: "Build & Test",
        subheading: "This is when you test your solution against the real world.",
        description: "You'll take your solution to the companies that are at the frontier of building infrastructure in India. In this round, you'll interact with their teams, get access to their rails and APIs, and build functional or strategic prototypes. Teams on the strategy track will present deep unit economics and user journeys; teams on the builder track will deploy functional agents.",
        card: {
          tag: "SYSTEMIC BOTTLENECK #03",
          title: "THE DORMANT KYC FOLDER",
          subtitle: "A physical plastic folder you drag to your bank every few months. Attest the same documents and submit the same forms.",
          punchline: "It shouldn't be this way. So, tell us your problems.",
          meta: "1,000+ teams competing for ₹20 Lakh in prizes.",
          buttonText: "Submit Your Case",
          theme: "yellow"
        }
      }
    ]
  },

  tracks: [
    {
      id: "strategy",
      title: "Track A: Product & Business Strategy",
      badge: "NO CODE REQUIRED",
      tagline: "For strategic thinkers, consultants, and product visionaries",
      points: [
        "In-depth market breakdown and consumer pain-point analysis",
        "Economic viability, pricing models & unit economics (CAC, LTV, Take Rate)",
        "Go-to-market playbook tailored for Tier 1 to Tier 4 India",
        "Wireframes, user flows, and ecosystem partnership architecture"
      ]
    },
    {
      id: "builder",
      title: "Track B: Builder & AI Agent Track",
      badge: "LOW-CODE / FULL-STACK",
      tagline: "For engineers, developers, and technical founders",
      points: [
        "Working prototype or agentic workflow executing end-to-end tasks",
        "Integration with simulated payment, voice, or logistics APIs",
        "Architecture teardown: LLM routing, memory, tool use & reliability",
        "Live interactive demo during the Grand Finale at IIT Kharagpur"
      ]
    }
  ],

  prizes: [
    {
      place: "Grand Champion",
      amount: "₹10,00,000",
      description: "Direct entry to SBC E-Cell Incubation Pool + ₹10 Lakhs Cash + Angel Investor Pitch Session"
    },
    {
      place: "First Runner-Up",
      amount: "₹5,00,000",
      description: "Cash prize + Direct Fast-track to National Entrepreneurship Summit Semi-Finals"
    },
    {
      place: "Second Runner-Up",
      amount: "₹2,50,000",
      description: "Cash prize + Cloud Credits & Tech Partner Grants ($25,000+ value)"
    },
    {
      place: "Special Category Awards",
      amount: "₹2,50,000",
      description: "Best Voice AI Solution, Best Rural Fintech Strategy, and Best Student Innovation"
    }
  ],

  eligibility: [
    { title: "Academic Status", desc: "Undergraduate, Postgraduate, and PhD students enrolled in any recognized institution across India." },
    { title: "Team Composition", desc: "Teams of 1 to 3 members. Cross-college and cross-discipline teams are highly encouraged." },
    { title: "No Tech Barrier", desc: "Strategy track requires zero coding. Submissions judged purely on analytical rigor and strategic depth." },
    { title: "Original Work", desc: "All submissions must be original thinking formulated for the 2026 challenge prompts." }
  ],

  judgingCriteria: [
    { title: "Consumer Insight", weight: "25%", desc: "Depth of understanding of the unstated consumer friction and psychological trigger." },
    { title: "Strategic Rigor", weight: "20%", desc: "Robust unit economics, defensibility, and market sizing grounded in real Indian data." },
    { title: "Feasibility & Rails", weight: "20%", desc: "How realistically the solution plugs into existing payment, voice, and logistics infrastructure." },
    { title: "Creativity & Novelty", weight: "20%", desc: "Originality of the business model rather than copying existing Western SaaS frameworks." },
    { title: "Clarity & Pitch", weight: "15%", desc: "Precision of the submission deck, clear storytelling, and executive-ready communication." }
  ],

  surveySection: {
    kicker: "The Great Rewiring Survey",
    heading: "What annoys you most about daily digital life in India?",
    description: "Before you solve a problem, you must feel it. We've polled thousands of students, startup founders, and consumers across Bharat to uncover daily digital workarounds. Submit your own friction point or explore the live dataset.",
    stats: [
      { value: "4,200+", label: "Friction Stories Recorded" },
      { value: "30", label: "Curated Challenge Stacks" },
      { value: "₹20L", label: "Capital Pool for Solutions" }
    ]
  },

  aboutEcell: {
    heading: "SBC E-Cell, IIT Kharagpur",
    subheading: "Fostering the next generation of Indian business builders since 2006.",
    description: "SBC Entrepreneurship Cell at IIT Kharagpur is recognized as one of India's premier student-run entrepreneurship bodies. Over the past two decades, our initiatives have catalyzed hundreds of venture-backed startups, empowered tens of thousands of student founders, and set the national benchmark for business case competitions.",
    stats: [
      { number: "20+", label: "Years of Legacy" },
      { number: "150K+", label: "Student Network" },
      { number: "₹50Cr+", label: "Funding Raised by Alumni" },
      { number: "500+", label: "College Chapters" }
    ]
  },

  faqs: [
    {
      q: "Can non-technical students participate in the Case Competition?",
      a: "Yes! Track A (Product & Business Strategy) is 100% no-code. You will be evaluated on strategy, market insight, business models, and feasibility."
    },
    {
      q: "Can team members be from different colleges or degrees?",
      a: "Absolutely. Cross-institution and cross-departmental teams (e.g. an engineering student paired with an MBA or design student) are warmly welcomed."
    },
    {
      q: "What is the format of the initial submission?",
      a: "An executive summary deck (maximum 6 slides) or a 3-page strategy memo detailing the chosen problem space, consumer insight, and proposed solution architecture."
    },
    {
      q: "Is there any registration fee?",
      a: "No. Participation in the SBC E-Cell IIT Kharagpur Case Competition 2026 is completely free."
    }
  ],

  registrationFaqs: [
    {
      q: "Can I edit my team details or problem statement after registering?",
      a: "Yes. Once registered, your Team Lead will receive an official Entry Confirmation Code. You can update your submission deck and thesis anytime before Phase III closes on 31 August."
    },
    {
      q: "Can I participate as a solo individual founder?",
      a: "Yes, teams can consist of 1, 2, or 3 students. Solo participants are evaluated on the exact same criteria."
    },
    {
      q: "When will the dataset and API rails sandbox be provided?",
      a: "Teams that complete Stage II registration will receive instant access to the curated Problem Dossiers, and shortlisted teams for Phase III will be granted direct API sandbox keys from Delhivery, Gnani.ai, and Pine Labs."
    },
    {
      q: "What credentials do we need for student verification?",
      a: "During the initial registration, simply submit your valid college roll number/email. Shortlisted teams reaching the Grand Finale at IIT Kharagpur will be asked to present their official Institute ID card."
    }
  ],

  socials: {
    instagram: "https://instagram.com/ecell_iitkgp",
    linkedin: "https://linkedin.com/company/ecell-iitkgp",
    website: "https://ecell-iitkgp.org",
    email: "casecomp2026@ecell-iitkgp.org"
  }
};
