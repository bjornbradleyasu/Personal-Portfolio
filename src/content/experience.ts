import { Experience } from './types'

/**
 * Work Experience Content
 * 
 * [PLACEHOLDER INSTRUCTIONS]
 * Update the experience entries below with your actual work history.
 * 
 * For each experience, provide:
 * - company: Company name
 * - role: Your job title
 * - startDate: Start date (MM/YYYY format)
 * - endDate: End date (MM/YYYY format) or "Present" for current role
 * - achievements: List of accomplishments and responsibilities (use action verbs)
 * - technologies: Technologies, tools, and skills you used or learned
 * 
 * TIP: Quantify achievements when possible (e.g., "Improved performance by 40%")
 * TIP: Tailor achievements to highlight skills relevant to VR, music tech, creative coding roles
 */

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Cronkite School of Journalism',
    role: 'IT/AV Support Specialist',
    startDate: '08/2025',
    endDate: 'Present',
    achievements: [
      'Deployed and licensed new computer stations across the Cronkite building, including Arizona PBS facilities.',
      'Provide frontline IT/AV support for classrooms, labs, and media spaces, ensuring consistent system performance, minimal downtime, and seamless technology use for students and faculty.',
      'Troubleshoot and resolve support requests, maintaining optimized hardware, software, and AV systems in a high-demand academic and broadcast environment.'
    ],
    technologies: ['Windows & macOS', 'AV Systems', 'Network Troubleshooting', 'User Support']
  },
  {
    id: 'exp-2',
    company: 'SmartSource.',
    role: 'Field Service Technician',
    startDate: '08/2025',
    endDate: '12/2025',
    achievements: [
      'Deploy and configure IT/AV technology for trade shows, large convention centers, and corporate events, ensuring reliable system performance and meeting strict setup timelines.',
      'Perform quality assurance checks on rental equipment (PCs, printers, monitors, and AV gear), verifying functionality, resolving issues, and preparing devices for redeployment.',
      'Work directly with clients to deliver tailored IT/AV solutions, strengthening technical expertise while building professional communication and client support skills.'
    ],
    technologies: ['Computer Hardware', 'AV Equipment', 'Network Configuration', 'Troubleshooting']
  },
  {
    id: 'exp-3',
    company: 'Hooper Corporations',
    role: 'IT Intern',
    startDate: '2022-01',
    endDate: '2022-05',
    achievements: [
      'Led large-scale software licensing initiative, auditing databases, confirming program functionality, reallocating unused licenses, and coordinating with engineers and service technicians to optimize cost and compliance.',
      'Supported company-wide VPN migration, remotely installing and configuring software while troubleshooting any additional IT issues raised by employees. This allowed new off site employees to gain access to crucial data.',
      'Imaged and configured laptops per company protocols, ensuring standardized system setups and improved compliance with security policies.' 
    ],
    technologies: ['Windows & macOS', 'VPN Configuration', 'Software Deployment', 'IT Support']
  },
  {
    id: 'exp-4',
    company: 'Edge Consulting',
    role: 'IT Support Specialist',
    startDate: '2021-09',
    endDate: '2022-12',
    achievements: [
      'Installed and upgraded hardware as well as imaged workstations for a wide range of engineers, ensuring consistent performance and compliance standards across multiple offices.',
      'Designed and implemented a centralized hardware inventory database in Excel, enabling accurate tracking of equipment, reducing downtime, and improving audit readiness for the entire company.',
      'Developed strong professional communication skills by coordinating with staff and managers on technical requirements, improving response times and ensuring smooth day-to-day technology operations.'
    ],
    technologies: ['Hardware Installation', 'System Imaging', 'Inventory Management', 'Technical Support']
  }
] 