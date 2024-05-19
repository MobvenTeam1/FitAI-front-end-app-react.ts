import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { RHFTextfield } from "../../components/hook-form/RHFTextfield";
import { RHFSubmitButton } from "../../components/hook-form/RHFSubmitButton";
// import { RHFFormValues } from "../../components/hook-form/RHFFormValues";
import { AuthContext } from "../../auth/AuthContext";
import { useContext } from "react";
import { useRouter } from "../../hooks/useRouter";
import { paths } from "../../routes/paths";
import { AuthHeader } from "../../sections/auth/AuthHeader";
import { RHFCheckBox } from "../../sections/personal-inforations/rhf-components/RHFCheckbox";
import { AuthSocial } from "../../sections/auth/AuthSocial";
import { AuthLink } from "../../sections/auth/AuthLink";

export type FormValues = {
  username: string;
  password: string;
  isCheck: boolean;
};

const schema = yup.object().shape({
  username: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(6, "Must contain a minimum of 6 characters")
    .required("Password is required"),
  isCheck: yup.boolean().required("Check is required"),
});

const defaultValues: FormValues = {
  username: "mor_2314",
  password: "83r5^_",
  isCheck: false,
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

  const handlePush = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <FormProvider {...form}>
          <form
            className="w-full px-20 flex flex-col gap-9"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <AuthHeader
              title="Giriş Yap"
              subtitle="FitAI hesabınıza erişmek için giriş yapın."
            />

            <div className="flex flex-col gap-6">
              <RHFTextfield name="username" label="Email" />
              <RHFTextfield name="password" type="password" label="Parola" />

              <div className="flex justify-between items-center">
                <RHFCheckBox name="isCheck" label="Beni Hatırla" />

                <p
                  className="text-sm text-gray-500 font-semibold cursor-pointer"
                  onClick={() =>
                    handlePush(
                      `/${paths.auth.root}/${paths.auth.forgotPassword}`
                    )
                  }
                >
                  Şifremi Unuttum
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <RHFSubmitButton color="black" />
              <AuthLink
                title="Hesabın yok mu?"
                rootText="Kayıt ol"
                path={`/${paths.auth.root}/${paths.auth.register}`}
              />
            </div>

            <AuthSocial />

            {/* <RHFFormValues /> */}
          </form>
        </FormProvider>
      </div>

      <DevTool control={control} />
    </>
  );
};
