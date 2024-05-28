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
}

export type PersonalValueOptions = {
  value: string;
  label: string;
  icon?: string;
};

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

export const FirstLoginFormValues: PersonalValue[] = [
  gender,
  size,
  currentWeight,
  targetWeight,
  birthDate,
  goal
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
