import React, { useContext } from "react";

import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalInformationsContext } from "../context/PersonalInformationsContext";
import { CreateNutritionProgramValues } from "../values";
// import { RHFFormValues } from "../../../components/hook-form/RHFFormValues";
import { renderFormElement } from "../rhf-components/renderFormElement";
import { Stepper } from "../components/Stepper";
import { CustomButton } from "../../../components/customs/custom-button";

type PersonalFormValues = {
  nutritionHealtIssue: string;
  nutritionAllergies?: string | null | undefined;
  nutritionDietType: string;
};

const schema = yup.object().shape({
  nutritionHealtIssue: yup.string().required(),
  nutritionAllergies: yup.string().nullable(),
  nutritionDietType: yup.string().required(),
});

const defaultValues: PersonalFormValues = {
  nutritionHealtIssue: "",
  nutritionAllergies: "",
  nutritionDietType: "",
};

export const CreateNutritionProgramForm: React.FC = () => {
  const { step, forwardStep } = useContext(PersonalInformationsContext);
  const form = useForm<PersonalFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, trigger } = form;
  const showStep = CreateNutritionProgramValues.find(
    (value) => value.step === step
  );

  const handleNext = async () => {
    if (showStep) {
      const isValid = await trigger(showStep.name as keyof PersonalFormValues);
      //   console.log(isValid);
      if (
        isValid &&
        showStep.step !== CreateNutritionProgramValues.length - 1
      ) {
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
        className="px-4 w-full py-6 flex flex-col gap-9"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Stepper values={CreateNutritionProgramValues} />

        <div className="text-4xl font-bold pb-7">{showStep?.label}</div>
        {showStep && renderFormElement(showStep)}
        {showStep && showStep.isOptinal && (
          <CustomButton
            onClick={handleNext}
            type="button"
            label="Yok / Belirtmek İstemiyorum"
            variant="outlined"
          />
        )}
        <CustomButton onClick={handleNext} type="button" label="Sonraki" />

        {/* <hr />
        <RHFFormValues /> */}
      </form>
    </FormProvider>
  );
};
