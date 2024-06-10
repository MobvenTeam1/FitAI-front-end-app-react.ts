export interface NutritionAddContextValues {
  nutritionOptionValues: NutritionOptionValue[];
  selectedTab: TabValue;
  handleChangeTab: (value: TabValue) => void;
  tabValues: TabValue[];
  filteredOptions: NutritionOptionValue[];
  handleSearch: (query: string) => void;
  updateTypeById: (id: number) => void;
}

export interface NutritionOptionValue {
  id: number;
  title: string;
  img: string;
  subtitle: string;
  type: string;
}

export type TabValue = {
  id: number;
  title: string;
  value?: string;
};
