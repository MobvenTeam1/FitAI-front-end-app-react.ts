import React, { useContext } from "react";
import { CustomSearchInput } from "../../../../components/customs/custom-search-input";
import { CustomTabs } from "../../../../components/customs/custom-tabs";
import { AddOptionCard } from "../../../../components/AddOptionCard";

import { PersonalProgramView } from "../../home/views/PersonalProgramView";
import { PersonalPropram } from "../../home/context/types";
import { NutritionAddContext } from "../context/NutritionAddContext";

export const NutritionAddView: React.FC = () => {
  const {
    filteredOptions,
    handleSearch,
    tabValues,
    selectedTab,
    handleChangeTab,
  } = useContext(NutritionAddContext);

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-8">
        <div className="flex flex-col gap-10">
          <CustomSearchInput onSearch={handleSearch} />
          <CustomTabs
            values={tabValues}
            selectedTab={selectedTab}
            onClick={handleChangeTab}
          />
          <div className="flex items-center justify-between w-full">
            <p className="font-bold text-lg">Sonuçlar</p>
            <p className="text-gray-500">
              {filteredOptions.length} sonuç bulundu{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {filteredOptions.map((option, index) => (
              <AddOptionCard key={index + option.title} option={option} />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <PersonalProgramView
          values={personalNutritionPrograms}
          header="Kişiselleştirilmiş Beslenme Planlanın"
        />
      </div>
    </div>
  );
};

const personalNutritionPrograms: PersonalPropram[] = [
  {
    programId: 1,
    programTitle: "Kahvaltı",
    img: "breakfast",
    duration: "Hemen",
    caloriesBurned: "95 kcal",
    options: {
      optionTitle: "Besinler",
      optionDetails: [
        {
          optionId: 1,
          optionImage: "food4",
          optionTitle: "Badem",
          optionSubtitle: "5 tane, 75 kcal",
          type: "nutrition",
        },
        {
          optionId: 2,
          optionImage: "food5",
          optionTitle: "Ceviz İçi",
          optionSubtitle: "3 tane, 20 kcal",
          type: "nutrition",
        },
      ],
    },
  },
  {
    programId: 2,
    programTitle: "Ara Öğün",
    img: "snack",
    duration: "Günde 3 kez",
    caloriesBurned: "2600 kcal",
    options: {
      optionTitle: "Yemekler",
      optionDetails: [
        {
          optionId: 1,
          optionImage: "food1",
          optionTitle: "Tavuk Pilav",
          optionSubtitle: "her porsiyon, 500 kcal",
          type: "nutrition",
        },
        {
          optionId: 2,
          optionImage: "food2",
          optionTitle: "Yumurta",
          optionSubtitle: "her adet, 70 kcal",
          type: "nutrition",
        },
        {
          optionId: 3,
          optionImage: "food3",
          optionTitle: "Salata",
          optionSubtitle: "her porsiyon, 100 kcal",
          type: "nutrition",
        },
      ],
    },
  },
];
