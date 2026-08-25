export type NavLink = {
  href: string;
  label: string;
};

export type Leader = {
  name: string;
  role: string;
  image: string;
};

export type Institution = {
  id: string;
  name: string;
  description: string;
  /** Longer copy shown in the institution popup */
  detail: string;
  cta: string;
  href: string;
  image: string;
};

export type Stat = {
  value: string;
  label: string;
  labelLines?: string[];
};

export const siteConfig = {
  name: "Deerwalk Group",
  tagline: "A Nepali family of institutions",
  description:
    "Deerwalk Group brings together schools, a cooperative, a training centre, an institute of technology, and a foundation — independent institutions united by one standard of care.",
  email: "info@deerwalkgroup.com",
  phone: "+977 1 000 0000",
  location: "Kathmandu, Nepal",
  footerBlurb:
    "A family of Nepali institutions in education, technology, finance, and community development.",
  footerBlurbLines: [
    "A family of Nepali institutions in education, technology,",
    "finance, and community development.",
  ],
  nav: [
    { href: "/", label: "About" },
    { href: "/our-story/", label: "Our Story" },
    { href: "/#institutions", label: "Institutions" },
    { href: "/#contact", label: "Contact" },
  ] satisfies NavLink[],
  /** Header Institutions ▾ menu (Figma order) */
  navInstitutions: [
    { href: "/#institution-dwit", label: "DWIT" },
    { href: "/#institution-dss", label: "DSS" },
    { href: "/#institution-dps", label: "DPS" },
    { href: "/#institution-dds", label: "DDS" },
    { href: "/#institution-dbs", label: "DBS" },
    { href: "/#institution-foundation", label: "Deerwalk Foundation" },
    { href: "/#institution-learning-center", label: "Deerwalk Learning Center" },
    { href: "/#institution-coop", label: "Deerwalk Coop" },
  ] satisfies NavLink[],
  hero: {
    eyebrow: "A Nepali family of institutions",
    titleLines: [
      "Learning, technology, and community - ",
      "under one roof.",
    ],
    bodyLines: [
      "Deerwalk Group brings together schools, a cooperative, a training",
      "centre, an institute of technology, and a foundation —",
      "independent institutions united by one standard of care.",
    ],
    cta: { label: "Explore Our Institutions", href: "#institutions" },
    image: "/images/dwg/hero.webp",
  },
  mission:
    "Deerwalk began as a bet that Nepali talent could compete anywhere in the world. Rudra Pandey proved that first in business, building companies that grew from Kathmandu into global markets. Then came a bigger commitment. Education. From Deerwalk Institute of Technology to Deerwalk Sifal School, and later to Dhading, Pokhara, and Bharatpur, the same philosophy has followed every new campus. Read deeply. Think clearly. Build boldly. That mission hasn't changed since the beginning. It's still about nurturing curious minds capable of shaping their own future.",
  founder: {
    titleLine1: "Message From",
    titleLine2: "The Founder",
    name: "Rudra Pandey",
    image: "/images/dwg/founder.webp",
    body: "Deerwalk began as a bet that Nepali talent could compete anywhere in the world. Rudra Pandey proved that first in business, building companies that grew from Kathmandu into global markets. Then came a bigger commitment. Education. From Deerwalk Institute of Technology to Deerwalk Sifal School, and later to Dhading, Pokhara, and Bharatpur, the same philosophy has followed every new campus. Read deeply. Think clearly. Build boldly. That mission hasn't changed since the beginning. It's still about nurturing curious minds capable of shaping their own future.",
  },
  leadership: {
    eyebrow: "Leadership",
    title: "The people steering the Group.",
    note: "A public leadership page — with real depth on click, not just names — builds trust before a family or partner ever visits campus.",
    people: [
      {
        name: "Rudra Pandey",
        role: "Founder",
        image: "/images/dwg/leader-rudra.webp",
      },
      {
        name: "Hitesh Karki",
        role: "Chairperson",
        image: "/images/dwg/leader-hitesh.webp",
      },
      {
        name: "Samjhana Pokhrel",
        role: "Senior Vice President of Operations",
        image: "/images/dwg/leader-samjhana.webp",
      },
      {
        name: "Pooja Neupane",
        role: "Director of Finance",
        image: "/images/dwg/leader-pooja.webp",
      },
    ] satisfies Leader[],
  },
  institutions: {
    title: "Our Institutions",
    subtitle:
      "Each card here should be a real click-through to that institution's own site — not a dead end.",
    items: [
      {
        id: "dwit",
        name: "Deerwalk Institute of Technology",
        description:
          "Bachelor's degree programs in computer science & applications — the group's flagship institution.",
        detail:
          "In 2011, Deerwalk Institute of Technology began with just one course, BSc. CSIT. Within five years, it had added BCA, affiliated with Tribhuvan University, and grown into one of Nepal's leading IT colleges. Its foundation was never really about the courses on offer. It was about the philosophy behind them. Strong theory. Real practical skill. Students who leave capable of more than passing an exam. That philosophy is still tested every year, when eighth semester students step into internships with companies that share DWIT's own campus.",
        cta: "Visit DWIT site →",
        href: "https://deerwalk.edu.np/DWIT/",
        image: "/images/dwg/inst-dwit.webp",
      },
      {
        id: "dps",
        name: "Deerwalk Pokhara School",
        description:
          "Foundational schooling — the first stop on the Deerwalk path.",
        detail:
          "Deerwalk Pokhara School carries the same Deerwalk standard into the lakeside city — read deeply, write clearly, and think logically from the earliest years. The campus was never meant to be only about grades on a report card. It was about the habits behind them. Curiosity in the classroom. Confidence outside it. Students who leave ready for more than the next exam. That promise is renewed every term, when classrooms, clubs, and community work ask young learners to practice what Deerwalk believes every day.",
        cta: "Visit DPS site →",
        href: "https://www.deerwalk.edu.np/pokhara-school",
        image: "/images/dwg/inst-pokhara.webp",
      },
      {
        id: "dds",
        name: "Deerwalk Dhading School",
        description:
          "Quality school education in Dhading, the founder's hometown.",
        detail:
          "Deerwalk Dhading School opened in Rudra Pandey's hometown with a simple conviction: quality education should not stop at the big cities. What began as a local commitment quickly became a full Deerwalk campus. Its foundation was never only about buildings and textbooks. It was about the philosophy behind them. Strong academics. Real character. Students who leave capable of shaping their own future. That idea is proven each year, when Dhading families trust the school to raise curious minds with the same rigor found in Kathmandu.",
        cta: "Visit DDS site →",
        href: "https://deerwalk.edu.np/dhading-school",
        image: "/images/dwg/inst-dhading.webp",
      },
      {
        id: "dss",
        name: "Deerwalk Sifal School",
        description:
          "Holistic secondary education preparing students for higher study.",
        detail:
          "Deerwalk Sifal School began with a distinctive philosophy: Read. Write. Code. From the first cohorts onward, the school paired academic rigor with character and all-round growth. Its foundation was never really about covering a syllabus alone. It was about the habits behind learning. Deep reading. Clear writing. Logical thinking. Students who leave ready for college and for life beyond exams. That philosophy is tested every year, when Sifal students take on projects, presentations, and pathways that ask them to show what they can build.",
        cta: "Visit DSS site →",
        href: "https://deerwalk.edu.np/sifal-school",
        image: "/images/dwg/inst-sifal.webp",
      },
      {
        id: "dbs",
        name: "Deerwalk Bharatpur School",
        description:
          "Secondary education with a focus on discipline and character.",
        detail:
          "Deerwalk Bharatpur School extended the Deerwalk path into Chitwan with the same quiet ambition that shaped every other campus. Growth here was never only about opening another location on a map. It was about the philosophy behind the work. Discipline in study. Strength of character. Students who leave capable of more than scoring well on paper. That standard is renewed each year, when Bharatpur classrooms, sports fields, and community moments ask learners to practice curiosity, clarity, and responsibility together.",
        cta: "Visit DBS site →",
        href: "https://deerwalk.edu.np/bharatpur-school",
        image: "/images/dwg/inst-bharatpur.webp",
      },
      {
        id: "learning-center",
        name: "Deerwalk Training Center",
        description:
          "Professional and corporate upskilling — the group's fastest route to employment.",
        detail:
          "Deerwalk Training Center began as the group's fastest bridge from learning to work — practical courses for students and professionals who needed skills the market would recognize. Its foundation was never really about certificates on a wall. It was about the philosophy behind them. Strong fundamentals. Real applied practice. Learners who leave capable of more than finishing a module. That promise is tested every cohort, when trainees move into projects, placements, and workplaces that expect Deerwalk-ready confidence from day one.",
        cta: "Visit DTC site →",
        href: "https://deerwalktrainingcenter.com/",
        image: "/images/dwg/inst-training.webp",
      },
      {
        id: "coop",
        name: "Deerwalk Coop",
        description:
          "Member-owned cooperative supporting families across the Deerwalk community.",
        detail:
          "Deerwalk Coop grew alongside the campuses as a member-owned cooperative for families across the Deerwalk community. What began as mutual support became a trusted network for shared growth. Its foundation was never really about transactions alone. It was about the philosophy behind belonging. Shared responsibility. Practical care. Members who leave each season stronger than they arrived. That idea is still proven every year, when households, students, and partners rely on the Coop to connect education, livelihood, and community under one roof.",
        cta: "Visit DC site →",
        href: "#",
        image: "/images/dwg/inst-bharatpur.webp",
      },
      {
        id: "foundation",
        name: "Deerwalk Foundation",
        description:
          "Community development and outreach programs across the Deerwalk ecosystem.",
        detail:
          "Deerwalk Foundation began as the outreach arm of the ecosystem — extending opportunity beyond campus gates to communities that needed support. Growth here was never only about programs on a calendar. It was about the philosophy behind service. Access to learning. Dignity in partnership. People who leave each initiative with more capability than before. That mission is renewed every year, when Foundation projects, scholarships, and local collaborations ask Deerwalk to prove that education and community care still move together.",
        cta: "Visit DF site →",
        href: "#",
        image: "/images/dwg/inst-sifal.webp",
      },
    ] satisfies Institution[],
  },
  analytics: {
    title: "Analytics",
    stats: [
      { value: "20+", label: "Years of operation" },
      { value: "8", label: "Institutions, one group" },
      {
        value: "10,000+",
        label: "Students & members served",
        labelLines: ["Students & members", "served"],
      },
      { value: "500+", label: "Faculty & staff" },
    ] satisfies Stat[],
  },
  footer: {
    ecosystem: [
      { href: "https://deerwalk.edu.np/sifal-school", label: "Schools" },
      { href: "#", label: "Deerwalk Cooperative" },
      { href: "https://deerwalktrainingcenter.com/", label: "Training Center" },
      { href: "https://deerwalk.edu.np/DWIT/", label: "DWIT" },
      { href: "#", label: "Foundation" },
    ] satisfies NavLink[],
    company: [
      { href: "/", label: "About" },
      { href: "/our-story/", label: "Our Story" },
      { href: "/#leadership", label: "Leadership" },
      { href: "#", label: "Careers" },
      { href: "/#contact", label: "Contact" },
    ] satisfies NavLink[],
  },
  logo: "/images/dwg/logo.webp",
};
