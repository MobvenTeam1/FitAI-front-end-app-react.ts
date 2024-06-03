import React, { createContext, useState } from "react";
import { TabValue, WorkoutAddContextValues, WorkoutOptionValue } from "./types";

// Create the context with default values
export const WorkoutAddContext = createContext<WorkoutAddContextValues>({
  workoutOptionValues: [],
  selectedTab: { id: 0, title: "", value: "" },
  handleChangeTab: () => {},
  tabValues: [],
  filteredOptions: [],
  handleSearch: () => {},
});

// Define the properties for the provider component
interface ChildrenProps {
  children: React.ReactNode;
}

// Create the provider component
export const WorkoutAddContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {

  const tabValues: TabValue[] = [
    { id: 1, title: "Geçmiş", value: "old" },
    { id: 2, title: "Favoriler", value: "favorite" },
  ];

  const [selectedTab, setSelectedTab] = useState<TabValue>(tabValues[0]);

  const handleChangeTab = (value: TabValue) => {
    setSelectedTab(value);
  };

  const workoutOptionValues: WorkoutOptionValue[] = [
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

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredOptions = workoutOptionValues
    .filter((option) => option.type === selectedTab.value)
    .filter((option) =>
      option.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  

  return (
    <WorkoutAddContext.Provider
      value={{
        workoutOptionValues,
        tabValues,
        selectedTab,
        handleChangeTab,
        filteredOptions,
        handleSearch
      }}
    >
      {children}
    </WorkoutAddContext.Provider>
  );
};
