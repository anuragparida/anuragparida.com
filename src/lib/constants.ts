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
    title: 'Grand Prize Winner',
    institution: 'Google Code-In',
    description:
      "Got flown out to Google SF, CA for completing 42 open source tasks for an organization called 'Sustainable Computing Research Group' and helped with their core functions including a new mobile application and chrome extension.",
    link: 'https://codein.withgoogle.com/archive/2018/#:~:text=%C5%81ukasz%20My%C5%9Bliwiec-,Anurag%20Parida,-FINALISTS',
    date: '2019',
  },
  {
    title: 'National Bronze Medalist',
    institution: 'International Olympiad in Linguistics Camp',
    description:
      'Awarded rank 14 out of all national applicants at the camp after selection through testing and attending lectures on computational and societal linguistics at International Institute of Information Technology, Hyderabad.',
    link: 'https://ltrc.iiit.ac.in/plo/history.html',
    date: '2019',
  },
  {
    title: 'Grand Finalist',
    institution: 'HackHarvard Global Hackathon (MLH)',
    description:
      "Invited by Alibaba Tianchi to present my project 'ALM8- Alzheimer's Mate' in China and then at Harvard University during MLH week 2019. Theproject was selected in the top 3 among 500+ open participants on the platform 'Codechef'.",
    link: 'https://tianchi.aliyun.com/competition/entrance/231692',
    date: '2018',
  },
  {
    title: 'Winner, National Annual Science Fair',
    institution: 'Central Board of Secondary Education, India',
    description:
      'Felicitated by Mr. Anurag Tripathi, CBSE Secretary and other government dignitaries for the project ALM8, among 10000+ schools across India.',
    date: '2019',
  },
]

export const PROJECTS = [
  {
    title: 'ALM8 - Alzheimer’s Mate',
    description:
      "Developed and worked on a Raspberry Pi based solution for issues pertaining to Alzheimer's patients supplemented by an Android app. | Azure, GCP, DialogFlow, Proprietary libraries | Targets wandering, motion imbalance, vision and memory issues.",
    link: 'https://github.com/anuragparida/ALM8',
  },
  {
    title: 'Peeku',
    institution: 'Google Code-In',
    description:
      'Worked in a team on creating a media sharing platform aimed at universities after the TikTok ban in India in June 2020. Made in flutter, integrating multiple firebase functionalities.',
    link: '',
  },
  {
    title: 'flo.',
    description:
      'Makes student lives easier by automating many tasks - categorizing deadlines straight from your text messages; capturing, storing, transcribing and reading out lectures notes; and helping recycle old stationery by an automatic pick and get paid system. Ideated at Code Wars 2019.',
    link: '',
  },
  {
    title: 'Team Alphahawks',
    description:
      "Worked as a team to strategize, invest and form a sustainable portfolio for KWHS, Wharton University's annual high school investment challenge.",
    link: '',
  },
] // Add ALM8

export const EXPERIENCE = [
  {
    company: 'Mercedes-Benz Group AG',
    location: 'Sindelfingen, Germany',
    position: 'Final Thesis (MB.OS Delivery)',
    start: 'April 2025',
    link: 'https://group.mercedes-benz.com/careers/about-us/mercedes-benz-operating-system/',
    end: 'Present',
    description:
      'Developing an LLM-based artifact search system using embeddings and clustering to streamline planning and reduce redundancy in corporate software development.',
    tasks: [
      'Topic: Radical standardisation in corporate software development via LLM-based similarity search.',
      'Working with vector embeddings and databases, OpenAI and Gemini SDKs, BERTopic, HDBSCAN and TF-IDF to accelerate planning cycles and reduce redundant app proposals via intelligent and more understandable artifact search.',
    ],
  },
  {
    company: 'Mercedes-Benz Group AG',
    location: 'Sindelfingen, Germany',
    position: 'Intern (MB.OS Delivery)',
    start: 'October 2024',
    link: 'https://group.mercedes-benz.com/careers/about-us/mercedes-benz-operating-system/',
    end: 'March 2025',
    description:
      'Worked in the MB.OS Delivery team for visualising a proprietary data visualisation technique which lets executives make decisions within seconds.',
    tasks: [
      'Worked in the new MB.OS department to create a new dev-tracking dashboard system for 8000+ colleagues including executives, aimed at increasing bug-fixing and iteration speed by 30% over traditional AGILE.',
      'Created a portal with 4+ aggregated data vendors including PowerBI, Jira and vehicular data with Grafana to monitor daily performance of different teams and departments under a new proprietary governance structure.',
    ],
  },
  {
    company: 'THWS',
    location: 'Schweinfurt, Germany',
    position: 'Research Assistant',
    link: 'https://fwi.thws.de/',
    start: 'October 2023',
    description:
      'Built a new data pipeline and visualisation system for university students with internal data.',
    end: 'May 2024',
    tasks: [
      'Overhauled e-learning UX to improve learning goal tracking; grounded in data with 75%+ positive user feedback.',
      'Created 3 new authenticated data pipelines, combined performance graphs and personalised learning suggestions.',
    ],
  },
  {
    company: 'Zepto (Kiranakart, YC SS21)',
    location: 'Mumbai, India',
    position: 'Product and Engineering Lead, Employee #1',
    link: 'https://www.ycombinator.com/companies/zepto',
    start: 'November 2020',
    description:
      'Built the MVP and ground-level product & logistics strategy as the first Employee and CPO for a Y-Combinator startup valued at $3B today.',
    end: 'February 2021',
    tasks: [
      'Created the systems and front-facing apps for a Y-Combinator startup as the first employee of the founding team. Conducted 50+ field interviews with shopkeepers and residents to validate business plan and market fit.',
      'Scaled the startup from 0 to 100K+ downloads; helped raise $60M in the process. Helped hire the executive team before leaving to finish my education. The startup later pivoted into a unicorn and scaled nationally as Zepto.',
    ],
  },
  {
    company: 'Flamecloud LLC',
    location: 'Gurgaon, India',
    position: 'Software Developer (Freelance)',
    link: 'https://wantace.com/',
    start: 'May 2020',
    description:
      'Built full-stack apps using MERN and React Native, designing scalable architectures with Dockerized microservices and MongoDB/SQL data layers.',
    end: 'August 2022',
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
    description:
      'Mentored university students participating in Google Summer of Code while still being in high school.',
    end: 'August 2020',
    tasks: [
      'Mentored multiple university students on development projects related to the Bassa project, a network-limiter and download queueing system for companies with low-bandwidth in third-world countries.',
    ],
  },
]
