export interface Project {
  slug: string
  title: string
  shortDescription: string
  tags: string[]
  thumbnail: string
  thumbnailFit?: 'cover' | 'contain'
  thumbnailGrid?: string[]
  heroImage?: string
  screenshotCaptions?: string[]
  screenshots: string[]
  videoDemo?: string
  mediaNote?: string
  zineImages?: string[]
  zineTitle?: string
  embedTitle?: string
  embedUrl?: string
  embedDescription?: string
  githubUrl?: string
  liveUrl?: string
  overview: string
  role: string
  outcome: string
  status?: string
  duration?: string
  team?: string
  projectSnapshot?: Array<{ label: string; value: string }>
  keyContributions?: string[]
  researchFocus?: string[]
  buildTracks?: string[]
  featured?: boolean
}

export const projects: Project[] = [
  // 1. VR
  {
    githubUrl: 'https://github.com/Khoi-NDH/MAS-Project---VR-Music',
    slug: 'vr-gesture-instrument',
    title: 'VR Gesture Instrument',
    shortDescription: 'A year-long capstone exploring what VR uniquely enables for musical expression through gesture-driven sound and immersive audiovisual feedback.',
    tags: ['Unity', 'FMOD', 'C#', 'XR Interaction Toolkit', 'Blender'],
    thumbnail: '/assets/VR-Instruments-Image.png',
    heroImage: '/assets/VR-Instruments-Image.png',
    screenshots: [],
    mediaNote: 'This project is actively in production — full documentation, additional screenshots, and a demo video will be added as development progresses.',
    status: 'In Progress',
    duration: 'Year-Long Capstone',
    team: '4-person interdisciplinary team',
    projectSnapshot: [
      { label: 'Project Type', value: 'Research-led capstone + interactive VR instrument' },
      { label: 'Primary Goal', value: 'Create a music experience that is not possible in the physical world' },
      { label: 'Core Stack', value: 'Unity, FMOD, Blender, XR Interaction Toolkit' },
      { label: 'Current Stage', value: 'Actively prototyping and validating interaction/audio mappings' },
    ],
    keyContributions: [
      'Defined project direction from a novelty concept into a research-driven question about VR in music',
      'Led team coordination and cross-discipline decision making across code, audio, and 3D design',
      'Designed FMOD event architecture for responsive gesture-to-audio mapping',
      'Implemented and iterated audio reactivity patterns tied to user movement and interaction context',
      'Contributed to Unity-side interaction tuning for expressive and readable user feedback loops',
    ],
    researchFocus: [
      'Which forms of musical control feel native in 3D space compared with flat-screen or physical instruments?',
      'How does spatialized audio feedback affect perceived control, immersion, and creative flow?',
      'What gesture complexity remains expressive without introducing fatigue or confusion for first-time users?',
      'How can visuals and audio co-respond fast enough to feel instrument-like rather than game-like?',
    ],
    buildTracks: [
      'Gesture interaction prototypes and control vocabulary definition',
      'FMOD system design for event, parameter, and mix behavior',
      'Blender-to-Unity environment and asset integration',
      'User testing passes focused on comfort, onboarding, and expressiveness',
    ],
    overview: 'This capstone started as a challenge to design a VR musical instrument and evolved into a broader research question: what capabilities does VR offer for music creation that the real world cannot? The project combines gesture-based performance, real-time reactive audio, and immersive visual feedback to investigate new forms of musical interaction.',
    role: 'I serve as Group Lead and Audio Director. I shape project scope, guide team alignment, and own core audio system strategy and implementation in FMOD while collaborating on Unity integration and interaction tuning.',
    outcome: 'The project is still in active development. Current progress has established a viable prototype direction, a reusable audio interaction architecture, and a clear research framework for evaluating VR-native musical affordances through ongoing iteration and user testing.',
    featured: true,
  },
  // 2. AI Chatbot
  {
    githubUrl: 'https://github.com/bjornbradleyasu/MultiModal-AI-Visual-Effect-Bot',
    slug: 'multimodal-ai-chatbot',
    title: 'Multimodal AI Chatbot',
    shortDescription: 'A conversational AI that processes both natural language and digital images, enabling mood-reactive visual transformations and context-aware dialogue.',
    tags: ['Python', 'NLP', 'NLTK', 'OpenCV', 'Image Processing', 'Chatbot'],
    thumbnail: '',
    thumbnailGrid: [
      '/assets/ChatbotImages/happy.png',
      '/assets/ChatbotImages/sad.png',
      '/assets/ChatbotImages/hype.png',
      '/assets/ChatbotImages/grayscale.png',
      '/assets/ChatbotImages/edge.png',
      '/assets/ChatbotImages/rainy.png',
    ],
    screenshots: [],
    status: 'Completed',
    duration: 'Semester Project',
    projectSnapshot: [
      { label: 'Core Capability', value: 'Dual-mode processing: conversational NLP + image manipulation' },
      { label: 'Key Innovation', value: 'Mood-based colormap filters that mirror conversation context to visuals' },
      { label: 'Technical Stack', value: 'Python, NLTK, OpenCV, Naïve Bayes classifier' },
      { label: 'User Interaction', value: 'Cross-modal: chat prompts image actions; Image loading enriches conversation state' },
    ],
    keyContributions: [
      'Built a conversational core using NLTK pattern matching with pronoun reflection (ELIZA-style dialogue)',
      'Implemented image I/O pipeline: file upload, preset library management, and display utilities',
      'Developed three core image filters (grayscale, edge detection, Gaussian blur) plus mood-based colormap system',
      'Created mood-context mapping so visual transformations reflect emotional state of conversation',
      'Integrated Naïve Bayes classifier to automatically route user input to appropriate response handler',
      'Built command parser for natural language filter requests (e.g., "apply edge to my image")',
    ],
    researchFocus: [
      'How can visual feedback reinforce conversational context and emotional tone?',
      'What makes a chatbot feel "alive" vs. mechanical in multimodal interactions?',
      'How can image processing serve as a tool for reflection rather than just automation?',
      'What happens when dialogue and vision processing are tightly coupled rather than siloed?',
    ],
    buildTracks: [
      'NLP conversation engine with context preservation across turns',
      'Image pipeline: upload, storage, retrieval, and display management',
      'Filter library: standard CV transforms + mood-based creative mapping',
      'Integration layer bridging text commands to vision operations',
      'Classifier for intent detection and routing',
    ],
    overview: 'This project explores what happens when you merge conversational AI with real-time image manipulation. Rather than treating text and vision as separate domains, I designed a system where the chatbot\'s mood and conversation context directly influence how it transforms images. A user can ask the bot questions, load an image, and then apply a filter that reflects the emotional tone of the ongoing chat. The core innovation is the mood-based colormap system—instead of generic filters, the bot applies OpenCV colormaps (Spring for "happy," Ocean for "sad," Jet for "hype") so every transformation feels contextually grounded in conversation.',
    role: 'Solo developer. I owned the full architecture: conversation logic, image I/O, filter design, and integration. I chose NLTK pattern matching + reflection as the conversational foundation because it allowed me to focus engineering effort on the vision side while still maintaining fluid dialogue. For images, I designed the mood-mapping system to make visual feedback feel less like a utility and more like a collaborative creative act.',
    outcome: 'The chatbot successfully processes both modalities in real time and feels cohesive—loading an image or applying a filter doesn\'t break the conversation; it extends it. The mood-based colormap system is the standout: it\'s a simple idea (map emotion names to color palettes), but it makes multimodal interaction feel intentional rather than bolted-on. Technically, all assignment requirements were met: custom image loading, preset library, multiple filter types, and a creative visual component. The larger takeaway: multimodal AI doesn\'t require massive models or complexity—it requires thoughtful integration of what each modality can express.',
    featured: true,
  },
  // 3. Spotify
  {
    slug: 'spotify-recommendation-algorithm-zine',
    title: 'Spotify Recommendation Algorithm Research Zine',
    shortDescription: 'A research-driven editorial zine exploring how Spotify recommendation systems shape listening behavior, discovery, and personalization.',
    tags: ['Research', 'Recommendation Systems', 'Spotify', 'Data Analysis', 'Editorial Design'],
    thumbnail: '/assets/SpotifyAlgorithmZine/(1)Front Cover.png',
    thumbnailFit: 'contain',
    screenshots: [],
    zineImages: [
      '/assets/Spotify-Zine/Front Cover.png',
      '/assets/Spotify-Zine/Table Of Contents.png',
      '/assets/Spotify-Zine/Algorithmic System Description.png',
      '/assets/Spotify-Zine/User Interface.png',
      '/assets/Spotify-Zine/User Experience pt 1.png',
      '/assets/Spotify-Zine/User Experience pt 1 (2).png',
      '/assets/Spotify-Zine/Infrastructure pt 1.png',
      '/assets/Spotify-Zine/Infrastructure pt 2.png',
      '/assets/Spotify-Zine/Transparency pt 1.png',
      '/assets/Spotify-Zine/Transparency pt 2.png',
      '/assets/Spotify-Zine/Transparency pt 2 (2).png',
      '/assets/Spotify-Zine/Transparency pt 2 (3).png',
      '/assets/Spotify-Zine/Ethical Concerns pt 1.png',
      '/assets/Spotify-Zine/Ethical Concerns pt 1 (2).png',
      '/assets/Spotify-Zine/Ethical Concerns pt 1 (3).png',
      '/assets/Spotify-Zine/Ethical Concerns pt 1 (4).png',
      '/assets/Spotify-Zine/Ethical Concerns pt 1 (5).png',
      '/assets/Spotify-Zine/Ethical Concerns pt 1 (6).png',
      '/assets/Spotify-Zine/Annotated Diagram pt 1.png',
      '/assets/Spotify-Zine/Annotated Diagram pt 2.png',
      '/assets/Spotify-Zine/Data Pt 1.png',
      '/assets/Spotify-Zine/Data Pt 1 (2).png',
      '/assets/Spotify-Zine/Sources.png',
      '/assets/Spotify-Zine/Sources (2).png',
      '/assets/Spotify-Zine/Sources (3).png',
      '/assets/Spotify-Zine/Back Cover.png',
    ],
    zineTitle: 'Spotify Recommendation Algorithm',
    overview: 'This project investigates Spotify\'s recommendation ecosystem through a visual research format that combines technical analysis with editorial storytelling. The goal was to unpack how recommendation signals, listening history, and platform design patterns influence what users discover and how their habits evolve over time.',
    role: 'I designed and authored the full research zine, including literature review synthesis, system breakdowns, narrative structure, and visual direction. I translated technical recommendation-system concepts into a readable magazine format intended for both technical and non-technical audiences.',
    outcome: 'The final deliverable is a multi-page interactive zine that presents recommendation-system mechanics, observed user impacts, and key takeaways in a format that is easier to engage with than a conventional report. It demonstrates my ability to merge research, critical analysis, and communication design into a single product experience.',
    featured: true,
  },
  // 4. DIY CDJ
  {
    githubUrl: 'https://github.com/bjornbradleyasu/CDJunkie',
    slug: 'diy-cdj-daw-integration',
    title: 'DIY CDJ with DAW Integration',
    shortDescription: 'A custom DIY CDJ + DAW workflow using an M5Stick controller, BLE MIDI signaling, and a Swift macOS app for hands-on music control.',
    tags: ['M5Stick', 'Rotary Encoder', 'Arduino', 'BLE MIDI', 'OpenSCAD', 'Swift', 'Xcode'],
    thumbnail: '/assets/disk.png',
    heroImage: '/assets/dawproject.png',
    screenshots: [
      '/assets/m5Stick.webp',
      '/assets/rotaryencoder.jpg',
      '/assets/disk.png',
    ],
    screenshotCaptions: ['M5Stick Controller', 'Rotary Encoder', 'Custom DJ Disk'],
    status: 'Completed Prototype',
    duration: 'Multi-phase build',
    projectSnapshot: [
      { label: 'System Type', value: 'Hybrid hardware + desktop music interaction system' },
      { label: 'Controller Build', value: 'M5Stick + rotary encoder + custom 3D-printed DJ disk' },
      { label: 'Signal Layer', value: 'BLE MIDI transport for low-friction wireless control' },
      { label: 'Desktop App', value: 'Swift/Xcode macOS app for track loading, playback control, and effects routing' },
    ],
    keyContributions: [
      'Designed and assembled the physical CDJ controller hardware around an M5Stick and rotary input',
      'Implemented Arduino firmware logic to translate controller movement into usable control signals',
      'Used BLE MIDI to bridge hardware input into a software music workflow without wired dependency',
      'Modeled and iterated the CDJ platter component in OpenSCAD for custom 3D printing',
      'Built a Swift macOS app in Xcode to load preloaded and user-selected tracks for manipulation',
      'Implemented effect-target toggling so the same controller could drive timeline movement or selected effects',
      'Added a keyboard drum-pad layer to support rhythm performance alongside track manipulation',
    ],
    researchFocus: [
      'How far can low-cost custom hardware go in delivering expressive music control?',
      'What interaction mappings feel intuitive when one control surface serves multiple musical parameters?',
      'How can hardware and software be coordinated so control switching remains clear during performance?',
      'What minimum feature set creates a genuinely usable custom production workflow?',
    ],
    buildTracks: [
      'Physical controller design and assembly',
      'Firmware development for input capture and BLE MIDI output',
      'Desktop audio app logic for track loading and playback state',
      'Control mapping layer for timeline/effect targeting',
      'Performance augmentation via keyboard drum-pad interaction',
    ],
    overview: 'This project explored building a custom music production experience from both hardware and software. I designed and assembled a DIY CDJ controller using an M5Stick, a rotary encoder, and a 3D-printed DJ disk, then paired it with a custom macOS app built in Swift/Xcode. The app could load songs (preloaded or newly imported), and the controller could manipulate playback timing and an enabled audio effect in real time. I also built a keyboard-driven drum pad so performance could combine tactile hardware input with software-triggered percussion.',
    role: 'I owned the full stack end to end: hardware design and prototyping, firmware implementation, and desktop app development. On hardware, I used Arduino for the M5Stick logic and BLE MIDI signaling, and modeled the physical wheel component in OpenSCAD for 3D printing. On software, I built the macOS DAW-style app in Swift using Xcode, including song loading flow, control routing from the CDJ input, and drum pad interaction mapped to keyboard input.',
    outcome: 'The final prototype delivered a stable custom performance workflow that felt expressive and responsive. I was able to switch tracks, control timeline movement, and apply selected effects from the DIY CDJ while layering drum pad input from the keyboard. Even without commercial hardware, the system proved that low-cost custom components can support a practical and creative music production setup. Although I no longer have the original hardware or project photos, the project remains a strong example of cross-domain building across embedded systems, interaction design, and audio software development.',
    featured: true,
  },
  // 5. AQI
  {
    slug: 'aqi-prediction-dashboard',
    title: 'AQI Prediction Dashboard',
    shortDescription: 'A linear-regression AQI forecasting project paired with a Power BI decision-support dashboard for global city-level air quality analysis.',
    tags: ['Python', 'Pandas', 'scikit-learn', 'Power BI', 'SQL'],
    thumbnail: '/assets/aqi-dashboard.png',
    screenshots: [],
    liveUrl: 'https://app.powerbi.com/groups/me/reports/d5247618-7c92-41d6-bced-60d88ad6c9e0/866ab9f8b4543f728222?experience=power-bi',
    embedTitle: 'AQI Prediction Dashboard',
    embedUrl: 'https://app.powerbi.com/groups/me/reports/d5247618-7c92-41d6-bced-60d88ad6c9e0/866ab9f8b4543f728222?experience=power-bi',
    embedDescription: 'Interactive Power BI dashboard for exploring global AQI patterns, city-level hotspots, pollutant relationships, and what-if forecasting scenarios.',
    status: 'Completed',
    duration: 'Semester Project',
    projectSnapshot: [
      { label: 'Project Type', value: 'End-to-end data analytics + interactive dashboard' },
      { label: 'Core Goal', value: 'Turn a large, noisy global air-quality dataset into an interpretable decision-support tool' },
      { label: 'Technical Stack', value: 'Python, Pandas, scikit-learn, Power BI, SQL' },
      { label: 'Data Challenge', value: 'Sampled ~900k rows down to 750 records (one per city per day) while preserving representativeness' },
    ],
    keyContributions: [
      'Built a full data-to-dashboard pipeline from preprocessing and feature preparation through model output visualization',
      'Identified PM2.5, PM10, and NO2 as the strongest AQI-associated pollutant indicators in the sample',
      'Used hierarchical drilldowns to surface city-level hotspots hidden by country-level averages',
      'Implemented what-if analysis patterns to estimate AQI response under pollutant reduction scenarios',
      'Designed dashboard layout to support both executive-level KPI scanning and city-level drilldown analysis',
    ],
    overview: 'An end-to-end analytics project combining Python-based AQI prediction with a Power BI dashboard for exploratory analysis and policy-oriented decision making. The workflow covered data cleaning, constrained sampling, linear-regression forecasting, and interactive reporting so users can compare city and country risk patterns, pollutant relationships, and forecast outcomes.',
    role: 'Solo data analyst and dashboard developer. I owned the full pipeline: raw data ingestion and cleaning in Python, feature selection and model training with scikit-learn, and dashboard design and publishing in Power BI. I made deliberate tradeoffs to keep the forecasting model interpretable for non-technical viewers while still delivering meaningful predictive signal.',
    outcome: 'The final deliverable is an interactive Power BI dashboard that surfaces global AQI trends, city-level risk hotspots, and pollutant contribution breakdowns in a format accessible to both technical and non-technical audiences. The linear regression model achieved reasonable forecast accuracy on the sampled dataset and the what-if scenario tool gives users a concrete way to explore how pollutant reductions could shift AQI outcomes.',
    featured: true,
  },
]
