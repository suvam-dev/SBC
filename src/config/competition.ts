export const competition = {
  name: "THE GREAT REWIRING",
  subtitle: "ABC E-Cell's Case-Build Competition 2026",
  organization: "ABC E-Cell",
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
  registrationUrl: "#register",
  brochureUrl: "#case",
  surveyUrl: "#survey",

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
        linkUrl: "#register"
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
      description: "Direct entry to ABC E-Cell Incubation Pool + ₹10 Lakhs Cash + Angel Investor Pitch Session"
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
    heading: "ABC E-Cell, IIT Kharagpur",
    subheading: "Fostering the next generation of Indian business builders since 2006.",
    description: "ABC Entrepreneurship Cell at IIT Kharagpur is recognized as one of India's premier student-run entrepreneurship bodies. Over the past two decades, our initiatives have catalyzed hundreds of venture-backed startups, empowered tens of thousands of student founders, and set the national benchmark for business case competitions.",
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
      a: "No. Participation in the ABC E-Cell IIT Kharagpur Case Competition 2026 is completely free."
    }
  ],

  socials: {
    instagram: "https://instagram.com/ecell_iitkgp",
    linkedin: "https://linkedin.com/company/ecell-iitkgp",
    website: "https://ecell-iitkgp.org",
    email: "casecomp2026@ecell-iitkgp.org"
  }
};
