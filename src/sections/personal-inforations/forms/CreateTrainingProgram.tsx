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
    .min(1, "Antreman tipi seçiniz"),
  trainingRange: yup.string().required("Antreman sıklığı seçiniz"),
  targetArea: yup
    .array()
    .of(yup.string())
    .required()
    .min(1, "Antreman hedefi seçiniz"),
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

  const isLastValue = showStep?.step === CreateTrainingProgramValues.length - 1;

  const handleNext = async () => {
    if (showStep) {
      const isValid = await trigger(showStep.name as keyof PersonalFormValues);
      //   console.log(isValid);
      if (isValid && !isLastValue) {
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
            <CustomButton
              onClick={handleNext}
              type="button"
              label={isLastValue ? "Oluştur" : "İlerle"}
            />
          </div>
        </div>

        {/* <hr />
        <RHFFormValues /> */}
      </form>
    </FormProvider>
  );
};
