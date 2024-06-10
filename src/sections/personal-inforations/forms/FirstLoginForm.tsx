import React, { useContext } from "react";

import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalInformationsContext } from "../context/PersonalInformationsContext";
import { FirstLoginFormValues } from "../values";
import { RHFFormValues } from "../../../components/hook-form/RHFFormValues";
import { renderFormElement } from "../rhf-components/renderFormElement";
import { Stepper } from "../components/Stepper";
import { CustomButton } from "../../../components/customs/custom-button";
import { AuthContext } from "../../../auth/AuthContext";
import { RHFSubmitButton } from "../../../components/hook-form/RHFSubmitButton";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { registrationRequest } from "../../../api";

type FirstLoginFormValues = {
  gender: string;
  height: string;
  firstWeight: string;
  targetWeight: string;
  dateOfBirth: Date;
  goals: string;
};

export type FirstLoginFormSendValues = {
  gender: string;
  height: number;
  firstWeight: number;
  targetWeight: number;
  dateOfBirth: Date;
  goals: string;
};

const schema = yup.object().shape({
  gender: yup.string().required("Cinsiyet zorunlu"),
  height: yup.string().required("Boy zorunlu"),
  firstWeight: yup.string().required("Kilo zorunlu"),
  targetWeight: yup.string().required("Hedef kilo zorunlu"),
  dateOfBirth: yup.date().required("Doğum tarihi zorunlu"),
  goals: yup.string().required("Hedef zorunlu"),
});

const defaultValues: FirstLoginFormValues = {
  gender: "",
  height: "",
  firstWeight: "",
  targetWeight: "",
  dateOfBirth: new Date(),
  goals: "",
};

export const FirstLoginForm: React.FC = () => {
  const { logout } = useContext(AuthContext);
  const { step, forwardStep } = useContext(PersonalInformationsContext);
  const form = useForm<FirstLoginFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, trigger } = form;
  const showStep = FirstLoginFormValues.find((value) => value.step === step);

  const isLastValue = showStep?.step === FirstLoginFormValues.length - 1;

  const handleNext = async () => {
    if (showStep) {
      const isValid = await trigger(
        showStep.name as keyof FirstLoginFormValues
      );
      // console.log(isValid);
      if (isValid && !isLastValue) {
        forwardStep();
      }
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: registrationRequest,
    onSuccess: (data) => {
      console.log("registrationRequest data", data);
      toast.success("Kayıt Oluşturma Başarılı");
      logout();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data: FirstLoginFormValues) => {
    const { height, firstWeight, targetWeight, ...rest } = data;
    const heightInt = parseInt(height, 10);
    const firstWeightInt = parseInt(firstWeight, 10);
    const targetWeightInt = parseInt(targetWeight, 10);

    const sendeData = {
      ...rest,
      height: heightInt,
      firstWeight: firstWeightInt,
      targetWeight: targetWeightInt,
    };
    mutate(sendeData);
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
        {isLastValue ? (
          <RHFSubmitButton label="Oluştur" isLoading={isPending} />
        ) : (
          <CustomButton onClick={handleNext} type="button" label={"İlerle"} />
        )}

        <CustomButton
          type="button"
          variant="link"
          color="red"
          onClick={logout}
          label="Daha sonra devam et"
        />

        <hr />
        <RHFFormValues />
      </form>
    </FormProvider>
  );
};
