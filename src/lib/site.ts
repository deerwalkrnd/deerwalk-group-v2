export type NavLink = {
  href: string;
  label: string;
};

export type Leader = {
  name: string;
  role: string;
  image: string;
  /** Bio shown in the leadership popup */
  bio: string;
  /** CSS object-position for the popup photo crop */
  imagePosition?: string;
};

export type Institution = {
  id: string;
  name: string;
  description: string;
  /** Longer copy shown in the institution popup */
  detail: string;
  cta: string;
  /** Modal link label; defaults to "Visit the Website" */
  linkLabel?: string;
  href: string;
  image: string;
  type: string;
};

export type Stat = {
  value: string;
  label: string;
};

export const siteConfig = {
  name: "Deerwalk Group",
  tagline: "A Nepali family of institutions",
  description:
    "Deerwalk Group brings together schools, a cooperative, a training centre, an institute of technology, and a foundation — independent institutions united by one standard of care.",
  email: "",
  phone: "01-4585424",
  location: "Sifal, Kathmandu, Nepal",
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
    { href: "/#institution-learningcenter", label: "Deerwalk Learning Center" },
    { href: "/#institution-trainingcenter", label: "Deerwalk Training Center" },
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
    body: "Deerwalk started with a simple idea. Build things that matter.  Over the years, that idea has taken us into technology, education, training, and several other areas.  Our businesses may be different, but our values remain the same. We believe in good people, hard work, doing things right, and always looking for a better way.  We believe in creating opportunities. We believe in learning and getting better. We believe in thinking differently and having the courage to try.  Oftentimes, we choose a less treaded path because we believe it is the right one. We trust our judgment, stand by our convictions, and are willing to take the road less traveled.  We are still learning. We are still building. And we are still figuring things out.  That is what makes the journey exciting.  Deerwalk is a group of people who want to build things that are meaningful, lasting, and impactful.",
  },
  leadership: {
    eyebrow: "Leadership",
    title: "The people steering the Group.",
    note: "A public leadership page — with real depth on click, not just names — builds trust before a family or partner ever visits campus.",
    people: [
      {
        name: "Rudra Pandey",
        role: "Chairperson Emeritus / Founder",
        image: "/images/dwg/leader-rudra.webp",
        bio: "Rudra is a pioneer in the software outsourcing industry in Nepal with significant IT experience in the financial service industry. He received his Bachelor's degree in Electrical Engineering from Pakistan and PhD in Economics from Northeastern University, USA. His vision is to create a comprehensive learning in Nepal focusing on technology and its application for the benefit of the country.",
      },
      {
        name: "Hitesh Karki",
        role: "Chairperson",
        image: "/images/dwg/leader-hitesh.webp",
        bio: "Hitesh's core responsibility is to look after the curriculum, ensure timely execution of classes and help connect the students with the happenings of the industry. He completed his Bachelor's degree in Computer Science, from Ferguson College, Pune University, his MBA (Executive) from Kathmandu University (KU) and is currently pursuing his PhD from Kathmandu University.",
      },
      {
        name: "Samjhana Pokhrel",
        role: "Senior Vice President (SVP) of Operations",
        image: "/images/dwg/leader-samjhana.webp",
        imagePosition: "center 18%",
        bio:"Samjhana Pokhrel brings over eight years of experience in higher education, with expertise in Admissions, Administration, Examination, Placement, and institutional operations. As SVP of Operations, she focuses on operational excellence, academic quality, innovation, and strategic institutional growth. She holds a Bachelor’s in Information Management, a Master’s in English Literature from Pokhara University, and a Master’s in Data Science from the University of Westminster, London. With her interdisciplinary background and strong academic and administrative insight, she is committed to fostering an efficient, innovative, and student-centered academic environment.",
      },
      {
        name: "Pooja Neupane",
        role: "Director of Finance",
        image: "/images/dwg/leader-pooja.webp",
        bio: "Pooja Neupane has recently assumed the role of Associate Director of Finance at Deerwalk Group Limited. Holding a Chartered Accountant designation from the Institute of Chartered Accountants of India, her professional journey includes notable experience at TR Upadhya and Co., where she honed her skills in accounting and finance.",
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
          "Since its founding in 2011 with BSc. CSIT, and the addition of BCA in 2016 in affiliation with Tribhuvan University, Deerwalk Institute of Technology has grown into one of Nepal's leading IT colleges. Every student completes a mandatory internship in their eighth semester, often with companies based on the same campus, built on the college's founding principles of theoretical exposure, practical experience, and personality development.",
        cta: "Visit DWIT site →",
        href: "https://deerwalk.edu.np/DWIT/",
        image: "/images/dwg/inst-dwit.webp",
        type:"College",
      },
      {
        id: "dps",
        name: "Deerwalk Pokhara School",
        description:
          "Foundational schooling — the first stop on the Deerwalk path.",
        detail:
          "Since opening in 2025, Deerwalk Pokhara School has brought Deerwalk's Read, Write, Code philosophy to students across Kaski, with dedicated courses in Sanskrit, coding, and public speaking, and reading instruction in both English and Nepali from the earliest grades, across both Junior and Senior levels.",
        cta: "Visit DPS site →",
        href: "https://www.deerwalk.edu.np/pokhara-school",
        image: "/images/dwg/DPS.webp",
        type:"School",
      },
      {
        id: "dds",
        name: "Deerwalk Dhading School",
        description:
          "Quality school education in Dhading, the founder's hometown.",
        detail:
          "Since opening in 2024, Deerwalk Dhading School has brought the same Read, Write, Code philosophy and Junior-Senior structure found across every Deerwalk school to Dhading, the home district of founder Rudra Pandey. Its presence there reflects Deerwalk's long-standing belief that quality education shouldn't be limited to major cities.",
        cta: "Visit DDS site →",
        href: "https://deerwalk.edu.np/dhading-school",
        image: "/images/dwg/inst-dhading.webp",
        type:"School",

      },
      {
        id: "dss",
        name: "Deerwalk Sifal School",
        description:
          "Holistic secondary education preparing students for higher study.",
        detail:
            "Since 2016, Deerwalk Sifal School has educated students from elementary through Plus Two under its guiding philosophy: Read, Write, Code. The approach treats reading, writing, and coding as core skills on equal footing with any subject, building students who can think critically, communicate clearly, and solve problems from an early age.",
        cta: "Visit DSS site →",
        href: "https://deerwalk.edu.np/sifal-school",
        image: "/images/dwg/inst-sifal.webp",
                type:"School",

      },
      {
        id: "dbs",
        name: "Deerwalk Bharatpur School",
        description:
          "Secondary education with a focus on discipline and character.",
        detail:
          "Since opening in 2025, Deerwalk Bharatpur School has extended Deerwalk's Read, Write, Code philosophy to students across Chitwan, structured across Junior and Senior levels. Its curriculum connects classroom learning with real-world application, marking Deerwalk's continued expansion of quality education beyond Kathmandu.",
        cta: "Visit DBS site →",
        href: "https://deerwalk.edu.np/bharatpur-school",
        image: "/images/dwg/DBS.webp",
        type:"School",

      },
      {
        id: "trainingcenter",
        name: "Deerwalk Training Center",
        description:
          "Professional and corporate upskilling — the group's fastest route to employment.",
        detail:
          "In more than a decade since its founding in 2011, Deerwalk Training Center has trained over 5,000 students across 135+ courses in software, data, design, and other industries. Every program pairs hands-on projects with mentors currently working in the field, built on the principle that a course should prepare someone for the job waiting after it.",
        cta: "Visit DTC site →",
        href: "https://deerwalktrainingcenter.com/",
        image: "/images/dwg/inst-training.webp",
        type:"Training Center",
      },
      {
        id: "coop",
        name: "Deerwalk Coop",
        description:
          "Member-owned cooperative supporting families across the Deerwalk community.",
        detail:
          "Since opening in 2025, Deerwalk Coop has become a regular stop for students looking for a break between classes. It offers a café-style menu of drinks, bakery items, and ice cream, alongside a retail selection of books, stationery, and Deerwalk merchandise, including caps, bottles, and candles, all in one space built around campus life.",
        cta: "Visit Socials →",
        linkLabel: "Visit Socials",
        href: "https://www.instagram.com/deerwalk.coop/",
        image: "/images/dwg/DeerwalkCOUP.webp",
        type:"Coop",
      },
      {
        id: "foundation",
        name: "Deerwalk Foundation",
        description:
          "Community development and outreach programs across the Deerwalk ecosystem.",
        detail:
          "Since its establishment in 2014, the Deerwalk Foundation has directed support toward schools, students, and communities that would otherwise have limited access to opportunity. Its work spans education funding, community initiatives, and direct support wherever the need is greatest. The principle guiding it has remained constant: opportunity holds more value when it's shared.",
        cta: "Visit Page →",
        href: "https://deerwalk.org/",
        image: "/images/dwg/Deerwalk_Foundation.webp",
        type:"Non-Profit Organization",
      },
      {
        id: "learningcenter",
        name: "Deerwalk Learning Center",
        description:
          "Personalized learning experiences for students of all ages.",
        detail:
          "Since 2016, Deerwalk Learning Center has offered free, curriculum-aligned video lessons to students from Class 4 through Class 11, giving them access to quality instruction regardless of their school's resources. The lessons are developed in line with the curriculum set by Nepal's Curriculum Development Center, addressing a long-standing gap in access to qualified teaching across the country.",
        cta: "Visit Site →",
        href: "https://dlc.dwit.edu.np/",
        image: "/images/dwg/LearningCenter.webp",
        type:"Non-Profit Organization",
      }
    ] satisfies Institution[],
  },
  analytics: {
    title: "Analytics",
    stats: [
      { value: "20+", label: "Years of operation" },
      { value: "8", label: "Institutions, one group" },
      { value: "10,000+", label: "Students & members served" },
      { value: "500+", label: "Faculty & staff" },
    ] satisfies Stat[],
  },
  footer: {
    ecosystem: [
      { href: "https://deerwalk.edu.np/sifal-school", label: "Schools" },
      { href: "https://deerwalktrainingcenter.com/", label: "Training Center" },
      { href: "https://deerwalk.edu.np/DWIT/", label: "DWIT" },
      { href: "https://deerwalk.org/", label: "Foundation" },
    ] satisfies NavLink[],
    company: [
      { href: "/", label: "About" },
      { href: "/our-story/", label: "Our Story" },
      { href: "/#leadership", label: "Leadership" },

    ] satisfies NavLink[],
  },
  logo: "/images/dwg/logo.webp",
};
