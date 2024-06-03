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
  nutritionHealtIssue: yup.string().required("Sağlık sorununuzu belirtiniz."),
  nutritionAllergies: yup.string().nullable(),
  nutritionDietType: yup.string().required("Diyet tipinizi belirtiniz."),
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
        className="h-full flex flex-col gap-6 p-1"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Stepper values={CreateNutritionProgramValues} />

        <div className="text-4xl font-bold mb-4">{showStep?.label}</div>
        <div className="h-full flex flex-col justify-between gap-6">
          {showStep && renderFormElement(showStep)}
          <div className="flex flex-col gap-2">
            {showStep && showStep.isOptinal && (
              <CustomButton
                onClick={handleNext}
                type="button"
                label="Yok / Belirtmek İstemiyorum"
                variant="outlined"
              />
            )}
            <CustomButton onClick={handleNext} type="button" label="Sonraki" />
          </div>
        </div>

        {/* <hr />
        <RHFFormValues /> */}
      </form>
    </FormProvider>
  );
};
