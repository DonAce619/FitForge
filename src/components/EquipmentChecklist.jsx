import {
  UserIcon,
  CubeIcon,
  Squares2X2Icon,
  RectangleStackIcon,
  Bars3Icon,
  BoltIcon,
  FireIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  FlagIcon,
  CheckCircleIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'
import { CheckIcon, PlayIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { EQUIPMENT_OPTIONS } from '../data/equipment'

const ICON_MAP = {
  user: UserIcon,
  dumbbell: CubeIcon,
  barbell: Squares2X2Icon,
  bench: RectangleStackIcon,
  cable: Bars3Icon,
  pullup: BoltIcon,
  kettlebell: FireIcon,
  band: CpuChipIcon,
  machine: CpuChipIcon,
}

export default function EquipmentChecklist({ selectedEquipment, onToggle, onConfirmLoadout }) {
  const [showFeedback, setShowFeedback] = useState(null)
  const selectedCount = selectedEquipment.length
  const totalCount = EQUIPMENT_OPTIONS.length
  
  const handleLoadoutSelect = (equipmentId) => {
    onToggle(equipmentId)
    const equipment = EQUIPMENT_OPTIONS.find(opt => opt.id === equipmentId)
    
    // Show equipment feedback
    const isSelecting = !selectedEquipment.includes(equipmentId)
    setShowFeedback({
      id: equipmentId,
      type: isSelecting ? 'EQUIPMENT ADDED' : 'EQUIPMENT REMOVED',
      equipment: equipment.label,
      timestamp: Date.now()
    })
    
    // Clear feedback after 2 seconds
    setTimeout(() => {
      setShowFeedback(null)
    }, 2000)
  }

  const handleConfirmLoadout = () => {
    if (selectedCount > 0) {
      onConfirmLoadout()
      setShowFeedback({
        type: 'EQUIPMENT CONFIRMED',
        equipment: `${selectedCount} SYSTEMS`,
        timestamp: Date.now()
      })
      setTimeout(() => {
        setShowFeedback(null)
      }, 3000)
    }
  }

  return (
    <div className="space-y-8">
      {/* Equipment feedback overlay */}
      {showFeedback && (
        <div className="fixed top-20 right-4 z-50 animate__animated animate__fadeInRight">
          <div className="bg-gray-900/95 border border-red-500/50 rounded-lg p-4 backdrop-blur-lg shadow-2xl shadow-red-900/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center">
                {showFeedback.type.includes('CONFIRMED') ? (
                  <CheckCircleIcon className="w-4 h-4 text-green-400" />
                ) : showFeedback.type.includes('ADDED') ? (
                  <PlayIcon className="w-4 h-4 text-green-400" />
                ) : (
                  <LockClosedIcon className="w-4 h-4 text-yellow-400" />
                )}
              </div>
              <div>
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  {showFeedback.type}
                </div>
                <div className="text-sm text-gray-300 font-mono">
                  {showFeedback.equipment}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="border-l-4 border-red-500 pl-6">
        <h3 className="text-2xl font-bold text-gray-100 uppercase tracking-wider flex items-center gap-4">
          <ShieldCheckIcon className="w-6 h-6 text-red-400" />
          EQUIPMENT MANIFEST
        </h3>
        <p className="text-sm text-gray-400 mt-3 font-mono">
          SELECT YOUR EQUIPMENT • {selectedCount}/{totalCount} EQUIPMENT READY
        </p>
        
        {/* Progress indicator */}
        <div className="mt-4 w-full bg-gray-800 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500 ease-out"
            style={{ width: `${(selectedCount / totalCount) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Equipment cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {EQUIPMENT_OPTIONS.map((opt, index) => {
          const Icon = ICON_MAP[opt.icon] || CubeIcon
          const isSelected = selectedEquipment.includes(opt.id)
          
          return (
            <div
              key={opt.id}
              className={`relative group animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute -top-2 -right-2 z-20 animate__animated animate__bounceIn">
                  <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-900 flex items-center justify-center shadow-lg">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}
              
              <button
                onClick={() => handleLoadoutSelect(opt.id)}
                className={`
                  relative w-full overflow-hidden rounded-xl border-2 text-left
                  transition-all duration-500 ease-out transform
                  hover:scale-[1.02] active:scale-[0.98]
                  focus:outline-none focus:ring-2 focus:ring-red-500/30
                  ${isSelected
                    ? 'border-red-500/60 bg-gradient-to-br from-red-900/30 to-red-950/40 shadow-xl shadow-red-900/30'
                    : 'border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:border-gray-600/50 hover:shadow-lg hover:shadow-gray-900/20'
                  }
                `}
              >
                {/* Hover sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/10 to-transparent 
                  -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                {/* Card content */}
                <div className="relative z-10 p-6">
                  {/* System number */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-900/90 border border-gray-700 
                    flex items-center justify-center text-xs font-mono text-gray-500 group-hover:text-red-400 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Title only */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-base text-gray-100 uppercase tracking-wide truncate">
                        {opt.label}
                      </span>
                      {isSelected && (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/20 border border-red-500/40">
                          <FlagIcon className="w-3 h-3 text-red-400" />
                        </div>
                      )}
                    </div>
                    
                    <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                      SYSTEM {String(index + 1).padStart(3, '0')}
                    </div>
                  </div>
                  
                  {/* Status and action */}
                  <div className="flex items-center justify-between">
                    <div className={`
                      text-xs font-mono uppercase tracking-wider transition-all duration-300
                      ${isSelected ? 'text-red-400 font-bold' : 'text-gray-600 group-hover:text-red-400'}
                    `}>
                      {isSelected ? 'DEPLOYED' : 'STANDBY'}
                    </div>
                    
                    <div
                      className={`
                        flex-shrink-0 w-7 h-7 rounded-md border-2 flex items-center justify-center
                        transition-all duration-300
                        ${isSelected 
                          ? 'border-red-500 bg-red-500 shadow-lg shadow-red-500/30' 
                          : 'border-gray-700 bg-gray-900/50 group-hover:border-red-500/50'
                        }
                      `}
                    >
                      {isSelected ? (
                        <CheckIcon className="w-4 h-4 text-white" />
                      ) : (
                        <LockClosedIcon className="w-3 h-3 text-gray-600 group-hover:text-red-400 transition-colors" />
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className={`
                  h-1 transition-all duration-500
                  ${isSelected 
                    ? 'bg-gradient-to-r from-red-500 to-red-600' 
                    : 'bg-gradient-to-r from-transparent to-transparent group-hover:from-red-500/20 group-hover:to-red-500/10'
                  }
                `} />
              </button>
            </div>
          )
        })}
      </div>
      
      {/* Action section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <WrenchScrewdriverIcon className="w-6 h-6 text-gray-500" />
            <div>
              <span className="text-sm font-mono text-gray-400">
                EQUIPMENTS STATUS: {selectedCount === 0 ? 'FULL INVENTORY' : `${selectedCount} UNITS SELECTED`}
              </span>
              {selectedCount > 0 && (
                <div className="text-xs text-gray-500 mt-1">
                  Equipment selected
                </div>
              )}
            </div>
          </div>
          
          <button
            onClick={handleConfirmLoadout}
            disabled={selectedCount === 0}
            className={`
              px-6 py-3 rounded-lg font-mono uppercase tracking-wider text-sm font-bold
              transition-all duration-300 transform
              ${selectedCount > 0
                ? 'bg-red-500/10 border border-red-500/40 text-red-400 hover:bg-red-500/20 hover:border-red-500/60 hover:scale-105 active:scale-95'
                : 'bg-gray-800/50 border border-gray-700 text-gray-600 cursor-not-allowed'
              }
            `}
          >
            {selectedCount === 0 ? 'SELECT EQUIPMENT' : 'CONFIRM EQUIPMENT'}
          </button>
        </div>
      </div>
    </div>
  )
}
