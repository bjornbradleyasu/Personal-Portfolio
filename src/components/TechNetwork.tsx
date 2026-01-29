import React, { useEffect, useRef, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { techCategories } from '../content/tech'
import { TechItem } from '../content/types'

// Map tech names to icon file paths
const getTechIconPath = (techName: string): string | null => {
  const iconMap: Record<string, string> = {
    'React': '/assets/TechStackIcons/react.png',
    'Tailwind CSS': '/assets/TechStackIcons/tailwind.png',
    'Ableton': '/assets/TechStackIcons/ableton.png',
    'Figma': '/assets/TechStackIcons/figma.png',
  }
  return iconMap[techName] || null
}

// Fallback emoji icons for techs without image files
const getTechIcon = (techName: string): string => {
  const iconMap: Record<string, string> = {
    // Frontend
    'JavaScript': '⚡',
    'HTML5': '📄',
    'CSS3': '🎨',
    'React': '⚛',
    'Vite': '⚙',
    'Tailwind CSS': '🎯',
    'Responsive Design': '📱',
    // Programming
    'Python': '🐍',
    'C++': '⬇',
    'Java': '☕',
    'Swift': '🍎',
    // Data
    'Pandas': '📊',
    'scikit-learn': '🤖',
    'Power BI': '📈',
    'SQL': '🗄',
    // Audio/Creative
    'Unity': '🎮',
    'XR Toolkit': '🥽',
    'FMOD Studio': '🎵',
    'Ableton': '🎹',
    'Arduino': '🔧',
    'BLE MIDI': '📡',
    'AVFoundation': '🎬',
    // Tools
    'Git/GitHub': '🐙',
    'VS Code': '💻',
    'Cursor': '➜',
  }
  return iconMap[techName] || '◆'
}

interface NodePosition {
  id: string
  name: string
  icon: string
  category: string
  x: number
  y: number
  baseX: number
  baseY: number
  floatX: number
  floatY: number
  floatSpeedX: number
  floatSpeedY: number
  floatRangeX: number
  floatRangeY: number
}

interface AnimatedLineProps {
  x1: number
  y1: number
  x2: number
  y2: number
  index: number
  totalLines: number
  color: string
  radius: number
}

/**
 * Animated curved line following the circular ring
 */
const AnimatedLine: React.FC<AnimatedLineProps> = ({ x1, y1, x2, y2, index, totalLines, color, radius }) => {
  const animationDelay = (index / totalLines) * 2
  const baseColor = color.replace('0.8)', '0.2)')
  const glowColor = color.replace('0.8)', '0.5)')

  // Use SVG arc to follow the circle perfectly
  // Arc command: A rx ry x-axis-rotation large-arc-flag sweep-flag x y
  const pathD = `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`

  return (
    <>
      {/* Base curved line following ring */}
      <path
        d={pathD}
        stroke={baseColor}
        strokeWidth="1.5"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />

      {/* Animated glow */}
      <motion.path
        d={pathD}
        stroke={glowColor}
        strokeWidth="2"
        fill="none"
        vectorEffect="non-scaling-stroke"
        animate={{
          opacity: [0.2, 0.6, 0.2],
          strokeWidth: [2, 3, 2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: animationDelay,
        }}
      />
    </>
  )
}

interface TechNodeProps {
  position: NodePosition
  isHovered: boolean
  onHover: (id: string | null) => void
  floatX: number
  floatY: number
  baseX: number
  baseY: number
  categoryColor: string
}

/**
 * Individual tech node with independent floating animation
 */
const TechNode: React.FC<TechNodeProps> = ({
  position,
  isHovered,
  onHover,
  floatX,
  floatY,
  baseX,
  baseY,
  categoryColor,
}) => {
  const currentX = baseX + floatX
  const currentY = baseY + floatY

  return (
    <g
      key={position.id}
      onMouseEnter={() => {
        console.log('Hover enter:', position.name)
        onHover(position.id)
      }}
      onMouseLeave={() => {
        console.log('Hover leave:', position.name)
        onHover(null)
      }}
      style={{ cursor: 'pointer', pointerEvents: 'auto' }}
    >
      {/* Hit area - larger to catch hovers better */}
      <circle
        cx={currentX}
        cy={currentY}
        r={40}
        fill="transparent"
        style={{ pointerEvents: 'auto' }}
      />

      {/* Hover circle */}
      <motion.circle
        cx={currentX}
        cy={currentY}
        r={isHovered ? 28 : 20}
        fill={categoryColor.replace('0.8)', '0.1)')}
        stroke={categoryColor}
        strokeWidth="1.5"
        animate={{
          r: isHovered ? 32 : 20,
          opacity: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Pulse on hover */}
      {isHovered && (
        <motion.circle
          cx={currentX}
          cy={currentY}
          r={20}
          fill="none"
          stroke={categoryColor}
          strokeWidth="1.5"
          animate={{
            r: [20, 40],
            opacity: [1, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
        />
      )}

      {/* Icon container and interactive area */}
      <g
        style={{ cursor: 'pointer' }}
        pointerEvents="none"
      >
        {/* Icon background */}
        <rect
          x={currentX - 16}
          y={currentY - 16}
          width="32"
          height="32"
          rx="6"
          fill="rgba(15, 23, 42, 0.8)"
          stroke="rgba(14, 165, 233, 0.4)"
          strokeWidth="1"
        />

        {/* Icon - Use image if available, otherwise emoji */}
        {getTechIconPath(position.name) ? (
          <image
            href={getTechIconPath(position.name)!}
            x={currentX - 12}
            y={currentY - 12}
            width="24"
            height="24"
            pointerEvents="none"
          />
        ) : (
          <text
            x={currentX}
            y={currentY + 8}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgba(14, 165, 233, 0.8)"
            fontSize="25"
            fontWeight="bold"
            pointerEvents="none"
          >
            {getTechIcon(position.name)}
          </text>
        )}
      </g>

      {/* Tooltip */}
      {isHovered && (
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Tooltip background */}
          <rect
            x={currentX + 35}
            y={currentY - 40}
            width="130"
            height="60"
            rx="8"
            fill="rgba(15, 23, 42, 0.95)"
            stroke={categoryColor}
            strokeWidth="1.5"
            filter="url(#shadow)"
          />
          
          {/* Tech name */}
          <text
            x={currentX + 40}
            y={currentY - 22}
            fill={categoryColor}
            fontSize="13"
            fontWeight="700"
            pointerEvents="none"
          >
            {position.name}
          </text>
          
          {/* Category label */}
          <text
            x={currentX + 40}
            y={currentY - 8}
            fill={categoryColor.replace('0.8)', '0.7)')}
            fontSize="11"
            fontWeight="500"
            pointerEvents="none"
          >
            Category: {position.category}
          </text>
        </motion.g>
      )}
    </g>
  )
}

interface TechNetworkProps {
  selectedCategory?: 'all' | keyof typeof techCategories
}

/**
 * Free-flowing, organic tech network visualization
 * Each node moves independently with its own animation
 */
export const TechNetwork: React.FC<TechNetworkProps> = ({ selectedCategory = 'all' }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 1000, height: 1000 })
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [floatingOffsets, setFloatingOffsets] = useState<Record<string, { x: number; y: number; baseX: number; baseY: number }>>({})

  // Category color mapping (4 rings only)
  const categoryColors: Record<string, string> = {
    frontend: 'rgba(14, 165, 233, 0.8)',      // Sky blue
    programming: 'rgba(99, 102, 241, 0.8)',   // Indigo
    data: 'rgba(168, 85, 247, 0.8)',          // Purple
    audio: 'rgba(236, 72, 153, 0.8)',         // Pink
  }

  // Get tech items
  const techItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return Object.values(techCategories)
        .flatMap((category) => category.items as TechItem[])
        .slice(0, 30) // Allow more items for organic layout
    }
    const items = (techCategories[selectedCategory]?.items ?? []) as TechItem[]
    return items.slice(0, 30)
  }, [selectedCategory])

  // Calculate node positions in concentric rings by category
  const nodePositions = useMemo<NodePosition[]>(() => {
    const centerX = containerSize.width / 2
    const centerY = containerSize.height / 2
    
    // Define ring configuration: 4 rings around center
    // Center circle has ~150px radius for About section
    const ringConfig = [
      { category: 'frontend', radius: 200, color: 'rgba(14, 165, 233, 0.8)' },      // Sky blue - Ring 1
      { category: 'programming', radius: 280, color: 'rgba(99, 102, 241, 0.8)' },   // Indigo - Ring 2
      { category: 'data', radius: 360, color: 'rgba(168, 85, 247, 0.8)' },          // Purple - Ring 3
      { category: 'audio', radius: 440, color: 'rgba(236, 72, 153, 0.8)' },         // Pink - Ring 4
    ]
    
    const positions: NodePosition[] = []
    
    // Group tech items by category
    const techByCategory = Object.entries(techCategories).reduce((acc, [key, value]) => {
      acc[key] = value.items as TechItem[]
      return acc
    }, {} as Record<string, TechItem[]>)

    ringConfig.forEach((ring) => {
      const items = techByCategory[ring.category] || []
      const itemCount = items.length
      
      items.forEach((tech, index) => {
        // Evenly distribute nodes around the ring
        const angle = (index / itemCount) * Math.PI * 2
        const baseX = centerX + Math.cos(angle) * ring.radius
        const baseY = centerY + Math.sin(angle) * ring.radius

        // Slower rotation speeds with oscillation
        const floatSpeedX = 0.05 + (index * 0.01) % 0.08
        const floatSpeedY = 0.05 + (index * 0.01) % 0.08

        positions.push({
          id: tech.id,
          name: tech.name,
          icon: tech.icon,
          category: tech.category || ring.category,
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          floatX: 0,
          floatY: 0,
          floatSpeedX,
          floatSpeedY,
          floatRangeX: ring.radius,
          floatRangeY: ring.radius,
        })
      })
    })
    
    return positions
  }, [techItems, containerSize])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Animate rotation with oscillating direction
  useEffect(() => {
    let animationId = 0
    let time = 0

    const animate = () => {
      time += 0.001 // Slow rotation speed
      
      const newOffsets: Record<string, { x: number; y: number; baseX: number; baseY: number }> = {}
      
      nodePositions.forEach((position, index) => {
        // Oscillate rotation direction using sine wave
        const oscillationPeriod = 20 + (index % 10) * 2 // Different period per node
        const direction = Math.sin(time * oscillationPeriod)
        
        // Calculate rotation around center
        const centerX = containerSize.width / 2
        const centerY = containerSize.height / 2
        const radius = Math.hypot(position.baseX - centerX, position.baseY - centerY)
        const currentAngle = Math.atan2(position.baseY - centerY, position.baseX - centerX)
        
        // Apply rotation with oscillating direction
        const rotationSpeed = 0.0008 * direction
        const newAngle = currentAngle + rotationSpeed
        
        const newBaseX = centerX + Math.cos(newAngle) * radius
        const newBaseY = centerY + Math.sin(newAngle) * radius

        newOffsets[position.id] = {
          x: 0,
          y: 0,
          baseX: newBaseX,
          baseY: newBaseY,
        }
      })

      setFloatingOffsets(newOffsets)
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [nodePositions, containerSize])

  // Generate ring-forming connection lines (connect nodes in sequence to form circles)
  const connectionLines = useMemo(() => {
    const lines: Array<{ from: NodePosition; to: NodePosition; index: number; category: string; radius: number }> = []

    // Define ring configuration to know which nodes belong to which ring and their radius
    const ringConfig = [
      { category: 'frontend', radius: 200 },
      { category: 'programming', radius: 280 },
      { category: 'data', radius: 360 },
      { category: 'audio', radius: 440 },
    ]

    // For each ring, connect nodes sequentially to form a circle
    ringConfig.forEach((ring) => {
      const ringNodes = nodePositions.filter((n) => n.category === ring.category)
      
      // Connect each node to the next one in sequence, forming a circle
      ringNodes.forEach((node, index) => {
        const nextNode = ringNodes[(index + 1) % ringNodes.length] // Loop back to first node
        lines.push({
          from: node,
          to: nextNode,
          index: lines.length,
          category: ring.category,
          radius: ring.radius,
        })
      })
    })

    return lines
  }, [nodePositions])

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center bg-gradient-to-b from-bg via-bg to-bg/50 rounded-2xl overflow-hidden"
      style={{ minHeight: '1000px' }}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
        className="w-full h-full"
        style={{ background: 'transparent' }}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Technology network visualization"
      >
        {/* Definitions */}
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="2"
              floodOpacity="0.3"
              floodColor="rgba(0, 0, 0, 0.5)"
            />
          </filter>
        </defs>

        {/* Visible ring guides to show circular structure */}
        <g opacity={0.15}>
          {/* Center circle (About section area) */}
          <circle
            cx={containerSize.width / 2}
            cy={containerSize.height / 2}
            r={150}
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          {/* Ring 1 - Frontend */}
          <circle
            cx={containerSize.width / 2}
            cy={containerSize.height / 2}
            r={200}
            fill="none"
            stroke="rgba(14, 165, 233, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="5,5"
          />
          {/* Ring 2 - Programming */}
          <circle
            cx={containerSize.width / 2}
            cy={containerSize.height / 2}
            r={280}
            fill="none"
            stroke="rgba(99, 102, 241, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="5,5"
          />
          {/* Ring 3 - Data */}
          <circle
            cx={containerSize.width / 2}
            cy={containerSize.height / 2}
            r={360}
            fill="none"
            stroke="rgba(168, 85, 247, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="5,5"
          />
          {/* Ring 4 - Audio */}
          <circle
            cx={containerSize.width / 2}
            cy={containerSize.height / 2}
            r={440}
            fill="none"
            stroke="rgba(236, 72, 153, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="5,5"
          />
        </g>

        {/* Dynamic connecting lines forming rings */}
        <g opacity={0.7}>
          {connectionLines.map((line) => {
            const floatFrom = floatingOffsets[line.from.id] || { x: 0, y: 0, baseX: line.from.baseX, baseY: line.from.baseY }
            const floatTo = floatingOffsets[line.to.id] || { x: 0, y: 0, baseX: line.to.baseX, baseY: line.to.baseY }
            const ringColor = categoryColors[line.category] || categoryColors.frontend

            return (
              <AnimatedLine
                key={`line-${line.from.id}-${line.to.id}`}
                x1={floatFrom.baseX + floatFrom.x}
                y1={floatFrom.baseY + floatFrom.y}
                x2={floatTo.baseX + floatTo.x}
                y2={floatTo.baseY + floatTo.y}
                index={line.index}
                totalLines={connectionLines.length}
                color={ringColor}
                radius={line.radius}
              />
            )
          })}
        </g>

        {/* Tech nodes */}
        <g role="list" aria-label="Technology nodes">
          {nodePositions.map((position) => {
            const offset = floatingOffsets[position.id] || { x: 0, y: 0, baseX: position.baseX, baseY: position.baseY }

            return (
              <TechNode
                key={position.id}
                position={position}
                isHovered={hoveredNode === position.id}
                onHover={setHoveredNode}
                floatX={offset.x}
                floatY={offset.y}
                baseX={offset.baseX}
                baseY={offset.baseY}
                categoryColor={categoryColors[position.category] || categoryColors.frontend}
              />
            )
          })}
        </g>
      </svg>

      {/* Info */}
      <div className="absolute bottom-4 left-4 text-xs text-fg/60 space-y-1 pointer-events-none">
        <p className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-sky/60" />
          Independent floating animation
        </p>
      </div>
    </div>
  )
}

export default TechNetwork
