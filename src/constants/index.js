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
  badge1,
  badge2,
  badge3,
  badge4,
  badge5,
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
    name: 'Recon Toolkit',
    description:
      'A Python toolkit that automates network reconnaissance and vulnerability assessment, wrapping Nmap scans into structured, reportable findings.',
    tags: [
      {
        name: 'nmap',
        color: 'blue-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      {
        name: 'bash',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/MohyenTakoueuJunior',
    demo: 'https://github.com/MohyenTakoueuJunior',
  },
  {
    id: 'project-2',
    name: 'Web Pentest Lab',
    description:
      'A deliberately vulnerable web application lab used to practise and document OWASP Top 10 exploitation and remediation with Burp Suite.',
    tags: [
      {
        name: 'burpsuite',
        color: 'blue-text-gradient',
      },
      {
        name: 'owasp',
        color: 'green-text-gradient',
      },
      {
        name: 'metasploit',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/MohyenTakoueuJunior',
    demo: 'https://github.com/MohyenTakoueuJunior',
  },
  {
    id: 'project-3',
    name: 'SOC Home Lab',
    description:
      'A monitoring lab built on Wazuh with custom detection rules and dashboards that surface brute-force, privilege escalation and persistence attempts.',
    tags: [
      {
        name: 'wazuh',
        color: 'blue-text-gradient',
      },
      {
        name: 'siem',
        color: 'green-text-gradient',
      },
      {
        name: 'detection',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/MohyenTakoueuJunior',
    demo: 'https://github.com/MohyenTakoueuJunior',
  },
  {
    id: 'project-4',
    name: 'DFIR Casework',
    description:
      'Digital forensics and incident response walkthroughs using Volatility for memory analysis and Autopsy for disk artefacts, written up as full case reports.',
    tags: [
      {
        name: 'volatility',
        color: 'blue-text-gradient',
      },
      {
        name: 'autopsy',
        color: 'green-text-gradient',
      },
      {
        name: 'forensics',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/MohyenTakoueuJunior',
    demo: 'https://github.com/MohyenTakoueuJunior',
  },
  {
    id: 'project-5',
    name: 'Hardening Scripts',
    description:
      'Bash automation that audits Linux hosts against CIS benchmarks and applies baseline hardening, mapped to ISO 27001 controls for compliance evidence.',
    tags: [
      {
        name: 'bash',
        color: 'blue-text-gradient',
      },
      {
        name: 'iso27001',
        color: 'green-text-gradient',
      },
      {
        name: 'hardening',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/MohyenTakoueuJunior',
    demo: 'https://github.com/MohyenTakoueuJunior',
  },
];

const certifications = [
  {
    name: 'CEH',
    icon: badge1,
  },
  {
    name: 'API Authentication',
    icon: badge2,
  },
  {
    name: 'Fortinet Operator',
    icon: badge3,
  },
  {
    name: 'Fortinet NSE 3',
    icon: badge4,
  },
  {
    name: 'Google Cybersecurity',
    icon: badge5,
  },
];

export { services, technologies, experiences, projects, certifications };
