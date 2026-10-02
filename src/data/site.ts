// Everything you'd want to edit lives in this file.
// Change text here, rebuild, and the whole site updates.

export const site = {
  name: 'Nurmuhammed Kanybekov',
  shortName: 'Nurmuhammed',
  initials: 'NK',
  url: 'https://nurmuhammedkanybekov.github.io',
  title: 'Nurmuhammed Kanybekov · Software Engineer',
  description:
    'Nurmuhammed Kanybekov is a computer science student at ELTE in Budapest who builds backend and systems software in Java, Python, C and TypeScript.',
  email: 'nurmuhammedkanybekov4@gmail.com',
  location: 'Budapest, Hungary',
  // Drop your CV at public/resume.pdf and the Resume buttons appear automatically.
  resumePath: '/resume.pdf',
  // Drop a square photo at public/me.jpg and it replaces the monogram in About.
  photoPath: '/me.jpg',
};

export const socials = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/nurmuhammedkanybekov' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/nurmuhammed-kanybekov-52b189296' },
  { name: 'Email', icon: 'mail', url: 'mailto:nurmuhammedkanybekov4@gmail.com' },
];

export const hero = {
  greeting: 'Hi, my name is',
  tagline: 'I build software that holds up.',
  intro:
    "I'm a computer science student at ELTE in Budapest, originally from Kyrgyzstan. I work mostly on the backend and below it: APIs, databases, compilers, audio pipelines. I like projects that are a bit too hard for me, and I like them finished.",
};

export const about = {
  paragraphs: [
    "I grew up in Kyrgyzstan and came to Budapest to study computer science at <a href=\"https://www.elte.hu/en/\" target=\"_blank\" rel=\"noopener\">ELTE</a> on a Stipendium Hungaricum scholarship. Backend work is where I'm most at home: Java, Spring Boot, Postgres, and the boring-but-important parts like who is allowed to change what.",
    "Most of what I build is for people I actually know. My thesis is an online shop for my parents' business back home. tdJamaat is a weekly tracker around 30 people in my community use, so if a score is wrong, someone notices. And when something sounds too hard, like a 3D game with no engine or a compiler in a day, that's usually why I start it.",
    "Right now I'm a research assistant at ELTE, building audio pipelines that pick dog vocalizations out of 87+ hours of recordings. I also TA Data Structures & Algorithms and co-organize <a href=\"https://gdg.community.dev/gdg-budapest/\" target=\"_blank\" rel=\"noopener\">GDG Budapest</a>. Away from the keyboard I run, play volleyball and football, and read more physics than a CS student probably needs.",
  ],
  techIntro: "Here's what I've been working with recently:",
  tech: ['Java & Spring Boot', 'Python & FastAPI', 'C & LLVM', 'TypeScript & React', 'PostgreSQL & pgvector', 'Docker, AWS & Terraform'],
  education: {
    school: 'Eötvös Loránd University (ELTE)',
    degree: 'BSc in Computer Science',
    range: '2024 – 2027',
    detail: 'GPA 4.3 / 5.0 · Stipendium Hungaricum scholar',
  },
};

export type Job = {
  tab: string;
  company: string;
  url?: string;
  title: string;
  range: string;
  note?: string;
  points: string[];
};

export const jobs: Job[] = [
  {
    tab: 'ELTE Research',
    company: 'ELTE Faculty of Informatics',
    url: 'https://www.inf.elte.hu/en/',
    title: 'Research Assistant',
    range: 'Sep 2026 – Present',
    points: [
      'Build audio pipelines that separate dog vocalizations from human speech across 87+ hours of recordings.',
      'Use triangulation and echo cancellation to localize sound sources and get cleaner signal out of recording sessions.',
      "Work directly with the lab's principal investigator to keep the pipeline aligned with the research questions.",
    ],
  },
  {
    tab: 'ELTE Teaching',
    company: 'ELTE',
    url: 'https://www.inf.elte.hu/en/',
    title: 'Teaching Assistant, Data Structures & Algorithms',
    range: 'Feb 2026 – Present',
    points: [
      'Selected from the top 5% of 200+ peers to run weekly consultations for 40+ students on graph theory and dynamic programming.',
      'Reviewed 150+ practical submissions and ran technical evaluations of their algorithm design.',
    ],
  },
  {
    tab: 'GDG Budapest',
    company: 'Google Developer Groups Budapest',
    url: 'https://gdg.community.dev/gdg-budapest/',
    title: 'Co-Organizer',
    range: 'Sep 2026 – Present',
    points: [
      "Moved up to city-chapter leadership, helping plan technical programming for Budapest's developer community.",
    ],
  },
  {
    tab: 'GDG on Campus',
    company: 'GDG on Campus ELTE',
    title: 'Co-Lead',
    range: 'Dec 2024 – Sep 2026',
    note: 'Joined as a Team Member, then T&M Lead, then Co-Lead: almost two years in total.',
    points: [
      'Co-led a 40-person team through a platform and content overhaul: 25% more traffic and 1M+ views.',
      'Organized 12+ tech events for 950+ attendees, handling speakers, live demos and logistics.',
    ],
  },
];

export type Featured = {
  title: string;
  overline: string;
  cover: 'remnant' | 'akven' | 'tdjamaat' | 'nira';
  // Optional real screenshot, e.g. '/remnant-cover.jpg' in public/. Replaces the SVG cover when set.
  image?: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export const featured: Featured[] = [
  {
    title: 'Remnant',
    overline: 'Featured project',
    cover: 'remnant',
    description:
      "A co-op survival horror game set in an abandoned Soviet mine under the Tian Shan. I wrote all of it in TypeScript and Three.js with no game engine: rendering, physics, creature AI that hunts by sound, 3D audio, and WebRTC multiplayer with relay fallback. Ten levels, nine creature types, 196 tests, zero downloads.",
    tech: ['TypeScript', 'Three.js', 'WebRTC', 'Web Audio'],
    github: 'https://github.com/nurmuhammedkanybekov/remnant',
    live: 'https://nurmuhammedkanybekov.github.io/remnant',
  },
  {
    title: 'Ak&Ven',
    overline: 'BSc thesis · in progress',
    cover: 'akven',
    description:
      "An online shop and admin dashboard for my family's business in Kyrgyzstan, built so my parents can add products, sections and photos without calling a developer. Local payments through MBank and Optima, an offline-first PWA, demand forecasting, and an AI bargaining assistant whose limits are enforced by the system instead of trusted to the model.",
    tech: ['PWA', 'MBank & Optima', 'LLM agent', 'Forecasting'],
  },
  {
    title: 'tdJamaat',
    overline: 'Live · ~30 weekly users',
    cover: 'tdjamaat',
    description:
      "A weekly progress dashboard for my community's 16-week season: houses log results across eight metrics, scored by role, and everyone can see the rankings. I rebuilt it from hand-edited JSON into a normalized Postgres schema where Row-Level Security decides who can write what, so there's no custom backend left to secure.",
    tech: ['React 19', 'TypeScript', 'Supabase', 'Postgres RLS'],
    github: 'https://github.com/nurmuhammedkanybekov/tdJamaat-v2',
  },
  {
    title: 'niraFinance',
    overline: 'Full-stack · solo',
    cover: 'nira',
    description:
      "A personal finance app you can ask questions in plain language. Transactions get embedded into pgvector, so answers come from your own history, not guesses. CSV import from bank exports, budgets, portfolio tracking, and an ownership check on every endpoint that changes data.",
    tech: ['Java 21', 'Spring Boot 3', 'pgvector', 'Next.js 14'],
    github: 'https://github.com/nurmuhammedkanybekov/niraFinance',
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    title: 'Compiler & JIT Engine',
    description:
      'A compiler written in C in one self-imposed day: hand-written lexer and parser, LLVM IR codegen, and JIT execution in memory.',
    tech: ['C', 'LLVM', 'Make'],
    github: 'https://github.com/nurmuhammedkanybekov/compiler',
  },
  {
    title: 'EduPulse',
    badge: '€1,000 hackathon prize',
    description:
      'Built in 24 hours: an AI platform that reads lesson PDFs in under five seconds and sorts student mistakes into three kinds of confusion.',
    tech: ['Python', 'FastAPI', 'Azure OpenAI'],
  },
  {
    title: 'Portfolio Optimizer',
    description:
      'Java handles data and persistence, Python runs 5,000 Monte Carlo simulations to find the efficient frontier and the best Sharpe ratio.',
    tech: ['Java', 'Python', 'SQLite'],
    github: 'https://github.com/nurmuhammedkanybekov/portfolio_optimization_system',
  },
  {
    title: 'SQE',
    description:
      'A DevSecOps deployment blueprint: infrastructure as code on AWS, containerized services and security checks in the pipeline.',
    tech: ['AWS', 'Terraform', 'Docker'],
    github: 'https://github.com/nurmuhammedkanybekov/SQE',
  },
  {
    title: 'Secure IAM & Audit API',
    description:
      'An identity and access API with JWT auth, role-based access control and audit logs correlated per request.',
    tech: ['Java 17', 'Spring Boot', 'Docker'],
  },
  {
    title: 'movieDBMS',
    description:
      'A console app for a movie database with a normalized schema, constraint-checked deletes and query-based filtering.',
    tech: ['Java', 'JDBC', 'JUnit 5'],
    github: 'https://github.com/nurmuhammedkanybekov/movieDBMS',
  },
];

export const contact = {
  overline: "What's next?",
  heading: 'Get in touch',
  text:
    "I'm looking for backend and systems roles, both internships and graduate positions, in Hungary, across the EU or remote. If you're hiring, have a project in mind or just want to talk shop, my inbox is open.",
  button: 'Say hello',
};
