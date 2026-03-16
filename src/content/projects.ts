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
    title: 'Capstone: VR Gesture Instrument',
    problemStatement: 'Design and build a novel musical instrument — playable entirely through hand gestures in VR — that demonstrates professional-grade audio-visual reactivity and appeals to a broad creative audience.',
    description: 'A group capstone research project developing a full VR experience built around a completely new form of musical instrument. Inspired by the concept of "mind gloves," players interact using tracked hand gestures that trigger real-time visual and audio responses in a custom-built 3D environment. The project integrates Unity for scene and interaction logic, FMOD for procedural and event-driven audio, the XR Interaction Toolkit for gesture recognition and physics-based interaction, and Blender for original asset creation. Currently in active development.',
    role: 'Group Lead & Audio Director — responsible for defining project scope and direction, facilitating team decisions, and owning the entire FMOD audio implementation including event architecture, parameter-driven reactivity, and spatial audio mixing. Also contributing to Unity scripting and scene integration.',
    stack: ['Unity', 'FMOD', 'C#', 'XR Interaction Toolkit', 'Blender', 'Meta XR SDK'],
    constraints: [
      'Novel interaction paradigm with no direct reference implementation',
      'Must feel intuitive to first-time VR users without a learning curve',
      'Audio and visual systems must respond with sub-20ms perceived latency',
      'Coordinating across four specializations (audio, code, 3D, UX) with a shared timeline'
    ],
    highlights: [
      'Led a cross-disciplinary team of 4 through research, prototyping, and iterative development',
      'Designed and implemented FMOD event architecture for fully parameter-driven audio reactivity',
      'Built spatial audio mixing system that responds dynamically to gesture velocity and position',
      'Contributed to C# scripting for gesture-to-audio-visual event triggering in Unity',
      'Directed 3D environment scope and asset integration from Blender into Unity'
    ],
    images: [],
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
  },
  {
    id: 'proj-5',
    title: 'Interactive Audio-Reactive 3D Portfolio Prototype',
    problemStatement: 'Create a portfolio experience that feels immersive and interactive while still keeping project information clear and easy to scan.',
    description: 'An experimental portfolio prototype combining 3D scene interaction, audio-reactive visuals, and smooth section transitions to present technical and creative work in a more engaging format. Focused on balancing visual personality with usability and accessibility.',
    role: 'Frontend Developer & Experience Designer',
    stack: ['React', 'TypeScript', 'Three.js', 'Framer Motion', 'Vite', 'Web Audio API'],
    constraints: [
      'Needed to maintain readability despite heavy visual effects',
      'Had to perform smoothly on both desktop and mobile devices',
      'Required progressive enhancement for users with reduced motion preferences'
    ],
    highlights: [
      'Built a modular section architecture to support reusable animated layouts',
      'Implemented performant visual effects with fallback states for lower-end devices',
      'Improved portfolio dwell time through stronger visual storytelling and interaction'
    ],
    images: ['/projects/interactive-portfolio-1.jpg', '/projects/interactive-portfolio-2.jpg'],
    githubUrl: 'https://github.com/bjornbradley/interactive-portfolio-prototype',
    featured: false
  },
  {
    id: 'proj-6',
    title: 'VR Spatial Audio Playground',
    problemStatement: 'Explore how spatialized audio and gesture-based interaction can improve immersion and musical expression in virtual environments.',
    description: 'A prototype environment for testing spatial audio behavior, dynamic sound events, and interaction-driven musical feedback in VR. The project was used to evaluate design decisions for user comfort, responsiveness, and sonic clarity before full production builds.',
    role: 'Audio Systems Developer & Unity Collaborator',
    stack: ['Unity', 'FMOD', 'C#', 'XR Interaction Toolkit', 'Blender'],
    constraints: [
      'Needed low-latency feedback for convincing interaction loops',
      'Required rapid iteration across sound design, interaction logic, and scene tuning',
      'Had to validate comfort and orientation in headset during long sessions'
    ],
    highlights: [
      'Developed FMOD event routing patterns reusable across multiple VR prototypes',
      'Connected interaction events to layered audio responses for better user feedback',
      'Produced a testing framework to compare different gesture and audio mapping models'
    ],
    images: ['/projects/vr-audio-playground-1.jpg', '/projects/vr-audio-playground-2.jpg'],
    featured: false
  }
] 