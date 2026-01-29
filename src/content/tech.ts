import { TechItem } from './types'

// Group tech stack by categories
export const techCategories = {
  frontend: {
    title: 'Frontend',
    description: 'Web Development',
    items: [
      { id: 'tech-js', name: 'JavaScript', category: 'frontend', icon: 'javascript', description: 'ES6+ JavaScript', proficiency: 'expert' },
      { id: 'tech-html', name: 'HTML5', category: 'frontend', icon: 'html', description: 'Semantic HTML markup', proficiency: 'expert' },
      { id: 'tech-css', name: 'CSS3', category: 'frontend', icon: 'css', description: 'Modern CSS styling & animations', proficiency: 'expert' },
      { id: 'tech-react', name: 'React', category: 'frontend', icon: 'react', description: 'Modern UI library', proficiency: 'expert' },
      { id: 'tech-vite', name: 'Vite', category: 'frontend', icon: 'vite', description: 'Next generation build tool', proficiency: 'advanced' },
      { id: 'tech-tailwind', name: 'Tailwind CSS', category: 'frontend', icon: 'tailwind', description: 'Utility-first CSS framework', proficiency: 'expert' },
      { id: 'tech-responsive', name: 'Responsive Design', category: 'frontend', icon: 'responsive', description: 'Mobile-first layouts', proficiency: 'expert' }
    ]
  },
  programming: {
    title: 'Programming',
    description: 'General Purpose Languages',
    items: [
      { id: 'tech-python', name: 'Python', category: 'programming', icon: 'python', description: 'Data work & assignments', proficiency: 'advanced' },
      { id: 'tech-cpp', name: 'C++', category: 'programming', icon: 'cpp', description: 'Coursework & core concepts', proficiency: 'intermediate' },
      { id: 'tech-java', name: 'Java', category: 'programming', icon: 'java', description: 'OOP & database projects', proficiency: 'intermediate' },
      { id: 'tech-swift', name: 'Swift', category: 'programming', icon: 'swift', description: 'iOS/macOS & creative apps', proficiency: 'advanced' }
    ]
  },
  data: {
    title: 'Data & Analytics',
    description: 'Data Science & Visualization',
    items: [
      { id: 'tech-pandas', name: 'Pandas', category: 'data', icon: 'pandas', description: 'Data manipulation & analysis', proficiency: 'advanced' },
      { id: 'tech-sklearn', name: 'scikit-learn', category: 'data', icon: 'sklearn', description: 'ML modeling & regression', proficiency: 'advanced' },
      { id: 'tech-powerbi', name: 'Power BI', category: 'data', icon: 'powerbi', description: 'Dashboards & visualization', proficiency: 'advanced' },
      { id: 'tech-sql', name: 'SQL', category: 'data', icon: 'sql', description: 'Database queries & design', proficiency: 'advanced' }
    ]
  },
  audio: {
    title: 'Audio & Creative',
    description: 'Music Production & XR',
    items: [
      { id: 'tech-unity', name: 'Unity', category: 'audio', icon: 'unity', description: 'Game engine & XR development', proficiency: 'advanced' },
      { id: 'tech-xr', name: 'XR Toolkit', category: 'audio', icon: 'xr', description: 'XR Interaction & spatial computing', proficiency: 'advanced' },
      { id: 'tech-fmod', name: 'FMOD Studio', category: 'audio', icon: 'fmod', description: 'Interactive audio engine', proficiency: 'advanced' },
      { id: 'tech-ableton', name: 'Ableton Live', category: 'audio', icon: 'ableton', description: 'Digital audio workstation', proficiency: 'intermediate' },
      { id: 'tech-arduino', name: 'Arduino', category: 'audio', icon: 'arduino', description: 'Hardware & integration', proficiency: 'intermediate' },
      { id: 'tech-blemidi', name: 'BLE MIDI', category: 'audio', icon: 'midi', description: 'Bluetooth MIDI protocols', proficiency: 'intermediate' },
      { id: 'tech-avfoundation', name: 'AVFoundation', category: 'audio', icon: 'av', description: 'Swift audio/video stack', proficiency: 'advanced' }
    ]
  },
  tools: {
    title: 'Tools & Workflow',
    description: 'Development Workflow',
    items: [
      { id: 'tech-git', name: 'Git/GitHub', category: 'tools', icon: 'github', description: 'Version control & collaboration', proficiency: 'expert' },
      { id: 'tech-vscode', name: 'VS Code', category: 'tools', icon: 'vscode', description: 'Code editor & extensions', proficiency: 'expert' },
      { id: 'tech-cursor', name: 'Cursor', category: 'tools', icon: 'cursor', description: 'AI-powered code editor', proficiency: 'expert' }
    ]
  }
}

// Flatten for backward compatibility
export const techStack: TechItem[] = Object.values(techCategories).flatMap(category => 
  category.items.map(item => ({
    ...item,
    category: item.category as TechItem['category'],
    proficiency: item.proficiency as TechItem['proficiency']
  }))
)