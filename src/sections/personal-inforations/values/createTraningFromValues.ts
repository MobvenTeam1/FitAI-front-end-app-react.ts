import { PersonalValue } from "./types";

export const trainingHealtIssue: PersonalValue = {
  step: 0,
  name: "healthProblem",
  label: "Bilinen sağlık sorununuz var mı?",
  placeholder: "Hamilelik,hamilelik sonrası, minüsküs yırtığı...",
  selectType: 2,
  rowCount: 10,
  type: "text",
  isOptinal: true,
};

export const trainingType: PersonalValue = {
  step: 1,
  name: "preferredActivities",
  label: "Tercih ettiğiniz spor aktiviteleri nelerdir?",
  selectType: 1,
  options: [
    { value: "0", label: "Hepsi", icon: "select-all" },
    { value: "1", label: "Yoga", icon: "yoga" },
    { value: "2", label: "Fitness", icon: "fitness" },
    { value: "3", label: "Pilates", icon: "plates" },
    { value: "4", label: "Yürüyüş", icon: "walking" },
    { value: "5", label: "Koşu", icon: "running" },
  ],
};

export const trainingRange: PersonalValue = {
  step: 2,
  name: "workoutFrequency",
  label: "Hangi sıklıkla spor yapmak istersiniz?",
  selectType: 0,
  options: [
    { value: "1", label: "Bana önerilen kadar" },
    { value: "2", label: "Haftada 1-2" },
    { value: "3", label: "Haftada 3-4" },
    { value: "4", label: "Her gün" },
  ],
};

export const targetArea: PersonalValue = {
  step: 3,
  name: "focusAreas",
  label: "Hangi bölgelerde çalışmak istersiniz?",
  selectType: 1,
  options: [
    { value: "0", label: "Hepsi", icon: "select-all" },
    { value: "1", label: "Kolar", icon: "arm" },
    { value: "2", label: "Göğüs", icon: "breast" },
    { value: "3", label: "Bel", icon: "waist" },
    { value: "4", label: "Kalça", icon: "hip" },
    { value: "5", label: "Bacaklar", icon: "legs" },
  ],
};
