export interface ProjectSystem {
  name: string
  description: string
  why: string
}

export interface Project {
  slug: string
  title: string
  subtitle?: string
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
  // Case study fields
  problem?: string
  contributionDetail?: string
  systems?: ProjectSystem[]
  theHardPart?: string
  reflection?: string
}

export const projects: Project[] = [
  // 1. MusicMatrix
  {
    githubUrl: 'https://github.com/Khoi-NDH/MAS-Project---VR-Music',
    slug: 'music-matrix',
    title: 'MusicMatrix',
    subtitle: 'VR Music Learning Environment',
    shortDescription: 'A VR environment where users learn and play music through physical gesture and spatial interaction, with five interconnected systems built in Unity over one academic year.',
    tags: ['Unity', 'C#', 'FMOD Studio', 'XR Interaction Toolkit', 'DryWetMidi', 'Blender', 'MuseScore'],
    thumbnail: '/assets/MusicMatrix/Screenshot 2026-05-25 175635.png',
    heroImage: '/assets/MusicMatrix/VR-Instruments-Image.png',
    screenshots: [
      '/assets/MusicMatrix/Screenshot 2026-05-25 175635.png',
      '/assets/MusicMatrix/Screenshot 2026-05-25 175915.png',
    ],
    videoDemo: 'https://youtu.be/ZPO_bD2JAQ4',
    status: 'Completed',
    duration: 'Year-Long Capstone',
    team: '4-person team',

    // Case study content
    problem: 'Music education has barely changed. Sheet music, tabs, YouTube videos: all of them assume learning looks like reading and watching. But music is a physical skill. Your hands need to know where to go, your ear needs to connect sound to motion, and muscle memory has to form through repetition in real time. None of those formats are spatial or embodied. MusicMatrix explores what learning an instrument could feel like when the environment itself is the teacher.',

    contributionDetail: 'Led the majority of technical work across every system in the project. FMOD integration and audio architecture, Unity development and C# scripting, Blender modeling for all in-world UI elements, MuseScore lesson creation, sample acquisition and song sourcing, DryWetMidi implementation, and overall project management. This was a genuine team collaboration, and that matters. My individual contribution spanned every layer of the stack from the ground up.',

    systems: [
      {
        name: 'The Instrument',
        description: 'Two Circle of Fifths diagrams, one mapped to each hand. Users physically reach for and press nodes to play corresponding notes. Wrist rotation on the controller triggers pitch bend. The trigger button allows multi-note selection for chords. The joystick switches between octaves.',
        why: 'Builds muscle memory of both the instrument and music theory simultaneously. You\'re not following finger charts; you\'re learning harmonic relationships through spatial movement. The interface makes the abstract physical.',
      },
      {
        name: 'The Audio Engine',
        description: 'Built entirely in FMOD Studio with individual WAV files for every note across 15+ instrument sample packs: keys, strings, synths, pads, brass. Each instrument is a separate FMOD event with automated parameters and effects chains.',
        why: 'Architected so any new instrument can be added indefinitely without restructuring. Scalability was a first-class design concern; the system doesn\'t break when you push more into it.',
      },
      {
        name: 'The Lesson System',
        description: 'Custom lessons built from scratch using MIDI files and MuseScore Studio. A Blender-modeled sheet music display uses DryWetMidi to parse MIDI data and position note objects in world space. Notes change color in real time: green for correct, red for missed. A visible playhead moves through the score. A scorecard tracks performance at the end of each lesson.',
        why: 'Makes abstract notation physical. You see the note approaching, reach for it, and get immediate visual feedback. That loop (anticipation, action, response) is how muscle memory actually forms, and no static format can replicate it.',
      },
      {
        name: 'Cascading Notes',
        description: 'A Guitar Hero-style mode using the same Circle of Fifths interface. Users select from a library of popular songs sourced from free MIDI files and choose which instrument channel to play: guitar, piano, drums, or any other channel present in the MIDI. Full scoring system with positive feedback on correct hits.',
        why: 'Applies the same interaction model to a familiar, reward-driven format. Extends session time and keeps users returning; learning doesn\'t have to feel like drilling.',
      },
      {
        name: 'The DAW',
        description: 'A fully functional in-world digital audio workstation. Approximately 20 Blender-modeled effect dials, each controlling a distinct FMOD audio parameter. Multiple presets remap all dials simultaneously. A dedicated recording mode captures whatever the user plays and writes it to a WAV file that can be played back in the scene or exported to external software. A live waveform display visualizes the active audio signal.',
        why: 'Closes the loop between performance and production. What you play doesn\'t disappear; it becomes a real file you can take into Ableton. The waveform display makes the invisible visible in real time.',
      },
    ],

    theHardPart: 'Procedural sheet music generation inside a 3D environment. No library exists for this. DryWetMidi handled MIDI parsing, but converting timing and pitch data into accurately positioned 3D note objects (with correct durations, a synced moving playhead, and real-time color feedback) required building the entire system from scratch. The core challenge was translation: musical time signatures, tempo values, and beat subdivisions don\'t map cleanly to Unity\'s world-space coordinate system. Every variable had to be calibrated by hand against actual musical timing standards until the system played, looked, and felt correct. No tutorial existed for this. It required reasoning from first principles about how musical time and 3D space relate.',

    outcome: 'Demonstrated at ASU capstone review with all five systems fully operational. The instrument responds to gesture, lessons run with real-time accuracy feedback, Cascading Notes plays against real MIDI song data, and the DAW records and exports WAV files that open correctly in external software like Ableton. A working proof of concept for spatial music education with real, exportable output.',

    reflection: 'Build the DAW and instrument as more modular systems from the start. Features were developed sequentially over the year, and some late-stage integration was harder than it needed to be because of early architectural decisions. Specifically, the way FMOD events were structured created friction when adding the recording layer on top of them. If I were starting over, I\'d define the full audio architecture as a complete spec before writing any Unity code, and treat every system as if it would eventually need to plug into every other system. Design for integration before you need it.',

    // Legacy fields kept for fallback
    overview: 'A VR environment where users learn and play music through physical gesture and spatial interaction. Built in Unity over one academic year as an ASU capstone project with a four-person team.',
    role: 'Group Lead and Audio Director. Owned FMOD architecture, Unity/C# development, Blender modeling, lesson creation, and project management.',
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
    overview: 'This project explores what happens when you merge conversational AI with real-time image manipulation. Rather than treating text and vision as separate domains, I designed a system where the chatbot\'s mood and conversation context directly influence how it transforms images. A user can ask the bot questions, load an image, and then apply a filter that reflects the emotional tone of the ongoing chat. The core innovation is the mood-based colormap system: instead of generic filters, the bot applies OpenCV colormaps (Spring for "happy," Ocean for "sad," Jet for "hype") so every transformation feels contextually grounded in conversation.',
    role: 'Solo developer. I owned the full architecture: conversation logic, image I/O, filter design, and integration. I chose NLTK pattern matching + reflection as the conversational foundation because it allowed me to focus engineering effort on the vision side while still maintaining fluid dialogue. For images, I designed the mood-mapping system to make visual feedback feel less like a utility and more like a collaborative creative act.',
    outcome: 'The chatbot successfully processes both modalities in real time and feels cohesive; loading an image or applying a filter doesn\'t break the conversation; it extends it. The mood-based colormap system is the standout: it\'s a simple idea (map emotion names to color palettes), but it makes multimodal interaction feel intentional rather than bolted-on. Technically, all assignment requirements were met: custom image loading, preset library, multiple filter types, and a creative visual component. The larger takeaway: multimodal AI doesn\'t require massive models or complexity; it requires thoughtful integration of what each modality can express.',
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
