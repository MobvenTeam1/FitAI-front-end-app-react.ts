import React, { useContext } from "react";
import { CustomSearchInput } from "../../../../components/customs/custom-search-input";
import { CustomTabs } from "../../../../components/customs/custom-tabs";
import { AddOptionCard } from "../../../../components/AddOptionCard";
import { WorkoutAddContext } from "../context/WorkoutAddContext";
import { PersonalProgramView } from "../../home/views/PersonalProgramView";
import { PersonalPropram } from "../../home/context/types";
import ResultNotFound from "../../../../components/ResultNotFound";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RHFTextfield } from "../../../personal-inforations/rhf-components/RHFTextfield";
import { CustomButton } from "../../../../components/customs/custom-button";

export const WorkoutAddView: React.FC = () => {
  const {
    filteredOptions,
    handleSearch,
    tabValues,
    selectedTab,
    handleChangeTab,
    updateTypeById,
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
          <div className="flex items-center justify-between w-full">
            <p className="font-bold text-lg">Sonuçlar</p>
            <p className="text-gray-500">
              {filteredOptions.length} sonuç bulundu{" "}
            </p>
          </div>
          {filteredOptions.length === 0 ? (
            <ResultNotFound
              buttonLabel="Antreman Ekle"
              message="Aradığınız kriterlere uygun antreman bulunamadı."
            />
          ) : null}
          <div className="flex flex-col gap-2">
            {filteredOptions.map((option, index) => (
              <AddOptionCard
                key={index + option.title}
                option={option}
                updateTypeById={updateTypeById}
                modalForm={<OpenModalForm sendId={option.id} />}
              />
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

type TrainingRangeTime = {
  foodRande: string;
};

const schema = yup.object().shape({
  foodRande: yup.string().required("Zaman zorunlu"),
});

const defaultValues: TrainingRangeTime = {
  foodRande: "",
};

type OpenModalFormProps = {
  sendId: number;
};

const OpenModalForm: React.FC<OpenModalFormProps> = ({ sendId }) => {
  const form = useForm<TrainingRangeTime>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = form;

  const onSubmit = (data: TrainingRangeTime) => {
    console.log(data, sendId);
  };
  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <p className="font-bold text-gray-900 text-3xl">
          Öğünün porsiyonundan ne kadar kullandınız ?
        </p>
        <RHFTextfield
          name="foodRande"
          type="number"
          placeholder="Örn: 1 kaşık 180 kcal"
        />

        <CustomButton type="submit" label="Antremanı Tanımla" />
      </form>
    </FormProvider>
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
