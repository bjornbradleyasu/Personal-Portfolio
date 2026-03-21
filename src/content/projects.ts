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
    problemStatement: 'Turn a large, noisy global air-quality dataset into an interpretable decision-support tool that helps identify high-risk cities and test AQI improvement scenarios.',
    description: 'An end-to-end analytics project combining Python-based AQI prediction with a Power BI dashboard for exploratory analysis and policy-oriented decision making. The workflow covered data cleaning, constrained sampling, linear-regression forecasting, and interactive reporting so users can compare city and country risk patterns, pollutant relationships, and forecast outcomes.',
    role: 'Data Analyst & Dashboard Developer',
    stack: ['Python', 'Pandas', 'scikit-learn', 'Power BI', 'SQL'],
    constraints: [
      'Original source data was very large (~900k rows) and had to be reduced for assignment constraints',
      'Needed to preserve representativeness while sampling down to 750 records (one record per city per day)',
      'Forecasting had to remain interpretable for non-technical viewers',
      'Dashboard design needed to support both executive-level KPI scanning and city-level drilldown analysis'
    ],
    highlights: [
      'Built a full data-to-dashboard pipeline from preprocessing and feature preparation through model output visualization',
      'Identified PM2.5, PM10, and NO2 as the strongest AQI-associated pollutant indicators in the sample',
      'Used hierarchical drilldowns to surface city-level hotspots hidden by country-level averages',
      'Implemented what-if analysis patterns to estimate AQI response under pollutant reduction scenarios'
    ],
    images: ['/assets/aqi-dashboard.png'],
    liveUrl: 'http://app.powerbi.com/groups/me/reports/d5247618-7c92-41d6-bced-60d88ad6c9e0/866ab9f8b4543f728222?experience=power-bi',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'DIY CDJ with DAW Integration',
    problemStatement: 'Build a hybrid hardware+software music controller that combines tactile physical input with digital effect control, eliminating the need for expensive commercial CDJ hardware.',
    description: 'A complete custom music production system combining an M5Stick-based hardware controller, BLE MIDI wireless bridge, and a native Swift/Xcode macOS application. The hardware layer features a rotary encoder and custom 3D-printed DJ platter for tactile input. The firmware layer translates physical interaction into MIDI events over Bluetooth. The software layer provides track loading, playback control, effect manipulation, and keyboard drum-pad support for flexible performance scenarios.',
    role: 'Full-Stack Hardware & Software Engineer',
    stack: ['Arduino', 'C++', 'BLE MIDI', 'Swift', 'Xcode', 'OpenSCAD', 'M5Stick', 'Rotary Encoder'],
    constraints: [
      'Wireless communication required sub-100ms latency for convincing real-time playback feel',
      'Physical controller had to remain intuitive for first-time users without documentation',
      'Single rotary input needed to control multiple parameters (track seek, effect selection, effect value)',
      'Cross-device compatibility: Arduino firmware, macOS app, and hardware had to work reliably together'
    ],
    highlights: [
      'Designed and manufactured a complete hardware+software system from sketch to working prototype',
      'Implemented BLE MIDI bridge enabling wireless control from custom hardware to any MIDI-compatible app',
      'Created responsive multi-parameter control mapping so one rotary encoder felt like many musicians\'s inputs',
      'Built a Swift macOS app with intuitive track loading and real-time effect parameter control',
      'Demonstrated that low-cost components ($100-150 total) can deliver professional-grade music interaction'
    ],
    images: [
      '/assets/diy-daw/components-m5stick-encoder.jpg',
      '/assets/diy-daw/openscad-platter-design.jpg',
      '/assets/diy-daw/macos-daw-interface.jpg'
    ],
    githubUrl: 'https://github.com/bjornbradley/diy-cdj-daw',
    featured: true
  },
  {
    id: 'proj-4',
    title: 'Spotify Recommendation Algorithm Research Zine',
    problemStatement: 'Make recommendation-system mechanics understandable to non-specialists by translating opaque platform behavior into an engaging, research-backed editorial format.',
    description: 'A long-form research zine analyzing how Spotify recommendation systems influence discovery, listening habits, and user agency. The project combines technical synthesis, platform critique, and visual storytelling to explain recommendation inputs, system infrastructure, transparency concerns, and ethical tradeoffs in a format that is easier to explore than a standard report.',
    role: 'Research Author & Editorial Designer',
    stack: ['Research Methods', 'Algorithm Analysis', 'Editorial Design', 'Visual Storytelling', 'Information Design'],
    constraints: [
      'Recommendation models are proprietary, so analysis relied on public sources and observed behavior',
      'Needed to balance technical accuracy with accessibility for mixed technical audiences',
      'Large volume of findings required a narrative structure that remained scannable and coherent',
      'Visual language needed to stay consistent across many pages while carrying dense information'
    ],
    highlights: [
      'Produced a multi-page interactive zine covering recommendation flow, UX impact, infrastructure, and ethics',
      'Translated algorithmic concepts into visual diagrams and annotated explanations for easier interpretation',
      'Connected platform mechanics to user-level outcomes like discovery bias, feedback loops, and perceived control',
      'Built a narrative sequence that supports both linear reading and section-by-section reference use'
    ],
    images: [
      '/assets/SpotifyAlgorithmZine/(1)Front Cover.png',
      '/assets/SpotifyAlgorithmZine/(3)Algorithmic System Description.png',
      '/assets/SpotifyAlgorithmZine/(4)Annotated Diagram pt 1.png'
    ],
    writeupUrl: '/assets/spotify-recommendation-zine.pdf',
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