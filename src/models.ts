export type Mood = 'Great' | 'Good' | 'Okay' | 'Tough';

export interface PlannerExercise {
  id: number;
  order: number;
  name: string;
  sets: number;
  reps: number;
  weight: string;
  muscleGroup: string;
}

export interface PlannerDay {
  id: string;
  label: string;
  exercises: PlannerExercise[];
}

export interface DiaryEntry {
  id: number;
  dateLabel: string;
  mood: Mood;
  text: string;
}

export const DAYS: PlannerDay[] = [
  {
    id: 'Mon',
    label: 'Monday',
    exercises: [
      { id: 1, order: 1, name: 'Bench Press', sets: 4, reps: 10, weight: '135 lbs', muscleGroup: 'Chest' },
      { id: 2, order: 2, name: 'Push-ups',   sets: 3, reps: 15, weight: '', muscleGroup: 'Chest' },
    ],
  },
  { id: 'Tue', label: 'Tuesday',   exercises: [] },
  { id: 'Wed', label: 'Wednesday', exercises: [] },
  { id: 'Thu', label: 'Thursday',  exercises: [] },
  { id: 'Fri', label: 'Friday',    exercises: [] },
  { id: 'Sat', label: 'Saturday',  exercises: [] },
  { id: 'Sun', label: 'Sunday',    exercises: [] },
];

export const MUSCLE_GROUPS = [
  'Chest',
  'Back',
  'Legs',
  'Shoulders',
  'Arms',
  'Core',
  'Cardio',
];

export const INITIAL_DIARY: DiaryEntry[] = [
  {
    id: 1,
    dateLabel: 'Wednesday, November 19, 2025',
    mood: 'Great',
    text:
      'Today was an amazing workout day! I pushed through my limits and felt incredibly energized afterwards. My confidence is growing with each session.',
  },
  {
    id: 2,
    dateLabel: 'Tuesday, November 18, 2025',
    mood: 'Good',
    text:
      'Solid workout today. Had a bit of trouble with motivation in the morning but once I got started, everything flowed well.',
  },
];
