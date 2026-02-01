// Exercise search terms for Google GIF search
// These will be used to find relevant exercise demonstration GIFs

const SEARCH_TERMS = {
  bench: 'bench press',
  bench2: 'dumbbell bench press',
  squat: 'barbell squat',
  deadlift: 'deadlift',
  pushup: 'push up',
  pullup: 'pull up',
  curl: 'bicep curl',
  row: 'barbell row',
  ohp: 'overhead press',
  dip: 'tricep dips',
  rdl: 'romanian deadlift',
  lunge: 'lunges',
  plank: 'plank exercise',
  calf: 'calf raises',
}

export const EXERCISE_LIBRARY = {
  'Bench Press': {
    muscles: 'Chest, Triceps, Front Delts',
    description: 'Lie on bench, grip bar slightly wider than shoulders. Lower bar to mid-chest with control, then press up explosively. Keep feet flat, slight arch in lower back.',
    searchTerm: SEARCH_TERMS.bench,
  },
  'Dumbbell Press': {
    muscles: 'Chest, Triceps, Front Delts',
    description: 'Lie on bench holding dumbbells at shoulder level. Press weights up until arms extend, then lower with control. Greater range of motion than barbell.',
    searchTerm: SEARCH_TERMS.bench,
  },
  'Push-ups': {
    muscles: 'Chest, Triceps, Front Delts, Core',
    description: 'Hands shoulder-width apart, body straight from head to heels. Lower chest toward floor by bending elbows, then push back up. Keep core braced throughout.',
    searchTerm: SEARCH_TERMS.pushup,
  },
  'Overhead Press': {
    muscles: 'Shoulders, Triceps, Upper Chest',
    description: 'Stand with bar at front rack. Press bar overhead until arms lock out, then lower to collarbone. Keep core tight, avoid excessive lean.',
    searchTerm: SEARCH_TERMS.bench2,
  },
  'Dumbbell OHP': {
    muscles: 'Shoulders, Triceps, Upper Chest',
    description: 'Hold dumbbells at shoulder height, palms forward. Press both weights overhead until arms extend. Lower with control. Allows independent arm movement.',
    searchTerm: SEARCH_TERMS.bench2,
  },
  'Pike Push-ups': {
    muscles: 'Shoulders, Triceps, Upper Chest',
    description: 'Start in pike position with hips high. Lower forehead toward floor by bending elbows, then push back up. Targets shoulders similar to OHP.',
    searchTerm: SEARCH_TERMS.pushup,
  },
  'Incline Dumbbell Press': {
    muscles: 'Upper Chest, Front Delts, Triceps',
    description: 'Set bench to 30-45°. Hold dumbbells at shoulder level. Press up and together, then lower with control. Emphasizes upper chest development.',
    searchTerm: SEARCH_TERMS.bench,
  },
  'Decline Push-ups': {
    muscles: 'Lower Chest, Triceps',
    description: 'Feet elevated on bench or box. Perform push-ups with hands on floor. The angle targets lower chest fibers.',
    searchTerm: SEARCH_TERMS.pushup,
  },
  'Incline Press': {
    muscles: 'Upper Chest, Front Delts, Triceps',
    description: 'Same as Incline Dumbbell Press. Set bench to 30-45° and press dumbbells from shoulder level.',
    searchTerm: SEARCH_TERMS.bench,
  },
  'Lateral Raises': {
    muscles: 'Side Delts',
    description: 'Stand holding dumbbells at sides. Raise weights out to sides until arms parallel to floor. Lower with control. Keep slight bend in elbows.',
    searchTerm: SEARCH_TERMS.ohp,
  },
  'Cable Lateral Raises': {
    muscles: 'Side Delts',
    description: 'Stand beside cable, grasp handle. Raise arm out to side against constant tension. Cable provides consistent resistance through the movement.',
    searchTerm: SEARCH_TERMS.ohp,
  },
  'Band Lateral Raises': {
    muscles: 'Side Delts',
    description: 'Stand on resistance band, hold ends at sides. Raise arms out to sides against band tension. Great for home workouts.',
    searchTerm: SEARCH_TERMS.ohp,
  },
  'Tricep Dips': {
    muscles: 'Triceps, Chest, Front Delts',
    description: 'Support body on parallel bars or bench. Lower by bending elbows until upper arms parallel to floor, then push back up. Keep elbows tucked.',
    searchTerm: SEARCH_TERMS.dip,
  },
  'Cable Tricep Pushdown': {
    muscles: 'Triceps',
    description: 'Stand at cable with bar attachment. Push bar down by extending elbows, squeeze at bottom. Keep elbows at sides throughout.',
    searchTerm: SEARCH_TERMS.bench,
  },
  'Cable Pushdown': {
    muscles: 'Triceps',
    description: 'Same as Cable Tricep Pushdown. Use rope or bar attachment. Focus on full elbow extension at bottom of movement.',
    searchTerm: SEARCH_TERMS.bench,
  },
  'Skull Crushers': {
    muscles: 'Triceps',
    description: 'Lie on bench, hold bar over chest. Lower bar toward forehead by bending elbows, then extend back up. Keep upper arms vertical.',
    searchTerm: SEARCH_TERMS.bench,
  },
  'Dumbbell Tricep Ext': {
    muscles: 'Triceps',
    description: 'Hold one dumbbell overhead with both hands. Lower behind head by bending elbows, then extend. Keep upper arms still.',
    searchTerm: SEARCH_TERMS.bench,
  },
  'Tricep Extensions': {
    muscles: 'Triceps',
    description: 'Overhead or lying extension. Lower weight by bending elbows, extend to lockout. Isolates triceps effectively.',
    searchTerm: SEARCH_TERMS.bench,
  },
  'Diamond Push-ups': {
    muscles: 'Triceps, Chest',
    description: 'Hands together under chest, thumbs and index fingers touching. Perform push-up. Narrow hand position emphasizes triceps.',
    searchTerm: SEARCH_TERMS.pushup,
  },
  'Deadlift': {
    muscles: 'Back, Glutes, Hamstrings, Traps, Forearms',
    description: 'Hinge at hips, grip bar outside legs. Drive through heels to stand, extending hips and knees. Keep bar close to body throughout.',
    searchTerm: SEARCH_TERMS.deadlift,
  },
  'Romanian Deadlift': {
    muscles: 'Hamstrings, Glutes, Lower Back',
    description: 'Slight knee bend, hinge at hips to lower bar along legs. Feel hamstring stretch, then drive hips forward to stand. Great for posterior chain.',
    searchTerm: SEARCH_TERMS.rdl,
  },
  'Dumbbell RDL': {
    muscles: 'Hamstrings, Glutes, Lower Back',
    description: 'Hold dumbbells in front of thighs. Hinge at hips, lowering weights along legs. Drive hips forward to return. Single-leg option for balance.',
    searchTerm: SEARCH_TERMS.rdl,
  },
  'Pull-ups': {
    muscles: 'Lats, Biceps, Rear Delts, Core',
    description: 'Hang from bar with overhand grip. Pull chest to bar by driving elbows down. Lower with control. Full range of motion is key.',
    searchTerm: SEARCH_TERMS.pullup,
  },
  'Lat Pulldown': {
    muscles: 'Lats, Biceps, Rear Delts',
    description: 'Sit at lat machine, grip bar wide. Pull bar to upper chest by driving elbows down. Squeeze lats at bottom. Control the negative.',
    searchTerm: SEARCH_TERMS.pullup,
  },
  'Barbell Rows': {
    muscles: 'Lats, Rhomboids, Biceps, Rear Delts',
    description: 'Hinge forward, bar hanging from arms. Pull bar to lower chest/upper abs by driving elbows back. Keep back flat, avoid momentum.',
    searchTerm: SEARCH_TERMS.row,
  },
  'Dumbbell Rows': {
    muscles: 'Lats, Rhomboids, Biceps, Rear Delts',
    description: 'Support on bench, dumbbell in free hand. Pull weight to hip by driving elbow back. Greater stretch than barbell rows.',
    searchTerm: SEARCH_TERMS.row,
  },
  'Cable Rows': {
    muscles: 'Lats, Rhomboids, Biceps, Rear Delts',
    description: 'Sit at cable row, grasp handle. Pull to stomach by retracting shoulder blades. Constant tension throughout movement.',
    searchTerm: SEARCH_TERMS.row,
  },
  'Face Pulls': {
    muscles: 'Rear Delts, Rhomboids, Traps',
    description: 'Pull rope to face level, externally rotating at end. Squeeze shoulder blades. Excellent for shoulder health and posture.',
    searchTerm: SEARCH_TERMS.row,
  },
  'Band Face Pulls': {
    muscles: 'Rear Delts, Rhomboids, Traps',
    description: 'Anchor band at chest height. Pull band to face, externally rotating. Same movement as cable, portable for home.',
    searchTerm: SEARCH_TERMS.row,
  },
  'Barbell Curls': {
    muscles: 'Biceps, Forearms',
    description: 'Stand holding bar with underhand grip. Curl bar to shoulders by bending elbows. Lower with control. Avoid swinging.',
    searchTerm: SEARCH_TERMS.curl,
  },
  'Dumbbell Curls': {
    muscles: 'Biceps, Forearms',
    description: 'Hold dumbbells at sides, palms forward. Curl weights to shoulders. Can alternate arms or supinate at top for peak contraction.',
    searchTerm: SEARCH_TERMS.curl,
  },
  'Hammer Curls': {
    muscles: 'Biceps, Brachialis, Forearms',
    description: 'Hold dumbbells with neutral grip (palms in). Curl to shoulders. Targets brachialis for arm thickness.',
    searchTerm: SEARCH_TERMS.curl,
  },
  'Bicep Curls': {
    muscles: 'Biceps, Forearms',
    description: 'Same as Dumbbell Curls. Isolate biceps by keeping elbows at sides and avoiding body swing.',
    searchTerm: SEARCH_TERMS.curl,
  },
  'Band Curls': {
    muscles: 'Biceps, Forearms',
    description: 'Stand on band, hold ends. Curl hands to shoulders against resistance. Portable bicep work.',
    searchTerm: SEARCH_TERMS.curl,
  },
  'Barbell Squat': {
    muscles: 'Quads, Glutes, Hamstrings, Core',
    description: 'Bar on upper back, feet shoulder-width. Sit back and down until thighs parallel or below. Drive through heels to stand. Keep chest up.',
    searchTerm: SEARCH_TERMS.squat,
  },
  'Goblet Squat': {
    muscles: 'Quads, Glutes, Core',
    description: 'Hold weight at chest. Squat down, elbows tracking inside knees. Great for learning squat pattern and mobility.',
    searchTerm: SEARCH_TERMS.squat,
  },
  'Front Squat': {
    muscles: 'Quads, Glutes, Core, Upper Back',
    description: 'Bar in front rack position. Squat with upright torso. Emphasizes quads and requires core stability.',
    searchTerm: SEARCH_TERMS.squat,
  },
  'Bodyweight Squat': {
    muscles: 'Quads, Glutes, Core',
    description: 'Feet shoulder-width, arms forward. Sit back and down until thighs parallel. Drive through heels to stand.',
    searchTerm: SEARCH_TERMS.squat,
  },
  'Leg Press': {
    muscles: 'Quads, Glutes, Hamstrings',
    description: 'Feet on platform, shoulder-width. Lower weight by bending knees, then press through heels. Adjust foot position for emphasis.',
    searchTerm: SEARCH_TERMS.squat,
  },
  'Bulgarian Split Squat': {
    muscles: 'Quads, Glutes, Hamstrings',
    description: 'Rear foot elevated on bench. Lower back knee toward floor, front thigh parallel. Drive through front leg. Unilateral leg builder.',
    searchTerm: SEARCH_TERMS.lunge,
  },
  'Lunges': {
    muscles: 'Quads, Glutes, Hamstrings',
    description: 'Step forward, lower back knee toward floor. Both knees ~90°. Push through front leg to return. Can hold dumbbells for added load.',
    searchTerm: SEARCH_TERMS.lunge,
  },
  'Bodyweight Split Squat': {
    muscles: 'Quads, Glutes, Hamstrings',
    description: 'Same as Bulgarian Split Squat without rear elevation, or stationary lunge. Bodyweight only for reps.',
    searchTerm: SEARCH_TERMS.lunge,
  },
  'Leg Curls': {
    muscles: 'Hamstrings',
    description: 'Lying or seated, curl weight toward glutes by bending knees. Squeeze hamstrings at top. Control the negative.',
    searchTerm: SEARCH_TERMS.rdl,
  },
  'Nordic Curls': {
    muscles: 'Hamstrings',
    description: 'Kneel with feet anchored. Lower body forward with control using hamstrings. Eccentric hamstring builder. Progress gradually.',
    searchTerm: SEARCH_TERMS.rdl,
  },
  'Leg Extensions': {
    muscles: 'Quads',
    description: 'Sit at machine, ankles under pad. Extend legs to straighten knees. Isolates quads. Control the descent.',
    searchTerm: SEARCH_TERMS.squat,
  },
  'Sissy Squats': {
    muscles: 'Quads',
    description: 'Lean back while bending knees, keeping hips and knees in line. Bodyweight quad isolation. Requires balance.',
    searchTerm: SEARCH_TERMS.squat,
  },
  'Calf Raises': {
    muscles: 'Calves (Gastrocnemius, Soleus)',
    description: 'Stand on edge of step, lower heels below step. Rise onto toes, squeeze at top. Full range for calf development.',
    searchTerm: SEARCH_TERMS.calf,
  },
  'Seated Calf Raise': {
    muscles: 'Calves (Soleus)',
    description: 'Sit at calf machine, balls of feet on platform. Raise heels by extending ankles. Seated position targets soleus.',
    searchTerm: SEARCH_TERMS.calf,
  },
  'Plank': {
    muscles: 'Core, Shoulders, Glutes',
    description: 'Forearms on floor, body straight from head to heels. Hold position. Brace core, avoid sagging or piking hips.',
    searchTerm: SEARCH_TERMS.plank,
  },
  'Inverted Rows': {
    muscles: 'Lats, Rhomboids, Biceps, Rear Delts',
    description: 'Under bar or TRX, body angled. Pull chest to hands by driving elbows back. Bodyweight row progression.',
    searchTerm: SEARCH_TERMS.pullup,
  },
  'Hanging Leg Raises': {
    muscles: 'Core, Hip Flexors',
    description: 'Hang from bar. Raise legs to parallel or higher by engaging lower abs. Control the descent. Avoid swinging.',
    searchTerm: SEARCH_TERMS.plank,
  },
  'Leg Raises': {
    muscles: 'Core, Hip Flexors',
    description: 'Lie on back or hang. Raise legs toward ceiling using lower abs. Can bend knees to reduce difficulty.',
    searchTerm: SEARCH_TERMS.plank,
  },
}

export function getExerciseInfo(exerciseName) {
  return EXERCISE_LIBRARY[exerciseName] || {
    muscles: 'Multiple muscle groups',
    description: 'Perform with controlled form. Focus on full range of motion and proper technique.',
    searchTerm: 'exercise demonstration',
  }
}
