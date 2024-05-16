import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { RHFTextfield } from "../../components/hook-form/RHFTextfield";
import { RHFSubmitButton } from "../../components/hook-form/RHFSubmitButton";
import { RHFFormValues } from "../../components/hook-form/RHFFormValues";
import { useRouter } from "../../hooks/useRouter";
import { paths } from "../../routes/paths";

export type FormValues = {
  username: string;
  email: string;
  password: string;
  checkPassword: string;
};

const schema = yup.object().shape({
  username: yup.string().required("username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Must contain a minimum of 6 characters")
    .required("Password is required"),
  checkPassword: yup.string().required("Check password is required"),
});

const defaultValues: FormValues = {
  username: "",
  email: "",
  password: "",
  checkPassword: "",
};

export const Register: React.FC = () => {
  const router = useRouter();

  const form = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = () => {
    router.push(`/${paths.auth.root}/${paths.auth.registration}`);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8 p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
              Merhaba! Başlamak için kaydolun
            </h2>
          </div>
          <FormProvider {...form}>
            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="flex flex-col gap-3 rounded-md shadow-sm -space-y-px">
                <RHFTextfield name="username" label="User Name" />
                <RHFTextfield name="email" label="Email" />
                <RHFTextfield
                  name="password"
                  type="password"
                  label="Password"
                />

                <RHFTextfield
                  name="checkPassword"
                  type="password"
                  label="Check Password"
                />
              </div>

              <RHFSubmitButton color="green" />

              <RHFFormValues />
            </form>
          </FormProvider>
        </div>
      </div>

      <DevTool control={control} />
    </>
  );
};
