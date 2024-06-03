// ** create nutrition program values

import { PersonalValue } from "./types";

export const nutritionHealtIssue: PersonalValue = {
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

export const nutritionAllergies: PersonalValue = {
  step: 1,
  name: "nutritionAllergies",
  label: "Hangi yiyeceklere alerjiniz var?",
  placeholder: "Gluten, laktoz...",
  selectType: 2,
  type: "text",
  isOptinal: true,
};

export const nutritionDietType: PersonalValue = {
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
