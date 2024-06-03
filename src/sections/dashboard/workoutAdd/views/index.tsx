import React, { useContext } from "react";
import { CustomSearchInput } from "../../../../components/customs/custom-search-input";
import { CustomTabs } from "../../../../components/customs/custom-tabs";
import { AddOptionCard } from "../../../../components/AddOptionCard";
import { WorkoutAddContext } from "../context/WorkoutAddContext";
import { PersonalProgramView } from "../../home/views/PersonalProgramView";
import { PersonalPropram } from "../../home/context/types";

export const WorkoutAddView: React.FC = () => {
  const {
    filteredOptions,
    handleSearch,
    tabValues,
    selectedTab,
    handleChangeTab,
  } = useContext(WorkoutAddContext);

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
          <div className="flex flex-col gap-2">
            {filteredOptions.map((option, index) => (
              <AddOptionCard key={index + option.title} option={option} />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <PersonalProgramView
          values={personalTrainingPrograms}
          header="Kişiselleştirilmiş Antrenman Planlanın"
        />
      </div>
    </div>
  );
};

const personalTrainingPrograms: PersonalPropram[] = [
  {
    programId: 1,
    programTitle: "Yoga",
    img: "personal-training",
    duration: "60 dakika",
    caloriesBurned: "100 kcal",
    options: {
      optionTitle: "Poses",
      optionDetails: [
        {
          optionId: 1,
          optionImage: "walking",
          optionTitle: "Sun Salutation",
          optionSubtitle: "Mat",
          type: "training",
        },
        {
          optionId: 2,
          optionImage: "walk",
          optionTitle: "Tree Pose",
          optionSubtitle: "Mat",
          type: "training",
        },
        {
          optionId: 3,
          optionImage: "walk-reverse",
          optionTitle: "Downward Dog",
          optionSubtitle: "Mat",
          type: "training",
        },
      ],
    },
  },
  {
    programId: 2,
    programTitle: "Cardio",
    img: "doing-yoga",
    duration: "30 minutes",
    caloriesBurned: "300 kcal",
    options: {
      optionTitle: "Exercises",
      optionDetails: [
        {
          optionId: 1,
          optionImage: "walking",
          optionTitle: "Jumping Jacks",
          optionSubtitle: "No equipment",
          type: "training",
        },
        {
          optionId: 2,
          optionImage: "walk",
          optionTitle: "Burpees",
          optionSubtitle: "No equipment",
          type: "training",
        },
        {
          optionId: 3,
          optionImage: "walk-reverse",
          optionTitle: "Mountain Climbers",
          optionSubtitle: "No equipment",
          type: "training",
        },
      ],
    },
  },
];
