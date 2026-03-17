import React, { useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import emailjs from "@emailjs/browser"
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

type FormStatus = "idle" | "sending" | "success" | "error"

const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus("sending")
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "" }
      )
      setStatus("success")
      formRef.current.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="bg-bg">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — heading + contact info */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="section-label">Contact</span>
            <div className="divider" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
              Let&apos;s work<br />together.
            </h2>
            <p className="font-body text-lg text-text-secondary leading-relaxed mb-10">
              Open to freelance projects, internships, and full-time roles. If you have
              something worth building, I want to hear about it.
            </p>

            <a
              href="mailto:bjornbradley04@gmail.com"
              className="inline-flex items-center gap-3 font-display text-lg font-bold text-text-primary border-b-2 border-accent pb-1 hover:text-accent transition-colors duration-200 mb-10"
            >
              <Mail className="w-5 h-5 text-accent flex-shrink-0" />
              bjornbradley04@gmail.com
            </a>

            <div className="flex items-center gap-6 mt-2">
              <a
                href="https://github.com/bjornbradleyasu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/bjorn-bradley"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-start gap-4 py-10">
                <CheckCircle className="w-10 h-10 text-accent" />
                <p className="font-display text-2xl font-bold text-text-primary">
                  Message sent!
                </p>
                <p className="font-body text-text-secondary">
                  I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline mt-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="user_name"
                    className="font-mono text-xs text-text-secondary uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-surface border border-surface-alt rounded-lg px-4 py-3 font-body text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="user_email"
                    className="font-mono text-xs text-text-secondary uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-surface border border-surface-alt rounded-lg px-4 py-3 font-body text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="font-mono text-xs text-text-secondary uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-surface border border-surface-alt rounded-lg px-4 py-3 font-body text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 font-mono text-sm text-red-600">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong — try emailing me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending&hellip;
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
