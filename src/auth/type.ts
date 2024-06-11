export interface User {
    userName: string
    firstName: string
    lastName: string
    email: string
    gender: string
    height: number
    firstWeight: number
    dateOfBirth: string
    currentWeight: number
    targetWeight: number
    goals: string
    preferredActivities: string
    workoutFrequency: string
    focusAreas: string
    healthProblem: string
    basalMetabolism: number
    dailyKcalGoal: number
    workoutPlan: WorkoutPlan
  }
  
  export interface WorkoutPlan {
    fitnessAntrenman: FitnessAntrenman[]
  }
  
  export interface FitnessAntrenman {
    day: string
    program: Program
  }
  
  export interface Program {
    Yoga?: string
    Squat?: string
    "Push-up"?: string
    "Leg press"?: string
    Plank?: string
    "Biceps curls"?: string
    Pilates?: string
    Deadlift?: string
    "Bench press"?: string
    "Tricep dips"?: string
    "Russian twist"?: string
    "Shoulder press"?: string
    Fitness?: string
    Lunges?: string
    "Pull-up"?: string
    "Chest fly"?: string
    "Side plank"?: string
    "Tricep extensions"?: string
  }
  