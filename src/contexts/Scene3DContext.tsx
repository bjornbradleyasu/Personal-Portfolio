/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from 'react'

/**
 * 3D Scene Context - Manages global 3D scene state and interactions
 * 
 * FEATURES:
 * - Global scene state management
 * - Section-specific 3D object tracking
 * - Interaction controls (orbit, zoom, pan)
 * - Performance optimization settings
 * - Device-specific quality settings
 */

interface Scene3DState {
  // Scene settings
  enableInteractions: boolean
  quality: 'low' | 'medium' | 'high'
  showWireframes: boolean
  
  // Section states
  activeSection: string | null
  sectionObjects: Record<string, unknown[]>
  
  // Interaction states
  isInteracting: boolean
  mousePosition: { x: number; y: number }
  
  // Performance settings
  frameRate: number
  maxObjects: number
}

interface Scene3DActions {
  // Scene control
  setEnableInteractions: (enabled: boolean) => void
  setQuality: (quality: 'low' | 'medium' | 'high') => void
  setShowWireframes: (show: boolean) => void
  
  // Section management
  setActiveSection: (section: string | null) => void
  addSectionObject: (section: string, object: unknown) => void
  removeSectionObject: (section: string, object: unknown) => void
  
  // Interaction handling
  setIsInteracting: (interacting: boolean) => void
  setMousePosition: (position: { x: number; y: number }) => void
  
  // Performance
  setFrameRate: (fps: number) => void
  setMaxObjects: (max: number) => void
}

type Scene3DContextType = Scene3DState & Scene3DActions

const Scene3DContext = createContext<Scene3DContextType | undefined>(undefined)

interface Scene3DProviderProps {
  children: ReactNode
}

export const Scene3DProvider: React.FC<Scene3DProviderProps> = ({ children }) => {
  const [state, setState] = useState<Scene3DState>({
    enableInteractions: true,
    quality: 'medium',
    showWireframes: false,
    activeSection: null,
    sectionObjects: {},
    isInteracting: false,
    mousePosition: { x: 0, y: 0 },
    frameRate: 60,
    maxObjects: 50
  })

  const actions: Scene3DActions = {
    setEnableInteractions: (enabled: boolean) => 
      setState(prev => ({ ...prev, enableInteractions: enabled })),
    
    setQuality: (quality: 'low' | 'medium' | 'high') => 
      setState(prev => ({ ...prev, quality })),
    
    setShowWireframes: (show: boolean) => 
      setState(prev => ({ ...prev, showWireframes: show })),
    
    setActiveSection: (section: string | null) => 
      setState(prev => ({ ...prev, activeSection: section })),
    
    addSectionObject: (section: string, object: unknown) => 
      setState(prev => ({
        ...prev,
        sectionObjects: {
          ...prev.sectionObjects,
          [section]: [...(prev.sectionObjects[section] || []), object]
        }
      })),
    
    removeSectionObject: (section: string, object: unknown) => 
      setState(prev => ({
        ...prev,
        sectionObjects: {
          ...prev.sectionObjects,
          [section]: (prev.sectionObjects[section] || []).filter(obj => obj !== object)
        }
      })),
    
    setIsInteracting: (interacting: boolean) => 
      setState(prev => ({ ...prev, isInteracting: interacting })),
    
    setMousePosition: (position: { x: number; y: number }) => 
      setState(prev => ({ ...prev, mousePosition: position })),
    
    setFrameRate: (fps: number) => 
      setState(prev => ({ ...prev, frameRate: fps })),
    
    setMaxObjects: (max: number) => 
      setState(prev => ({ ...prev, maxObjects: max }))
  }

  const contextValue: Scene3DContextType = {
    ...state,
    ...actions
  }

  return (
    <Scene3DContext.Provider value={contextValue}>
      {children}
    </Scene3DContext.Provider>
  )
}

export const useScene3D = (): Scene3DContextType => {
  const context = useContext(Scene3DContext)
  if (context === undefined) {
    throw new Error('useScene3D must be used within a Scene3DProvider')
  }
  return context
}

export default Scene3DContext
