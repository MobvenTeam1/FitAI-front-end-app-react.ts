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
  weight: string;
  age: string;
  goal: string;
  activity: string[];
};

const schema = yup.object().shape({
  weight: yup.string().required("Weight is required"),
  age: yup.string().required("Age is required"),
  goal: yup.string().required("Goal is required"),
  activity: yup.array().required("Activity is required"),
});

const defaultValues: PersonalFormValues = {
  weight: "",
  age: "",
  goal: "",
  activity: [],
};

export const PersonalInformations: React.FC = () => {
  const { step, forwardStep, backwardStep } = useContext(
    PersonalInformationsContext
  );
  const form = useForm<PersonalFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = form;
  const showStep = PersonalValues.find((value) => value.step === step);

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
            label={showStep.label}
            options={showStep.options || []}
          />
        );
      case 2:
        return (
          <RHFTextfield
            name={showStep.name}
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
      <div className="w-full max-w-md p-8 m-4 bg-white rounded shadow-md">
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
            <div className="text-2xl font-bold">{showStep?.label}</div>
            {renderFormElement()}
            <button
              type="button"
              onClick={forwardStep}
              className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700"
            >
              Sonraki
            </button>
            <hr className="mt-5" />
            <RHFFormValues />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
