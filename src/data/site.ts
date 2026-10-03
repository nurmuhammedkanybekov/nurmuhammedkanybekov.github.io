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
    "I'm a computer science student at ELTE in Budapest, originally from Kyrgyzstan. I work on the backend and below it: APIs, databases, access control, compilers and audio pipelines. I like problems that are a bit too hard for me, and I like shipping them.",
};

const link = (href: string, text: string) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

export const about = {
  paragraphs: [
    `I came from Kyrgyzstan to study computer science at ${link('https://www.elte.hu/en/', 'ELTE')} on a Stipendium Hungaricum scholarship. I write Java and Spring Boot most days, with Python, C and TypeScript close behind, and the part I care about most is the one users never see: data models, who is allowed to change what, and code that still behaves when the input is hostile.`,
    `My BSc thesis is ${link('https://github.com/nurmuhammedkanybekov/akven-v2', 'Ak&amp;Ven')}, a full e-commerce platform for my family's sock brand at Dordoi Bazaar in Bishkek, one of the largest markets in Central Asia. Bazaar customers expect to bargain, so the shop has an AI sales agent that negotiates price and bundles. The model is never allowed to set a price. It can only propose a discount, and a deterministic policy layer clamps that proposal to each product's margin floor, so no prompt can talk it into selling at a loss.`,
    "At ELTE I'm a research assistant on a study of dog vocalizations. I build the audio pipeline that works through 87+ hours of recordings, separates dog sounds from human speech, and uses triangulation and echo cancellation to locate where each sound came from. I also teach Data Structures &amp; Algorithms, a role I was picked for from the top 5% of 200+ students.",
    `Outside class I help run the developer community here. At GDG on Campus ELTE I went from team member to Technical &amp; Marketing Lead to Co-Lead, led a 40-person team and organized 12+ events for 950+ people. Since September 2026 I co-organize ${link('https://gdg.community.dev/gdg-budapest/', 'GDG Budapest')}, the city chapter.`,
    'Away from the screen: chess (around 1600 FIDE), volleyball, good films and long series, and a lot of fantasy. Westeros is my favourite fictional world by a wide margin.',
  ],
  techIntro: "Here's what I work with most:",
  tech: ['Java 21 & Spring Boot 3', 'Python & FastAPI', 'C & LLVM', 'TypeScript, React & Three.js', 'PostgreSQL & pgvector', 'Docker, AWS & Terraform'],
  education: {
    school: 'Eötvös Loránd University (ELTE)',
    degree: 'BSc in Computer Science',
    range: '2024 – 2027',
    detail: 'GPA 4.3 / 5.0 · Stipendium Hungaricum scholar',
  },
};

export type Job = {
  title: string;
  company: string;
  url?: string;
  range: string;
  current?: boolean;
  summary: string;
  // Role progression inside one organization, oldest first.
  ladder?: { role: string; org: string }[];
  // May contain <strong> for the numbers that matter.
  points: string[];
};

export const jobs: Job[] = [
  {
    title: 'Research Assistant',
    company: 'ELTE Faculty of Informatics',
    url: 'https://www.inf.elte.hu/en/',
    range: 'Sep 2026 – Present',
    current: true,
    summary: 'I build the audio side of a research project on dog vocalizations: turning long, noisy recordings into clean data the researchers can actually analyse.',
    points: [
      'Built the pipeline that processes <strong>87+ hours</strong> of recordings and separates dog vocalizations from overlapping human speech.',
      'Locate each sound source with triangulation across microphones, and use echo cancellation to remove room reflections before analysis.',
      "Work directly with the lab's principal investigator, turning research questions into concrete pipeline requirements.",
    ],
  },
  {
    title: 'Teaching Assistant, Data Structures & Algorithms',
    company: 'ELTE Faculty of Informatics',
    url: 'https://www.inf.elte.hu/en/',
    range: 'Feb 2026 – Present',
    current: true,
    summary: 'Selected from the <strong>top 5%</strong> of 200+ peers to teach the practical side of the course.',
    points: [
      'Run weekly consultations for <strong>40+ students</strong> on graph algorithms and dynamic programming.',
      'Reviewed <strong>150+ practical submissions</strong>, grading both correctness and the design of the algorithm behind it.',
    ],
  },
  {
    title: 'Co-Organizer, GDG Budapest',
    company: 'Google Developer Groups',
    url: 'https://gdg.community.dev/gdg-budapest/',
    range: 'Dec 2024 – Present',
    current: true,
    summary: 'Almost two years of building the developer community, first at ELTE and now for the whole city.',
    ladder: [
      { role: 'Team Member', org: 'GDG on Campus ELTE' },
      { role: 'Technical & Marketing Lead', org: 'GDG on Campus ELTE' },
      { role: 'Co-Lead', org: 'GDG on Campus ELTE' },
      { role: 'Co-Organizer', org: 'GDG Budapest' },
    ],
    points: [
      'Co-led a <strong>40-person team</strong> through a full platform and content overhaul that brought <strong>25% more traffic</strong> and <strong>1M+ views</strong>.',
      'Organized <strong>12+ technical events</strong> for <strong>950+ attendees</strong>, from booking speakers to running live demos and the logistics on the day.',
      "Since Sep 2026, co-organize GDG Budapest and help plan the technical program for the city's developer community.",
    ],
  },
];

export type Featured = {
  title: string;
  overline: string;
  cover: 'remnant' | 'akven' | 'tdjamaat' | 'nira';
  // Optional real screenshot in public/. Replaces the SVG cover when set.
  image?: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  liveLabel?: string;
};

export const featured: Featured[] = [
  {
    title: 'Remnant',
    overline: 'Featured project · playable in the browser',
    cover: 'remnant',
    image: '/remnant-cover.webp',
    description:
      'A co-op survival horror game set in an abandoned Soviet mine under the Tian Shan. I wrote all of it in TypeScript and Three.js with no game engine: rendering, physics, creature AI that hunts by sound, 3D audio, and WebRTC co-op for two or three players with built-in voice chat. Ten levels, nine creature types, cloud saves, a leaderboard and 248 unit tests. Nothing to download.',
    tech: ['TypeScript', 'Three.js', 'WebRTC', 'Web Audio'],
    github: 'https://github.com/nurmuhammedkanybekov/remnant',
    live: 'https://nurmuhammedkanybekov.github.io/remnant',
    liveLabel: 'Play it',
  },
  {
    title: 'Ak&Ven',
    overline: 'BSc thesis · in progress',
    cover: 'akven',
    description:
      "An e-commerce platform for my family's sock brand at Dordoi Bazaar in Bishkek. Its AI sales agent bargains over price and bundles the way bazaar customers expect, but it never sets a price itself: a deterministic PolicyValidator clamps every offer to the product's margin floor, so prompt injection can't sell anything at a loss. JWT auth with customer, staff and admin roles, an audit log of every change, and an installable PWA.",
    tech: ['Java 17', 'Spring Boot 3', 'PostgreSQL & pgvector', 'React PWA'],
    github: 'https://github.com/nurmuhammedkanybekov/akven-v2',
  },
  {
    title: 'tdJamaat',
    overline: 'Live · ~30 weekly users',
    cover: 'tdjamaat',
    image: '/tdjamaat-cover.webp',
    description:
      "A weekly progress dashboard for my community's 16-week season: houses log results across eight metrics, scored by role, and everyone can see the rankings. I rebuilt it from hand-edited JSON into a normalized Postgres schema where Row-Level Security decides who can write what, so there's no custom backend left to secure.",
    tech: ['React 19', 'TypeScript', 'Supabase', 'Postgres RLS'],
    github: 'https://github.com/nurmuhammedkanybekov/tdJamaat-v2',
    live: 'https://tdjamaat.vercel.app/',
    liveLabel: 'Live site',
  },
  {
    title: 'niraFinance',
    overline: 'Full-stack · solo',
    cover: 'nira',
    description:
      'A personal finance app you can ask questions in plain language. Transactions get embedded into pgvector, so answers come from your own history, not guesses. CSV import from bank exports, budgets, portfolio tracking, and an ownership check on every endpoint that changes data.',
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
    live: 'https://devpost.com/software/edupulse-aour1f',
  },
  {
    title: 'Portfolio Optimizer',
    description:
      'Java handles data and persistence, Python runs 5,000 Monte Carlo simulations to find the efficient frontier and the best Sharpe ratio.',
    tech: ['Java', 'Python', 'SQLite'],
    github: 'https://github.com/nurmuhammedkanybekov/portfolio_optimization_system',
  },
  {
    title: 'Snake',
    description:
      'A Java Swing snake game built around clean structure: MVC, a hand-written linked list for the snake body, a fixed 60 FPS loop and CSV high scores.',
    tech: ['Java', 'Swing', 'Maven'],
    github: 'https://github.com/nurmuhammedkanybekov/Snake-Game',
  },
  {
    title: 'movieDBMS',
    description:
      'A console app for a movie database with a normalized schema, constraint-checked deletes and query-based filtering.',
    tech: ['Java', 'JDBC', 'JUnit 5'],
    github: 'https://github.com/nurmuhammedkanybekov/movieDBMS',
  },
  {
    title: 'Shiro',
    description:
      'The same Spring Boot service wired into three CI/CD setups, GitHub Actions, Jenkins and Tekton, plus a script that flags technical debt.',
    tech: ['Java 17', 'Spring Boot', 'Docker'],
    github: 'https://github.com/nurmuhammedkanybekov/shiro',
  },
];

export const contact = {
  overline: "What's next?",
  heading: 'Get in touch',
  text:
    "I'm looking for backend and systems roles, both internships and graduate positions, in Hungary, across the EU or remote. If you're hiring, have a project in mind or just want to talk shop, my inbox is open.",
  button: 'Say hello',
};
