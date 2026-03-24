import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { X, Menu } from "lucide-react"

const navLinks = [
  { label: "About",    id: "about"    },
  { label: "Projects", id: "projects" },
  { label: "Skills",   id: "skills"   },
  { label: "Contact",  id: "contact"  },
]

const NavBar: React.FC = () => {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location                  = useLocation()
  const shouldReduceMotion        = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = "/#" + id
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (
          scrolled
            ? "bg-bg/80 backdrop-blur-md border-b border-surface-alt/60 shadow-sm"
            : "bg-transparent"
        )}
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-display font-bold text-xl text-text-primary hover:text-accent transition-colors"
          >
            BB
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="nav-link">
                {link.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                onClick={() => scrollTo(link.id)}
                className="font-display text-4xl font-bold text-text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar
