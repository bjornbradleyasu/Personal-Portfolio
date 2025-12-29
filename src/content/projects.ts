import { Project } from './types'

/**
 * Personal Projects Content
 * 
 * [PLACEHOLDER INSTRUCTIONS]
 * Replace the example projects below with your actual projects.
 * 
 * For each project, provide:
 * - title: A clear, descriptive project name
 * - problemStatement: What problem does this solve?
 * - description: Detailed description of the project and solution
 * - role: Your role in the project
 * - stack: Technologies used (array of strings)
 * - constraints: Challenges or limitations you faced
 * - highlights: Key achievements and results (quantify when possible)
 * - images: Paths to project images in /public directory
 * - liveUrl: Live demo URL (optional)
 * - githubUrl: GitHub repository URL (optional)
 * - writeupUrl: Blog post or case study URL (optional)
 * - featured: Whether to feature this project prominently
 * 
 * Focus on projects that showcase:
 * - VR/AR development
 * - Music technology
 * - Creative coding
 * - Website/app design and development
 * - Interactive experiences
 */

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'VR Instruments',
    problemStatement: 'Create an engaging way to visualize music data in real-time for enhanced user experience.',
    description: 'A web-based music visualizer that responds to audio input, featuring particle systems and dynamic animations. Built with Web Audio API and Canvas for smooth 60fps performance.',
    role: 'Full-Stack Developer & Designer',
    stack: ['React', 'TypeScript', 'Web Audio API', 'Canvas API', 'Framer Motion'],
    constraints: [
      'Must work with any audio input (microphone, file upload)',
      'Performance target: 60fps on mid-range devices',
      'Accessible to users with visual impairments'
    ],
    highlights: [
      'Achieved consistent 60fps performance through WebGL optimization',
      'Implemented accessibility features including audio descriptions',
      'Reduced bundle size by 40% through code splitting',
      'Added support for custom visualization themes'
    ],
    images: ['/projects/music-visualizer-1.jpg', '/projects/music-visualizer-2.jpg'],
    liveUrl: 'https://music-visualizer-demo.vercel.app',
    githubUrl: 'https://github.com/bjornbradley/music-visualizer',
    writeupUrl: 'https://medium.com/@bjornbradley/building-a-music-visualizer',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'AQI Prediction Dashboard',
    problemStatement: 'Design an intuitive dashboard for small business owners to manage their online store operations.',
    description: 'A comprehensive e-commerce management dashboard with real-time analytics, inventory management, and customer insights. Features responsive design and dark mode support.',
    role: 'Frontend Developer & UX Designer',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Prisma'],
    constraints: [
      'Must work seamlessly on mobile and desktop',
      'Real-time data updates without page refresh',
      'Support for multiple store locations'
    ],
    highlights: [
      'Improved user task completion rate by 35% through UX optimization',
      'Reduced page load time by 60% with Next.js optimization',
      'Implemented real-time notifications for inventory alerts',
      'Added comprehensive analytics with customizable date ranges'
    ],
    images: ['/projects/ecommerce-dashboard-1.jpg', '/projects/ecommerce-dashboard-2.jpg'],
    liveUrl: 'https://ecommerce-dashboard-demo.vercel.app',
    githubUrl: 'https://github.com/bjornbradley/ecommerce-dashboard',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'DIY CDJ with DAW Integration',
    problemStatement: 'Create an engaging way to visualize music data in real-time for enhanced user experience.',
    description: 'A web-based music visualizer that responds to audio input, featuring particle systems and dynamic animations. Built with Web Audio API and Canvas for smooth 60fps performance.',
    role: 'Full-Stack Developer & Designer',
    stack: ['React', 'TypeScript', 'Web Audio API', 'Canvas API', 'Framer Motion'],
    constraints: [
      'Must work with any audio input (microphone, file upload)',
      'Performance target: 60fps on mid-range devices',
      'Accessible to users with visual impairments'
    ],
    highlights: [
      'Achieved consistent 60fps performance through WebGL optimization',
      'Implemented accessibility features including audio descriptions',
      'Reduced bundle size by 40% through code splitting',
      'Added support for custom visualization themes'
    ],
    images: ['/projects/music-visualizer-1.jpg', '/projects/music-visualizer-2.jpg'],
    liveUrl: 'https://music-visualizer-demo.vercel.app',
    githubUrl: 'https://github.com/bjornbradley/music-visualizer',
    writeupUrl: 'https://medium.com/@bjornbradley/building-a-music-visualizer',
    featured: true
  },
  {
    id: 'proj-4',
    title: 'Q/A Discussion Platform for Students and Instructors',
    problemStatement: 'Design an intuitive dashboard for small business owners to manage their online store operations.',
    description: 'A comprehensive e-commerce management dashboard with real-time analytics, inventory management, and customer insights. Features responsive design and dark mode support.',
    role: 'Frontend Developer & UX Designer',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Prisma'],
    constraints: [
      'Must work seamlessly on mobile and desktop',
      'Real-time data updates without page refresh',
      'Support for multiple store locations'
    ],
    highlights: [
      'Improved user task completion rate by 35% through UX optimization',
      'Reduced page load time by 60% with Next.js optimization',
      'Implemented real-time notifications for inventory alerts',
      'Added comprehensive analytics with customizable date ranges'
    ],
    images: ['/projects/ecommerce-dashboard-1.jpg', '/projects/ecommerce-dashboard-2.jpg'],
    liveUrl: 'https://ecommerce-dashboard-demo.vercel.app',
    githubUrl: 'https://github.com/bjornbradley/ecommerce-dashboard',
    featured: true
  }
] 