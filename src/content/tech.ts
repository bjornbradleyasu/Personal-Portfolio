import { TechItem } from './types'

// Group tech stack by categories
export const techCategories = {
  frontend: {
    title: 'Frontend',
    description: 'User Interface & Experience',
    items: [
      {
        id: 'tech-1',
        name: 'React',
        category: 'frontend',
        icon: 'react',
        description: 'Modern UI library for building interactive user interfaces',
        proficiency: 'expert'
      },
      {
        id: 'tech-2',
        name: 'TypeScript',
        category: 'frontend',
        icon: 'typescript',
        description: 'Typed superset of JavaScript for better development experience',
        proficiency: 'advanced'
      },
      {
        id: 'tech-3',
        name: 'Tailwind CSS',
        category: 'frontend',
        icon: 'tailwind',
        description: 'Utility-first CSS framework for rapid UI development',
        proficiency: 'expert'
      },
      {
        id: 'tech-4',
        name: 'Next.js',
        category: 'frontend',
        icon: 'nextjs',
        description: 'Full-stack React framework with server-side rendering',
        proficiency: 'advanced'
      },
      {
        id: 'tech-5',
        name: 'Vue.js',
        category: 'frontend',
        icon: 'vue',
        description: 'Progressive JavaScript framework for building user interfaces',
        proficiency: 'intermediate'
      }
    ]
  },
  design: {
    title: 'Design',
    description: 'Visual & Motion Design',
    items: [
      {
        id: 'tech-6',
        name: 'Figma',
        category: 'design',
        icon: 'figma',
        description: 'Collaborative interface design and prototyping tool',
        proficiency: 'advanced'
      },
      {
        id: 'tech-7',
        name: 'Framer Motion',
        category: 'design',
        icon: 'framer',
        description: 'Production-ready motion library for React',
        proficiency: 'advanced'
      },
      {
        id: 'tech-8',
        name: 'Adobe Creative Suite',
        category: 'design',
        icon: 'adobe',
        description: 'Professional design and creative software suite',
        proficiency: 'intermediate'
      }
    ]
  },
  audio: {
    title: 'Audio',
    description: 'Sound & Music Production',
    items: [
      {
        id: 'tech-9',
        name: 'Ableton Live',
        category: 'audio',
        icon: 'ableton',
        description: 'Digital audio workstation for music production',
        proficiency: 'intermediate'
      },
      {
        id: 'tech-10',
        name: 'Pro Tools',
        category: 'audio',
        icon: 'protools',
        description: 'Professional audio recording and editing software',
        proficiency: 'intermediate'
      },
      {
        id: 'tech-11',
        name: 'Dante',
        category: 'audio',
        icon: 'dante',
        description: 'Professional audio networking technology',
        proficiency: 'advanced'
      }
    ]
  },
  backend: {
    title: 'Backend',
    description: 'Server & Database',
    items: [
      {
        id: 'tech-12',
        name: 'AWS',
        category: 'backend',
        icon: 'aws',
        description: 'Cloud computing platform and services',
        proficiency: 'intermediate'
      },
      {
        id: 'tech-13',
        name: 'Node.js',
        category: 'backend',
        icon: 'nodejs',
        description: 'JavaScript runtime for server-side development',
        proficiency: 'advanced'
      },
      {
        id: 'tech-14',
        name: 'PostgreSQL',
        category: 'backend',
        icon: 'postgresql',
        description: 'Advanced open-source relational database',
        proficiency: 'intermediate'
      },
      {
        id: 'tech-15',
        name: 'Docker',
        category: 'backend',
        icon: 'docker',
        description: 'Containerization platform for application deployment',
        proficiency: 'intermediate'
      }
    ]
  },
  toolkit: {
    title: 'Core SE Toolkit',
    description: 'API & Integration Tools',
    items: [
      {
        id: 'tech-16',
        name: 'Postman',
        category: 'toolkit',
        icon: 'postman',
        description: 'API testing & sharing collections',
        proficiency: 'advanced'
      },
      {
        id: 'tech-17',
        name: 'REST APIs',
        category: 'toolkit',
        icon: 'rest',
        description: 'REST APIs & Webhooks integration basics',
        proficiency: 'advanced'
      },
      {
        id: 'tech-18',
        name: 'GraphQL',
        category: 'toolkit',
        icon: 'graphql',
        description: 'Querying APIs with working knowledge',
        proficiency: 'intermediate'
      },
      {
        id: 'tech-19',
        name: 'OAuth 2.0',
        category: 'toolkit',
        icon: 'oauth',
        description: 'OAuth 2.0 / OIDC / JWT modern authentication',
        proficiency: 'intermediate'
      },
      {
        id: 'tech-20',
        name: 'SAML / SSO',
        category: 'toolkit',
        icon: 'saml',
        description: 'SAML / SSO (Okta, Auth0 basics) enterprise identity flows',
        proficiency: 'intermediate'
      },
      {
        id: 'tech-21',
        name: 'OpenAPI',
        category: 'toolkit',
        icon: 'openapi',
        description: 'OpenAPI / Swagger API specs & documentation',
        proficiency: 'intermediate'
      },
      {
        id: 'tech-22',
        name: 'Zapier',
        category: 'toolkit',
        icon: 'zapier',
        description: 'Zapier / n8n rapid proof-of-concept integrations',
        proficiency: 'intermediate'
      }
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