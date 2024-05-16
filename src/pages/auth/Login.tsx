import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { RHFTextfield } from "../../components/hook-form/RHFTextfield";
import { RHFSubmitButton } from "../../components/hook-form/RHFSubmitButton";
import { RHFFormValues } from "../../components/hook-form/RHFFormValues";
import { AuthContext } from "../../auth/AuthContext";
import { useContext } from "react";
import { useRouter } from "../../hooks/useRouter";
import { paths } from "../../routes/paths";

export type FormValues = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(6, "Must contain a minimum of 6 characters")
    .required("Password is required"),
});

const defaultValues: FormValues = {
  username: "mor_2314",
  password: "83r5^_",
};

export const Login: React.FC = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);

  const form = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    login(data);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8 p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
              Login
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
                <RHFTextfield
                  name="password"
                  type="password"
                  label="Password"
                />
              </div>

              <RHFSubmitButton color="green" />

              <RHFFormValues />
            </form>
          </FormProvider>

          <div
            className="mt-4 text-center"
            onClick={() =>
              router.push(`/${paths.auth.root}/${paths.auth.register}`)
            }
          >
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <span className="font-medium text-red-600 hover:text-red-500 cursor-pointer">
                Create one
              </span>
            </p>
          </div>
        </div>
      </div>

      <DevTool control={control} />
    </>
  );
};
