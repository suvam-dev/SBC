export const sbcConfig = {
  name: "STARTUP BOOTCAMP",
  shortName: "SBC",
  institution: "IIT KHARAGPUR",
  edition: "COHORT 2026",
  tagline: "Where raw student ideas transform into venture-backed companies.",
  subTagline: "India's Flagship University Venture Acceleration Program",
  applyUrl: "#apply",
  brochureUrl: "#journey",

  hero: {
    badge: "APPLICATIONS OPEN • COHORT '26",
    title: "STARTUP BOOTCAMP",
    subtitle: "IIT KHARAGPUR",
    tagline: "The 12-week venture acceleration program turning ambitious student founders into category-defining companies.",
    manifesto: [
      "Building a company is not about pitch decks. It is an unrelenting loop: identify friction, build prototypes, put them in front of real users, watch them fail, and iterate until product-market truth emerges.",
      "Startup Bootcamp (SBC) gives you the capital, mentorship, fabrication labs, and venture access to compress three years of founder learning into twelve intensive weeks at IIT Kharagpur."
    ],
    stats: [
      { value: "₹50L+", label: "Grant & Seed Pool" },
      { value: "12 Weeks", label: "Intensive Sprints" },
      { value: "50+ VCs", label: "Demo Day Investors" },
      { value: "0% Equity", label: "University Grant" }
    ],
    image: "/images/sbc/hero/hero_prototype.jpg"
  },

  journeyStages: [
    {
      id: "spark",
      phase: "01 — THE SPARK",
      title: "Problem Discovery & Unfair Insights",
      subtitle: "Great companies begin by noticing what everyone else accepts as broken.",
      description: "You don't start with a solution; you start with an obsession over a specific consumer or industrial friction. During the first sprint of SBC, cohort teams dissect market data, conduct user interviews across Tier 1-4 India, and formulate crisp, non-obvious business theses.",
      bulletPoints: [
        "First-principles customer teardowns",
        "Market sizing & regulatory moat mapping",
        "Validation sprints with actual enterprise & consumer testbeds"
      ],
      image: "/images/sbc/journey/ideation_spark.jpg",
      badgeText: "PHASE 01: WEEKS 1–3"
    },
    {
      id: "build",
      phase: "02 — THE BUILD",
      title: "Rapid Prototyping & Technical Rails",
      subtitle: "Move from whiteboards to functional architecture in days, not months.",
      description: "Armed with IIT Kharagpur's research labs, high-performance computing clusters, and Tinkering fabrication hubs, teams rapidly engineer v0.1 prototypes. Whether you are deploying agentic AI pipelines or assembling custom IoT telemetry, SBC provides the tooling and engineering support.",
      bulletPoints: [
        "Access to advanced prototyping labs & compute clusters",
        "API sandboxes for UPI, ONDC, logistics, and telecom rails",
        "Daily technical standups with EIRs and staff architects"
      ],
      image: "/images/sbc/journey/prototype_build.jpg",
      badgeText: "PHASE 02: WEEKS 4–6"
    },
    {
      id: "iterate",
      phase: "03 — TEST & ITERATE",
      title: "User Friction, Failure & Re-Engineering",
      subtitle: "The prototype will break. That is where real venture building begins.",
      description: "No business plan survives contact with real customers. Teams deploy their MVP to beta cohorts, capture behavioral telemetry, ruthlessly diagnose failure modes, and pivot based on empirical truth rather than founder intuition.",
      bulletPoints: [
        "Structured beta deployment to 10,000+ campus & network users",
        "Unit economic analysis (CAC, LTV, Retention Cohorts)",
        "Rapid design sprints and weekly product teardowns"
      ],
      image: "/images/sbc/journey/testing_iteration.jpg",
      badgeText: "PHASE 03: WEEKS 7–9"
    },
    {
      id: "pitch",
      phase: "04 — SCALE & DEMO DAY",
      title: "The Pitch, Capital & Venture Launch",
      subtitle: "Present validated traction to India's top seed funds and angel syndicates.",
      description: "The culmination of SBC is the Grand Demo Day at the IIT Kharagpur campus amphitheater. Founders present their validated metrics, product demos, and expansion roadmaps to 50+ institutional VCs, marquee angel investors, and venture accelerators.",
      bulletPoints: [
        "Direct angel syndicate & seed fund syndicate evaluations",
        "Fast-tracked term sheets and incubation at STEP IIT Kharagpur",
        "Up to ₹50 Lakhs in non-dilutive innovation grants"
      ],
      image: "/images/sbc/journey/pitch_demoday.jpg",
      badgeText: "PHASE 04: WEEKS 10–12"
    }
  ],

  tracks: [
    {
      id: "deeptech",
      name: "AI & DeepTech Frontiers",
      desc: "For teams leveraging applied AI agents, robotics, quantum algorithms, semiconductors, and edge computing.",
      perks: "Compute credits, GPU cluster access, research faculty advisory"
    },
    {
      id: "fintech-consumer",
      name: "Bharat Fintech & Consumer Rails",
      desc: "For startups rewiring commerce, credit access, supply chains, vernacular interfaces, and SME operating systems.",
      perks: "Direct sandbox integrations, regulatory mentors, distribution testbeds"
    },
    {
      id: "climate-hardware",
      name: "ClimateTech, Energy & Hardware",
      desc: "For ventures building battery tech, EV powertrains, solar storage, circular economy, and agritech systems.",
      perks: "Heavy fabrication workshop, testing benches, patent support"
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
    { date: "AUG 01", title: "Applications Open", desc: "Online submission of problem space, founder background, and early thesis." },
    { date: "AUG 20", title: "Cohort Selection", desc: "Top 30 startup teams selected for the 12-week SBC immersion." },
    { date: "AUG 25", title: "Bootcamp Kickoff", desc: "Sprint 01 begins on campus: market teardowns & prototyping kickoff." },
    { date: "SEP 30", title: "Mid-Term Product Review", desc: "Working MVP demos, user telemetry review & mentor matching." },
    { date: "OCT 20", title: "Grand Demo Day", desc: "Live stage pitches to 50+ institutional investors at IIT Kharagpur." }
  ],

  faqs: [
    {
      q: "Who is eligible to apply for Startup Bootcamp (SBC)?",
      a: "SBC is open to undergraduate, postgraduate, and PhD student teams across India. Teams can range from 1 to 4 members. Solo founders with strong technical or domain thesis are also welcome."
    },
    {
      q: "Does SBC take equity in student startups?",
      a: "No. Startup Bootcamp provides zero-equity innovation grants and free incubation resources during the 12-week cohort."
    },
    {
      q: "Do I need a fully working product before applying?",
      a: "No. You need a clear problem identification, deep customer understanding, and a clear vision of what prototype you intend to build during Sprint 01."
    },
    {
      q: "Can cross-college teams apply?",
      a: "Yes. Cross-disciplinary and cross-university founder collaborations are strongly encouraged."
    }
  ],

  socials: {
    instagram: "https://instagram.com/sbc_iitkgp",
    linkedin: "https://linkedin.com/company/sbc-iitkgp",
    website: "https://sbc-iitkgp.org",
    email: "bootcamp@ecell-iitkgp.org"
  }
};
