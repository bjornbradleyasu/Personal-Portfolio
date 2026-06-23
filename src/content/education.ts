import { Education, Certificate } from './types'

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Arizona State University',
    degree: 'Bachelor of Science',
    field: 'Media Arts and Sciences (Media Processing)',
    startDate: '08/2022',
    endDate: '05/2026',
    gpa: '3.72',
    relevantCourses: [
      'Interactive Experience Design',
      'Audio Visual Systems',
      'Immersive Technologies & XR',
      'Creative Computing',
      'Data Visualization & Analytics',
      'User Experience Design',
      'Digital Signal Processing',
      'Media Processing & Production'
    ]
  }
]

export const certificates: Certificate[] = [
  {
    id: 'cert-wwise',
    name: 'Wwise Certified Professional',
    issuingOrg: 'Audiokinetic',
    status: 'in-progress',
    year: '2025',
    description: 'Industry-standard interactive audio middleware implementation for games and XR'
  },
  {
    id: 'cert-1',
    name: 'Artificial Intelligence & Digital Media',
    issuingOrg: 'Arizona State University',
    status: 'in-progress',
    year: '2025',
    description: 'Applications of artificial intelligence in digital media production, interactive design, and creative technology'
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
