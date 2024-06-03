import React, { useState } from "react";
import { CustomSearchInput } from "../../../../components/customs/custom-search-input";
import { CustomTabs } from "../../../../components/customs/custom-tabs";
import { AddOptionCard } from "../../../../components/AddOptionCard";

type TabValue = {
  id: number;
  title: string;
};

export const WorkoutAddView: React.FC = () => {
  const tabValues = [
    { id: 1, title: "Geçmiş", value: "old"},
    { id: 2, title: "Favoriler", value: "favorite" },
  ];

  const [selectedTab, setSelectedTab] = useState<TabValue>(tabValues[0]);

  const handleChangeTab = (value: TabValue) => {
    setSelectedTab(value);
  };

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-8">
        <div className="flex flex-col gap-10">
          <CustomSearchInput />
          <CustomTabs
            values={tabValues}
            selectedTab={selectedTab}
            onClick={handleChangeTab}
          />
          <div className="flex flex-col gap-2">
            {tempOptionValues.map((option, index) => (
              <AddOptionCard key={index + option.title} option={option} />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-4">x</div>
    </div>
  );
};

interface Option {
  id: number;
  title: string;
  img: string;
  subtitle: string;
  type: string;
}

const tempOptionValues: Option[] = [
  {
    id: 1,
    title: "Yürüyüş",
    img: "walking",
    subtitle: "Düşük Tempo - 1 saatte 65 kcal",
    type: "favorite",
  },
  {
    id: 2,
    title: "Koşu",
    img: "running",
    subtitle: "1 saatte 178 kcal",
    type: "old",
  },
  {
    id: 3,
    title: "Bisiklet",
    img: "cycling",
    subtitle: "1 saatte 200 kcal",
    type: "old",
  },
  {
    id: 4,
    title: "Yüzme",
    img: "swimming",
    subtitle: "1 saatte 300 kcal",
    type: "favorite",
  },
  {
    id: 5,
    title: "Fitness",
    img: "fitness",
    subtitle: "1 saatte 400 kcal",
    type: "old",
  },
  {
    id: 6,
    title: "Yoga",
    img: "yoga",
    subtitle: "1 saatte 150 kcal",
    type: "favorite",
  },
  {
    id: 7,
    title: "Pilates",
    img: "pilates",
    subtitle: "1 saatte 200 kcal",
    type: "old",
  },
  {
    id: 8,
    title: "Crossfit",
    img: "crossfit",
    subtitle: "1 saatte 500 kcal",
    type: "favorite",
  },
  {
    id: 9,
    title: "Zumba",
    img: "zumba",
    subtitle: "1 saatte 300 kcal",
    type: "old",
  },
  {
    id: 10,
    title: "Basketbol",
    img: "basketball",
    subtitle: "1 saatte 400 kcal",
    type: "favorite",
  },
];
