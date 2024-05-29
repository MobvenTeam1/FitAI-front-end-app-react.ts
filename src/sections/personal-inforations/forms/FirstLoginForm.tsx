import React, { useContext } from "react";

import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalInformationsContext } from "../context/PersonalInformationsContext";
import { FirstLoginFormValues } from "../values";
// import { RHFFormValues } from "../../../components/hook-form/RHFFormValues";
import { renderFormElement } from "../rhf-components/renderFormElement";
import { Stepper } from "../components/Stepper";
import { CustomButton } from "../../../components/customs/custom-button";

type PersonalFormValues = {
  gender: string;
  size: string;
  currentWeight: string;
  targetWeight: string;
  birthDate: string;
  goal: string;
};

const schema = yup.object().shape({
  gender: yup.string().required("Cinsiyet zorunlu"),
  size: yup.string().required("Boy zorunlu"),
  currentWeight: yup.string().required("Kilo zorunlu"),
  targetWeight: yup.string().required("Hedef kilo zorunlu"),
  birthDate: yup.string().required("Doğum tarihi zorunlu"),
  goal: yup.string().required("Hedef zorunlu"),
});

const defaultValues: PersonalFormValues = {
  gender: "",
  size: "",
  currentWeight: "",
  targetWeight: "",
  birthDate: "",
  goal: "",
};

export const FirstLoginForm: React.FC = () => {
  const { step, forwardStep } = useContext(PersonalInformationsContext);
  const form = useForm<PersonalFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, trigger } = form;
  const showStep = FirstLoginFormValues.find((value) => value.step === step);

  const handleNext = async () => {
    if (showStep) {
      const isValid = await trigger(showStep.name as keyof PersonalFormValues);
      console.log(isValid);
      if (isValid && showStep.step !== FirstLoginFormValues.length - 1) {
        forwardStep();
      }
    }
  };

  const onSubmit = (data: PersonalFormValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form
        className="w-full pr-20 pl-28 flex flex-col gap-9 min-h-screen mt-24 max-sm:px-8 max-sm:mt-16"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Stepper values={FirstLoginFormValues} />

        <div className="text-4xl font-bold pb-7">{showStep?.label}</div>
        {showStep && renderFormElement(showStep)}
        <CustomButton onClick={handleNext} type="button" label="Sonraki" />

        {/* <hr />
        <RHFFormValues /> */}
      </form>
    </FormProvider>
  );
};
