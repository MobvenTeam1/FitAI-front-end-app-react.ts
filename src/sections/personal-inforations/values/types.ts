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
  rowCount?: number | null;
  isOptinal?: boolean;
}

export type PersonalValueOptions = {
  value: string;
  label: string;
  icon?: string;
};
