import React, { useRef, useEffect } from 'react'

interface AudioVisualizerProps {
  className?: string
  opacity?: number
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ className = '', opacity = 0.45 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const waves = [
      { amplitude: 0.22, frequency: 0.011, speed: 0.016, phase: 0,           alpha: 0.55 },
      { amplitude: 0.14, frequency: 0.019, speed: 0.024, phase: Math.PI * 0.7, alpha: 0.38 },
      { amplitude: 0.09, frequency: 0.030, speed: 0.012, phase: Math.PI * 1.3, alpha: 0.25 },
      { amplitude: 0.06, frequency: 0.045, speed: 0.020, phase: Math.PI * 0.4, alpha: 0.18 },
    ]

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      waves.forEach(wave => {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(212, 107, 47, ${wave.alpha * opacity * 2})`
        ctx.lineWidth = 1.5

        for (let x = 0; x <= w; x += 2) {
          const y =
            h * 0.5 +
            wave.amplitude * h * Math.sin(x * wave.frequency + timeRef.current * wave.speed + wave.phase) *
            // envelope: fade at edges
            Math.min(1, Math.min(x / 120, (w - x) / 120))

          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      })

      timeRef.current++
      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animRef.current)
      ro.disconnect()
    }
  }, [opacity])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  )
}

export default AudioVisualizer
