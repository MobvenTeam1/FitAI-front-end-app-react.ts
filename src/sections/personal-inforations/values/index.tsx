// ** create training program values

import {
  nutritionAllergies,
  nutritionDietType,
  nutritionHealtIssue,
} from "./createNutritionFormValues";
import {
  targetArea,
  trainingHealtIssue,
  trainingRange,
  trainingType,
} from "./createTraningFromValues";
import {
  activity,
  birthDate,
  currentWeight,
  gender,
  goal,
  size,
  targetWeight,
} from "./firstLoginFormValues";
import { PersonalValue } from "./types";

export const FirstLoginFormValues: PersonalValue[] = [
  gender,
  size,
  currentWeight,
  targetWeight,
  birthDate,
  goal,
];

export const CreateTrainingProgramValues: PersonalValue[] = [
  trainingHealtIssue,
  trainingType,
  trainingRange,
  targetArea,
];

export const CreateNutritionProgramValues: PersonalValue[] = [
  nutritionHealtIssue,
  nutritionAllergies,
  nutritionDietType,
];

export const PersonalValues: PersonalValue[] = [
  gender,
  size,
  currentWeight,
  targetWeight,
  birthDate,
  goal,
  activity,
];
