import { useState } from 'react'
import { 
  ChevronDownIcon, 
  ChevronUpIcon, 
  BoltIcon,
  CpuChipIcon,
  StarIcon,
  ClockIcon,
  FireIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import ExerciseDetail from './ExerciseDetail'
import { useTacticalSounds } from './SoundManager'

export default function WorkoutSplitCard({ split, index, isRecommended = false }) {
  const [expandedVariation, setExpandedVariation] = useState(null)
  const { playSound } = useTacticalSounds()

  const toggleVariation = (variationId) => {
    setExpandedVariation(expandedVariation === variationId ? null : variationId)
    playSound('buttonClick', 0.5)
  }

  const getRankBadge = (index) => {
    const ranks = [
      { name: 'BEGINNER', color: 'bg-gray-500/20 border-gray-500/50 text-gray-400' },
      { name: 'INTERMEDIATE', color: 'bg-blue-500/20 border-blue-500/50 text-blue-400' },
      { name: 'ADVANCED', color: 'bg-purple-500/20 border-purple-500/50 text-purple-400' },
      { name: 'EXPERT', color: 'bg-red-500/20 border-red-500/50 text-red-400' }
    ]
    return ranks[index % ranks.length]
  }

  const rank = getRankBadge(index)
  const progressPercentage = (split.availableCount / split.totalCount) * 100

  return (
    <div className={`border rounded-xl overflow-hidden backdrop-blur-lg transition-all duration-200 hover:shadow-2xl hover:shadow-red-500/10 transform hover:scale-[1.02] ${
      isRecommended 
        ? 'bg-gradient-to-br from-red-900/30 to-red-800/20 border-red-500/50' 
        : 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800/50'
    }`}>
      {/* Workout Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            {/* AI Recommendation Badge */}
            {isRecommended && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/50 mb-3">
                <CpuChipIcon className="w-4 h-4 text-red-400" />
                <span className="text-xs text-red-400 font-mono uppercase tracking-wider">AI RECOMMENDED</span>
                <StarIcon className="w-4 h-4 text-yellow-400" />
              </div>
            )}
            
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${rank.color}`}>
                {rank.name}
              </span>
              {isRecommended && (
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/10 border border-red-500/30">
                  <StarIcon className="w-3 h-3 text-red-400" />
                  <span className="text-xs text-red-400 font-semibold">RECOMMENDED</span>
                </div>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-gray-100 mb-2">
              {split.name}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {split.description}
            </p>
            
            {/* Workout Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-red-400 mb-1">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-lg font-bold">{split.daysPerWeek}</span>
                </div>
                <div className="text-xs text-gray-500 font-mono uppercase">Days/Week</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-red-400 mb-1">
                  <BoltIcon className="w-4 h-4" />
                  <span className="text-lg font-bold">{split.availableCount}</span>
                </div>
                <div className="text-xs text-gray-500 font-mono uppercase">Exercises</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-red-400 mb-1">
                  <FireIcon className="w-4 h-4" />
                  <span className="text-lg font-bold">{Math.round(progressPercentage)}%</span>
                </div>
                <div className="text-xs text-gray-500 font-mono uppercase">Available</div>
              </div>
            </div>
          </div>
          
          {/* Workout Control */}
          <div className="flex flex-col items-end gap-3">
            {/* Status indicator removed */}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 font-mono mb-1">
            <span>WORKOUT READINESS</span>
            <span>{split.availableCount}/{split.totalCount} AVAILABLE</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Variations */}
        <div className="space-y-3">
          {split.variations.map((variation, vIndex) => (
            <div 
              key={variation.id}
              className={`border rounded-lg transition-all duration-200 ease-out ${
                expandedVariation === variation.id
                  ? 'border-red-500/50 bg-red-500/5'
                  : 'border-gray-700/50 bg-gray-800/30 hover:border-red-500/30'
              }`}
            >
              <button
                onClick={() => toggleVariation(variation.id)}
                className="w-full p-4 text-left flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-gray-100">{variation.name}</h4>
                    <div className="text-xs text-gray-500 font-mono">
                      DAY {variation.day}
                    </div>
                    <div className="text-xs text-red-400 font-mono">
                      {variation.exercises.length} EXERCISES
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    {variation.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  {expandedVariation === variation.id ? (
                    <ChevronUpIcon className="w-5 h-5 text-red-400" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {/* Expanded Exercise Details */}
              {expandedVariation === variation.id && (
                <div className="border-t border-gray-700/50 p-4 space-y-3 overflow-hidden transition-all duration-300 ease-out">
                  {variation.exercises.map((exercise, eIndex) => (
                    <ExerciseDetail 
                      key={`${exercise.name}-${eIndex}`} 
                      exercise={exercise}
                      index={eIndex}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
