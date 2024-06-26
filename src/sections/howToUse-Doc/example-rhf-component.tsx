import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RHFTextfield } from "../../components/hook-form/RHFTextfield";
import { RHFSubmitButton } from "../../components/hook-form/RHFSubmitButton";
import { RHFFormValues } from "../../components/hook-form/RHFFormValues";
import { RHFSelectBox } from "../../components/hook-form/RHFSelectBox";
import { RHFCheckbox } from "../../components/hook-form/RHFCheckbox";

type FormValues = {
  email: string;
  password: string;
  gender: string;
  isActive: boolean;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email format is required")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Must contain a minimum of 6 characters")
    .required("Password is required"),
  gender: yup.string().required("Gender is required"),
  isActive: yup.boolean().required("Aktif mi? is required"),
});

const defaultValues: FormValues = {
  email: "",
  password: "",
  gender: "",
  isActive: false,
};

export const TemplateRHFYup: React.FC = () => {
  const form = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8 p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
              RHF-Yup
            </h2>
          </div>
          <FormProvider {...form}>
            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="flex flex-col gap-3 rounded-md shadow-sm -space-y-px">
                <RHFTextfield name="email" type="email" label="Email address" />
                <RHFTextfield
                  name="password"
                  type="password"
                  label="Password"
                />
                <RHFSelectBox
                  name="gender"
                  label="Gender"
                  options={[
                    { value: "", label: "Select Gender" },
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                />
                <RHFCheckbox name="isActive" label="Aktif mi?" />
              </div>

              <RHFSubmitButton />

              <RHFFormValues />
            </form>
          </FormProvider>
        </div>
      </div>

      <DevTool control={control} />
    </>
  );
};
