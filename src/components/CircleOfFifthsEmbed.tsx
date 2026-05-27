import React, { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Circle of fifths order, clockwise from top
const NOTES = [
  { name: 'C',  freq: 261.63 },
  { name: 'G',  freq: 392.00 },
  { name: 'D',  freq: 293.66 },
  { name: 'A',  freq: 440.00 },
  { name: 'E',  freq: 329.63 },
  { name: 'B',  freq: 493.88 },
  { name: 'F♯', freq: 369.99 },
  { name: 'D♭', freq: 277.18 },
  { name: 'A♭', freq: 415.30 },
  { name: 'E♭', freq: 311.13 },
  { name: 'B♭', freq: 466.16 },
  { name: 'F',  freq: 349.23 },
]

const SIZE   = 280
const RING_R = 104
const NODE_D = 46
const CENTER = SIZE / 2

function notePos(i: number) {
  const angle = (i * 30 - 90) * (Math.PI / 180)
  return {
    x: CENTER + RING_R * Math.cos(angle),
    y: CENTER + RING_R * Math.sin(angle),
  }
}

// Shared AudioContext — lazy init
let _ctx: AudioContext | null = null
function getCtx(): AudioContext {
  if (!_ctx) _ctx = new AudioContext()
  if (_ctx.state === 'suspended') void _ctx.resume()
  return _ctx
}

function playNote(freq: number) {
  const ctx = getCtx()
  const now = ctx.currentTime
  const osc1 = ctx.createOscillator()
  const osc2 = ctx.createOscillator()
  const mix  = ctx.createGain()
  const gain = ctx.createGain()
  const filt = ctx.createBiquadFilter()

  osc1.type = 'triangle'; osc1.frequency.value = freq
  osc2.type = 'sine';     osc2.frequency.value = freq * 2
  mix.gain.value = 0.22

  filt.type = 'lowpass'; filt.frequency.value = 1300

  osc1.connect(gain)
  osc2.connect(mix); mix.connect(gain)
  gain.connect(filt); filt.connect(ctx.destination)

  gain.gain.setValueAtTime(0, now)
  gain.gain.linearRampToValueAtTime(0.38, now + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0)

  osc1.start(now); osc1.stop(now + 2.0)
  osc2.start(now); osc2.stop(now + 2.0)
}

// ─── Single circle ────────────────────────────────────────────────

interface Pulse { id: number; noteIndex: number }

function NoteCircle({ label }: { label: string }) {
  const [active,   setActive]   = useState<Set<number>>(new Set())
  const [pulses,   setPulses]   = useState<Pulse[]>([])
  const [lastNote, setLastNote] = useState<string | null>(null)
  const pulseId = useRef(0)
  const timers  = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map())

  const handleClick = useCallback((i: number) => {
    playNote(NOTES[i].freq)
    setLastNote(NOTES[i].name)

    const id = ++pulseId.current
    setPulses(prev => [...prev, { id, noteIndex: i }])
    setTimeout(() => setPulses(prev => prev.filter(p => p.id !== id)), 700)

    setActive(prev => new Set(prev).add(i))
    const existing = timers.current.get(i)
    if (existing) clearTimeout(existing)
    const t = setTimeout(() => {
      setActive(prev => { const n = new Set(prev); n.delete(i); return n })
    }, 2000)
    timers.current.set(i, t)
  }, [])

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Hand label */}
      <p className="font-mono text-[10px] tracking-widest uppercase"
         style={{ color: 'rgba(255,255,255,0.35)' }}>
        {label}
      </p>

      <div className="relative select-none" style={{ width: SIZE, height: SIZE }}>
        {/* Outer ring */}
        <div className="absolute rounded-full pointer-events-none" style={{
          width: RING_R * 2, height: RING_R * 2,
          top: CENTER - RING_R, left: CENTER - RING_R,
          border: '1px solid rgba(255,255,255,0.07)',
        }} />
        {/* Inner ring */}
        <div className="absolute rounded-full pointer-events-none" style={{
          width: 66, height: 66,
          top: CENTER - 33, left: CENTER - 33,
          border: '1px solid rgba(255,255,255,0.04)',
        }} />

        {/* Center note display */}
        <div className="absolute pointer-events-none flex items-center justify-center"
             style={{ width: 62, height: 62, top: CENTER - 31, left: CENTER - 31 }}>
          <AnimatePresence mode="wait">
            {lastNote && (
              <motion.span
                key={lastNote}
                className="font-display font-bold"
                style={{ fontSize: 26, color: '#8B3A10', lineHeight: 1 }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.13 }}
              >
                {lastNote}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Pulse rings */}
        {pulses.map(pulse => {
          const { x, y } = notePos(pulse.noteIndex)
          return (
            <motion.div
              key={pulse.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: NODE_D, height: NODE_D,
                top: y - NODE_D / 2, left: x - NODE_D / 2,
                border: '1.5px solid #8B3A10',
              }}
              initial={{ scale: 1, opacity: 0.75 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          )
        })}

        {/* Note nodes */}
        {NOTES.map((note, i) => {
          const { x, y } = notePos(i)
          const isActive = active.has(i)
          return (
            <motion.button
              key={note.name}
              onClick={() => handleClick(i)}
              aria-label={`Play ${note.name}`}
              className="absolute rounded-full flex items-center justify-center font-mono font-semibold"
              style={{
                width: NODE_D, height: NODE_D,
                top: y - NODE_D / 2, left: x - NODE_D / 2,
                fontSize: 11, cursor: 'pointer',
                fontFamily: '"DM Mono", monospace',
              }}
              animate={{
                backgroundColor: isActive ? 'rgba(139,58,16,0.42)' : 'rgba(255,255,255,0.05)',
                borderColor:     isActive ? 'rgba(168,78,30,0.85)' : 'rgba(255,255,255,0.13)',
                color:           isActive ? '#ffffff'              : 'rgba(255,255,255,0.62)',
                boxShadow:       isActive ? '0 0 16px rgba(139,58,16,0.4)' : '0 0 0px rgba(0,0,0,0)',
              }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.14 }}
              initial={{ borderWidth: '1.5px', borderStyle: 'solid' }}
            >
              {note.name}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Dual embed ───────────────────────────────────────────────────

const CircleOfFifthsEmbed: React.FC = () => (
  <div className="rounded-2xl overflow-hidden" style={{ background: '#181210' }}>
    {/* Header */}
    <div className="flex items-center justify-between px-6 pt-5 pb-1">
      <div>
        <p className="font-mono text-[10px] tracking-widest uppercase"
           style={{ color: '#8B3A10' }}>
          Interactive · MusicMatrix
        </p>
        <p className="font-display text-lg font-bold mt-0.5"
           style={{ color: 'rgba(255,255,255,0.88)' }}>
          Circle of Fifths: Both Hands
        </p>
      </div>
      <p className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.22)' }}>
        click any node to play
      </p>
    </div>

    {/* Two circles */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 px-4 pb-4 justify-items-center">
      <NoteCircle label="Left Hand" />
      <NoteCircle label="Right Hand" />
    </div>

    {/* Caption */}
    <p className="font-mono text-center px-6 pb-5 leading-relaxed"
       style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>
      Each hand controls an independent Circle of Fifths in VR; reach and press to play,
      wrist rotation bends pitch, trigger stacks chords.
    </p>
  </div>
)

export default CircleOfFifthsEmbed
