import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Github, Linkedin, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-white/10 py-12 mt-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <Code2 className="w-8 h-8 text-accent-sky" />
            <div>
              <h3 className="font-display font-semibold text-lg text-fg">
                Bjorn Bradley
              </h3>
              <p className="text-sm text-fg/60">
                Front-End & Interactive UX Developer
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="mailto:bjornbradley04@gmail.com"
              className="p-2 text-fg/60 hover:text-accent-sky transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/bjornbradleyasu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-fg/60 hover:text-accent-sky transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/bjorn-bradley"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-fg/60 hover:text-accent-sky transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8 pt-8 border-t border-white/10"
        >
          <p className="text-fg/60 text-sm">
            © {currentYear} Bjorn Bradley. All rights reserved.
          </p>
          <p className="text-fg/40 text-xs mt-2">
            Built with React, TypeScript, Tailwind CSS, and Cursor
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 