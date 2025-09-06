import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Section3D from './Section3D'
import { contactInfo } from '../content/contact'

// Email service configuration
const EMAIL_SERVICE = import.meta.env?.VITE_EMAIL_SERVICE || 'emailjs' // 'vercel' or 'emailjs'
const API_ENDPOINT = import.meta.env?.VITE_API_ENDPOINT || '/api/send-email'

// EmailJS configuration (fallback)
const SERVICE_ID = import.meta.env?.VITE_EMAILJS_SERVICE_ID as string | undefined
const TEMPLATE_ID = import.meta.env?.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const PUBLIC_KEY = import.meta.env?.VITE_EMAILJS_PUBLIC_KEY as string | undefined

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (formData.message.length < 10) {
      setError('Please provide a more detailed message (at least 10 characters).')
      return
    }

    try {
      setIsSubmitting(true)

      if (EMAIL_SERVICE === 'vercel') {
        // Use Vercel API route
        const response = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.error || 'Failed to send message')
        }

        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 4000)

      } else {
        // Fallback to EmailJS
        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
          throw new Error('Email service not configured. Please contact me directly via the links above.')
        }

        // Dynamically import EmailJS
        const emailjs = await import('@emailjs/browser')
        
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          PUBLIC_KEY
        )

        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 4000)
      }

    } catch (err) {
      console.error('Email error:', err)
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again or contact me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <Section3D
      sectionId="contact"
    >
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-fg mb-4">Get In Touch</h2>
        <p className="text-lg text-fg/70 max-w-2xl mx-auto">I'm always interested in new opportunities and exciting projects</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Cards */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
          <h3 className="text-2xl font-semibold text-fg mb-6">Contact Information</h3>
          {contactInfo.map((contact, index) => (
            <motion.a key={contact.id} href={contact.url} target={contact.type === 'email' || contact.type === 'phone' ? undefined : '_blank'} rel={contact.type === 'email' || contact.type === 'phone' ? undefined : 'noopener noreferrer'} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="glass-card p-6 flex items-center gap-4 hover:bg-muted/50 transition-colors group">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-sky/20 to-accent-indigo/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {contact.icon === 'mail' && <Mail className="w-6 h-6 text-accent-sky" />}
                {contact.icon === 'phone' && <Phone className="w-6 h-6 text-accent-cyan" />}
                {contact.icon === 'linkedin' && <Linkedin className="w-6 h-6 text-accent-indigo" />}
                {contact.icon === 'github' && <Github className="w-6 h-6 text-fg" />}
              </div>
              <div>
                <h4 className="font-semibold text-fg">{contact.label}</h4>
                <p className="text-fg/70">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h3 className="text-2xl font-semibold text-fg mb-6">Send a Message</h3>

          {isSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-fg mb-2">Message Sent!</h4>
              <p className="text-fg/70">Thank you for reaching out. I'll get back to you soon!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="glass-card p-3 flex items-center gap-2 text-red-300 border border-red-500/30">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-fg mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-muted/30 border border-white/10 rounded-lg text-fg placeholder-fg/40 focus:outline-none focus:ring-2 focus:ring-accent-sky focus:border-transparent" placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-fg mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-muted/30 border border-white/10 rounded-lg text-fg placeholder-fg/40 focus:outline-none focus:ring-2 focus:ring-accent-sky focus:border-transparent" placeholder="your.email@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-fg mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-muted/30 border border-white/10 rounded-lg text-fg placeholder-fg/40 focus:outline-none focus:ring-2 focus:ring-accent-sky focus:border-transparent resize-none" placeholder="Tell me about your project or opportunity..." />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </Section3D>
  )
}

export default Contact 