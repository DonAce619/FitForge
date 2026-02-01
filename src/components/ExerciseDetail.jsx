import { ChevronDownIcon, ChevronUpIcon, PlayIcon, FireIcon, BoltIcon } from '@heroicons/react/24/outline'
import { useState, useRef } from 'react'
import { getExerciseInfo } from '../data/exerciseLibrary'

export default function ExerciseDetail({ exercise, index }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const info = getExerciseInfo(exercise.name)

  const getIntensityLevel = (exerciseName) => {
    const highIntensity = ['deadlift', 'squat', 'bench', 'pull-up', 'push-up']
    const mediumIntensity = ['row', 'press', 'curl', 'lunge']
    
    const name = exerciseName.toLowerCase()
    if (highIntensity.some(intensity => name.includes(intensity))) return 'high'
    if (mediumIntensity.some(intensity => name.includes(intensity))) return 'medium'
    return 'low'
  }

  const intensity = getIntensityLevel(exercise.name)
  const intensityColors = {
    high: 'text-red-500 border-red-500/20 bg-red-500/5',
    medium: 'text-orange-500 border-orange-500/20 bg-orange-500/5',
    low: 'text-yellow-500 border-yellow-500/20 bg-yellow-500/5'
  }

  return (
    <div
      className="rounded-lg border border-gray-800/50 overflow-hidden
        bg-gradient-to-br from-gray-900 to-gray-800
        transition-all duration-300 hover:border-gray-700 hover:shadow-xl
        hover:shadow-red-900/5 hover:scale-[1.02] transform"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-4 px-5 text-left
          transition-all duration-200 hover:bg-gray-800/50 active:bg-gray-800
          group relative overflow-hidden"
      >
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/10 to-transparent 
          -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        
        <div className="flex items-center gap-4 min-w-0 relative z-10">
          {/* Exercise number with military styling */}
          <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gradient-to-br from-gray-700 to-gray-800 
            flex items-center justify-center text-sm font-mono text-gray-300 border border-gray-600
            group-hover:border-red-500/50 transition-colors duration-200">
            {String(index + 1).padStart(2, '0')}
          </div>
          
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-100 text-sm uppercase tracking-wide block truncate
                group-hover:text-red-400 transition-colors duration-200">
                {exercise.name}
              </span>
              
              {/* Intensity indicator */}
              <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-semibold
                ${intensityColors[intensity]}`}>
                <BoltIcon className="w-3 h-3" />
                {intensity.toUpperCase()}
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-1">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                {exercise.sets} × {exercise.reps}
              </span>
              
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <FireIcon className="w-3 h-3" />
                <span>{info.muscles.split(',')[0]}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 flex-shrink-0 relative z-10">
          <span className="text-xs text-gray-600 hidden sm:inline font-mono uppercase tracking-wider
            group-hover:text-red-400 transition-colors duration-200">
            {isExpanded ? 'COLLAPSE' : 'EXPAND'}
          </span>
          
          <div className={`p-2 rounded-md border transition-all duration-300
            ${isExpanded 
              ? 'bg-red-500/10 border-red-500/30 text-red-400' 
              : 'bg-gray-800/50 border-gray-700 text-gray-500 group-hover:border-red-500/50 group-hover:text-red-400'
            }`}>
            {isExpanded ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
          </div>
        </div>
      </button>
      
      {isExpanded && (
        <div className="border-t border-gray-800 animate__animated animate__fadeIn">
          <div className="p-5 space-y-4 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
            {/* Exercise header with icon */}
            <div className="flex items-center gap-3 pb-3 border-b border-gray-800">
              <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/30">
                <PlayIcon className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="font-bold text-gray-100 uppercase tracking-wide text-sm">
                  {exercise.name}
                </h3>
                <p className="text-xs text-gray-500 font-mono">
                  EXERCISE DETAILS
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Target muscles section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-red-500 rounded-full"></div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Target Muscles
                  </h4>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-200 font-semibold leading-relaxed">
                    {info.muscles}
                  </p>
                </div>
              </div>
              
              {/* How to perform section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-red-500 rounded-full"></div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Execution Protocol
                  </h4>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {info.description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Exercise metrics */}
            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{exercise.sets}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">SETS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{exercise.reps}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">REPS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{intensity}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">INTENSITY</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
