import { Project } from './types'

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'MusicMatrix',
    problemStatement: 'Design and build a VR environment where users can learn and play music through physical gesture and spatial interaction — including a sheet-music play-along mode that connects notation to embodied movement.',
    description: 'A year-long capstone project building a full VR music learning environment in Unity. Players use hand-tracked controllers mapped to a Circle of Fifths interface to play notes, trigger chords, and shift octaves. Five interconnected systems were built from scratch: the instrument, an FMOD-powered audio engine with 15+ sample packs, a sheet-music lesson system using DryWetMidi and MuseScore, a Guitar Hero-style Cascading Notes mode, and a fully functional in-world DAW that records and exports WAV files.',
    role: 'Group Lead & Audio Director — led a 4-person team across research, prototyping, and development. Owned FMOD event architecture and all audio implementation, Unity/C# scripting, Blender modeling for in-world UI, lesson creation in MuseScore, and overall project direction.',
    stack: ['Unity', 'FMOD Studio', 'C#', 'XR Interaction Toolkit', 'Blender', 'DryWetMidi', 'MuseScore', 'Meta XR SDK'],
    constraints: [
      'Novel interaction paradigm with no direct reference implementation',
      'Must feel intuitive to first-time VR users without a learning curve',
      'Audio and visual systems must respond with sub-20ms perceived latency',
      'Coordinating across four specializations (audio, code, 3D, UX) with a shared timeline'
    ],
    highlights: [
      'Led a cross-disciplinary team of 4 through research, prototyping, and iterative development',
      'Designed and implemented FMOD event architecture for fully parameter-driven audio reactivity',
      'Built procedural sheet-music system in 3D using DryWetMidi — no existing library; built from first principles',
      'In-world DAW records performance and exports WAV files that open correctly in Ableton',
      'Demonstrated at ASU capstone review with all five systems fully operational'
    ],
    images: [
      '/assets/MusicMatrix/Screenshot 2026-05-25 175635.png',
      '/assets/MusicMatrix/Screenshot 2026-05-25 175915.png',
    ],
    githubUrl: 'https://github.com/Khoi-NDH/MAS-Project---VR-Music',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Multimodal AI Chatbot',
    problemStatement: 'Build a conversational AI that processes both natural language and images together, with visual output that reflects the emotional tone of the ongoing conversation.',
    description: 'A Python chatbot that merges NLP-driven conversation with real-time image manipulation. The core innovation is a mood-based colormap system: the bot applies OpenCV colormaps (Spring for "happy," Ocean for "sad," Jet for "hype") so visual transformations feel grounded in conversation context rather than arbitrary. A Naïve Bayes classifier routes user input between conversational and image-processing handlers, keeping both modalities coherent.',
    role: 'Solo developer. Owned the full architecture: conversation logic (NLTK pattern matching + pronoun reflection), image I/O pipeline, filter design, mood-mapping system, and classifier integration.',
    stack: ['Python', 'NLTK', 'OpenCV', 'Naïve Bayes'],
    constraints: [
      'Both text and image modalities needed to feel coherent — not siloed',
      'Mood-to-color mapping had to feel intentional, not arbitrary',
      'All assignment requirements (custom filters, preset library, classifier) while still delivering a creative angle'
    ],
    highlights: [
      'Built mood-based colormap system mapping emotional state to visual output (Spring, Ocean, Jet, etc.)',
      'Integrated Naïve Bayes classifier to route user input between conversation and vision handlers',
      'Implemented ELIZA-style pronoun reflection for natural-feeling dialogue',
      'Cross-modal design: loading an image extends the conversation rather than interrupting it'
    ],
    images: [
      '/assets/ChatbotImages/happy.png',
      '/assets/ChatbotImages/sad.png',
      '/assets/ChatbotImages/hype.png',
    ],
    githubUrl: 'https://github.com/bjornbradleyasu/MultiModal-AI-Visual-Effect-Bot',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Spotify Recommendation Algorithm Research Zine',
    problemStatement: 'Make recommendation-system mechanics understandable to non-specialists by translating opaque platform behavior into an engaging, research-backed editorial format.',
    description: 'A long-form research zine analyzing how Spotify recommendation systems influence discovery, listening habits, and user agency. Combines technical synthesis, platform critique, and visual storytelling to explain recommendation inputs, system infrastructure, transparency concerns, and ethical tradeoffs in a format easier to explore than a standard report.',
    role: 'Research Author & Editorial Designer — designed and authored the full zine, including literature review synthesis, system breakdowns, narrative structure, and visual direction.',
    stack: ['Research Methods', 'Algorithm Analysis', 'Editorial Design', 'Visual Storytelling', 'Information Design'],
    constraints: [
      'Recommendation models are proprietary, so analysis relied on public sources and observed behavior',
      'Needed to balance technical accuracy with accessibility for mixed technical audiences',
      'Large volume of findings required a narrative structure that remained scannable and coherent'
    ],
    highlights: [
      'Produced a 26-page interactive zine covering recommendation flow, UX impact, infrastructure, and ethics',
      'Translated algorithmic concepts into visual diagrams and annotated explanations',
      'Connected platform mechanics to user-level outcomes like discovery bias and feedback loops',
      'Built a narrative sequence supporting both linear reading and section-by-section reference'
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
    id: 'proj-4',
    title: 'DIY CDJ with DAW Integration',
    problemStatement: 'Build a hybrid hardware+software music controller that combines tactile physical input with digital effect control, eliminating the need for expensive commercial CDJ hardware.',
    description: 'A complete custom music production system combining an M5Stick-based hardware controller, BLE MIDI wireless bridge, and a native Swift/Xcode macOS application. The hardware layer features a rotary encoder and custom 3D-printed DJ platter for tactile input. Firmware translates physical interaction into MIDI events over Bluetooth. The software layer provides track loading, playback control, effect manipulation, and keyboard drum-pad support.',
    role: 'Full-Stack Hardware & Software Engineer — owned the full stack end to end: hardware design, firmware, and desktop app development.',
    stack: ['Arduino', 'BLE MIDI', 'Swift', 'AVFoundation', 'Xcode', 'OpenSCAD', 'M5Stick'],
    constraints: [
      'Wireless communication required sub-100ms latency for convincing real-time playback feel',
      'Single rotary input needed to control multiple parameters (track seek, effect selection, effect value)',
      'Cross-device compatibility: Arduino firmware, macOS app, and hardware had to work reliably together'
    ],
    highlights: [
      'Designed and manufactured a complete hardware+software system from sketch to working prototype',
      'Implemented BLE MIDI bridge enabling wireless control from custom hardware to any MIDI-compatible app',
      'Built a Swift macOS app with track loading and real-time effect parameter control',
      'Demonstrated that low-cost components ($100–150 total) can deliver professional-grade music interaction'
    ],
    images: [
      '/assets/m5Stick.webp',
      '/assets/rotaryencoder.jpg',
      '/assets/disk.png',
    ],
    githubUrl: 'https://github.com/bjornbradleyasu/CDJunkie',
    featured: true
  },
  {
    id: 'proj-5',
    title: 'AQI Prediction Dashboard',
    problemStatement: 'Turn a large, noisy global air-quality dataset into an interpretable decision-support tool that helps identify high-risk cities and test AQI improvement scenarios.',
    description: 'An end-to-end analytics project combining Python-based AQI prediction with a Power BI dashboard for exploratory analysis and policy-oriented decision making. Covered data cleaning, constrained sampling, linear-regression forecasting, and interactive reporting so users can compare city and country risk patterns, pollutant relationships, and forecast outcomes.',
    role: 'Data Analyst & Dashboard Developer — owned the full pipeline: raw data ingestion and cleaning, feature selection and model training with scikit-learn, and dashboard design and publishing in Power BI.',
    stack: ['Python', 'Pandas', 'scikit-learn', 'Power BI', 'SQL'],
    constraints: [
      'Source data was ~900k rows and had to be sampled down to 750 records while preserving representativeness',
      'Forecasting model had to remain interpretable for non-technical viewers',
      'Dashboard needed to support both executive-level KPI scanning and city-level drilldown'
    ],
    highlights: [
      'Built a full data-to-dashboard pipeline from preprocessing through model output visualization',
      'Identified PM2.5, PM10, and NO2 as the strongest AQI-associated pollutant indicators',
      'Used hierarchical drilldowns to surface city-level hotspots hidden by country-level averages',
      'Implemented what-if analysis to estimate AQI response under pollutant reduction scenarios'
    ],
    images: ['/assets/aqi-dashboard.png'],
    liveUrl: 'https://app.powerbi.com/groups/me/reports/d5247618-7c92-41d6-bced-60d88ad6c9e0/866ab9f8b4543f728222?experience=power-bi',
    featured: true
  }
]
