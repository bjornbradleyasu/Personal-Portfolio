import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Zap } from 'lucide-react'
import Section3D from './Section3D'

const About: React.FC = () => {
  const strengths = [
    {
      icon: <Code2 className="w-6 h-6 text-accent-sky" />,
      title: 'Technical Literacy',
      description: 'Writing maintainable, well-documented code that scales'
    },
    {
      icon: <Palette className="w-6 h-6 text-accent-cyan" />,
      title: 'UX Design',
      description: 'Creating intuitive and accessible user experiences'
    },
    {
      icon: <Zap className="w-6 h-6 text-accent-indigo" />,
      title: 'Creative Problem Solving',
      description: 'Shipping quality products quickly and efficiently'
    }
  ]

  return (
    <Section3D
      sectionId="about"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-fg">
          About Me
        </h2>
        <div className="space-y-4 text-lg text-fg/80 leading-relaxed max-w-3xl">
          {/* [PLACEHOLDER: Personal Story]
              Replace these paragraphs with your personal story emphasizing:
              - Your creative and technical balance
              - Interest in VR, music tech, creative coding
              - What drives you
              - Your unique perspective */}
          <p>
            I'm a passionate developer focused on creating exceptional digital experiences 
            that combine beautiful design with powerful functionality. My journey in tech 
            started with a curiosity about how things work, which evolved into a love for 
            building solutions that make people's lives easier.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new audio technologies, 
            experimenting with creative coding, or diving into the latest AI developments. 
            I believe the best products come from understanding both the technical and 
            human aspects of problem-solving.
          </p>
        </div>

        {/* Strengths */}
        <div className="grid sm:grid-cols-3 gap-4 pt-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-4 rounded-lg bg-muted/30 border border-white/10 hover:bg-muted/50 transition-colors"
            >
              <div className="flex justify-center mb-3">
                {strength.icon}
              </div>
              <h3 className="font-semibold text-fg mb-2">
                {strength.title}
              </h3>
              <p className="text-sm text-fg/70">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section3D>
  )
}

export default About 