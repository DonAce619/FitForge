// Equipment IDs: bodyweight, dumbbells, barbell, bench, cables, pullup_bar, kettlebells, resistance_bands, machine

export const WORKOUT_SPLITS = [
  {
    id: 'ppl',
    name: 'Push / Pull / Legs',
    shortName: 'PPL',
    description: 'The gold standard for intermediate lifters. Targets pushing muscles (chest, shoulders, triceps), pulling muscles (back, biceps), and legs on separate days. High frequency per muscle group with clear recovery windows.',
    daysPerWeek: 6,
    variations: [
      {
        id: 'ppl-push',
        name: 'Push Day',
        day: 1,
        description: 'Targets chest, shoulders, and triceps with pressing movements. Focus on compound lifts first, then isolation for delts and triceps.',
        exercises: [
          { name: 'Bench Press', sets: 4, reps: '8-10', equipment: ['barbell', 'bench'], alt: { name: 'Dumbbell Press', equipment: ['dumbbells', 'bench'] } },
          { name: 'Overhead Press', sets: 4, reps: '8-10', equipment: ['barbell'], alt: { name: 'Dumbbell OHP', equipment: ['dumbbells'] } },
          { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', equipment: ['dumbbells', 'bench'], alt: { name: 'Push-ups', equipment: ['bodyweight'] } },
          { name: 'Lateral Raises', sets: 3, reps: '12-15', equipment: ['dumbbells'], alt: { name: 'Cable Lateral Raises', equipment: ['cables'] } },
          { name: 'Tricep Dips', sets: 3, reps: '10-12', equipment: ['bodyweight'], alt: { name: 'Cable Tricep Pushdown', equipment: ['cables'] } },
          { name: 'Skull Crushers', sets: 3, reps: '10-12', equipment: ['barbell', 'bench'], alt: { name: 'Dumbbell Tricep Ext', equipment: ['dumbbells'] } },
        ],
      },
      {
        id: 'ppl-pull',
        name: 'Pull Day',
        day: 2,
        description: 'Targets back and biceps with pulling movements. Deadlifts, rows, and pull-ups build thickness and width.',
        exercises: [
          { name: 'Deadlift', sets: 4, reps: '5-6', equipment: ['barbell'], alt: { name: 'Romanian Deadlift', equipment: ['dumbbells'] } },
          { name: 'Pull-ups', sets: 4, reps: '8-10', equipment: ['pullup_bar'], alt: { name: 'Lat Pulldown', equipment: ['cables', 'machine'] } },
          { name: 'Barbell Rows', sets: 4, reps: '8-10', equipment: ['barbell'], alt: { name: 'Dumbbell Rows', equipment: ['dumbbells'] } },
          { name: 'Face Pulls', sets: 3, reps: '15-20', equipment: ['cables'], alt: { name: 'Band Face Pulls', equipment: ['resistance_bands'] } },
          { name: 'Barbell Curls', sets: 3, reps: '10-12', equipment: ['barbell'], alt: { name: 'Dumbbell Curls', equipment: ['dumbbells'] } },
          { name: 'Hammer Curls', sets: 3, reps: '10-12', equipment: ['dumbbells'], alt: { name: 'Band Curls', equipment: ['resistance_bands'] } },
        ],
      },
      {
        id: 'ppl-legs',
        name: 'Leg Day',
        day: 3,
        description: 'Targets quads, hamstrings, glutes, and calves. Squats and hinges form the foundation; machines and isolation finish the work.',
        exercises: [
          { name: 'Barbell Squat', sets: 4, reps: '8-10', equipment: ['barbell'], alt: { name: 'Goblet Squat', equipment: ['dumbbells'] } },
          { name: 'Romanian Deadlift', sets: 4, reps: '8-10', equipment: ['barbell'], alt: { name: 'Dumbbell RDL', equipment: ['dumbbells'] } },
          { name: 'Leg Press', sets: 3, reps: '12-15', equipment: ['machine'], alt: { name: 'Bulgarian Split Squat', equipment: ['dumbbells'] } },
          { name: 'Leg Curls', sets: 3, reps: '12-15', equipment: ['machine'], alt: { name: 'Nordic Curls', equipment: ['bodyweight'] } },
          { name: 'Calf Raises', sets: 4, reps: '15-20', equipment: ['bodyweight'], alt: { name: 'Seated Calf Raise', equipment: ['machine'] } },
        ],
      },
    ],
  },
  {
    id: 'bro-split',
    name: 'Bro Split',
    shortName: 'Bro Split',
    description: 'Classic bodybuilding split isolating one muscle group per day. Maximum volume and focus per muscle for optimal hypertrophy. Perfect for those who love the pump and want to dedicate full sessions to specific muscles.',
    daysPerWeek: 5,
    variations: [
      {
        id: 'bro-chest',
        name: 'Chest Day',
        day: 1,
        description: 'Complete chest destruction. Start heavy with compound presses, then hit all angles with incline, decline, and fly variations for maximum pec development.',
        exercises: [
          { name: 'Barbell Bench Press', sets: 4, reps: '8-10', equipment: ['barbell', 'bench'], alt: { name: 'Dumbbell Press', equipment: ['dumbbells', 'bench'] } },
          { name: 'Incline Dumbbell Press', sets: 4, reps: '10-12', equipment: ['dumbbells', 'bench'], alt: { name: 'Incline Push-ups', equipment: ['bodyweight'] } },
          { name: 'Cable Crossovers', sets: 3, reps: '12-15', equipment: ['cables'], alt: { name: 'Dumbbell Flyes', equipment: ['dumbbells'] } },
          { name: 'Dumbbell Pullovers', sets: 3, reps: '12-15', equipment: ['dumbbells'], alt: { name: 'Band Pullovers', equipment: ['resistance_bands'] } },
          { name: 'Push-ups', sets: 3, reps: 'AMRAP', equipment: ['bodyweight'], alt: null },
        ],
      },
      {
        id: 'bro-back',
        name: 'Back Day',
        day: 2,
        description: 'Back attack from all angles. Heavy deadlifts for thickness, rows for width, and pulldowns for lat development. Finish with traps and lower back.',
        exercises: [
          { name: 'Deadlift', sets: 4, reps: '5-6', equipment: ['barbell'], alt: { name: 'Romanian Deadlift', equipment: ['dumbbells'] } },
          { name: 'Pull-ups', sets: 4, reps: '8-12', equipment: ['pullup_bar'], alt: { name: 'Lat Pulldown', equipment: ['cables', 'machine'] } },
          { name: 'T-Bar Rows', sets: 4, reps: '8-10', equipment: ['barbell'], alt: { name: 'Dumbbell Rows', equipment: ['dumbbells'] } },
          { name: 'Seated Cable Rows', sets: 3, reps: '10-12', equipment: ['cables'], alt: { name: 'Bent Over Rows', equipment: ['barbell'] } },
          { name: 'Face Pulls', sets: 3, reps: '15-20', equipment: ['cables'], alt: { name: 'Band Face Pulls', equipment: ['resistance_bands'] } },
          { name: 'Shrugs', sets: 4, reps: '12-15', equipment: ['dumbbells'], alt: { name: 'Barbell Shrugs', equipment: ['barbell'] } },
        ],
      },
      {
        id: 'bro-shoulders',
        name: 'Shoulder Day',
        day: 3,
        description: '3D shoulder development. Front, side, and rear delts get hammered. Heavy overhead press for mass, then isolation for cannonball delts.',
        exercises: [
          { name: 'Overhead Press', sets: 4, reps: '8-10', equipment: ['barbell'], alt: { name: 'Dumbbell OHP', equipment: ['dumbbells'] } },
          { name: 'Lateral Raises', sets: 4, reps: '12-15', equipment: ['dumbbells'], alt: { name: 'Cable Lateral Raises', equipment: ['cables'] } },
          { name: 'Bent Over Reverse Flyes', sets: 3, reps: '15-20', equipment: ['dumbbells'], alt: { name: 'Face Pulls', equipment: ['cables'] } },
          { name: 'Upright Rows', sets: 3, reps: '10-12', equipment: ['barbell'], alt: { name: 'Dumbbell Upright Rows', equipment: ['dumbbells'] } },
          { name: 'Shrugs', sets: 3, reps: '12-15', equipment: ['dumbbells'], alt: { name: 'Barbell Shrugs', equipment: ['barbell'] } },
        ],
      },
      {
        id: 'bro-arms',
        name: 'Arms Day',
        day: 4,
        description: 'Bi and tri annihilation. Superset biceps and triceps for maximum pump. Every angle and variation for sleeve-busting arms.',
        exercises: [
          { name: 'Barbell Curls', sets: 4, reps: '8-10', equipment: ['barbell'], alt: { name: 'Dumbbell Curls', equipment: ['dumbbells'] } },
          { name: 'Close Grip Bench Press', sets: 4, reps: '8-10', equipment: ['barbell', 'bench'], alt: { name: 'Diamond Push-ups', equipment: ['bodyweight'] } },
          { name: 'Incline Dumbbell Curls', sets: 3, reps: '10-12', equipment: ['dumbbells', 'bench'], alt: { name: 'Preacher Curls', equipment: ['cables'] } },
          { name: 'Skull Crushers', sets: 3, reps: '10-12', equipment: ['barbell', 'bench'], alt: { name: 'Cable Tricep Extensions', equipment: ['cables'] } },
          { name: 'Hammer Curls', sets: 3, reps: '10-12', equipment: ['dumbbells'], alt: { name: 'Rope Curls', equipment: ['cables'] } },
          { name: 'Tricep Pushdowns', sets: 3, reps: '12-15', equipment: ['cables'], alt: { name: 'Bench Dips', equipment: ['bodyweight'] } },
        ],
      },
      {
        id: 'bro-legs',
        name: 'Legs Day',
        day: 5,
        description: 'Leg day massacre. Squats for quads, deadlifts for hamstrings, and everything in between. No chicken legs allowed.',
        exercises: [
          { name: 'Barbell Squat', sets: 4, reps: '8-10', equipment: ['barbell'], alt: { name: 'Goblet Squat', equipment: ['dumbbells'] } },
          { name: 'Romanian Deadlift', sets: 4, reps: '8-10', equipment: ['barbell'], alt: { name: 'Dumbbell RDL', equipment: ['dumbbells'] } },
          { name: 'Leg Press', sets: 4, reps: '12-15', equipment: ['machine'], alt: { name: 'Bulgarian Split Squat', equipment: ['dumbbells'] } },
          { name: 'Leg Extensions', sets: 3, reps: '12-15', equipment: ['machine'], alt: { name: 'Sissy Squats', equipment: ['bodyweight'] } },
          { name: 'Leg Curls', sets: 3, reps: '12-15', equipment: ['machine'], alt: { name: 'Nordic Curls', equipment: ['bodyweight'] } },
          { name: 'Calf Raises', sets: 4, reps: '15-20', equipment: ['bodyweight'], alt: { name: 'Seated Calf Raise', equipment: ['machine'] } },
        ],
      },
    ],
  },
  {
    id: 'strength-focus',
    name: 'Strength Focus',
    shortName: 'Strength',
    description: 'Powerlifting-inspired program focused on maximal strength in the big three: squat, bench, deadlift. Low reps, heavy weight, and long rest periods. Perfect for those who want to get brutally strong.',
    daysPerWeek: 4,
    variations: [
      {
        id: 'strength-squat',
        name: 'Squat Focus',
        day: 1,
        description: 'Heavy squat day with accessory work. Build a massive squat foundation with volume and intensity. Accessory movements support squat strength and muscle balance.',
        exercises: [
          { name: 'Barbell Squat', sets: 5, reps: '3-5', equipment: ['barbell'], alt: { name: 'Goblet Squat', equipment: ['dumbbells'] } },
          { name: 'Front Squat', sets: 3, reps: '5-8', equipment: ['barbell'], alt: { name: 'Goblet Squat', equipment: ['kettlebells'] } },
          { name: 'Leg Press', sets: 3, reps: '8-10', equipment: ['machine'], alt: { name: 'Bulgarian Split Squat', equipment: ['dumbbells'] } },
          { name: 'Romanian Deadlift', sets: 3, reps: '6-8', equipment: ['barbell'], alt: { name: 'Dumbbell RDL', equipment: ['dumbbells'] } },
          { name: 'Ab Rollouts', sets: 3, reps: '10-12', equipment: ['bodyweight'], alt: { name: 'Plank', equipment: ['bodyweight'] } },
        ],
      },
      {
        id: 'strength-bench',
        name: 'Bench Focus',
        day: 2,
        description: 'Bench press specialization day. Build a massive chest and powerful pressing strength. Heavy pressing with volume work for maximum strength gains.',
        exercises: [
          { name: 'Barbell Bench Press', sets: 5, reps: '3-5', equipment: ['barbell', 'bench'], alt: { name: 'Dumbbell Press', equipment: ['dumbbells', 'bench'] } },
          { name: 'Close Grip Bench Press', sets: 3, reps: '5-8', equipment: ['barbell', 'bench'], alt: { name: 'Diamond Push-ups', equipment: ['bodyweight'] } },
          { name: 'Overhead Press', sets: 3, reps: '5-8', equipment: ['barbell'], alt: { name: 'Dumbbell OHP', equipment: ['dumbbells'] } },
          { name: 'Weighted Dips', sets: 3, reps: '6-10', equipment: ['bodyweight'], alt: { name: 'Tricep Pushdowns', equipment: ['cables'] } },
          { name: 'Barbell Rows', sets: 3, reps: '6-8', equipment: ['barbell'], alt: { name: 'Dumbbell Rows', equipment: ['dumbbells'] } },
        ],
      },
      {
        id: 'strength-deadlift',
        name: 'Deadlift Focus',
        day: 3,
        description: 'Heavy deadlift day with back support. Build a powerful posterior chain and grip strength. Accessory work targets weak points and muscle balance.',
        exercises: [
          { name: 'Deadlift', sets: 5, reps: '3-5', equipment: ['barbell'], alt: { name: 'Romanian Deadlift', equipment: ['dumbbells'] } },
          { name: 'Barbell Rows', sets: 4, reps: '5-8', equipment: ['barbell'], alt: { name: 'Dumbbell Rows', equipment: ['dumbbells'] } },
          { name: 'Pull-ups', sets: 3, reps: '6-10', equipment: ['pullup_bar'], alt: { name: 'Lat Pulldown', equipment: ['cables', 'machine'] } },
          { name: 'Good Mornings', sets: 3, reps: '6-8', equipment: ['barbell'], alt: { name: 'Band Good Mornings', equipment: ['resistance_bands'] } },
          { name: 'Face Pulls', sets: 3, reps: '12-15', equipment: ['cables'], alt: { name: 'Band Face Pulls', equipment: ['resistance_bands'] } },
        ],
      },
      {
        id: 'strength-accessory',
        name: 'Accessory Day',
        day: 4,
        description: 'Supportive work for strength gains. Address weak points, build muscle mass, and prevent injuries. Higher rep ranges for hypertrophy and work capacity.',
        exercises: [
          { name: 'Incline Dumbbell Press', sets: 3, reps: '8-12', equipment: ['dumbbells', 'bench'], alt: { name: 'Push-ups', equipment: ['bodyweight'] } },
          { name: 'Lat Pulldown', sets: 3, reps: '8-12', equipment: ['cables', 'machine'], alt: { name: 'Pull-ups', equipment: ['pullup_bar'] } },
          { name: 'Lateral Raises', sets: 3, reps: '12-15', equipment: ['dumbbells'], alt: { name: 'Cable Lateral Raises', equipment: ['cables'] } },
          { name: 'Barbell Curls', sets: 3, reps: '8-12', equipment: ['barbell'], alt: { name: 'Dumbbell Curls', equipment: ['dumbbells'] } },
          { name: 'Tricep Extensions', sets: 3, reps: '8-12', equipment: ['dumbbells'], alt: { name: 'Cable Tricep Extensions', equipment: ['cables'] } },
          { name: 'Farmers Walks', sets: 3, reps: '40m', equipment: ['dumbbells'], alt: { name: 'Carries', equipment: ['kettlebells'] } },
        ],
      },
    ],
  },
  {
    id: 'functional-athletic',
    name: 'Functional / Athletic',
    shortName: 'Athletic',
    description: 'Athletic performance program focusing on functional movement patterns, explosive power, and injury prevention. Perfect for athletes and those who want to be functionally fit.',
    daysPerWeek: 4,
    variations: [
      {
        id: 'athletic-power',
        name: 'Power Day',
        day: 1,
        description: 'Explosive power development. Olympic lifts, plyometrics, and explosive movements for athletic performance. Focus on speed and power output.',
        exercises: [
          { name: 'Kettlebell Swings', sets: 4, reps: '15-20', equipment: ['kettlebells'], alt: { name: 'Dumbbell Swings', equipment: ['dumbbells'] } },
          { name: 'Box Jumps', sets: 4, reps: '8-10', equipment: ['bodyweight'], alt: { name: 'Jump Squats', equipment: ['bodyweight'] } },
          { name: 'Medicine Ball Slams', sets: 3, reps: '12-15', equipment: ['kettlebells'], alt: { name: 'Burpees', equipment: ['bodyweight'] } },
          { name: 'Push Press', sets: 3, reps: '6-8', equipment: ['barbell'], alt: { name: 'Dumbbell Push Press', equipment: ['dumbbells'] } },
          { name: 'Sprints', sets: 6, reps: '30m', equipment: ['bodyweight'], alt: { name: 'High Knees', equipment: ['bodyweight'] } },
        ],
      },
      {
        id: 'athletic-upper',
        name: 'Athletic Upper',
        day: 2,
        description: 'Functional upper body strength. Pulling, pushing, and core stability movements. Focus on athletic performance and injury prevention.',
        exercises: [
          { name: 'Pull-ups', sets: 4, reps: '8-12', equipment: ['pullup_bar'], alt: { name: 'Inverted Rows', equipment: ['bodyweight'] } },
          { name: 'Push-ups', sets: 4, reps: '15-20', equipment: ['bodyweight'], alt: { name: 'Knee Push-ups', equipment: ['bodyweight'] } },
          { name: 'Single Arm Dumbbell Rows', sets: 3, reps: '10-12', equipment: ['dumbbells'], alt: { name: 'Band Rows', equipment: ['resistance_bands'] } },
          { name: 'Turkish Get-ups', sets: 3, reps: '5-6', equipment: ['kettlebells'], alt: { name: 'Get-ups', equipment: ['dumbbells'] } },
          { name: 'Battle Ropes', sets: 3, reps: '30s', equipment: ['resistance_bands'], alt: { name: 'Arm Circles', equipment: ['bodyweight'] } },
        ],
      },
      {
        id: 'athletic-lower',
        name: 'Athletic Lower',
        day: 3,
        description: 'Functional lower body power and stability. Unilateral work, balance, and explosive movements. Build athletic legs that perform.',
        exercises: [
          { name: 'Goblet Squat', sets: 4, reps: '10-12', equipment: ['kettlebells'], alt: { name: 'Bodyweight Squat', equipment: ['bodyweight'] } },
          { name: 'Bulgarian Split Squat', sets: 3, reps: '10-12', equipment: ['dumbbells'], alt: { name: 'Bodyweight Split Squat', equipment: ['bodyweight'] } },
          { name: 'Single Leg RDL', sets: 3, reps: '10-12', equipment: ['dumbbells'], alt: { name: 'Single Leg Deadlift', equipment: ['bodyweight'] } },
          { name: 'Lateral Lunges', sets: 3, reps: '10-12', equipment: ['bodyweight'], alt: { name: 'Side Lunges', equipment: ['bodyweight'] } },
          { name: 'Pistol Squats', sets: 3, reps: '5-8', equipment: ['bodyweight'], alt: { name: 'Assisted Pistol Squats', equipment: ['resistance_bands'] } },
        ],
      },
      {
        id: 'athletic-conditioning',
        name: 'Conditioning Day',
        day: 4,
        description: 'Metabolic conditioning and core work. High-intensity intervals, core stability, and functional fitness. Build work capacity and mental toughness.',
        exercises: [
          { name: 'Burpees', sets: 4, reps: '10-15', equipment: ['bodyweight'], alt: { name: 'Mountain Climbers', equipment: ['bodyweight'] } },
          { name: 'Kettlebell Snatches', sets: 4, reps: '10-12', equipment: ['kettlebells'], alt: { name: 'Dumbbell Snatches', equipment: ['dumbbells'] } },
          { name: 'Plank', sets: 3, reps: '60s', equipment: ['bodyweight'], alt: { name: 'Knee Plank', equipment: ['bodyweight'] } },
          { name: 'Mountain Climbers', sets: 3, reps: '20-30', equipment: ['bodyweight'], alt: { name: 'High Knees', equipment: ['bodyweight'] } },
          { name: 'Jumping Jacks', sets: 3, reps: '50-100', equipment: ['bodyweight'], alt: { name: 'Step Jacks', equipment: ['bodyweight'] } },
        ],
      },
    ],
  },
]

function getExerciseForEquipment(exercise, selectedEquipment) {
  const hasPrimary = exercise.equipment.every((eq) => selectedEquipment.includes(eq))
  if (hasPrimary) return { name: exercise.name, sets: exercise.sets, reps: exercise.reps }

  if (exercise.alt) {
    const hasAlt = exercise.alt.equipment.every((eq) => selectedEquipment.includes(eq))
    if (hasAlt) return { name: exercise.alt.name, sets: exercise.sets, reps: exercise.reps }
  }

  return null
}

export function getFilteredSplits(selectedEquipment) {
  if (!selectedEquipment || selectedEquipment.length === 0) {
    return WORKOUT_SPLITS.map((split) => {
      const totalCount = split.variations.reduce((acc, v) => acc + v.exercises.length, 0)
      return {
        ...split,
        variations: split.variations.map((v) => ({
          ...v,
          exercises: v.exercises.map((e) => ({ name: e.name, sets: e.sets, reps: e.reps })),
          availableCount: v.exercises.length,
          totalCount: v.exercises.length,
        })),
        availableCount: totalCount,
        totalCount,
      }
    })
  }

  return WORKOUT_SPLITS.map((split) => {
    const filteredVariations = split.variations.map((variation) => {
      const filteredExercises = variation.exercises
        .map((ex) => getExerciseForEquipment(ex, selectedEquipment))
        .filter(Boolean)
      return {
        ...variation,
        exercises: filteredExercises,
        availableCount: filteredExercises.length,
        totalCount: variation.exercises.length,
      }
    })

    const totalAvailable = filteredVariations.reduce((acc, v) => acc + v.availableCount, 0)
    const totalOriginal = split.variations.reduce((acc, v) => acc + v.exercises.length, 0)

    return {
      ...split,
      variations: filteredVariations,
      availableCount: totalAvailable,
      totalCount: totalOriginal,
    }
  })
}
