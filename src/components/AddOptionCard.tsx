import React, { useState } from "react";
import SvgColor from "./svg-color";
import { CustomModal } from "./customs/custom-modal";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CustomButton } from "./customs/custom-button";
import { RHFTextfield } from "../sections/personal-inforations/rhf-components/RHFTextfield";

type Props = {
  option: Option;
};

interface Option {
  id: number;
  title: string;
  img: string;
  subtitle: string;
  type: string;
}

type TrainingRangeTime = {
  timeRange: string;
};

const schema = yup.object().shape({
  timeRange: yup.string().required("Zaman zorunlu"),
});

const defaultValues: TrainingRangeTime = {
  timeRange: "",
};

export const AddOptionCard: React.FC<Props> = ({ option }) => {
  const form = useForm<TrainingRangeTime>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = form;

  const onSubmit = (data: TrainingRangeTime) => {
    console.log(data);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-8 py-4 shadow rounded-xl border border-gray-50">
        <div className="flex items-center gap-2">
          <div className="bg-black-100 rounded-xl h-full p-2 flex items-center justify-center">
            <SvgColor
              src={`/icons/ic_${option.img}.svg`}
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base">{option.title}</span>
            <span className="text-gray-300 text-sm">{option.subtitle}</span>
          </div>
        </div>
        <div
          onClick={handleOpen}
          className="bg-black-100 rounded-full p-2 flex items-center justify-center cursor-pointer text-gray-900"
        >
          <SvgColor src="/icons/ic_added.svg" width={14} height={14} />
        </div>
      </div>
      <CustomModal isOpen={isOpen} onClose={handleClose}>
        <FormProvider {...form}>
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <p className="font-bold text-gray-900 text-3xl">
              Egzersizinizi kaç dakika yaptınız?{" "}
            </p>
            <RHFTextfield
              name="timeRange"
              type="number"
              placeholder="Örn: 30 dakika"
            />

            <CustomButton type="submit" label="Tamamla" />
          </form>
        </FormProvider>
      </CustomModal>
    </>
  );
};
