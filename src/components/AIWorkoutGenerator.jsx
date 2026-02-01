import { useState, useEffect, useCallback } from 'react'
import { 
  SparklesIcon, 
  CpuChipIcon, 
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserIcon,
  FireIcon,
  BoltIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const AI_WORKOUT_GENERATOR_STYLES = {
  primaryGoals: [
    { id: 'strength', name: 'Build Strength', icon: BoltIcon, description: 'Increase raw power and muscle mass' },
    { id: 'endurance', name: 'Boost Endurance', icon: FireIcon, description: 'Improve stamina and cardiovascular fitness' },
    { id: 'weight-loss', name: 'Lose Weight', icon: HeartIcon, description: 'Burn fat and improve body composition' },
    { id: 'muscle-gain', name: 'Gain Muscle', icon: UserIcon, description: 'Build lean muscle and size' },
    { id: 'athletic', name: 'Athletic Performance', icon: SparklesIcon, description: 'Enhance speed, agility, and power' },
    { id: 'rehab', name: 'Injury Recovery', icon: ShieldCheckIcon, description: 'Rehabilitate and strengthen safely' }
  ],
  
  experienceLevels: [
    { id: 'beginner', name: 'Recruit', description: 'New to fitness, learning fundamentals' },
    { id: 'intermediate', name: 'Operator', description: 'Consistent training, ready for challenges' },
    { id: 'advanced', name: 'Elite', description: 'Experienced athlete, pushing limits' }
  ],
  
  timeCommitments: [
    { id: '15-30', name: 'Quick Strike', description: '15-30 minutes' },
    { id: '30-45', name: 'Standard Mission', description: '30-45 minutes' },
    { id: '45-60', name: 'Extended Ops', description: '45-60 minutes' },
    { id: '60+', name: 'Full Deployment', description: '60+ minutes' }
  ],
  
  injuryConcerns: [
    { id: 'none', name: 'No Issues', description: 'Fully operational' },
    { id: 'knees', name: 'Knee Concerns', description: 'Need low-impact options' },
    { id: 'back', name: 'Back Issues', description: 'Require spine-friendly exercises' },
    { id: 'shoulders', name: 'Shoulder Limitations', description: 'Avoid overhead movements' },
    { id: 'wrists', name: 'Wrist Problems', description: 'Need grip-friendly alternatives' }
  ]
}

export default function AIWorkoutGenerator({ onGenerate, onInjuryAnalysis }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedGoals, setSelectedGoals] = useState([])
  const [experienceLevel, setExperienceLevel] = useState('')
  const [timeCommitment, setTimeCommitment] = useState('')
  const [injuryConcern, setInjuryConcern] = useState('none')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedRecommendations, setGeneratedRecommendations] = useState(null)
  const [injuryPrevention, setInjuryPrevention] = useState(null)

  const handleGoalToggle = (goalId) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    )
  }

  const generateWorkout = useCallback(async () => {
    setIsGenerating(true)
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate personalized recommendations
    const recommendations = {
      primarySplit: getRecommendedSplit(),
      equipmentFocus: getEquipmentRecommendations(),
      intensity: getIntensityRecommendations(),
      frequency: getFrequencyRecommendations(),
      injuryModifications: getInjuryModifications()
    }
    
    setGeneratedRecommendations(recommendations)
    
    // Generate injury prevention recommendations
    if (injuryConcern !== 'none') {
      const injuryRecs = {
        concerns: [injuryConcern],
        modifications: getInjuryModifications(),
        warmup: getWarmupRecommendations(),
        recovery: getRecoveryRecommendations(),
        warningSigns: getWarningSigns()
      }
      setInjuryPrevention(injuryRecs)
      onInjuryAnalysis(injuryRecs)
    }
    
    setIsGenerating(false)
    setCurrentStep(5)
  }, [selectedGoals, injuryConcern, onInjuryAnalysis])

  const getRecommendedSplit = () => {
    const goalMap = {
      'strength': 'strength-focus',
      'muscle-gain': 'bro-split',
      'endurance': 'functional-athletic',
      'weight-loss': 'full-body',
      'athletic': 'functional-athletic',
      'rehab': 'full-body'
    }
    
    const primaryGoal = selectedGoals[0]
    return goalMap[primaryGoal] || 'full-body'
  }

  const getEquipmentRecommendations = () => {
    const equipment = []
    
    if (selectedGoals.includes('strength')) {
      equipment.push('barbell', 'dumbbells', 'bench')
    }
    if (selectedGoals.includes('athletic')) {
      equipment.push('kettlebells', 'bodyweight', 'resistance_bands')
    }
    if (selectedGoals.includes('rehab')) {
      equipment.push('resistance_bands', 'bodyweight')
    }
    
    return equipment.length > 0 ? equipment : ['dumbbells', 'bodyweight']
  }

  const getIntensityRecommendations = () => {
    const levelMap = {
      'beginner': 'Moderate intensity (60-70% max effort)',
      'intermediate': 'High intensity (70-85% max effort)',
      'advanced': 'Very high intensity (85-95% max effort)'
    }
    return levelMap[experienceLevel] || levelMap['intermediate']
  }

  const getFrequencyRecommendations = () => {
    const timeMap = {
      '15-30': '3-4 days per week',
      '30-45': '4-5 days per week',
      '45-60': '5-6 days per week',
      '60+': '6-7 days per week'
    }
    return timeMap[timeCommitment] || timeMap['30-45']
  }

  const getInjuryModifications = () => {
    const modifications = {
      'knees': [
        'Replace squats with goblet squats or leg press',
        'Use low-impact cardio alternatives',
        'Avoid high-impact jumping movements'
      ],
      'back': [
        'Focus on core strengthening exercises',
        'Use proper form on all lifts',
        'Avoid heavy overhead pressing'
      ],
      'shoulders': [
        'Avoid overhead press variations',
        'Use neutral grip positions',
        'Focus on rotator cuff strengthening'
      ],
      'wrists': [
        'Use fat gripz or thicker bars',
        'Avoid excessive wrist extension',
        'Include wrist mobility work'
      ]
    }
    return modifications[injuryConcern] || []
  }

  const getWarmupRecommendations = () => {
    return [
      '5-10 minutes light cardio',
      'Dynamic stretching for major muscle groups',
      'Movement-specific warmup sets',
      'Foam rolling for tight areas'
    ]
  }

  const getRecoveryRecommendations = () => {
    return [
      '48 hours between intense sessions',
      '7-9 hours quality sleep',
      'Proper nutrition and hydration',
      'Active recovery on rest days'
    ]
  }

  const getWarningSigns = () => {
    return [
      'Sharp or shooting pain',
      'Swelling or inflammation',
      'Decreased range of motion',
      'Pain that persists beyond 48 hours'
    ]
  }

  const handleProceed = () => {
    if (generatedRecommendations) {
      onGenerate({
        ...generatedRecommendations,
        goals: selectedGoals,
        experience: experienceLevel,
        time: timeCommitment,
        injury: injuryConcern
      })
    }
  }

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="animate__animated animate__fadeIn">
            <div className="text-center mb-8">
              <CpuChipIcon className="w-16 h-16 text-red-400 mx-auto mb-4 animate__pulse animate__infinite" />
              <h2 className="text-3xl font-bold text-gray-100 mb-4">AI MISSION PLANNER</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our advanced AI analyzes your goals, experience, and constraints to generate personalized tactical fitness missions.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-red-400 mb-6">SELECT PRIMARY OBJECTIVES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {AI_WORKOUT_GENERATOR_STYLES.primaryGoals.map(goal => {
                  const Icon = goal.icon
                  const isSelected = selectedGoals.includes(goal.id)
                  
                  return (
                    <button
                      key={goal.id}
                      onClick={() => handleGoalToggle(goal.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        isSelected 
                          ? 'bg-red-500/10 border-red-500/50 text-red-400' 
                          : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-red-500/30'
                      }`}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-bold">{goal.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{goal.description}</div>
                    </button>
                  )
                })}
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={() => setCurrentStep(2)}
                disabled={selectedGoals.length === 0}
                className="px-6 py-3 bg-red-500 text-white rounded-lg font-mono uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                Continue
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )
        
      case 2:
        return (
          <div className="animate__animated animate__fadeIn">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-red-400 mb-6">OPERATOR CLASSIFICATION</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {AI_WORKOUT_GENERATOR_STYLES.experienceLevels.map(level => (
                  <button
                    key={level.id}
                    onClick={() => setExperienceLevel(level.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      experienceLevel === level.id 
                        ? 'bg-red-500/10 border-red-500/50 text-red-400' 
                        : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-red-500/30'
                    }`}
                  >
                    <div className="font-bold text-lg">{level.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{level.description}</div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-red-400 mb-6">MISSION DURATION</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {AI_WORKOUT_GENERATOR_STYLES.timeCommitments.map(time => (
                  <button
                    key={time.id}
                    onClick={() => setTimeCommitment(time.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      timeCommitment === time.id 
                        ? 'bg-red-500/10 border-red-500/50 text-red-400' 
                        : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-red-500/30'
                    }`}
                  >
                    <div className="font-bold">{time.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{time.description}</div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg font-mono uppercase tracking-wider hover:bg-gray-600 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                disabled={!experienceLevel || !timeCommitment}
                className="px-6 py-3 bg-red-500 text-white rounded-lg font-mono uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                Continue
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )
        
      case 3:
        return (
          <div className="animate__animated animate__fadeIn">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-red-400 mb-6">INJURY ASSESSMENT</h3>
              <p className="text-gray-400 mb-6">
                Select any areas of concern. Our AI will modify your mission plan accordingly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {AI_WORKOUT_GENERATOR_STYLES.injuryConcerns.map(concern => (
                  <button
                    key={concern.id}
                    onClick={() => setInjuryConcern(concern.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      injuryConcern === concern.id 
                        ? 'bg-red-500/10 border-red-500/50 text-red-400' 
                        : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-red-500/30'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-2">
                      {concern.id !== 'none' && <ExclamationTriangleIcon className="w-4 h-4" />}
                      {concern.name}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{concern.description}</div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg font-mono uppercase tracking-wider hover:bg-gray-600 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="px-6 py-3 bg-red-500 text-white rounded-lg font-mono uppercase tracking-wider hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                Generate Mission
                <SparklesIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )
        
      case 4:
        return (
          <div className="animate__animated animate__fadeIn">
            <div className="text-center">
              <div className="mb-8">
                <CpuChipIcon className="w-20 h-20 text-red-400 mx-auto mb-4 animate__spin animate__infinite" />
                <h3 className="text-2xl font-bold text-gray-100 mb-4">AI ANALYZING PARAMETERS</h3>
                <p className="text-gray-400">Generating personalized tactical fitness mission...</p>
              </div>
              
              <div className="w-full bg-gray-800 rounded-full h-2 mb-8">
                <div className="bg-red-500 h-2 rounded-full animate__pulse animate__infinite" style={{width: '70%'}}></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <div className="text-gray-500">Goals Analyzed</div>
                  <div className="text-red-400 font-bold">{selectedGoals.length}</div>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <div className="text-gray-500">Experience</div>
                  <div className="text-red-400 font-bold">{experienceLevel}</div>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <div className="text-gray-500">Time Budget</div>
                  <div className="text-red-400 font-bold">{timeCommitment}min</div>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <div className="text-gray-500">Risk Factors</div>
                  <div className="text-red-400 font-bold">{injuryConcern === 'none' ? 'None' : '1'}</div>
                </div>
              </div>
            </div>
          </div>
        )
        
      case 5:
        return (
          <div className="animate__animated animate__fadeIn">
            <div className="text-center mb-8">
              <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-100 mb-4">MISSION PLAN GENERATED</h3>
              <p className="text-gray-400">Your personalized tactical fitness mission is ready for deployment.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800/50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-red-400 mb-4">RECOMMENDED CONFIGURATION</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Primary Split</div>
                  <div className="text-gray-100 font-bold capitalize">
                    {generatedRecommendations?.primarySplit?.replace('-', ' ')}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Training Frequency</div>
                  <div className="text-gray-100 font-bold">{generatedRecommendations?.frequency}</div>
                </div>
                <div>
                  <div className="text-gray-500">Intensity Level</div>
                  <div className="text-gray-100 font-bold">{generatedRecommendations?.intensity}</div>
                </div>
                <div>
                  <div className="text-gray-500">Equipment Focus</div>
                  <div className="text-gray-100 font-bold">
                    {generatedRecommendations?.equipmentFocus?.join(', ')}
                  </div>
                </div>
              </div>
              
              {injuryPrevention && (
                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <ExclamationTriangleIcon className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-bold">INJURY PREVENTION PROTOCOLS</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    {injuryPrevention.modifications.length} modifications applied for optimal safety
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={handleProceed}
                className="px-8 py-4 bg-red-500 text-white rounded-lg font-mono uppercase tracking-wider hover:bg-red-600 transition-colors flex items-center gap-3 text-lg"
              >
                Deploy Mission Plan
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        )
        
      default:
        return null
    }
  }

  useEffect(() => {
    if (currentStep === 4) {
      generateWorkout()
    }
  }, [currentStep, generateWorkout])

  return (
    <div className="min-h-screen relative z-10" style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="container mx-auto px-4 py-8 max-w-4xl" style={{ position: 'relative', zIndex: 20 }}>
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4, 5].map(step => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  step <= currentStep 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-800 text-gray-500'
                }`}>
                  {step < currentStep ? '✓' : step}
                </div>
                {step < 5 && (
                  <div className={`w-full h-1 mx-2 ${
                    step < currentStep ? 'bg-red-500' : 'bg-gray-800'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Objectives</span>
            <span>Classification</span>
            <span>Assessment</span>
            <span>Analysis</span>
            <span>Deploy</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div style={{ position: 'relative', zIndex: 30 }}>
          {renderStep()}
        </div>
      </div>
    </div>
  )
}
