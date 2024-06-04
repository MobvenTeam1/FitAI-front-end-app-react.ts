import React, { createContext, useState } from "react";
import {
  NutritionAddContextValues,
  NutritionOptionValue,
  TabValue,
} from "./types";

// Create the context with default values
export const NutritionAddContext = createContext<NutritionAddContextValues>({
  nutritionOptionValues: [],
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
export const NutritionAddContextProvider: React.FC<ChildrenProps> = ({
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

  const nutritionOptionValues: NutritionOptionValue[] = [
    {
      id: 1,
      title: "Fruits",
      img: "snack1",
      subtitle: "1 serving - 60 kcal",
      type: "favorite",
    },
    {
      id: 2,
      title: "Vegetables",
      img: "snack2",
      subtitle: "1 serving - 25 kcal",
      type: "old",
    },
    {
      id: 3,
      title: "Grains",
      img: "food1",
      subtitle: "1 serving - 200 kcal",
      type: "old",
    },
    {
      id: 4,
      title: "Protein",
      img: "food2",
      subtitle: "1 serving - 150 kcal",
      type: "favorite",
    },
    {
      id: 5,
      title: "Dairy",
      img: "food3",
      subtitle: "1 serving - 120 kcal",
      type: "old",
    },
    {
      id: 6,
      title: "Fats",
      img: "food4",
      subtitle: "1 serving - 45 kcal",
      type: "favorite",
    },
    {
      id: 7,
      title: "Sweets",
      img: "food5",
      subtitle: "1 serving - 150 kcal",
      type: "old",
    },
    {
      id: 8,
      title: "Beverages",
      img: "snack1",
      subtitle: "1 serving - 100 kcal",
      type: "favorite",
    },
    {
      id: 9,
      title: "Snacks",
      img: "snack2",
      subtitle: "1 serving - 150 kcal",
      type: "old",
    },
    {
      id: 10,
      title: "Fast Food",
      img: "food4",
      subtitle: "1 serving - 500 kcal",
      type: "favorite",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredOptions = nutritionOptionValues
    .filter((option) => option.type === selectedTab.value)
    .filter((option) =>
      option.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <NutritionAddContext.Provider
      value={{
        nutritionOptionValues,
        tabValues,
        selectedTab,
        handleChangeTab,
        filteredOptions,
        handleSearch,
      }}
    >
      {children}
    </NutritionAddContext.Provider>
  );
};
