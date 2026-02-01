// Direct GIF URL mapping for exercise demonstrations
// These are reliable GIF sources that work without API calls

const EXERCISE_GIFS = {
  'bench press': 'https://www.bodybuilding.com/images/exercises/bench-press-a.gif',
  'dumbbell bench press': 'https://www.bodybuilding.com/images/exercises/dumbbell-bench-press-a.gif',
  'barbell squat': 'https://www.bodybuilding.com/images/exercises/barbell-squat-a.gif',
  'deadlift': 'https://www.bodybuilding.com/images/exercises/deadlift-a.gif',
  'pull up': 'https://www.bodybuilding.com/images/exercises/pull-up-a.gif',
  'barbell row': 'https://www.bodybuilding.com/images/exercises/bent-over-row-a.gif',
  'bicep curl': 'https://www.bodybuilding.com/images/exercises/barbell-curl-a.gif',
  'overhead press': 'https://www.bodybuilding.com/images/exercises/overhead-press-a.gif',
  'lunges': 'https://www.bodybuilding.com/images/exercises/lunge-a.gif',
  'plank exercise': 'https://www.bodybuilding.com/images/exercises/plank-a.gif',
  'push up': 'https://www.bodybuilding.com/images/exercises/push-up-a.gif',
  'tricep dips': 'https://www.bodybuilding.com/images/exercises/tricep-dips-a.gif',
  'romanian deadlift': 'https://www.bodybuilding.com/images/exercises/romanian-deadlift-a.gif',
  'calf raises': 'https://www.bodybuilding.com/images/exercises/standing-calf-raise-a.gif',
  // Fallback for any exercise not in the list
  'exercise demonstration': 'https://www.bodybuilding.com/images/exercises/push-up-a.gif'
}

export async function searchExerciseGif(exerciseName) {
  try {
    // Normalize the exercise name to match our keys
    const normalizedKey = exerciseName.toLowerCase().trim()
    
    // First try exact match
    if (EXERCISE_GIFS[normalizedKey]) {
      return EXERCISE_GIFS[normalizedKey]
    }
    
    // Try partial matches
    for (const [key, url] of Object.entries(EXERCISE_GIFS)) {
      if (normalizedKey.includes(key) || key.includes(normalizedKey)) {
        return url
      }
    }
    
    // Return fallback
    return EXERCISE_GIFS['exercise demonstration']
    
  } catch (error) {
    return EXERCISE_GIFS['exercise demonstration']
  }
}

export function getGoogleSearchUrl(exerciseName) {
  const searchQuery = `${exerciseName} exercise demonstration gif`
  return `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}&tbm=isch&tbs=itp:animated`
}

export function getDirectGifSources(exerciseName) {
  // Common exercise GIF sources that work reliably
  const exerciseKey = exerciseName.toLowerCase().replace(/[^a-z0-9]/g, '')
  
  const sources = {
    // Bodybuilding.com exercise GIFs
    bench: [
      'https://www.bodybuilding.com/exercises/bench-press',
      'https://www.bodybuilding.com/exercises/dumbbell-bench-press'
    ],
    squat: [
      'https://www.bodybuilding.com/exercises/barbell-squat',
      'https://www.bodybuilding.com/exercises/goblet-squat'
    ],
    deadlift: [
      'https://www.bodybuilding.com/exercises/deadlift'
    ],
    pullup: [
      'https://www.bodybuilding.com/exercises/pull-up'
    ],
    row: [
      'https://www.bodybuilding.com/exercises/bent-over-row'
    ],
    curl: [
      'https://www.bodybuilding.com/exercises/barbell-curl'
    ],
    ohp: [
      'https://www.bodybuilding.com/exercises/overhead-press'
    ],
    lunge: [
      'https://www.bodybuilding.com/exercises/lunge'
    ],
    plank: [
      'https://www.bodybuilding.com/exercises/plank'
    ]
  }
  
  return sources[exerciseKey] || []
}
