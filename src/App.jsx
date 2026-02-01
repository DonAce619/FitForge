import { useState, useMemo } from 'react'
import { ShieldCheckIcon, MapPinIcon, ExclamationTriangleIcon, PlayIcon, LockClosedIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import Navbar from './components/Navbar'
import EquipmentChecklist from './components/EquipmentChecklist'
import WorkoutSplitCard from './components/WorkoutSplitCard'
import AIWorkoutGenerator from './components/AIWorkoutGenerator'
import ThemeToggle from './components/ThemeToggle'
import LandingPage from './components/LandingPage'
import { useTacticalSounds } from './components/SoundManager'
import { getFilteredSplits } from './data/workouts'

function App() {
  const [currentView, setCurrentView] = useState('landing') // 'landing', 'ai-generator', 'equipment', 'splits'
  const [selectedEquipment, setSelectedEquipment] = useState([])
  const [loadoutConfirmed, setLoadoutConfirmed] = useState(false)
  const [showMissionBriefings, setShowMissionBriefings] = useState(false)
  const [aiRecommendations, setAiRecommendations] = useState(null)
  const [injuryPrevention, setInjuryPrevention] = useState(null)
  
  const { playSound, playAmbient, stopAmbient, playMissionStart, playMissionComplete } = useTacticalSounds()

  const handleGetStarted = () => {
    setCurrentView('ai-generator')
    playSound('buttonClick', 0.5)
  }

  const handleGoHome = () => {
    setCurrentView('landing')
    playSound('buttonClick', 0.5)
  }

  const handleEquipmentToggle = (equipmentId) => {
    playSound('equipmentSelect', 0.6)
    setSelectedEquipment((prev) =>
      prev.includes(equipmentId)
        ? prev.filter((id) => id !== equipmentId)
        : [...prev, equipmentId]
    )
    // Reset loadout confirmation when equipment changes
    setLoadoutConfirmed(false)
    setShowMissionBriefings(false)
  }

  const handleConfirmLoadout = () => {
    playSound('loadoutConfirm', 0.8)
    setLoadoutConfirmed(true)
    // Show mission briefings after loadout confirmation
    setTimeout(() => {
      setShowMissionBriefings(true)
      playMissionComplete()
    }, 1000)
  }

  const handleAIGeneration = (recommendations) => {
    playMissionStart()
    setAiRecommendations(recommendations)
    
    // Pre-select equipment based on AI recommendations
    if (recommendations.equipmentFocus && recommendations.equipmentFocus.length > 0) {
      setSelectedEquipment(recommendations.equipmentFocus)
    }
    
    // Move to equipment selection
    setCurrentView('equipment')
    
    // Start ambient sounds
    playAmbient('radar', 0.05)
  }

  const handleInjuryAnalysis = (injuryData) => {
    setInjuryPrevention(injuryData)
    if (injuryData.concerns.length > 0) {
      playSound('warning', 0.7)
    }
  }

  const filteredSplits = useMemo(
    () => getFilteredSplits(selectedEquipment),
    [selectedEquipment]
  )

  const visibleSplits = filteredSplits.filter((split) =>
    split.variations.some((v) => v.exercises.length > 0)
  )

  // Filter splits based on AI recommendations
  const recommendedSplits = useMemo(() => {
    if (!aiRecommendations?.primarySplit) return visibleSplits
    
    // Prioritize the AI-recommended split
    const prioritized = visibleSplits.map(split => ({
      ...split,
      isRecommended: split.id === aiRecommendations.primarySplit
    }))
    
    // Sort to put recommended split first
    return prioritized.sort((a, b) => {
      if (a.isRecommended && !b.isRecommended) return -1
      if (!a.isRecommended && b.isRecommended) return 1
      return 0
    })
  }, [visibleSplits, aiRecommendations])

  const renderCurrentView = () => {
    switch(currentView) {
      case 'landing':
        return <LandingPage onGetStarted={handleGetStarted} />
        
      case 'ai-generator':
        return (
          <AIWorkoutGenerator 
            onGenerate={handleAIGeneration}
            onInjuryAnalysis={handleInjuryAnalysis}
          />
        )
        
      case 'equipment':
        return (
          <main className="container mx-auto px-4 py-8 md:py-12 max-w-6xl relative z-10">
            {/* AI Recommendations Banner */}
            {aiRecommendations && (
              <div className="mb-8 animate__animated animate__fadeIn">
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <CpuChipIcon className="w-6 h-6 text-red-400" />
                    <h3 className="text-xl font-bold text-red-400">AI MISSION BRIEFING</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Recommended Split</div>
                      <div className="text-gray-100 font-bold capitalize">
                        {aiRecommendations.primarySplit?.replace('-', ' ')}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Training Frequency</div>
                      <div className="text-gray-100 font-bold">{aiRecommendations.frequency}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Intensity Level</div>
                      <div className="text-gray-100 font-bold">{aiRecommendations.intensity}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Equipment Section */}
            <section id="equipment" className="mb-16 animate__animated animate__fadeIn">
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-lg">
                <div className="flex items-center gap-3 mb-6">
                  <MapPinIcon className="w-6 h-6 text-red-400" />
                  <h2 className="text-2xl font-bold text-gray-100 uppercase tracking-wider">
                    Equipment Arsenal
                  </h2>
                  {selectedEquipment.length > 0 && !loadoutConfirmed && (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30">
                      <ExclamationTriangleIcon className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-yellow-400 font-mono uppercase">PENDING CONFIRMATION</span>
                    </div>
                  )}
                  {loadoutConfirmed && (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                      <PlayIcon className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-green-400 font-mono uppercase">LOADOUT CONFIRMED</span>
                    </div>
                  )}
                </div>
                
                <EquipmentChecklist
                  selectedEquipment={selectedEquipment}
                  onToggle={handleEquipmentToggle}
                  onConfirmLoadout={handleConfirmLoadout}
                />
              </div>
            </section>

            {/* Workout Splits Section */}
            {showMissionBriefings && (
              <section id="splits" className="space-y-8 animate__animated animate__fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-red-500 rounded-full"></div>
                    <h2 className="text-2xl font-bold text-gray-100 uppercase tracking-wider">
                      Mission Briefings
                    </h2>
                  </div>
                  
                  {recommendedSplits.length > 0 && (
                    <div className="text-sm text-gray-500 font-mono">
                      {recommendedSplits.length} TACTICAL PLANS AVAILABLE
                    </div>
                  )}
                </div>
                
                {recommendedSplits.length > 0 ? (
                  <div className="space-y-8">
                    {recommendedSplits.map((split, index) => (
                      <WorkoutSplitCard 
                        key={split.id} 
                        split={split} 
                        index={index}
                        isRecommended={split.isRecommended}
                      />
                    ))}
                  </div>
                ) : (
                  <div className={`bg-gradient-to-br ${getThemeClasses('secondary')} border ${getThemeClasses('border')} rounded-xl p-12 text-center backdrop-blur-lg animate__animated animate__fadeIn`}>
                    <div className="flex justify-center mb-4">
                      <LockClosedIcon className="w-12 h-12 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 uppercase tracking-wider mb-3">
                      No Mission Plans Available
                    </h3>
                    <p className="text-gray-400 font-mono max-w-md mx-auto">
                      Adjust your equipment deployment or access full arsenal capabilities to unlock tactical mission plans.
                    </p>
                    
                    <button
                      onClick={() => {
                        setSelectedEquipment([])
                        setLoadoutConfirmed(false)
                        setShowMissionBriefings(false)
                      }}
                      className="mt-6 px-6 py-3 bg-red-500/10 border border-red-500/30 text-red-400 
                        rounded-lg font-mono uppercase tracking-wider text-sm
                        hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300"
                    >
                      Deploy Full Arsenal
                    </button>
                  </div>
                )}
              </section>
            )}

            {/* Navigation */}
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => {
                  stopAmbient('radar')
                  setCurrentView('ai-generator')
                }}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg font-mono uppercase tracking-wider hover:bg-gray-600 transition-colors"
              >
                Back to AI Generator
              </button>
            </div>
          </main>
        )
        
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header with Theme Toggle */}
      <header className="fixed top-0 right-0 z-50 p-4">
        <ThemeToggle />
      </header>
      
      {/* Navbar - Only show when not on landing page */}
      {currentView !== 'landing' && <Navbar currentView={currentView} onHomeClick={handleGoHome} />}
      
      {/* Main Content */}
      {renderCurrentView()}
      
      {/* Footer */}
      {currentView === 'equipment' && (
        <footer className="mt-20 border-t border-gray-800/50 py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                Systems Operational • Mission Ready
              </span>
            </div>
            <p className="text-xs text-gray-600 font-mono">
              TACTICAL FITNESS SYSTEM v2.0 • AI-POWERED • SPECIAL FORCES GRADE
            </p>
          </div>
        </footer>
      )}
    </div>
  )
}

export default App
