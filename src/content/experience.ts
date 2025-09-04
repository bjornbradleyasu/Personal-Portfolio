import { Experience } from './types'

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'SmartSource.',
    role: 'Field Service Technician',
    startDate: '08/2025',
    endDate: 'Present',
    achievements: [
      'Developed responsive web applications using React and TypeScript',
      'Improved application performance by 40% through code optimization',
      'Collaborated with UX designers to implement accessible user interfaces',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git']
  },
  {
    id: 'exp-2',
    company: 'Cronkite School of Journalism',
    role: 'IT/AV Student Worker',
    startDate: '08/2025',
    endDate: 'Present',
    achievements: [
      'Designed and built interactive prototypes for mobile applications',
      'Implemented smooth animations and micro-interactions using Framer Motion',
      'Conducted user research and usability testing',
      'Redesigned company website resulting in 25% increase in engagement'
    ],
    technologies: ['Figma', 'Framer Motion', 'React Native', 'Adobe Creative Suite']
  },
  {
    id: 'exp-3',
    company: 'Hooper Corporations',
    role: 'IT Intern',
    startDate: '2022-01',
    endDate: '2022-05',
    achievements: [
      'Configured computers for new and existing employees under company domain and regulations',
      'Configured and deployed hardware, often setting up AV equipment for internal training and meetings',
      'Coordinated large-scale software installations and hardware rollouts',
      'Maintained and updated databases of hardware and software licenses for all employees',
      'High pressure on call troubleshooting for over 450 employees'
    ],
    technologies: ['WordPress', 'PHP', 'HTML/CSS', 'JavaScript', 'MySQL']
  },
  {
    id: 'exp-4',
    company: 'Edge Consulting',
    role: 'IT Support Specialist',
    startDate: '2021-09',
    endDate: '2022-12',
    achievements: [
      'Installed and maintained workstations ensuring optimal performance across multiple offices',
      'Created new updated database for all computer hardware',
      'Delivered, set up, and configured tech equipment across long-distance projects developing efficiency and reliability under tight deadlines'
    ],
    technologies: ['Next.js', 'Vue.js', 'PostgreSQL', 'AWS', 'Docker']
  }
] 