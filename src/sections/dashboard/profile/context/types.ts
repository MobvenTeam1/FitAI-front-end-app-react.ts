export interface ProfileContextValues {
  selectedTab: TabValue;
  handleChangeTab: (value: TabValue) => void;
  tabValues: TabValue[];
}

export type TabValue = {
  id: number;
  title: string;
  value?: string;
};
