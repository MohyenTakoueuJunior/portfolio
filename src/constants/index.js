import {
  audit,
  secops,
  pentest,
  governance,
  nmap,
  burpsuite,
  metasploit,
  wazuh,
  volatility,
  autopsy,
  python,
  bash,
  javascript,
  reactjs,
  github,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  infopro,
  antic,
  nextscript,
  bit,
  insam,
  quickdo,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'IT Audit & Risk',
    icon: audit,
  },
  {
    title: 'Security Operations',
    icon: secops,
  },
  {
    title: 'Penetration Testing',
    icon: pentest,
  },
  {
    title: 'IT Governance & Compliance',
    icon: governance,
  },
];

const technologies = [
  {
    name: 'Nmap',
    icon: nmap,
  },
  {
    name: 'Burp Suite',
    icon: burpsuite,
  },
  {
    name: 'Metasploit',
    icon: metasploit,
  },
  {
    name: 'Wazuh',
    icon: wazuh,
  },
  {
    name: 'Volatility',
    icon: volatility,
  },
  {
    name: 'Autopsy',
    icon: autopsy,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Bash',
    icon: bash,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'GitHub',
    icon: github,
  },
];

const experiences = [
  {
    title: 'Full Stack Software Developer',
    company_name: 'QuickDo Sarl',
    icon: quickdo,
    iconBg: '#2563eb',
    date: 'Jan 2021 - Mar 2022',
  },
  {
    title: 'Cybersecurity Intern',
    company_name: 'ANTIC — National CIRT',
    icon: antic,
    iconBg: '#0f766e',
    date: 'Mar 2025 - Jun 2025',
  },
  {
    title: 'Part-Time Lecturer',
    company_name: 'IUEs / INSAM',
    icon: insam,
    iconBg: '#7c3aed',
    date: 'Sep 2025 - Mar 2026',
  },
  {
    title: 'Cybersecurity Engineer',
    company_name: 'InfoPro Solutions LLC',
    icon: infopro,
    iconBg: '#b91c1c',
    date: 'Nov 2025 - Mar 2026',
  },
  {
    title: 'Programs & Partnership Committee',
    company_name: 'Blacks In Technology Foundation',
    icon: bit,
    iconBg: '#ca8a04',
    date: 'Jan 2026 - Present',
  },
  {
    title: 'AI Automation Engineer',
    company_name: 'Next Script LTD',
    icon: nextscript,
    iconBg: '#0891b2',
    date: 'Feb 2026 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
