import { PersonalValue } from "./types";

// ** first login form values
export const gender: PersonalValue = {
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

export const size: PersonalValue = {
  step: 1,
  name: "height",
  label: "Boyunuz kaç?",
  selectType: 2,
  placeholder: "Lütfen boyunuzu giriniz (cm)",
  type: "number",
};

export const currentWeight: PersonalValue = {
  step: 2,
  name: "firstWeight",
  label: "Mevcut kilonuz kaç?",
  selectType: 2,
  placeholder: "Lütfen mevcut kilonuzu giriniz(kg)",
  type: "number",
};

export const targetWeight: PersonalValue = {
  step: 3,
  name: "targetWeight",
  label: "Hedef kilonuz kaç?",
  selectType: 2,
  placeholder: "Lütfen hedef kilonuzu giriniz (kg)",
  type: "number",
};

export const birthDate: PersonalValue = {
  step: 4,
  name: "dateOfBirth",
  label: "Doğum gününüz nedir?",
  selectType: 3,
  placeholder: "Lütfen doğum gününüzü giriniz",
};

export const goal: PersonalValue = {
  step: 5,
  name: "goals",
  label: "Hedefleriniz nelerdir?",
  selectType: 0,
  options: [
    { value: "1", label: "Kilo Kaybı", icon: "goal-up_weight" },
    { value: "2", label: "Kilo Alma", icon: "goal-down_weight" },
    { value: "3", label: "Kas Yapma", icon: "goal-body-building" },
    { value: "4", label: "Sağlıklı Yaşam", icon: "goal-fit-life" },
  ],
};

export const activity: PersonalValue = {
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
