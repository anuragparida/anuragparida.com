import { title } from 'process'
import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/anuragparida',
  linkedin: 'https://www.linkedin.com/in/anuragparida',
  mail: 'mailto:hi@anuragparida.com',
  instagram: 'https://www.instagram.com/anuragparidaa/',
}

// Global
export const SITE: Site = {
  TITLE: 'Anurag Parida',
  DESCRIPTION: 'Welcome to my personal corner of the internet!',
  AUTHOR: 'Anurag Parida',
}

// Work Page
export const WORKPAGE: Page = {
  TITLE: 'Experience',
  DESCRIPTION: 'Places I have worked at.',
}

// Awards Page
export const AWARDSPAGE: Page = {
  TITLE: 'Awards',
  DESCRIPTION: 'Recognitions I have received.',
}

// Projects Page
export const PROJECTPAGE: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'My personal and co-developed projects.',
}

// Education Page
export const EDUCATION = [
  {
    title: 'Bachelors of Engineering in Robotics',
    institution: 'Technische Hochschule Würzburg Schweinfurt',
    link: 'https://www.thws.de/en/',
    description:
      'Member of the Student Representative Body | Startbahn27 Startup Accelerator',
    date: '2022-2025',
  },
  {
    title: 'High School Diploma',
    institution: 'Amity International School, Gurgaon',
    link: 'https://amityschools.in/gurugram46/',
    description:
      'Founding Member & 2xPresident @Technology Club | President @Atal Tinkering Lab by Government of India | Student Council (Cyber Captain) | 2x Tech Lead @TedXYouth',
    date: '2014-2020',
  },
]

// Study Page
export const CERTIFICATIONS = [
  {
    title: 'AZ-104 Azure Administrator Associate',
    institution: 'Microsoft Certified',
    link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/?practice-assessment-type=certification/',
    date: '2025 (In Progress)',
  },
  {
    title: 'Band 8.5 (9.0)',
    institution: 'International English Language Testing System (IELTS)',
    link: 'https://ielts.org/',
    date: '2022',
  },
]

export const AWARDS = [
  {
    title: 'Google Code-In — Grand Prize Winner',
    institution: 'Google',
    description:
      "Completed 42 open-source tasks for the Sustainable Computing Research Group, contributing a new mobile application and Chrome extension. Top prize out of 3,500+ contestants from 78 countries.",
    impact:
      'One of 26 Grand Prize winners worldwide in 2018. Flown out to Google\'s San Francisco HQ for the winners\' trip.',
    link: 'https://codein.withgoogle.com/archive/2018/',
    date: '2018',
  },
  {
    title: 'International Olympiad in Linguistics — National Bronze Medalist',
    institution: 'IIIT Hyderabad',
    description:
      'Attended the national selection camp at the International Institute of Information Technology, Hyderabad. Ranked 14 out of all national applicants after a series of tests and lectures on computational and societal linguistics.',
    impact:
      'Bronze at the national camp, ahead of most applicants in the country. Picked up a strong intuition for how languages structure information — directly relevant to NLP work I do today.',
    link: 'https://ltrc.iiit.ac.in/plo/history.html',
    date: '2019',
  },
  {
    title: 'HackHarvard Global Hackathon — Grand Finalist',
    institution: 'Major League Hacking (MLH)',
    description:
      "Invited by Alibaba Tianchi to present 'ALM8 — Alzheimer's Mate' in China after the project placed in the top 3 globally on Codechef among 500+ open participants. Continued to Harvard during MLH Week 2019.",
    impact:
      'Top 3 finish on the global Codechef platform and a Harvard finals berth in the same year — both as a high schooler.',
    link: 'https://mlh.io/',
    date: '2018',
  },
  {
    title: 'CBSE National Annual Science Fair — Winner',
    institution: 'Central Board of Secondary Education, India',
    description:
      "Felicitated by Mr. Anurag Tripathi, CBSE Secretary, and other government dignitaries for the project ALM8. Competed among 10,000+ schools across India.",
    impact:
      'National-level recognition for the ALM8 project, awarded in person by senior government officials.',
    link: '',
    date: '2019',
  },
]

export const PROJECTS = [
  {
    title: 'German-Anki',
    outcome: 'Personal tool for daily German vocabulary — used for ~3 years',
    date: '2022 – present',
    role: 'Solo project',
    stack: ['Python', 'Anki', 'genanki', 'YAML'],
    description:
      'A German vocabulary pipeline built on top of Anki. Tracks the words I encounter in the wild — books, podcasts, work meetings, paperwork — and turns them into spaced-repetition cards organised by frequency, register, and topic. Started as a weekend script, now part of my daily routine.',
    impact:
      'Roughly 4,000+ active cards across 40+ thematic decks (Kfz, Versicherung, Behörde, Tech, Smalltalk). The reason I can talk to mechanics and the Finanzamt in German.',
    link: '',
  },
  {
    title: 'ALM8 — Alzheimer’s Mate',
    outcome: 'Grand Prize · Google Code-In 2018 · flown to Google SF',
    date: '2018',
    role: 'Creator & lead developer',
    stack: ['Raspberry Pi', 'Android', 'Azure', 'GCP', 'DialogFlow'],
    description:
      "A virtual caretaker for Alzheimer's patients — Raspberry Pi edge device plus an Android companion app. Targets wandering, motion imbalance, vision, and memory issues using sensors, computer vision, and conversational AI.",
    impact:
      'Selected Grand Prize winner out of 3,500+ contestants from 78 countries. Top 3 globally on Codechef among 500+ participants. Invited by Alibaba Tianchi to present in China, then to Harvard during MLH Week 2019.',
    link: 'https://github.com/anuragparida/ALM8',
  },
  {
    title: 'Peeku',
    outcome: 'Built in 48h after the TikTok ban in India',
    date: 'June 2020',
    role: 'Co-developer',
    stack: ['Flutter', 'Firebase', 'Realtime DB', 'Auth'],
    description:
      'Media sharing platform aimed at universities, built in Flutter on Firebase. Spun up in the 48 hours after the TikTok ban in India to capture a wave of users looking for short-video alternatives.',
    impact:
      'A team build, scrappy and fast. A good lesson in shipping under time pressure and picking a stack that lets you move.',
    link: '',
  },
  {
    title: 'flo.',
    outcome: 'Ideated at Code Wars 2019 · student productivity suite',
    date: '2019',
    role: 'Co-ideator',
    stack: ['Android', 'OCR', 'Speech-to-text'],
    description:
      'Student life automation — categorise deadlines from text messages, capture and transcribe lectures, recycle old stationery via an automatic pickup-and-pay system. Conceived and built the prototype at Code Wars 2019.',
    impact:
      'A scratch-my-own-itch project: every feature solves a real friction point in the average student\'s week.',
    link: '',
  },
]

export const EXPERIENCE = [
  {
    company: 'HDI Group',
    location: 'Cologne, Germany',
    position: 'Software Engineer — Cloud, Data & AI',
    start: 'February 2026',
    link: 'https://www.hdi.global/',
    end: 'Present',
    outcome: 'Building AI & data platforms for commercial insurance in a regulated environment.',
    description:
      'Building scalable automation and AI-driven systems for commercial insurance within the Advanced Analytics division, on Kubernetes and AWS.',
    tasks: [
      'Working in an advanced analytics division supporting commercial insurance lines including property, liability, and business interruption; team is embedded into underwriting, claims, product, and operations.',
      'Collaborating across technical and business teams to design and deploy scalable data, automation, and AI-driven solutions on Kubernetes and AWS — spanning GenAI, traditional ML, business workflow orchestration, and process integration within German financial regulatory constraints (including human-in-the-loop).',
      'Pragmatic delivery of new capabilities that improve operational efficiency, data quality, and decision support across the insurance value chain.',
    ],
  },
  {
    company: 'Mercedes-Benz Group AG',
    location: 'Stuttgart, Germany',
    position: 'Final Thesis (MB.OS Delivery)',
    start: 'April 2025',
    link: 'https://group.mercedes-benz.com/careers/about-us/mercedes-benz-operating-system/',
    end: 'October 2025',
    outcome: 'Shipped an LLM-based artifact search tool used in MB.OS planning cycles.',
    description:
      'Developed an LLM-based artifact search system using embeddings and clustering to streamline planning and reduce redundancy in corporate software development.',
    tasks: [
      'Topic: Radical standardisation in corporate software development via LLM-based similarity search.',
      'Worked with vector embeddings and databases, OpenAI and Gemini SDKs, BERTopic, HDBSCAN and TF-IDF to accelerate planning cycles and reduce redundant app proposals via intelligent and more understandable artifact search.',
    ],
  },
  {
    company: 'Mercedes-Benz Group AG',
    location: 'Böblingen, Germany',
    position: 'Intern (MB.OS Delivery)',
    start: 'October 2024',
    link: 'https://group.mercedes-benz.com/careers/about-us/mercedes-benz-operating-system/',
    end: 'March 2025',
    outcome: 'Built a dev-tracking dashboard for 8,000+ MB.OS colleagues and executives.',
    description:
      'Worked in the MB.OS Delivery team for visualising a proprietary data visualisation technique which lets executives make decisions within seconds.',
    tasks: [
      'Worked in the new MB.OS department to create a new dev-tracking dashboard system for 8000+ colleagues including executives, aimed at increasing bug-fixing and iteration speed by 30% over traditional AGILE.',
      'Created a portal with 4+ aggregated data vendors including PowerBI, Jira and vehicular data with Grafana to monitor daily performance of different teams and departments under a new proprietary governance structure.',
    ],
  },
  {
    company: 'Zepto (Kiranakart, YC SS21)',
    location: 'Mumbai, India',
    position: 'Product and Engineering Lead, Employee #1',
    link: 'https://www.ycombinator.com/companies/zepto',
    start: 'November 2020',
    end: 'February 2021',
    outcome: 'Founding team of a YC SS21 startup that became a unicorn grocery delivery platform.',
    description:
      'Built the MVP and ground-level product & logistics strategy as the first Employee and CPO for a Y-Combinator startup valued at $3B today.',
    tasks: [
      'Created the systems and front-facing apps for a Y-Combinator startup as the first employee of the founding team. Conducted 50+ field interviews with shopkeepers and residents to validate business plan and market fit.',
      'Scaled the startup from 0 to 100K+ downloads; helped raise $60M in the process. Helped hire the executive team before leaving to finish my education. The startup later pivoted into a unicorn and scaled nationally as Zepto.',
    ],
  },
  {
    company: 'THWS',
    location: 'Schweinfurt, Germany',
    position: 'Research Assistant',
    link: 'https://fwi.thws.de/',
    start: 'October 2023',
    end: 'May 2024',
    outcome: 'Overhauled e-learning UX, validated with 75%+ positive student feedback.',
    description:
      'Built a new data pipeline and visualisation system for university students with internal data.',
    tasks: [
      'Overhauled e-learning UX to improve learning goal tracking; grounded in data with 75%+ positive user feedback.',
      'Created 3 new authenticated data pipelines, combined performance graphs and personalised learning suggestions.',
    ],
  },
  {
    company: 'Flamecloud LLC',
    location: 'Gurgaon, India',
    position: 'Software Developer (Freelance)',
    link: 'https://wantace.com/',
    start: 'May 2020',
    end: 'August 2022',
    outcome: 'Shipped MERN + React Native systems for 5+ clients, including an e-Bike manufacturer.',
    description:
      'Built full-stack apps using MERN and React Native, designing scalable architectures with Dockerized microservices and MongoDB/SQL data layers.',
    tasks: [
      'Developed MERN and React Native applications over 2 years in project-based work for a boutique digital agency.',
      'Designed and implemented systems and architectures for 5+ clients including a large Indian e-Bike manufacturer.',
    ],
  },
  {
    company: 'Google Summer of Code',
    location: 'Remote',
    position: 'Mentor for SCoReLab',
    link: 'https://summerofcode.withgoogle.com/archive/2019/organizations/4922378566500352',
    start: 'April 2020',
    end: 'August 2020',
    outcome: 'Mentored university students on Bassa, a network-limiting tool for low-bandwidth regions.',
    description:
      'Mentored university students participating in Google Summer of Code while still being in high school.',
    tasks: [
      'Mentored multiple university students on development projects related to the Bassa project, a network-limiter and download queueing system for companies with low-bandwidth in third-world countries.',
    ],
  },
]
