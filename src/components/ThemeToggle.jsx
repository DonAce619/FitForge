import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Trees, Palette } from 'lucide-react'
import { THEMES, getTheme, applyTheme } from '../lib/themes'
import { useTacticalSounds } from './SoundManager'

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState('blackOps')
  const [isOpen, setIsOpen] = useState(false)
  const { playSound } = useTacticalSounds()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'blackOps'
    setCurrentTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const handleThemeChange = (themeName) => {
    if (themeName !== currentTheme) {
      playSound('buttonClick', 0.5)
      setCurrentTheme(themeName)
      applyTheme(themeName)
      setIsOpen(false)
    }
  }

  const themeIcons = {
    blackOps: Moon,
    jungle: Trees
  }

  const currentThemeData = getTheme(currentTheme)

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-full mb-3 right-0"
          >
            <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 shadow-2xl w-48">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-center mb-3 text-gray-100">Select Theme</h4>
                {Object.entries(THEMES).map(([key, theme]) => {
                  const Icon = themeIcons[key]
                  const isActive = currentTheme === key
                  
                  return (
                    <motion.div
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        onClick={() => handleThemeChange(key)}
                        className={`w-full justify-start gap-2 rounded-lg text-xs font-medium transition-all duration-300 p-2 flex items-center ${
                          isActive 
                            ? 'shadow-md transform scale-102 text-white' 
                            : 'hover:shadow-sm border border-gray-600/30 bg-gray-800/30 text-gray-300 hover:text-gray-100'
                        }`}
                        style={{
                          background: isActive ? theme.gradients?.button : undefined,
                          borderColor: isActive ? undefined : theme.colors?.border,
                          boxShadow: isActive ? theme.shadows?.button : undefined
                        }}
                      >
                        <Icon className="w-3 h-3" />
                        <span className="text-xs">{theme.displayName}</span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-1.5 h-1.5 bg-white rounded-full ml-auto"
                          />
                        )}
                      </button>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={() => {
            setIsOpen(!isOpen)
            playSound('buttonClick', 0.3)
          }}
          className="rounded-full p-2 shadow-lg backdrop-blur-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
          style={{
            background: currentThemeData.gradients?.button || 'linear-gradient(135deg, #ef4444, #dc2626)',
            boxShadow: currentThemeData.shadows?.button || '0 4px 6px -1px rgba(239, 68, 68, 0.1)'
          }}
          title="Change Theme"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Palette className="w-4 h-4 text-white" />
          </motion.div>
        </button>
      </motion.div>
    </div>
  )
}
