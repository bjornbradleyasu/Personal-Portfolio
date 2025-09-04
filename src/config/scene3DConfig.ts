/**
 * Centralized 3D Scene Configuration
 * 
 * This file manages all Three.js settings, geometries, and performance optimizations
 * for the entire portfolio. Modify values here to affect all 3D elements globally.
 */

export interface GeometryConfig {
  type: 'sphere' | 'box' | 'torus' | 'cone' | 'cylinder' | 'octahedron'
  position: [number, number, number]
  scale?: [number, number, number]
  rotation?: [number, number, number]
  color?: string
  opacity?: number
  animation?: {
    rotate?: { x?: number; y?: number; z?: number }
    float?: { amplitude?: number; speed?: number }
    pulse?: { minScale?: number; maxScale?: number; speed?: number }
  }
}

export interface LightingConfig {
  ambient?: { intensity: number; color?: string }
  directional?: { intensity: number; position: [number, number, number]; color?: string }
  point?: { intensity: number; position: [number, number, number]; color?: string }
}

export interface Section3DConfig {
  geometries: GeometryConfig[]
  enableParticles: boolean
  particleCount: number
  lighting: LightingConfig
  quality: 'low' | 'medium' | 'high'
  enableControls?: boolean
}

// Performance-optimized geometry settings
export const GEOMETRY_DETAIL = {
  low: { sphere: 16, torus: 8, cone: 16, cylinder: 16 },
  medium: { sphere: 24, torus: 12, cone: 24, cylinder: 24 },
  high: { sphere: 32, torus: 16, cone: 32, cylinder: 32 }
}

// Quality-based performance settings
export const QUALITY_SETTINGS = {
  low: { 
    antialias: false, 
    pixelRatio: 1, 
    maxObjects: 8,
    maxParticles: 50,
    geometryDetail: GEOMETRY_DETAIL.low
  },
  medium: { 
    antialias: true, 
    pixelRatio: 1.2, 
    maxObjects: 15,
    maxParticles: 100,
    geometryDetail: GEOMETRY_DETAIL.medium
  },
  high: { 
    antialias: true, 
    pixelRatio: 1.5, 
    maxObjects: 25,
    maxParticles: 200,
    geometryDetail: GEOMETRY_DETAIL.high
  }
}

// Centralized 3D configurations for each section
export const SCENE_3D_CONFIGS: Record<string, Section3DConfig> = {
  hero: {
    geometries: [
      { type: 'sphere', position: [-3, 0, -2], color: '#38BDF8', opacity: 0.2, animation: { rotate: { y: 1 }, float: { amplitude: 0.2, speed: 1 } } },
      { type: 'box', position: [3, 1, -3], color: '#22D3EE', opacity: 0.25, animation: { rotate: { x: 1, y: 1 }, float: { amplitude: 0.3, speed: 0.8 } } },
      { type: 'torus', position: [0, -1, -4], color: '#818CF8', opacity: 0.2, animation: { rotate: { z: 1 }, pulse: { minScale: 0.8, maxScale: 1.2, speed: 1.2 } } }
    ],
    enableParticles: true,
    particleCount: 80,
    lighting: {
      ambient: { intensity: 0.3, color: '#ffffff' },
      directional: { intensity: 0.5, position: [8, 8, 4], color: '#ffffff' },
      point: { intensity: 0.2, position: [-8, -8, -4], color: '#38BDF8' }
    },
    quality: 'medium'
  },

  about: {
    geometries: [
      { type: 'sphere', position: [-2, 0, -3], color: '#22D3EE', opacity: 0.15, animation: { rotate: { y: 1 }, float: { amplitude: 0.2, speed: 0.7 } } },
      { type: 'box', position: [2, 1, -2], color: '#38BDF8', opacity: 0.2, animation: { rotate: { x: 1 }, float: { amplitude: 0.15, speed: 1.1 } } },
      { type: 'torus', position: [0, -1, -4], color: '#818CF8', opacity: 0.18, animation: { rotate: { z: 1 }, pulse: { minScale: 0.9, maxScale: 1.1, speed: 0.8 } } }
    ],
    enableParticles: true,
    particleCount: 60,
    lighting: {
      ambient: { intensity: 0.3, color: '#ffffff' },
      directional: { intensity: 0.5, position: [5, 5, 3], color: '#ffffff' },
      point: { intensity: 0.2, position: [-5, -5, -3], color: '#22D3EE' }
    },
    quality: 'low'
  },

  experience: {
    geometries: [
      { type: 'cylinder', position: [-2, 0, -3], color: '#38BDF8', opacity: 0.15, animation: { rotate: { y: 1 }, float: { amplitude: 0.2, speed: 0.8 } } },
      { type: 'box', position: [2, 1, -2], color: '#22D3EE', opacity: 0.2, animation: { rotate: { x: 1, y: 1 }, float: { amplitude: 0.15, speed: 1.1 } } },
      { type: 'octahedron', position: [0, -1, -4], color: '#818CF8', opacity: 0.18, animation: { rotate: { x: 1, y: 1, z: 1 }, pulse: { minScale: 0.9, maxScale: 1.1, speed: 0.9 } } }
    ],
    enableParticles: true,
    particleCount: 70,
    lighting: {
      ambient: { intensity: 0.3, color: '#ffffff' },
      directional: { intensity: 0.5, position: [7, 7, 3], color: '#ffffff' },
      point: { intensity: 0.2, position: [-7, -7, -3], color: '#38BDF8' }
    },
    quality: 'low'
  },

  education: {
    geometries: [
      { type: 'sphere', position: [-2, 0, -3], color: '#22D3EE', opacity: 0.15, animation: { rotate: { y: 1 }, float: { amplitude: 0.2, speed: 0.7 } } },
      { type: 'torus', position: [2, 1, -2], color: '#38BDF8', opacity: 0.2, animation: { rotate: { z: 1 }, float: { amplitude: 0.15, speed: 1.1 } } },
      { type: 'cone', position: [0, -1, -4], color: '#818CF8', opacity: 0.18, animation: { rotate: { y: 1 }, pulse: { minScale: 0.9, maxScale: 1.1, speed: 0.8 } } }
    ],
    enableParticles: true,
    particleCount: 80,
    lighting: {
      ambient: { intensity: 0.3, color: '#ffffff' },
      directional: { intensity: 0.5, position: [6, 6, 3], color: '#ffffff' },
      point: { intensity: 0.2, position: [-6, -6, -3], color: '#22D3EE' }
    },
    quality: 'low'
  },

  tech: {
    geometries: [
      { type: 'cylinder', position: [-2, 0, -3], color: '#38BDF8', opacity: 0.15, animation: { rotate: { y: 1 }, float: { amplitude: 0.2, speed: 0.8 } } },
      { type: 'octahedron', position: [2, 1, -2], color: '#22D3EE', opacity: 0.2, animation: { rotate: { x: 1, y: 1, z: 1 }, float: { amplitude: 0.15, speed: 1.1 } } },
      { type: 'cone', position: [0, -1, -4], color: '#818CF8', opacity: 0.18, animation: { rotate: { y: 1 }, pulse: { minScale: 0.9, maxScale: 1.1, speed: 0.9 } } }
    ],
    enableParticles: true,
    particleCount: 60,
    lighting: {
      ambient: { intensity: 0.3, color: '#ffffff' },
      directional: { intensity: 0.5, position: [7, 7, 3], color: '#ffffff' },
      point: { intensity: 0.2, position: [-7, -7, -3], color: '#38BDF8' }
    },
    quality: 'low'
  },

  projects: {
    geometries: [
      { type: 'box', position: [-1, 0, -2], color: '#38BDF8', opacity: 0.15, animation: { rotate: { x: 1, y: 1 }, float: { amplitude: 0.15, speed: 0.9 } } },
      { type: 'sphere', position: [1, 1, -3], color: '#22D3EE', opacity: 0.2, animation: { rotate: { y: 1 }, float: { amplitude: 0.2, speed: 1.2 } } },
      { type: 'torus', position: [0, -1, -4], color: '#818CF8', opacity: 0.18, animation: { rotate: { z: 1 }, pulse: { minScale: 0.8, maxScale: 1.2, speed: 1.0 } } }
    ],
    enableParticles: true,
    particleCount: 100,
    lighting: {
      ambient: { intensity: 0.35, color: '#ffffff' },
      directional: { intensity: 0.55, position: [8, 8, 4], color: '#ffffff' },
      point: { intensity: 0.25, position: [-8, -8, -4], color: '#38BDF8' }
    },
    quality: 'medium'
  },

  'school-projects': {
    geometries: [
      { type: 'box', position: [-2, 0, -3], color: '#22D3EE', opacity: 0.15, animation: { rotate: { x: 1, y: 1 }, float: { amplitude: 0.2, speed: 0.8 } } },
      { type: 'sphere', position: [2, 1, -2], color: '#38BDF8', opacity: 0.2, animation: { rotate: { y: 1 }, float: { amplitude: 0.15, speed: 1.1 } } },
      { type: 'torus', position: [0, -1, -4], color: '#818CF8', opacity: 0.18, animation: { rotate: { z: 1 }, pulse: { minScale: 0.9, maxScale: 1.1, speed: 0.9 } } }
    ],
    enableParticles: true,
    particleCount: 80,
    lighting: {
      ambient: { intensity: 0.3, color: '#ffffff' },
      directional: { intensity: 0.5, position: [6, 6, 3], color: '#ffffff' },
      point: { intensity: 0.2, position: [-6, -6, -3], color: '#22D3EE' }
    },
    quality: 'low'
  },

  contact: {
    geometries: [
      { type: 'sphere', position: [-2, 0, -3], color: '#22D3EE', opacity: 0.15, animation: { rotate: { y: 1 }, float: { amplitude: 0.2, speed: 0.8 } } },
      { type: 'box', position: [2, 1, -2], color: '#38BDF8', opacity: 0.2, animation: { rotate: { x: 1, y: 1 }, float: { amplitude: 0.15, speed: 1.0 } } },
      { type: 'torus', position: [0, -1, -4], color: '#818CF8', opacity: 0.18, animation: { rotate: { z: 1 }, pulse: { minScale: 0.9, maxScale: 1.1, speed: 0.9 } } }
    ],
    enableParticles: true,
    particleCount: 90,
    lighting: {
      ambient: { intensity: 0.3, color: '#ffffff' },
      directional: { intensity: 0.5, position: [6, 6, 3], color: '#ffffff' },
      point: { intensity: 0.2, position: [-6, -6, -3], color: '#22D3EE' }
    },
    quality: 'low'
  }
}

// Helper function to get section config
export const getSection3DConfig = (sectionId: string): Section3DConfig => {
  return SCENE_3D_CONFIGS[sectionId] || SCENE_3D_CONFIGS.about
}

// Performance monitoring
export const PERFORMANCE_MONITORING = {
  enabled: true,
  targetFPS: 60,
  qualityAdjustment: true, // Automatically reduce quality if FPS drops
  maxRenderTime: 16.67 // 60 FPS = 16.67ms per frame
}
