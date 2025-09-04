import React, { useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useScene3D } from '../contexts/Scene3DContext'
import { getSection3DConfig, QUALITY_SETTINGS, GEOMETRY_DETAIL, type GeometryConfig } from '../config/scene3DConfig'

/**
 * Section3D Component - Reusable 3D background for any section
 * 
 * CUSTOMIZABLE ELEMENTS:
 * - Geometry types and positions
 * - Material properties and colors
 * - Animation patterns and speeds
 * - Lighting setup
 * - Interaction controls
 * - Performance settings
 */

interface Section3DProps {
  sectionId: string
  children: React.ReactNode
  className?: string
  
  // Optional overrides for centralized config
  geometries?: GeometryConfig[]
  enableControls?: boolean
  enableParticles?: boolean
  particleCount?: number
  lighting?: {
    ambient?: { intensity: number; color?: string }
    directional?: { intensity: number; position: [number, number, number]; color?: string }
    point?: { intensity: number; position: [number, number, number]; color?: string }
  }
  quality?: 'low' | 'medium' | 'high'
}

// Individual 3D object component with performance optimization
const AnimatedGeometry: React.FC<{
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
  sectionId: string
  quality: 'low' | 'medium' | 'high'
}> = ({ 
  type, 
  position, 
  scale = [1, 1, 1], 
  rotation = [0, 0, 0], 
  color = '#38BDF8', 
  opacity = 0.6,
  animation,
  sectionId,
  quality
}) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const { addSectionObject, removeSectionObject, activeSection } = useScene3D()
  
  // Create geometry based on type with quality-based detail
  const geometry = useMemo(() => {
    const detail = GEOMETRY_DETAIL[quality]
    
    switch (type) {
      case 'sphere':
        return new THREE.SphereGeometry(0.5, detail.sphere, detail.sphere)
      case 'box':
        return new THREE.BoxGeometry(1, 1, 1)
      case 'torus':
        return new THREE.TorusGeometry(0.4, 0.2, detail.torus, detail.torus * 2)
      case 'cone':
        return new THREE.ConeGeometry(0.5, 1, detail.cone)
      case 'cylinder':
        return new THREE.CylinderGeometry(0.5, 0.5, 1, detail.cylinder)
      case 'octahedron':
        return new THREE.OctahedronGeometry(0.5)
      default:
        return new THREE.SphereGeometry(0.5, detail.sphere, detail.sphere)
    }
  }, [type, quality])

  // Create optimized material based on quality
  const material = useMemo(() => {
    if (quality === 'low') {
      // Use simpler material for low quality
      return new THREE.MeshLambertMaterial({
        color: color,
        transparent: true,
        opacity: opacity
      })
    } else {
      // Use physical material for medium/high quality
      return new THREE.MeshPhysicalMaterial({
        color: color,
        metalness: 0.1,
        roughness: 0.1,
        transmission: 0.8,
        transparent: true,
        opacity: opacity,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
      })
    }
  }, [color, opacity, quality])

  // Register object with context
  useEffect(() => {
    if (meshRef.current) {
      addSectionObject(sectionId, meshRef.current)
      return () => removeSectionObject(sectionId, meshRef.current!)
    }
  }, [sectionId, addSectionObject, removeSectionObject])

  // Animation loop
  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.elapsedTime
    const mesh = meshRef.current

    // Rotation animation
    if (animation?.rotate) {
      if (animation.rotate.x) mesh.rotation.x += animation.rotate.x * 0.01
      if (animation.rotate.y) mesh.rotation.y += animation.rotate.y * 0.01
      if (animation.rotate.z) mesh.rotation.z += animation.rotate.z * 0.01
    }

    // Floating animation
    if (animation?.float) {
      const { amplitude = 0.2, speed = 1 } = animation.float
      mesh.position.y = position[1] + Math.sin(time * speed + position[0]) * amplitude
    }

    // Pulsing animation
    if (animation?.pulse) {
      const { minScale = 0.8, maxScale = 1.2, speed = 1 } = animation.pulse
      const scale = minScale + (maxScale - minScale) * (Math.sin(time * speed) + 1) / 2
      mesh.scale.setScalar(scale)
    }

    // Highlight active section objects
    if (activeSection === sectionId) {
      mesh.material.opacity = Math.min(opacity + 0.2, 1)
    } else {
      mesh.material.opacity = opacity
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      rotation={rotation}
      geometry={geometry}
      material={material}
    />
  )
}

// Optimized particle system component
const ParticleSystem: React.FC<{ count: number; sectionId: string; quality: 'low' | 'medium' | 'high' }> = ({ count, sectionId, quality }) => {
  const pointsRef = useRef<THREE.Points>(null)
  const { addSectionObject, removeSectionObject } = useScene3D()
  
  // Limit particle count based on quality
  const maxParticles = QUALITY_SETTINGS[quality].maxParticles
  const actualCount = Math.min(count, maxParticles)
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(actualCount * 3)
    
    for (let i = 0; i < actualCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [actualCount])

  const particlesMaterial = useMemo(() => new THREE.PointsMaterial({
    color: '#38BDF8',
    size: quality === 'low' ? 0.03 : 0.02, // Larger particles for low quality
    transparent: true,
    opacity: quality === 'low' ? 0.4 : 0.6
  }), [quality])

  useEffect(() => {
    if (pointsRef.current) {
      addSectionObject(sectionId, pointsRef.current)
      return () => removeSectionObject(sectionId, pointsRef.current!)
    }
  }, [sectionId, addSectionObject, removeSectionObject])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001
      pointsRef.current.rotation.x += 0.0005
    }
  })

  return (
    <points ref={pointsRef} geometry={particlesGeometry} material={particlesMaterial} />
  )
}

// Scene component with centralized config
const Scene: React.FC<{
  sectionId: string
  geometries?: GeometryConfig[]
  enableParticles?: boolean
  particleCount?: number
  lighting?: Section3DProps['lighting']
  quality: 'low' | 'medium' | 'high'
}> = ({ sectionId, geometries = [], enableParticles = true, particleCount = 200, lighting, quality }) => {
  return (
    <>
      {/* Lighting setup */}
      <ambientLight 
        intensity={lighting?.ambient?.intensity || 0.4} 
        color={lighting?.ambient?.color || '#ffffff'} 
      />
      <directionalLight 
        position={lighting?.directional?.position || [10, 10, 5]} 
        intensity={lighting?.directional?.intensity || 0.6}
        color={lighting?.directional?.color || '#ffffff'}
      />
      <pointLight 
        position={lighting?.point?.position || [-10, -10, -5]} 
        intensity={lighting?.point?.intensity || 0.3}
        color={lighting?.point?.color || '#38BDF8'}
      />
      
      {/* 3D Objects */}
      {geometries.map((geo, index) => (
        <AnimatedGeometry
          key={`${sectionId}-${index}`}
          type={geo.type}
          position={geo.position}
          scale={geo.scale}
          rotation={geo.rotation}
          color={geo.color}
          opacity={geo.opacity}
          animation={geo.animation}
          sectionId={sectionId}
          quality={quality}
        />
      ))}
      
      {/* Particle system */}
      {enableParticles && (
        <ParticleSystem count={particleCount} sectionId={sectionId} quality={quality} />
      )}
    </>
  )
}

// Main Section3D component with centralized configuration
const Section3D: React.FC<Section3DProps> = ({
  sectionId,
  children,
  className = '',
  geometries,
  enableControls,
  enableParticles,
  particleCount,
  lighting,
  quality
}) => {
  const { enableInteractions, setActiveSection } = useScene3D()
  
  // Get centralized configuration with optional overrides
  const config = useMemo(() => {
    const baseConfig = getSection3DConfig(sectionId)
    return {
      geometries: geometries || baseConfig.geometries,
      enableControls: enableControls ?? baseConfig.enableControls ?? false,
      enableParticles: enableParticles ?? baseConfig.enableParticles,
      particleCount: particleCount ?? baseConfig.particleCount,
      lighting: lighting || baseConfig.lighting,
      quality: quality || baseConfig.quality
    }
  }, [sectionId, geometries, enableControls, enableParticles, particleCount, lighting, quality])
  
  // Get quality-based settings
  const qualitySettings = useMemo(() => QUALITY_SETTINGS[config.quality], [config.quality])

  // Limit geometries based on quality
  const limitedGeometries = config.geometries.slice(0, qualitySettings.maxObjects)

  return (
    <section
      id={sectionId}
      className={`section-padding relative ${className}`}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          camera={{ 
            position: [0, 0, 5], 
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          style={{ background: 'transparent' }}
          gl={{ 
            antialias: qualitySettings.antialias,
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={qualitySettings.pixelRatio}
        >
          <Scene
            sectionId={sectionId}
            geometries={limitedGeometries}
            enableParticles={config.enableParticles}
            particleCount={config.particleCount}
            lighting={config.lighting}
            quality={config.quality}
          />
          {config.enableControls && enableInteractions && (
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              enableRotate={true}
              autoRotate={false}
            />
          )}
        </Canvas>
      </div>
      
      {/* Content - Preserve original Section structure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container max-w-6xl mx-auto relative z-10"
        onMouseEnter={() => setActiveSection(sectionId)}
        onMouseLeave={() => setActiveSection(null)}
      >
        {children}
      </motion.div>
    </section>
  )
}

// Export the Section3D component
export default Section3D
