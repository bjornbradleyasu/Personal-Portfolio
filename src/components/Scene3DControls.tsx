import React from 'react'
import { motion } from 'framer-motion'
import { Settings, Eye, EyeOff, RotateCcw, Zap } from 'lucide-react'
import { useScene3D } from '../contexts/Scene3DContext'

/**
 * Scene3DControls Component - Interactive controls for 3D scene manipulation
 * 
 * FEATURES:
 * - Toggle interactions on/off
 * - Quality settings (low/medium/high)
 * - Show/hide wireframes
 * - Reset scene
 * - Performance monitoring
 */

const Scene3DControls: React.FC = () => {
  const {
    enableInteractions,
    setEnableInteractions,
    quality,
    setQuality,
    showWireframes,
    setShowWireframes,
    frameRate,
    activeSection
  } = useScene3D()

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-bg/80 backdrop-blur-sm border border-white/10 rounded-full p-3 text-fg hover:bg-bg/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Settings className="w-5 h-5" />
      </motion.button>

      {/* Controls Panel */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          y: isOpen ? 0 : -20, 
          scale: isOpen ? 1 : 0.9 
        }}
        transition={{ duration: 0.2 }}
        className={`absolute top-16 right-0 bg-bg/90 backdrop-blur-sm border border-white/10 rounded-lg p-4 min-w-[200px] ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="space-y-4">
          {/* Section Info */}
          <div className="text-sm">
            <div className="text-fg/60">Active Section:</div>
            <div className="text-fg font-medium">{activeSection || 'None'}</div>
          </div>

          {/* Performance Info */}
          <div className="text-sm">
            <div className="text-fg/60">Performance:</div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent-sky" />
              <span className="text-fg">{frameRate} FPS</span>
            </div>
          </div>

          {/* Interaction Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-fg">Interactions</span>
            <button
              onClick={() => setEnableInteractions(!enableInteractions)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                enableInteractions ? 'bg-accent-sky' : 'bg-fg/20'
              }`}
            >
              <motion.div
                className="absolute top-1 w-4 h-4 bg-white rounded-full"
                animate={{ x: enableInteractions ? 28 : 4 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>

          {/* Quality Settings */}
          <div>
            <div className="text-sm text-fg mb-2">Quality</div>
            <div className="flex gap-1">
              {(['low', 'medium', 'high'] as const).map((q) => (
                <button
                  key={q}
                  onClick={() => setQuality(q)}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    quality === q
                      ? 'bg-accent-sky text-bg'
                      : 'bg-fg/10 text-fg hover:bg-fg/20'
                  }`}
                >
                  {q.charAt(0).toUpperCase() + q.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Wireframe Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-fg">Wireframes</span>
            <button
              onClick={() => setShowWireframes(!showWireframes)}
              className="p-1 text-fg/60 hover:text-fg transition-colors"
            >
              {showWireframes ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              setEnableInteractions(true)
              setQuality('medium')
              setShowWireframes(false)
            }}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-fg/10 hover:bg-fg/20 text-fg rounded transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm">Reset</span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Scene3DControls
