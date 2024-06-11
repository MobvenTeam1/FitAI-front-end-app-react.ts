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
import { RHFSubmitButton } from "../../../components/hook-form/RHFSubmitButton";
import { HomeContext } from "../../dashboard/home/context/HomeContext";

export type CreateWorkoutPlanValues = {
  healthProblem?: string | null | undefined;
  preferredActivities: Array<string | undefined>;
  workoutFrequency: string;
  focusAreas: Array<string | undefined>;
};

export type CreateWorkoutPlanValuesSend = {
  healthProblem?: string | null | undefined;
  preferredActivities: string;
  workoutFrequency: string;
  focusAreas: string;
};

const schema = yup.object().shape({
  healthProblem: yup.string().nullable(),
  preferredActivities: yup
    .array()
    .of(yup.string())
    .required()
    .min(1, "Antreman tipi seçiniz"),
  workoutFrequency: yup.string().required("Antreman sıklığı seçiniz"),
  focusAreas: yup
    .array()
    .of(yup.string())
    .required()
    .min(1, "Antreman hedefi seçiniz"),
});

const defaultValues: CreateWorkoutPlanValues = {
  healthProblem: "",
  preferredActivities: [],
  workoutFrequency: "",
  focusAreas: [],
};

type CreateTrainingProgramFormProps = {
  handleClose?: () => void;
};

export const CreateTrainingProgramForm: React.FC<
  CreateTrainingProgramFormProps
> = () => {
  const { axiosQueryVariables } = useContext(HomeContext);
  const queryVariables = axiosQueryVariables.createAiWorkoutRequest;
  const { step, forwardStep } = useContext(PersonalInformationsContext);
  const form = useForm<CreateWorkoutPlanValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, trigger } = form;
  const showStep = CreateTrainingProgramValues.find(
    (value) => value.step === step
  );

  const isLastValue = showStep?.step === CreateTrainingProgramValues.length - 1;

  const handleNext = async () => {
    if (showStep) {
      const isValid = await trigger(
        showStep.name as keyof CreateWorkoutPlanValues
      );
      //   console.log(isValid);
      if (isValid && !isLastValue) {
        forwardStep();
      }
    }
  };

  const onSubmit = (data: CreateWorkoutPlanValues) => {
    const { preferredActivities, focusAreas, ...rest } = data;

    const sendPreferredActivities = preferredActivities.join("-");
    const sendFocusAreas = focusAreas.join("-");

    const sendeData = {
      ...rest,
      preferredActivities: sendPreferredActivities,
      focusAreas: sendFocusAreas,
    };
    
    queryVariables.mutate(sendeData);
  };

  return (
    <FormProvider {...form}>
      <form
        className="h-full flex flex-col gap-6 p-1"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Stepper values={CreateTrainingProgramValues} />

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

            {isLastValue ? (
              <RHFSubmitButton
                label="Oluştur"
                isLoading={queryVariables.isLoading}
              />
            ) : (
              <CustomButton onClick={handleNext} type="button" label="İlerle" />
            )}
          </div>
        </div>

        {/* <hr />
        <RHFFormValues /> */}
      </form>
    </FormProvider>
  );
};
