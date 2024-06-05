export interface ProfileContextValues {
  selectedTab: TabValue;
  handleChangeTab: (value: TabValue) => void;
  tabValues: TabValue[];
  outletSectionValues: OutletSectionValue[];
}

export type TabValue = {
  id: number;
  title: string;
  value?: string;
};

export type OutletSectionValue = {
  id: number;
  title: string;
  section: React.ReactNode;
};

export type TrackCardValue = {
    title: string;
    icon: string;
    type: string;
    infoText?: string;
}