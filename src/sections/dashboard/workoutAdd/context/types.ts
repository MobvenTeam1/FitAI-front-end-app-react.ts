export interface WorkoutAddContextValues {
  workoutOptionValues: WorkoutOptionValue[];
  selectedTab: TabValue;
  handleChangeTab: (value: TabValue) => void;
  tabValues: TabValue[];
  filteredOptions: WorkoutOptionValue[];
  handleSearch: (query: string) => void;
}

export interface WorkoutOptionValue {
  id: number;
  title: string;
  img: string;
  subtitle: string;
  type: string;
}

export type TabValue = {
  id: number;
  title: string;
  value: string;
};
