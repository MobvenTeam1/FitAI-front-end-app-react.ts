import React, { useContext } from "react";

import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalInformationsContext } from "../context/PersonalInformationsContext";
import { CreateTrainingProgramValues } from "../values";
// import { RHFFormValues } from "../../../components/hook-form/RHFFormValues";
import { renderFormElement } from "../rhf-components/renderFormElement";
import { Stepper } from "../components/Stepper";
import { CustomButton } from "../../../components/customs/custom-button";

type PersonalFormValues = {
  trainingHealtIssue?: string | null | undefined;
  trainingType: Array<string | undefined>;
  trainingRange: string;
  targetArea: Array<string | undefined>;
};

const schema = yup.object().shape({
  trainingHealtIssue: yup.string().nullable(),
  trainingType: yup
    .array()
    .of(yup.string())
    .required()
    .min(1, "trainingType array cannot be empty"),
  trainingRange: yup.string().required(),
  targetArea: yup
    .array()
    .of(yup.string())
    .required()
    .min(1, "targetArea array cannot be empty"),
});

const defaultValues: PersonalFormValues = {
  trainingHealtIssue: "",
  trainingType: [],
  trainingRange: "",
  targetArea: [],
};

export const CreateTrainingProgramForm: React.FC = () => {
  const { step, forwardStep } = useContext(PersonalInformationsContext);
  const form = useForm<PersonalFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, trigger } = form;
  const showStep = CreateTrainingProgramValues.find(
    (value) => value.step === step
  );

  const handleNext = async () => {
    if (showStep) {
      const isValid = await trigger(showStep.name as keyof PersonalFormValues);
      //   console.log(isValid);
      if (isValid && showStep.step !== CreateTrainingProgramValues.length - 1) {
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
        <Stepper values={CreateTrainingProgramValues} />

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
