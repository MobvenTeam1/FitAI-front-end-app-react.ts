import React, { useContext } from "react";
import { CustomSearchInput } from "../../../../components/customs/custom-search-input";
import { CustomTabs } from "../../../../components/customs/custom-tabs";
import { AddOptionCard } from "../../../../components/AddOptionCard";

import { PersonalProgramView } from "../../home/views/PersonalProgramView";
import { PersonalPropram } from "../../home/context/types";
import { NutritionAddContext } from "../context/NutritionAddContext";
import ResultNotFound from "../../../../components/ResultNotFound";
import SvgColor from "../../../../components/svg-color";

import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RHFTextfield } from "../../../personal-inforations/rhf-components/RHFTextfield";
import { CustomButton } from "../../../../components/customs/custom-button";

export const NutritionAddView: React.FC = () => {
  const {
    filteredOptions,
    handleSearch,
    tabValues,
    selectedTab,
    handleChangeTab,
    updateTypeById,
  } = useContext(NutritionAddContext);

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-8">
        <div className="flex flex-col gap-10">
          <CustomSearchInput onSearch={handleSearch} />
          <ScanOptions />
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
              buttonLabel="Beslneme Ekle"
              message="Aradığınız kriterlere uygun beslenme bulunamadı."
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
          values={personalNutritionPrograms}
          header="Kişiselleştirilmiş Beslenme Planlanın"
        />
      </div>
    </div>
  );
};

const ScanOptions = () => (
  <div className="flex items-center gap-3">
    <ScanOption icon="/icons/ic_scan-nutrition.svg" label="Besin Tara" />
    <ScanOption icon="/icons/ic_scan-barcode.svg" label="Barkod Tara" />
  </div>
);

interface ScanOptionProps {
  icon: string;
  label: string;
}

const ScanOption: React.FC<ScanOptionProps> = ({ icon, label }) => (
  <div className="shadow rounded-xl border border-gray-50 flex items-center justify-center w-full">
    <div className="p-5 flex flex-col gap-3 items-center justify-center text-gray-400">
      <SvgColor src={icon} width={34} height={34} />
      <p className="text-base font-semibold">{label}</p>
    </div>
  </div>
);

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

        <CustomButton type="submit" label="Öğünü Tanımla" />
      </form>
    </FormProvider>
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
