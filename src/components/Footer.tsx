import React from "react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-surface-alt py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-display font-bold text-text-primary hover:text-accent transition-colors">
          Bjorn Bradley
        </Link>
        <p className="font-mono text-xs text-text-secondary/60">
          &copy; {year} — Built with React &amp; Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer
