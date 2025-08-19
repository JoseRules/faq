'use client'

import { useTheme } from '../contexts/ThemeContext'
import { QuestionMark, Moon, Sun } from './Icons'

export default function NavBar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="nav-bar bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - FAQ title with question mark icon */}
          <div className="flex items-center space-x-3">
            <QuestionMark size={24} color="#155dfc" classNames="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">FAQ</h1>
          </div>

          {/* Right side - Theme toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle transition-colors duration-200 hover:cursor-pointer"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? (
              // Moon icon for dark mode
              <Moon size={24} color="#155dfc" classNames="w-8 h-8 text-primary" />
            ) : (
              // Sun icon for light mode
              <Sun size={24} color="#155dfc" classNames="w-8 h-8 text-primary" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
