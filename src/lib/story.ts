export type StoryMilestone = {
  year: string;
  title: string;
  /** File in /public/images/dwg/story/ */
  image: string;
  imageAlt: string;
  description: string;
  highlights?: string[];
  side: "left" | "right";
};

export const storyPage = {
  hero: {
    eyebrow: "Deerwalk Group",
    title: "Our Story",
    description:
      "A journey of vision, innovation, and purpose — building world-class education from Nepal to the world.",
  },
  founder: {
    eyebrow: "The Founder",
    titleLine1: "Our story begins with",
    titleAccent: "Rudra Pandey.",
    image: "/images/dwg/founder.webp",
    imageAlt: "Rudra Pandey",
    paragraphs: [
      "Deerwalk began as a bet that Nepali talent could compete anywhere in the world. Rudra Pandey proved that first in business, building companies that grew from Kathmandu into global markets. Then came a bigger commitment. Education. From Deerwalk Institute of Technology to Deerwalk Sifal School, and later to Dhading, Pokhara, and Bharatpur, the same philosophy has followed every new campus. Read deeply. Think clearly. Build boldly. That mission hasn't changed since the beginning. It's still about nurturing curious minds capable of shaping their own future.",
    ],
  },
  timelineIntro: {
    eyebrow: "The Journey",
    titleBefore: "Milestones That",
    titleAccent: "Define Us",
    description:
      "From entrepreneurship to education, every step reflects a commitment to nurturing talent, character, and global readiness.",
  },
  milestones: [
    {
      year: "2001",
      title: "The Beginning",
      image: "/images/dwg/story/2001.jpg",
      imageAlt: "The Beginning",
      side: "right",
      description:
        "In 2001, Rudra Pandey founded D2Hawkeye, one of the early pioneers in health analytics. The company grew quickly and earned global recognition. In 2008, it made a successful exit becoming one of the early global success stories from a Nepali technology entrepreneur. But for Rudra, this moment was not the end of a journey. It was the beginning of a larger purpose.",
    },
    {
      year: "2010",
      title: "The Birth of Deerwalk",
      image: "/images/dwg/story/2010.jpg",
      imageAlt: "The Birth of Deerwalk",
      side: "left",
      description:
        "In 2010, he goes on to establish Deerwalk, a healthcare and data analytics company built on the strength of Nepal's technology talent.\n\nThe company grows into a highly capable organization serving global clients. More importantly, its success sends a powerful message Nepal can build world-class technology talent.\n\nYet another realization soon follows. Building companies alone is not enough. The real transformation must begin much earlier.\n\nIt must begin with education.",
    },
    {
      year: "2011",
      title: "Entering Education with DWIT",
      image: "/images/dwg/story/2011.png",
      imageAlt: "Entering Education with DWIT",
      side: "right",
      description:
        "Education became the next frontier. Rudra believed Nepal needed institutions that prepare young people to compete on the global stage. With this vision, he brought together a group of like-minded individuals and established the Deerwalk Education Group. The first step was the creation of Deerwalk Institute of Technology, an undergraduate IT college.\n\nFrom the beginning, the philosophy was clear:\n\n• Extensive Practical Exposure\n• Thorough Theoretical Foundation\n• All-Round Personality Development\n\nDWIT aimed to produce graduates who are not only strong technologists, but also confident thinkers and capable problem solvers ready to take on the world.\n\nWithin just five years, it established itself as one of Nepal's leading IT colleges.",
    },
    {
      year: "2016",
      title: "The Beginning of Deerwalk Schools",
      image: "/images/dwg/story/2016.jpg",
      imageAlt: "The Beginning of Deerwalk Schools",
      side: "left",
      description:
        "Deerwalk Sifal School was established with a distinctive philosophy: Read. Write. Code. Students must learn to read deeply, write clearly, and think logically. Reading nurtures curiosity and imagination. Writing brings clarity to thought. Coding develops logic and problem-solving ability.",
      highlights: [
        "The goal is clear: to create schools where academic rigor goes hand in hand with strong character and all-round personality development.",
      ],
    },
    {
      year: "2024",
      title: "Deerwalk Dhading School",
      image: "/images/dwg/story/2024.png",
      imageAlt: "Deerwalk Dhading School",
      side: "right",
      description:
        "Deerwalk expanded to Deerwalk Dhading School, located in Dhading — Rudra Pandey's hometown. This step carried deep meaning. Quality education should not remain limited to big cities. It should reach communities where many young dreams begin.",
    },
    {
      year: "2025",
      title: "Expansion to Pokhara and Bharatpur",
      image: "/images/dwg/story/2025.webp",
      imageAlt: "Expansion to Pokhara and Bharatpur",
      side: "left",
      description:
        "Encouraged by the trust and support of students and parents, Deerwalk expanded further. Deerwalk Pokhara School and Deerwalk Bharatpur School opened their doors. The same philosophy traveled to new cities. The same mission guided every campus.",
      highlights: [
        "To nurture students who are curious learners, clear thinkers, and confident problem solvers.",
      ],
    },
    {
      year: "TODAY",
      title: "The Journey Continues",
      image: "/images/dwg/story/today.jpg",
      imageAlt: "The Journey Continues",
      side: "right",
      description:
        "Today, Deerwalk Education continues to grow. But the purpose remains unchanged: to nurture curious minds, strong thinkers, and responsible global citizens.\n\nAnd the story continues.",
    },
  ] satisfies StoryMilestone[],
};
