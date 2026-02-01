export const THEMES = {
  blackOps: {
    name: 'blackOps',
    displayName: 'Black Ops',
    colors: {
      primary: 'from-gray-900 to-black',
      secondary: 'from-gray-800 to-gray-900',
      accent: 'text-red-500',
      text: 'text-gray-100',
      muted: 'text-gray-400',
      border: 'border-gray-800',
      card: 'bg-gray-900/50',
      background: 'bg-gradient-to-br from-gray-950 via-gray-900 to-black',
      shadow: 'shadow-red-900/20',
      cursor: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'8\' fill=\'%23ef4444\' stroke=\'%23dc2626\' stroke-width=\'2\'/%3E%3C/svg%3E") 10 10, auto'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #030712 0%, #111827 50%, #000000 100%)',
      card: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(3, 7, 18, 0.9) 100%)',
      button: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      progress: 'linear-gradient(90deg, #ef4444 0%, #f87171 100%)'
    },
    shadows: {
      card: '0 4px 6px -1px rgba(239, 68, 68, 0.1), 0 2px 4px -1px rgba(239, 68, 68, 0.06)',
      button: '0 10px 15px -3px rgba(239, 68, 68, 0.3), 0 4px 6px -2px rgba(239, 68, 68, 0.2)',
      hover: '0 20px 25px -5px rgba(239, 68, 68, 0.4), 0 10px 10px -5px rgba(239, 68, 68, 0.3)'
    }
  },
  jungle: {
    name: 'jungle',
    displayName: 'Jungle',
    colors: {
      primary: 'from-green-900 to-emerald-900',
      secondary: 'from-green-800 to-green-900',
      accent: 'text-yellow-400',
      text: 'text-emerald-100',
      muted: 'text-emerald-300',
      border: 'border-emerald-800',
      card: 'bg-green-900/50',
      background: 'bg-gradient-to-br from-green-950 via-emerald-900 to-green-950',
      shadow: 'shadow-emerald-900/30',
      cursor: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'8\' fill=\'%23fbbf24\' stroke=\'%23f59e0b\' stroke-width=\'2\'/%3E%3C/svg%3E") 10 10, auto'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #064e3b 100%)',
      card: 'linear-gradient(135deg, rgba(6, 95, 70, 0.8) 0%, rgba(5, 150, 105, 0.9) 100%)',
      button: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      progress: 'linear-gradient(90deg, #fbbf24 0%, #fcd34d 100%)'
    },
    shadows: {
      card: '0 4px 6px -1px rgba(251, 191, 36, 0.1), 0 2px 4px -1px rgba(251, 191, 36, 0.06)',
      button: '0 10px 15px -3px rgba(251, 191, 36, 0.3), 0 4px 6px -2px rgba(251, 191, 36, 0.2)',
      hover: '0 20px 25px -5px rgba(251, 191, 36, 0.4), 0 10px 10px -5px rgba(251, 191, 36, 0.3)'
    }
  }
}

export const getTheme = (themeName) => THEMES[themeName] || THEMES.blackOps

export const applyTheme = (themeName) => {
  const theme = getTheme(themeName)
  const root = document.documentElement
  
  // Apply CSS custom properties
  Object.entries(theme.gradients).forEach(([key, value]) => {
    root.style.setProperty(`--gradient-${key}`, value)
  })
  
  Object.entries(theme.shadows).forEach(([key, value]) => {
    root.style.setProperty(`--shadow-${key}`, value)
  })
  
  // Apply cursor
  document.body.style.cursor = theme.colors.cursor
  
  // Apply theme class
  document.body.className = document.body.className.replace(/theme-\w+/g, '')
  document.body.classList.add(`theme-${themeName}`)
  
  // Store preference
  localStorage.setItem('theme', themeName)
}
