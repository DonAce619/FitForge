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
        executionProtocol: {
          restBetweenSets: "60-90 seconds for compound lifts, 45-60 seconds for isolation",
          restBetweenExercises: "2-3 minutes",
          tempo: "2-0-2-0 (2 seconds down, no pause, 2 seconds up, no pause)",
          progression: "Increase weight when you can complete all sets and reps with good form",
          intensity: "70-85% of 1RM for compound lifts, 60-75% for isolation",
          frequency: "Once every 48-72 hours",
          tips: [
            "Focus on mind-muscle connection - feel the target muscles working",
            "Maintain proper form over ego lifting",
            "Control the negative (lowering) phase of each rep",
            "Squeeze the target muscle at the top of each movement",
            "Breathe out on exertion, in on the return"
          ]
        },
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
        executionProtocol: {
          restBetweenSets: "90-120 seconds for deadlifts, 60-90 seconds for other compound lifts, 45-60 seconds for isolation",
          restBetweenExercises: "2-3 minutes after deadlifts, 1-2 minutes for others",
          tempo: "3-0-1-0 for deadlifts (3 seconds up, no pause, 1 second down, no pause), 2-0-2-0 for others",
          progression: "Add 5-10 lbs to deadlifts weekly, increase reps on pull-ups before adding weight",
          intensity: "75-85% of 1RM for deadlifts, 70-80% for rows, 60-75% for isolation",
          frequency: "Once every 48-72 hours",
          tips: [
            "Deadlifts: Start with light weight to perfect form - hips back, chest up, drive through heels",
            "Pull-ups: Use full range of motion - dead hang to chin over bar",
            "Rows: Keep back straight, pull to lower chest, squeeze shoulder blades",
            "Face pulls: Light weight, high reps - focus on rear delt contraction",
            "Bicep curls: No swinging - control the movement and squeeze at peak contraction"
          ]
        },
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
        executionProtocol: {
          restBetweenSets: "2-3 minutes for squats and deadlifts, 60-90 seconds for other compound lifts, 45-60 seconds for isolation",
          restBetweenExercises: "3-4 minutes after heavy squats/deadlifts, 1-2 minutes for others",
          tempo: "3-1-1-0 for squats (3 seconds down, 1 second pause, 1 second up, no pause), 2-0-2-0 for others",
          progression: "Add 5-10 lbs to squats weekly, increase reps on accessories before adding weight",
          intensity: "75-85% of 1RM for squats/deadlifts, 70-80% for other compounds, 60-75% for isolation",
          frequency: "Once every 48-72 hours",
          tips: [
            "Squats: Chest up, hips back, knees tracking over toes - go to parallel or deeper",
            "Romanian Deadlifts: Slight knee bend, hinge at hips, feel hamstring stretch",
            "Leg Press: Full range of motion - don't sacrifice depth for weight",
            "Leg Curls: Control the negative, squeeze hamstrings at peak contraction",
            "Calf Raises: Full stretch at bottom, pause and squeeze at top"
          ]
        },
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
        executionProtocol: {
          restBetweenSets: "90-120 seconds for compound lifts, 60-90 seconds for isolation, 45-60 seconds for finishers",
          restBetweenExercises: "2-3 minutes between major exercises, 1-2 minutes for isolation",
          tempo: "2-0-2-0 for presses (2 seconds down, no pause, 2 seconds up, no pause), 3-0-1-0 for flyes",
          progression: "Add 5 lbs to main press weekly, increase reps on isolation before adding weight",
          intensity: "75-85% of 1RM for compound lifts, 70-80% for incline work, 60-75% for isolation",
          frequency: "Once per week",
          tips: [
            "Bench Press: Keep shoulder blades retracted, slight arch in lower back, touch chest lightly",
            "Incline Press: 30-45 degree angle, focus on upper chest contraction",
            "Flyes: Control the movement - don't use momentum, feel the stretch",
            "Push-ups: Full range of motion, chest to floor, explode up",
            "Focus on squeezing chest muscles at peak contraction of every movement"
          ]
        },
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
        executionProtocol: {
          restBetweenSets: "2-3 minutes for deadlifts, 90-120 seconds for rows, 60-90 seconds for isolation",
          restBetweenExercises: "3-4 minutes after deadlifts, 2 minutes between other exercises",
          tempo: "3-0-1-0 for deadlifts, 2-0-2-0 for rows, 2-1-2-0 for pulldowns",
          progression: "Add 10 lbs to deadlifts weekly, 5 lbs to rows, increase reps on pull-ups",
          intensity: "80-85% of 1RM for deadlifts, 75-80% for rows, 70-75% for isolation",
          frequency: "Once per week",
          tips: [
            "Deadlifts: Perfect form first - flat back, drive through heels, lock out at top",
            "Pull-ups: Use full range - dead hang to chin over bar, control negative",
            "Rows: Keep chest up, back straight, pull to lower abdomen, squeeze shoulder blades",
            "T-Bar Rows: Keep close to body, focus on mid-back contraction",
            "Face pulls: Light weight, high reps - focus on rear delt and upper back"
          ]
        },
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
        executionProtocol: {
          restBetweenSets: "90-120 seconds for overhead press, 60-90 seconds for lateral raises, 45-60 seconds for isolation",
          restBetweenExercises: "2-3 minutes after overhead press, 1-2 minutes between others",
          tempo: "2-0-1-0 for overhead press, 3-0-1-0 for lateral raises, 2-1-2-0 for rear delts",
          progression: "Add 5 lbs to overhead press weekly, increase reps on lateral raises before adding weight",
          intensity: "75-85% of 1RM for overhead press, 60-75% for lateral raises, 50-65% for rear delts",
          frequency: "Once per week",
          tips: [
            "Overhead Press: Core tight, glutes squeezed, press straight overhead, don't hyperextend back",
            "Lateral Raises: Lead with elbows, slight bend in elbows, raise to shoulder height",
            "Rear Delt Flyes: Face down on incline bench, focus on rear delt contraction",
            "Upright Rows: Keep bar close to body, pull to collarbone, don't go too high",
            "Control all movements - no swinging or momentum use"
          ]
        },
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
        executionProtocol: {
          restBetweenSets: "60-90 seconds for compound lifts, 45-60 seconds for isolation, 30 seconds for supersets",
          restBetweenExercises: "1-2 minutes between major exercises, 45-60 seconds for supersets",
          tempo: "2-0-2-0 for most exercises, 3-0-1-0 for concentration curls",
          progression: "Add 5 lbs to main lifts weekly, increase reps on isolation before adding weight",
          intensity: "70-80% of 1RM for compound lifts, 60-75% for isolation, 50-65% for pump work",
          frequency: "Once per week",
          tips: [
            "Superset biceps and triceps for maximum pump and efficiency",
            "Focus on mind-muscle connection - feel the target muscle working",
            "Control the negative phase - don't drop the weight",
            "Squeeze at peak contraction for maximum muscle recruitment",
            "Use full range of motion on all exercises"
          ]
        },
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
        executionProtocol: {
          restBetweenSets: "3-4 minutes for heavy squats/deadlifts, 90-120 seconds for other compounds, 60-90 seconds for isolation",
          restBetweenExercises: "4-5 minutes after heavy compounds, 2 minutes between others",
          tempo: "4-0-1-0 for squats (4 seconds down, no pause, 1 second up, no pause), 3-0-1-0 for deadlifts",
          progression: "Add 10 lbs to squats/deadlifts weekly, 5 lbs to leg press, increase reps on isolation",
          intensity: "80-85% of 1RM for squats/deadlifts, 75-80% for leg press, 70-75% for isolation",
          frequency: "Once per week",
          tips: [
            "Squats: Depth is key - go to parallel or deeper, keep chest up, knees tracking over toes",
            "Romanian Deadlifts: Slight knee bend, hinge at hips, feel hamstring stretch, keep back straight",
            "Leg Press: Full range of motion, don't lock knees at top, control negative",
            "Extensions/Curls: Focus on muscle contraction, squeeze at peak, control negative",
            "Calf Raises: Full stretch at bottom, pause and squeeze at top, use full range"
          ]
        },
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
        executionProtocol: {
          restBetweenSets: "3-5 minutes for main squats, 2-3 minutes for front squats, 90-120 seconds for accessories",
          restBetweenExercises: "4-5 minutes after main squats, 2-3 minutes between others",
          tempo: "4-0-1-0 for main squats (4 seconds down, no pause, 1 second up, explosive), 3-0-1-0 for others",
          progression: "Add 5-10 lbs to main squat when you complete all sets with good form, increase reps on accessories",
          intensity: "85-95% of 1RM for main squats, 75-85% for front squats, 70-80% for accessories",
          frequency: "Once per week",
          tips: [
            "Main Squats: Perfect form first - chest up, hips back, depth to parallel or below",
            "Explosive concentric (up) phase - drive through heels, squeeze glutes at top",
            "Front Squats: Keep elbows up, chest proud, maintain upright torso",
            "Control negative (down) phase - don't drop the weight",
            "Core engagement throughout all movements"
          ]
        },
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
