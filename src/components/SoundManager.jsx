import { useEffect, useRef, useState } from 'react'

// Tactical sound effects for Special Forces experience (DISABLED)
const SOUND_EFFECTS = {
  // All sounds disabled
}

class TacticalSoundEngine {
  constructor() {
    this.audioContext = null
    this.sounds = new Map()
    this.ambientLoops = new Map()
    this.masterVolume = 0
    this.isInitialized = false
  }

  async init() {
    // Sounds disabled - no initialization
    return
  }

  playSound(soundName, volume = 1) {
    // Sounds disabled - no playback
    return Promise.resolve()
  }

  playAmbient(soundName, volume = 0.1) {
    // Sounds disabled - no playback
    return Promise.resolve()
  }

  stopAmbient(soundName) {
    // Sounds disabled - no stopping needed
  }

  stopAllAmbient() {
    // Sounds disabled - no stopping needed
  }

  setVolume(newVolume) {
    // Sounds disabled - volume always 0
    this.masterVolume = 0
  }

  cleanup() {
    // Sounds disabled - no cleanup needed
  }
}

// Global sound engine instance
const soundEngine = new TacticalSoundEngine()

export function useTacticalSounds() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false)
  const [volume, setVolume] = useState(0)

  useEffect(() => {
    // Sounds disabled - no initialization
    return () => {
      // Sounds disabled - no cleanup needed
    }
  }, [])

  const playSound = (soundName, customVolume) => {
    // Sounds disabled - no playback
  }

  const playAmbient = (soundName, customVolume) => {
    // Sounds disabled - no playback
  }

  const stopAmbient = (soundName) => {
    // Sounds disabled - no stopping needed
  }

  const toggleSound = () => {
    // Sounds disabled - always disabled
    setIsSoundEnabled(false)
  }

  const updateVolume = (newVolume) => {
    // Sounds disabled - volume always 0
    setVolume(0)
    soundEngine.setVolume(0)
  }

  // Tactical sound methods (disabled)
  const playMissionStart = () => Promise.resolve()
  const playMissionComplete = () => Promise.resolve()
  const playWarning = () => Promise.resolve()

  return {
    playSound,
    playAmbient,
    stopAmbient,
    toggleSound,
    updateVolume,
    playMissionStart,
    playMissionComplete,
    playWarning,
    isSoundEnabled,
    volume,
    isReady: true
  }
}

export { soundEngine }
export default useTacticalSounds
