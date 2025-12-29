import { Education, Certificate } from './types'

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Arizona State University',
    degree: 'Bachelor of Science',
    field: 'Media Arts & Sciences (Media Processing)',
    startDate: '08/2022',
    endDate: '05/2026 (expected)',
    gpa: '3.7',
    relevantCourses: [
      'Data Structures & Algorithms',
      'Software Engineering',
      'Database Systems',
      'Web Development',
      'User Experience Design',
      'Computer Graphics'
    ]
  }
]

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    name: 'Artifical Intelligence & Digital Media',
    issuingOrg: 'Arizona State University',
    status: 'in-progress',
    year: '2025',
    description: 'Foundational cloud computing concepts and AWS services'
  },
  {
    id: 'cert-2',
    name: 'Dante Level 1',
    issuingOrg: 'Audinate',
    status: 'in-progress',
    year: '2025',
    description: 'Professional audio networking certification'
  },
  {
    id: 'cert-3',
    name: 'AWS Cloud Practitioner',
    issuingOrg: 'Amazon Web Services',
    status: 'in-progress',
    year: '2025',
    description: 'Foundational cloud computing concepts and AWS services'
  }
] 