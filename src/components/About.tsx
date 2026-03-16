import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Zap, ArrowRight, GraduationCap, Award } from 'lucide-react'
import Section3D from './Section3D'
import { experiences } from '../content/experience'
import { education, certificates } from '../content/education'

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

  const experienceCards = experiences.map((experience) => ({
    id: experience.id,
    role: experience.role,
    company: experience.company,
    dateRange: `${experience.startDate} - ${experience.endDate}`,
    technologies: experience.technologies.slice(0, 3)
  }))

  const educationCards = education.map((item) => ({
    id: item.id,
    title: `${item.degree} in ${item.field}`,
    institution: item.institution,
    dateRange: `${item.startDate} - ${item.endDate}`,
    gpa: item.gpa,
    focusAreas: item.relevantCourses?.slice(0, 3) ?? []
  }))

  const certificateCards = certificates.map((item) => ({
    id: item.id,
    name: item.name,
    issuer: item.issuingOrg,
    year: item.year,
    status: item.status === 'completed' ? 'Completed' : 'In Progress'
  }))

  return (
    <Section3D
      sectionId="about"
    >
<<<<<<< Updated upstream
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
=======
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
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
          <div className="space-y-4 text-lg text-fg/80 leading-relaxed">
            <p>
              I build front-end experiences that feel polished, responsive, and easy to use.
              My focus is on translating complex ideas into interfaces that are visually clear,
              technically solid, and enjoyable to interact with.
            </p>
            <p>
              My background in media arts and software development gives me a practical mix of
              design sensitivity and engineering discipline. I care about accessibility,
              maintainability, motion that adds meaning, and systems that stay intuitive as they grow.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-2">
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

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-accent-sky/20 to-accent-indigo/20 p-1">
              <div className="w-full h-full rounded-2xl bg-bg overflow-hidden">
                <img src="/assets/profilepic.jpg" alt="Bjorn Bradley" className="w-full h-full object-cover" />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-accent-cyan rounded-full opacity-80"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-indigo rounded-full opacity-80"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-16 space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-accent-sky/80">Experience</p>
      
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-2 min-w-max">
            {experienceCards.map((experience, index) => (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card w-[280px] md:w-[300px] p-5 border border-white/10 bg-white/5 hover:bg-white/8 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-accent-cyan/80">
                        {experience.dateRange}
                      </p>
                      <h4 className="mt-2 text-lg font-semibold leading-tight text-fg">
                        {experience.role}
                      </h4>
                      <p className="text-sm text-fg/65">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-accent-sky/10 text-accent-sky">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-muted/30 px-2.5 py-1 text-xs text-fg/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-accent-indigo/80">Education</p>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-2 min-w-max">
            {educationCards.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card w-[320px] md:w-[360px] p-5 border border-white/10 bg-white/5 hover:bg-white/8 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-accent-indigo/80">
                        {item.dateRange}
                      </p>
                      <h4 className="mt-2 text-lg font-semibold leading-tight text-fg">
                        {item.title}
                      </h4>
                      <p className="text-sm text-fg/65">
                        {item.institution}
                      </p>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-accent-indigo/10 text-accent-indigo">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-fg/65">
                    {item.gpa && <span className="rounded-full border border-white/10 bg-muted/30 px-2.5 py-1 text-xs text-fg/75">GPA {item.gpa}</span>}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.focusAreas.map((focus) => (
                      <span
                        key={focus}
                        className="rounded-full border border-white/10 bg-muted/30 px-2.5 py-1 text-xs text-fg/70"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}

            {certificateCards.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (educationCards.length + index) * 0.08 }}
                className="glass-card w-[260px] md:w-[280px] p-5 border border-white/10 bg-white/5 hover:bg-white/8 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-accent-cyan/80">
                        {item.year}
                      </p>
                      <h4 className="mt-2 text-lg font-semibold leading-tight text-fg">
                        {item.name}
                      </h4>
                      <p className="text-sm text-fg/65">
                        {item.issuer}
                      </p>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-accent-cyan/10 text-accent-cyan">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="inline-flex rounded-full border border-white/10 bg-muted/30 px-2.5 py-1 text-xs text-fg/75">
                    {item.status}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
>>>>>>> Stashed changes
        </div>
      </motion.div>
    </Section3D>
  )
}

export default About 