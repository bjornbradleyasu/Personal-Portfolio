export interface Project {
  slug: string
  title: string
  shortDescription: string
  tags: string[]
  thumbnail: string
  screenshots: string[]
  videoDemo?: string
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
  {
    slug: 'vr-gesture-instrument',
    title: 'VR Gesture Instrument',
    shortDescription: 'A year-long capstone exploring what VR uniquely enables for musical expression through gesture-driven sound and immersive audiovisual feedback.',
    tags: ['Unity', 'FMOD', 'C#', 'XR Interaction Toolkit', 'Blender'],
    thumbnail: '/images/vr-gesture-thumb.jpg',
    screenshots: [],
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
  {
    slug: 'spotify-recommendation-algorithm-zine',
    title: 'Spotify Recommendation Algorithm Research Zine',
    shortDescription: 'A research-driven editorial zine exploring how Spotify recommendation systems shape listening behavior, discovery, and personalization.',
    tags: ['Research', 'Recommendation Systems', 'Spotify', 'Data Analysis', 'Editorial Design'],
    thumbnail: '/assets/Spotify-Zine/Front Cover.png',
    screenshots: [],
    status: 'Completed',
    duration: 'Research + Editorial Design Study',
    team: 'Solo project',
    projectSnapshot: [
      { label: 'Format', value: 'Interactive editorial zine + PDF artifact' },
      { label: 'Primary Question', value: 'How recommendation systems shape user behavior, discovery, and platform agency' },
      { label: 'Methods', value: 'Source synthesis, system mapping, critical analysis, visual storytelling' },
      { label: 'Output Focus', value: 'Translate technical complexity into accessible, narrative-driven explanation' },
    ],
    keyContributions: [
      'Authored and designed the full zine from concept framing through final editorial sequence',
      'Mapped recommendation-system components into visual diagrams and annotated explanatory spreads',
      'Synthesized technical and UX evidence into a reader-friendly narrative without oversimplifying core mechanics',
      'Structured the publication for both cover-to-cover reading and fast section-based reference',
      'Connected model behavior to real user outcomes including discovery narrowing, repeated exposure loops, and transparency concerns',
    ],
    researchFocus: [
      'Which recommendation signals appear to have the strongest influence on what users keep hearing?',
      'How does interface design reinforce or obscure the operation of personalization systems?',
      'Where are the most significant transparency gaps between platform logic and user understanding?',
      'What ethical tradeoffs emerge when engagement optimization drives recommendation behavior?',
    ],
    buildTracks: [
      'Research collection and source synthesis',
      'System mapping and explanatory diagram development',
      'Editorial narrative architecture and pacing',
      'Visual design and layout iteration across all pages',
      'Final interactive reading flow and publication preparation',
    ],
    zineImages: [
      '/assets/SpotifyAlgorithmZine/(1)Front Cover.png',
      '/assets/SpotifyAlgorithmZine/(2)Table Of Contents.png',
      '/assets/SpotifyAlgorithmZine/(3)Algorithmic System Description.png',
      '/assets/SpotifyAlgorithmZine/(4)Annotated Diagram pt 1.png',
      '/assets/SpotifyAlgorithmZine/(5)Annotated Diagram pt 2.png',
      '/assets/SpotifyAlgorithmZine/(6)Data Pt 1.png',
      '/assets/SpotifyAlgorithmZine/(7)Data Pt 1 (2).png',
      '/assets/SpotifyAlgorithmZine/(8)Infrastructure pt 1.png',
      '/assets/SpotifyAlgorithmZine/(9)Infrastructure pt 2.png',
      '/assets/SpotifyAlgorithmZine/(10)User Interface.png',
      '/assets/SpotifyAlgorithmZine/(11)User Experience pt 1.png',
      '/assets/SpotifyAlgorithmZine/(12)User Experience pt 1 (2).png',
      '/assets/SpotifyAlgorithmZine/(13)Ethical Concerns pt 1.png',
      '/assets/SpotifyAlgorithmZine/(14)Ethical Concerns pt 1 (2).png',
      '/assets/SpotifyAlgorithmZine/(15)Ethical Concerns pt 1 (3).png',
      '/assets/SpotifyAlgorithmZine/(16)Ethical Concerns pt 1 (4).png',
      '/assets/SpotifyAlgorithmZine/(17)Ethical Concerns pt 1 (5).png',
      '/assets/SpotifyAlgorithmZine/(18)Ethical Concerns pt 1 (6).png',
      '/assets/SpotifyAlgorithmZine/(19)Transparency pt 1.png',
      '/assets/SpotifyAlgorithmZine/(20)Transparency pt 2.png',
      '/assets/SpotifyAlgorithmZine/(21)Transparency pt 2 (2).png',
      '/assets/SpotifyAlgorithmZine/(22)Transparency pt 2 (3).png',
      '/assets/SpotifyAlgorithmZine/(23)Sources.png',
      '/assets/SpotifyAlgorithmZine/(24)Sources (2).png',
      '/assets/SpotifyAlgorithmZine/(25)Sources (3).png',
      '/assets/SpotifyAlgorithmZine/(26)Back Cover.png',
    ],
    zineTitle: 'Spotify Recommendation Algorithm',
    overview: 'This project investigates Spotify\'s recommendation ecosystem through a visual research format that combines technical analysis with editorial storytelling. The goal was to unpack how recommendation signals, listening history, and platform design patterns influence what users discover and how their habits evolve over time.',
    role: 'I designed and authored the full research zine, including literature review synthesis, system breakdowns, narrative structure, and visual direction. I translated technical recommendation-system concepts into a readable magazine format intended for both technical and non-technical audiences.',
    outcome: 'The final deliverable is a multi-page interactive zine that presents recommendation-system mechanics, observed user impacts, and key takeaways in a format that is easier to engage with than a conventional report. It demonstrates my ability to merge research, critical analysis, and communication design into a single product experience.',
    featured: true,
  },
  {
    slug: 'diy-cdj-daw-integration',
    title: 'DIY CDJ with DAW Integration',
    shortDescription: 'A custom DIY CDJ + DAW workflow using an M5Stick controller, BLE MIDI signaling, and a Swift macOS app for hands-on music control.',
    tags: ['M5Stick', 'Rotary Encoder', 'Arduino', 'BLE MIDI', 'OpenSCAD', 'Swift', 'Xcode'],
    thumbnail: '/assets/diy-daw/controller-assembly.jpg',
    screenshots: [
      '/assets/diy-daw/components-m5stick-encoder.jpg',
      '/assets/diy-daw/openscad-platter-design.jpg',
      '/assets/diy-daw/macos-daw-interface.jpg',
    ],
    status: 'Completed Prototype',
    duration: 'Multi-phase build',
    team: 'Solo project',
    embedTitle: 'System Architecture: Hardware → MIDI → Software',
    embedDescription: 'The DIY CDJ system operates in three integrated layers. The hardware layer combines an M5Stick microcontroller with a custom rotary encoder wired to a 3D-printed DJ platter. The firmware layer runs Arduino code to capture rotary input and translate it into BLE MIDI events, creating a wireless bridge between physical interaction and software. The software layer is a Swift/Xcode macOS app that receives MIDI signals, maps them to digital audio workstation (DAW) parameters, and manages track loading, playback control, and effect targeting. This three-stage architecture allows for tactile hardware-based music control without wired constraints, combining the expressiveness of dedicated hardware with the flexibility of software mixing and effects.',
    projectSnapshot: [
      { label: 'Hardware Controller', value: 'M5Stick + rotary encoder + 3D-printed platter' },
      { label: 'Wireless Protocol', value: 'BLE MIDI for sensor-to-app communication' },
      { label: 'Firmware Logic', value: 'Arduino-based input capture and MIDI event generation' },
      { label: 'Desktop Application', value: 'Swift/Xcode macOS app for audio control and effects routing' },
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
  {
    slug: 'aqi-prediction-dashboard',
    title: 'AQI Prediction Dashboard',
    shortDescription: 'A linear-regression AQI forecasting project paired with a Power BI decision-support dashboard for global city-level air quality analysis.',
    tags: ['Python', 'Pandas', 'scikit-learn', 'Power BI', 'SQL'],
    thumbnail: '/assets/aqi-dashboard.png',
    screenshots: [],
    status: 'Completed',
    duration: 'Academic Analytics Case Study',
    team: 'Solo project',
    projectSnapshot: [
      { label: 'Dataset Scope', value: 'Global Air Quality Data (15 Days Hourly, 50 Cities), initially ~900k records' },
      { label: 'Modeling Method', value: 'Linear regression AQI forecasting with pollutant + weather feature context' },
      { label: 'BI Delivery', value: 'Power BI dashboard with KPI cards, slicers, drilldowns, and scenario exploration' },
      { label: 'Decision Use', value: 'Identify city-level risk hotspots and evaluate pollution-reduction impact' },
    ],
    keyContributions: [
      'Designed and delivered the complete workflow from data cleaning and sampling through model output and dashboard presentation',
      'Applied a constrained sampling strategy (one row per city per day) to create a valid 750-row analysis subset from the full dataset',
      'Built a linear regression model to estimate AQI and support scenario-based planning conversations',
      'Developed a Power BI interface that balances high-level KPI visibility with city/country drilldown exploration',
      'Integrated what-if analysis interactions to test potential AQI improvements under pollutant reduction assumptions',
    ],
    researchFocus: [
      'Which pollutants most consistently align with elevated AQI across sampled regions?',
      'How accurately can a linear baseline model approximate observed AQI for practical planning use?',
      'What city-level patterns are obscured when analysis is viewed only at country granularity?',
      'How should weather context be incorporated when interpreting AQI outcomes?',
    ],
    buildTracks: [
      'Data preparation and feature engineering in Python',
      'Regression model development and validation',
      'Pollutant trend exploration and comparative slicing',
      'Power BI dashboard architecture and KPI design',
      'Interactive scenario testing for AQI sensitivity analysis',
    ],
    liveUrl: 'http://app.powerbi.com/groups/me/reports/d5247618-7c92-41d6-bced-60d88ad6c9e0/866ab9f8b4543f728222?experience=power-bi',
    overview: 'Using the Global Air Quality Data (15 Days Hourly, 50 Cities) dataset by Smeet Raichura, I built a predictive analytics workflow focused on AQI forecasting for major cities. The original dataset contained about 900,000 rows with timestamp, geography, pollutant concentrations, weather context, and AQI as the target variable. To meet assignment constraints, I sampled the data down to 750 rows by filtering to one entry per city per day (validated with my TA). The final model and dashboard were designed as a decision-support tool for environmental analysis rather than a purely academic model output.',
    role: 'I owned the full workflow from data preparation through dashboard delivery. I cleaned and transformed the Kaggle dataset, engineered a linear regression model to predict AQI, and then translated the output into Power BI using KPI cards, interactive charts, slicers, drilldowns, and what-if analysis controls. I also designed the dashboard structure to support practical decision-making by helping users compare city-level AQI conditions, pollutant relationships, and forecast scenarios.',
    outcome: 'The dashboard produced several actionable findings: cities and countries with higher percentages of AQI > 100 stood out as intervention priorities; PM2.5, PM10, and NO2 showed the strongest association with higher AQI; predicted AQI generally tracked actual AQI closely enough for scenario testing; drilldowns revealed city-level hotspots hidden by country averages; and what-if controls showed that moderate pollutant reductions can lead to meaningful AQI improvements in some cities. Weather context cards further suggested that higher temperatures combined with low wind speed often align with higher AQI conditions.',
    featured: true,
  },
  {
    slug: 'multimodal-ai-chatbot',
    title: 'Multimodal AI Chatbot',
    shortDescription: 'A conversational AI that processes both natural language and digital images, enabling mood-reactive visual transformations and context-aware dialogue.',
    tags: ['Python', 'NLP', 'NLTK', 'OpenCV', 'Image Processing', 'Chatbot'],
    thumbnail: '',
    screenshots: [
      '/assets/ChatbotImages/happy.png',
      '/assets/ChatbotImages/sad.png',
      '/assets/ChatbotImages/hype.png',
      '/assets/ChatbotImages/study.png',
      '/assets/ChatbotImages/rainy.png',
      '/assets/ChatbotImages/edge.png',
    ],
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
]
