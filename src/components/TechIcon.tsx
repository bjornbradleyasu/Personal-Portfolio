import React, { useState } from 'react'
import { 
  Code2, 
  FileCode, 
  Layers, 
  Zap, 
  Palette,
  Music,
  Headphones,
  Plug,
  Cloud,
  Database,
  Box,
  Mail,
  Link2,
  Shield,
  FileText
} from 'lucide-react'

interface TechIconProps {
  icon: string
  className?: string
}

/**
 * TechIcon Component - Renders clean, professional icons for technology stack items
 * 
 * Uses Lucide React icons which are already installed in the project.
 * For technologies that don't have direct matches, we use semantically similar icons.
 * 
 * To add new icons, import them from lucide-react and add to the iconMap.
 */
const TechIcon: React.FC<TechIconProps> = ({ icon, className = 'w-12 h-12' }) => {
  const [imgError, setImgError] = useState(false)

  const iconMap: Record<string, React.ReactElement> = {
    react: <Code2 className={className} aria-label="React" />,
    typescript: <FileCode className={className} aria-label="TypeScript" />,
    tailwind: <Layers className={className} aria-label="Tailwind CSS" />,
    nextjs: <Zap className={className} aria-label="Next.js" />,
    vue: <Code2 className={className} aria-label="Vue.js" />,
    figma: <Palette className={className} aria-label="Figma" />,
    framer: <Zap className={className} aria-label="Framer Motion" />,
    adobe: <Palette className={className} aria-label="Adobe Creative Suite" />,
    ableton: <Music className={className} aria-label="Ableton Live" />,
    protools: <Headphones className={className} aria-label="Pro Tools" />,
    dante: <Plug className={className} aria-label="Dante" />,
    aws: <Cloud className={className} aria-label="AWS" />,
    nodejs: <Code2 className={className} aria-label="Node.js" />,
    postgresql: <Database className={className} aria-label="PostgreSQL" />,
    docker: <Box className={className} aria-label="Docker" />,
    postman: <Mail className={className} aria-label="Postman" />,
    rest: <Link2 className={className} aria-label="REST APIs" />,
    graphql: <Link2 className={className} aria-label="GraphQL" />,
    oauth: <Shield className={className} aria-label="OAuth 2.0" />,
    saml: <Shield className={className} aria-label="SAML/SSO" />,
    openapi: <FileText className={className} aria-label="OpenAPI" />,
    zapier: <Zap className={className} aria-label="Zapier" />
  }

  const imgSrc = `/assets/TechStackIcons/${icon}.png`

  if (!imgError) {
    return (
      <img
        src={imgSrc}
        alt={icon}
        className={`${className} object-contain`}
        onError={() => setImgError(true)}
      />
    )
  }

  return iconMap[icon] || <Code2 className={className} aria-label={icon} />
}

export default TechIcon
