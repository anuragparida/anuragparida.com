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
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places or projects I have worked on.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Education Page
export const EDUCATION = [
  {
    title: 'Bachelors of Engineering in Robotics',
    institution: 'Technische Hochschule Würzburg Schweinfurt',
    link: 'https://www.ucentral.edu.co/',
    date: '2022-2025',
  },
  {
    title: 'High School Diploma',
    institution: 'Amity International School, Gurgaon',
    link: 'https://platzi.com/',
    date: '2014-2020',
  },
]

// Study Page
export const CERTIFICATIONS = [
  {
    title: 'Bachelors of Engineering in Robotics',
    institution: 'Technische Hochschule Würzburg Schweinfurt',
    link: 'https://www.ucentral.edu.co/',
    date: '2022-2025',
  },
  {
    title: 'High School Diploma',
    institution: 'Amity International School, Gurgaon',
    link: 'https://platzi.com/',
    date: '2014-2020',
  },
]

export const AWARDS = [
  {
    title: 'Grand Prize Winner',
    institution: 'Google Code-In',
    description: 'ADD DESCRIPTION',
    link: 'https://codein.withgoogle.com/',
    date: '2019',
  },
]

export const PROJECTS = [
  {
    title: 'Grand Prize Winner',
    institution: 'Google Code-In',
    description: 'ADD DESCRIPTION',
    link: 'https://codein.withgoogle.com/',
    date: '2019',
  },
]

export const EXPERIENCE = [
  {
    company: 'Mercedes-Benz Group AG',
    location: 'Sindelfingen, Germany',
    position: 'Intern',
    start: '2021',
    link: 'https://straico.com/',
    end: 'Current',
    tasks: [
      'Integration IA services with react and tailwind css',
      'Development and build of DB with mongoDB',
    ],
  },
  {
    company: 'Spot2',
    location: 'Mexico City, Mexico',
    position: 'Software Engineer',
    link: 'https://spot2.mx/',
    start: '2021',
    end: 'Current',
    tasks: [
      'Development of the Spot2 platform with the use of React, Redux, and Material UI',
      'Development map with the use of Google Maps API',
      'Development internal platform with the use of React, Redux, and Material UI',
      'Testing and debugging',
    ],
  },
]
