export const selectType = {
  0: "Single Select",
  1: "Multi Select",
  2: "Input",
  3: "Date",
};

export interface PersonalValue {
  step: number;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  selectType: number;
  options?: PersonalValueOptions[];
  isOptinal?: boolean;
}

export type PersonalValueOptions = {
  value: string;
  label: string;
  icon?: string;
};

// ** first login form values
const gender: PersonalValue = {
  step: 0,
  name: "gender",
  label: "Cinsiyetiniz nedir?",
  selectType: 0,
  options: [
    { value: "1", label: "Erkek", icon: "gender-men" },
    { value: "2", label: "Kadın", icon: "gender-women" },
    { value: "3", label: "Belirtmek istemiyorum", icon: "gender-other" },
  ],
};

const size: PersonalValue = {
  step: 1,
  name: "size",
  label: "Boyunuz kaç? (cm)",
  selectType: 2,
  placeholder: "Lütfen boyunuzu giriniz",
  type: "number",
};

const currentWeight: PersonalValue = {
  step: 2,
  name: "currentWeight",
  label: "Mevcut kilonuz kaç? (kg)",
  selectType: 2,
  placeholder: "Lütfen mevcut kilonuzu giriniz",
  type: "number",
};

const targetWeight: PersonalValue = {
  step: 3,
  name: "targetWeight",
  label: "Hedef kilonuz kaç? (kg)",
  selectType: 2,
  placeholder: "Lütfen hedef kilonuzu giriniz",
  type: "number",
};

const birthDate: PersonalValue = {
  step: 4,
  name: "birthDate",
  label: "Doğum gününüz nedir? (gg.aa.yyyy)",
  selectType: 3,
  placeholder: "Lütfen doğum gününüzü giriniz",
};

const goal: PersonalValue = {
  step: 5,
  name: "goal",
  label: "Hedefleriniz nelerdir?",
  selectType: 0,
  options: [
    { value: "1", label: "Kilo Kaybı", icon: "goal-up_weight" },
    { value: "2", label: "Kilo Alma", icon: "goal-down_weight" },
    { value: "3", label: "Kas Yapma", icon: "goal-body-building" },
    { value: "4", label: "Sağlıklı Yaşam", icon: "goal-fit-life" },
  ],
};

const activity: PersonalValue = {
  step: 6,
  name: "activities",
  label: "Bu uygulamada hangi planları uygulamak istersiniz?",
  selectType: 1,
  options: [
    { value: "1", label: "Hepsi" },
    { value: "2", label: "Kilo Kaybı", icon: "goal-up_weight" },
    { value: "3", label: "Kilo Alma", icon: "goal-down_weight" },
    { value: "4", label: "Kas Yapma", icon: "goal-body-building" },
    { value: "5", label: "Sağlıklı Yaşam", icon: "goal-fit-life" },
  ],
};

// ** create training program values

const trainingHealtIssue: PersonalValue = {
  step: 0,
  name: "trainingHealtIssue",
  label: "Bilinen sağlık sorununuz var mı?",
  placeholder: "Hamilelik,hamilelik sonrası, minüsküs yırtığı...",
  selectType: 2,
  type: "text",
  isOptinal: true,
};

const trainingType: PersonalValue = {
  step: 1,
  name: "trainingType",
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

const trainingRange: PersonalValue = {
  step: 2,
  name: "trainingRange",
  label: "Hangi sıklıkla spor yapmak istersiniz?",
  selectType: 0,
  options: [
    { value: "1", label: "Bana önerilen kadar" },
    { value: "2", label: "Haftada 1-2" },
    { value: "3", label: "Haftada 3-4" },
    { value: "4", label: "Her gün" },
  ],
};

const targetArea: PersonalValue = {
  step: 3,
  name: "targetArea",
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

// ** create nutrition program values

const nutritionHealtIssue: PersonalValue = {
  step: 0,
  name: "nutritionHealtIssue",
  label: "Bilinen sağlık sorununuz var mı?",
  selectType: 0,
  options: [
    { value: "1", label: "Çölyak" },
    { value: "2", label: "Diyabet Tip 2" },
    { value: "3", label: "Diyabet Tip 1" },
    { value: "4", label: "Tansiyon" },
    { value: "4", label: "Alerji / İntölerans" },
  ],
};

const nutritionAllergies: PersonalValue = {
  step: 1,
  name: "nutritionAllergies",
  label: "Hangi yiyeceklere alerjiniz var?",
  placeholder: "Gluten, laktoz...",
  selectType: 2,
  type: "text",
  isOptinal: true,
};

const nutritionDietType: PersonalValue = {
  step: 2,
  name: "nutritionDietType",
  label: "Hangi tip diyet yapmak istersiniz?",
  selectType: 0,
  options: [
    { value: "1", label: "Geleneksel" },
    { value: "2", label: "Vejetaryen" },
    { value: "3", label: "Vegan" },
    { value: "4", label: "Pesketeryan" },
    { value: "5", label: "Ketojenik" },
  ],
};

// ** personal values

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
