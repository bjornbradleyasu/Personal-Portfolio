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
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'vr-gesture-instrument',
    title: 'VR Gesture Instrument',
    shortDescription: 'A novel musical instrument played entirely through hand gestures in VR, with real-time audio-visual reactivity.',
    tags: ['Unity', 'FMOD', 'C#', 'XR Interaction Toolkit', 'Blender'],
    thumbnail: '/images/vr-gesture-thumb.jpg',
    screenshots: [],
    overview: 'A group capstone research project developing a full VR experience built around a completely new form of musical instrument. Players interact using tracked hand gestures that trigger real-time visual and audio responses in a custom-built 3D environment.',
    role: 'Group Lead & Audio Director — responsible for defining project scope and direction, facilitating team decisions, and owning the entire FMOD audio implementation including event architecture, parameter-driven reactivity, and spatial audio mixing.',
    outcome: 'Placeholder — project in active development. Outcome to be filled in upon completion.',
    featured: true,
  },
  {
    slug: 'aqi-prediction-dashboard',
    title: 'AQI Prediction Dashboard',
    shortDescription: 'A linear-regression AQI forecasting project paired with a Power BI decision-support dashboard for global city-level air quality analysis.',
    tags: ['Python', 'Pandas', 'scikit-learn', 'Power BI', 'SQL'],
    thumbnail: '/assets/aqi-dashboard.png',
    screenshots: [],
    liveUrl: 'http://app.powerbi.com/groups/me/reports/d5247618-7c92-41d6-bced-60d88ad6c9e0/866ab9f8b4543f728222?experience=power-bi',
    overview: 'Using the Global Air Quality Data (15 Days Hourly, 50 Cities) dataset by Smeet Raichura, I built a predictive analytics workflow focused on AQI forecasting for major cities. The original dataset contained about 900,000 rows with timestamp, geography, pollutant concentrations, weather context, and AQI as the target variable. To meet assignment constraints, I sampled the data down to 750 rows by filtering to one entry per city per day (validated with my TA). The final model and dashboard were designed as a decision-support tool for environmental analysis rather than a purely academic model output.',
    role: 'I owned the full workflow from data preparation through dashboard delivery. I cleaned and transformed the Kaggle dataset, engineered a linear regression model to predict AQI, and then translated the output into Power BI using KPI cards, interactive charts, slicers, drilldowns, and what-if analysis controls. I also designed the dashboard structure to support practical decision-making by helping users compare city-level AQI conditions, pollutant relationships, and forecast scenarios.',
    outcome: 'The dashboard produced several actionable findings: cities and countries with higher percentages of AQI > 100 stood out as intervention priorities; PM2.5, PM10, and NO2 showed the strongest association with higher AQI; predicted AQI generally tracked actual AQI closely enough for scenario testing; drilldowns revealed city-level hotspots hidden by country averages; and what-if controls showed that moderate pollutant reductions can lead to meaningful AQI improvements in some cities. Weather context cards further suggested that higher temperatures combined with low wind speed often align with higher AQI conditions.',
    featured: true,
  },
  {
    slug: 'spotify-recommendation-algorithm-zine',
    title: 'Spotify Recommendation Algorithm Research Zine',
    shortDescription: 'A research-driven editorial zine exploring how Spotify recommendation systems shape listening behavior, discovery, and personalization.',
    tags: ['Research', 'Recommendation Systems', 'Spotify', 'Data Analysis', 'Editorial Design'],
    thumbnail: '/assets/Spotify-Zine/Front Cover.png',
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
  {
    slug: 'diy-cdj-daw-integration',
    title: 'DIY CDJ with DAW Integration',
    shortDescription: 'A custom-built DJ controller that integrates directly with Ableton Live via MIDI over Bluetooth.',
    tags: ['Arduino', 'BLE MIDI', 'Swift', 'AVFoundation', 'Ableton Live'],
    thumbnail: '/images/cdj-thumb.jpg',
    screenshots: [],
    overview: 'Placeholder — project overview to be filled in.',
    role: 'Placeholder — role description to be filled in.',
    outcome: 'Placeholder — outcome and learnings to be filled in.',
    featured: true,
  },
  {
    slug: 'qa-discussion-platform',
    title: 'Q&A Discussion Platform',
    shortDescription: 'A real-time discussion board for students and instructors with threaded answers and role-based access.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    thumbnail: '/images/qa-thumb.jpg',
    screenshots: [],
    overview: 'Placeholder — project overview to be filled in.',
    role: 'Placeholder — role description to be filled in.',
    outcome: 'Placeholder — outcome and learnings to be filled in.',
    featured: true,
  },
]
