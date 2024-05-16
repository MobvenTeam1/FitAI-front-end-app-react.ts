import React, { useContext } from "react";
import { PersonalInformationsContext } from "./context/PersonalInformationsContext";
import { PersonalValues } from "./context/personalValues";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RHFTextfield } from "../../components/hook-form/RHFTextfield";
import { RHFFormValues } from "../../components/hook-form/RHFFormValues";
import { RHFSingleSelect } from "./rhf-components/RHFSingleSelect";
import { RHFMultiSelect } from "./rhf-components/RHFMultiSelect";

type PersonalFormValues = {
  gender: string;
  size: string;
  currenWeight: string;
  targetWeight: string;
  birthDate: string;
  goal: string;
  activities: string[];
};

const schema = yup.object().shape({
  gender: yup.string().required("Gender is required"),
  size: yup.string().required("Size is required"),
  currenWeight: yup.string().required("Current Weight is required"),
  targetWeight: yup.string().required("Target Weight is required"),
  birthDate: yup.string().required("Birth Date is required"),
  goal: yup.string().required("Goal is required"),
  activities: yup
    .array()
    .of(yup.string().required("Activity is required"))
    .required("At least one activity is required"),
});

const defaultValues: PersonalFormValues = {
  gender: "",
  size: "",
  currenWeight: "",
  targetWeight: "",
  birthDate: "",
  goal: "",
  activities: [""],
};

export const PersonalInformations: React.FC = () => {
  const { step, forwardStep, backwardStep } = useContext(
    PersonalInformationsContext
  );
  const form = useForm<PersonalFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, trigger } = form;
  const showStep = PersonalValues.find((value) => value.step === step);

  const handleNext = async () => {
    if (showStep) {
      const isValid = await trigger(showStep.name as keyof PersonalFormValues);
      console.log(isValid);
      if (isValid) {
        forwardStep();
      }
    }
  };

  const onSubmit = (data: PersonalFormValues) => {
    console.log(data);
  };

  const renderFormElement = () => {
    switch (showStep?.selectType) {
      case 0:
        return (
          <RHFSingleSelect
            name={showStep.name}
            options={showStep.options || []}
          />
        );
      case 1:
        return (
          <RHFMultiSelect
            name={showStep.name}
            options={showStep.options || []}
          />
        );
      case 2:
        return (
          <RHFTextfield
            name={showStep.name}
            type={showStep.type || "text"}
            label={showStep.label}
            placeholder={showStep.placeholder}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 m-4 bg-white rounded-lg shadow-md">
        <FormProvider {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-4"
          >
            <button
              type="button"
              onClick={() => step !== 0 && backwardStep()}
              className="border rounded-xl p-2 hover:bg-gray-200"
            >
              {"<"}
            </button>
            {/* <div className="text-center">{showStep?.step}</div> */}
            <div className="text-2xl font-bold pb-24">{showStep?.label}</div>
            {renderFormElement()}
            <button
              type="button"
              onClick={handleNext}
              className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700"
            >
              Sonraki
            </button>
            <hr />
            <RHFFormValues />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
