import { Experience } from './types'

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Walter Cronkite School of Journalism',
    role: 'IT/AV Support Specialist',
    startDate: '08/2025',
    endDate: 'Present',
    achievements: [
      'Managed AV and broadcast infrastructure across a high-demand journalism school and Arizona PBS facility, deploying and configuring computer stations and AV systems while coordinating across departments to support live productions, classrooms, and media labs.',
      'Diagnosed and resolved complex hardware, software, and AV issues in a deadline-driven broadcast environment, maintaining minimal downtime for hundreds of students, faculty, and live programming.',
    ],
    technologies: ['Windows & macOS', 'AV Systems', 'Broadcast Infrastructure', 'Network Troubleshooting'],
    hoverBullets: [
      'Managed AV and broadcast infrastructure across a high-demand journalism school and Arizona PBS facility, deploying and configuring computer stations and AV systems while coordinating across departments to support live productions, classrooms, and media labs',
      'Diagnosed and resolved complex hardware, software, and AV issues in a deadline-driven broadcast environment, maintaining minimal downtime for hundreds of students, faculty, and live programming',
    ],
  },
  {
    id: 'exp-4',
    company: 'Smart Source',
    role: 'Field Service Technician',
    startDate: '08/2025',
    endDate: '12/2025',
    achievements: [
      'Deployed and configured enterprise IT/AV systems for large-scale trade shows and corporate events, consistently meeting strict setup deadlines in high-pressure, high-visibility environments.',
      'Served as primary technical contact for clients on-site, translating complex technical requirements into reliable, tailored solutions and building strong professional communication skills.',
    ],
    technologies: ['Enterprise AV', 'Event Technology', 'Client Support', 'Network Configuration'],
    hoverBullets: [
      'Deployed and configured enterprise IT/AV systems for large-scale trade shows and corporate events, consistently meeting strict setup deadlines in high-pressure, high-visibility environments',
      'Served as primary technical contact for clients on-site, translating complex technical requirements into reliable, tailored solutions and building strong professional communication skills',
    ],
  },
  {
    id: 'exp-3',
    company: 'Hooper Corporation',
    role: 'IT Intern',
    startDate: '05/2023',
    endDate: '08/2024',
    achievements: [
      'Led a company-wide software licensing audit, reallocating unused licenses across multiple departments to optimize cost and compliance organization-wide.',
      'Owned a full VPN migration initiative, remotely configuring software and resolving issues across multiple locations to enable secure offsite data access for all employees.',
    ],
    technologies: ['Windows & macOS', 'VPN Configuration', 'Software Licensing', 'IT Support'],
    hoverBullets: [
      'Led a company-wide software licensing audit, reallocating unused licenses across multiple departments to optimize cost and compliance organization-wide',
      'Owned a full VPN migration initiative, remotely configuring software and resolving issues across multiple locations to enable secure offsite data access for all employees',
    ],
  },
  {
    id: 'exp-2',
    company: 'Edge Consulting Engineers Inc.',
    role: 'IT Support Specialist',
    startDate: '04/2021',
    endDate: '08/2022',
    achievements: [
      'Designed and implemented a centralized hardware inventory database that became the company standard for tracking equipment across multiple offices, improving audit readiness and reducing downtime.',
      'Standardized workstation imaging and hardware upgrade workflows across engineering teams at multiple offices, maintaining consistent performance and security compliance.',
    ],
    technologies: ['Hardware Installation', 'System Imaging', 'Inventory Management', 'Technical Support'],
    hoverBullets: [
      'Designed and implemented a centralized hardware inventory database that became the company standard for tracking equipment across multiple offices, improving audit readiness and reducing downtime',
      'Standardized workstation imaging and hardware upgrade workflows across engineering teams at multiple offices, maintaining consistent performance and security compliance',
    ],
  },
]
