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

type LoginOption = {
  id: number;
  name: string;
  icon: string;
};

const loginOptions: LoginOption[] = [
  {
    id: 1,
    name: "Facebook",
    icon: "/icons/ic_facebook.svg",
  },
  {
    id: 2,
    name: "Google",
    icon: "/icons/ic_google.svg",
  },
  {
    id: 3,
    name: "Apple",
    icon: "/icons/ic_apple.svg",
  },
];

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

              <div className="flex flex-col items-center justify-center gap-4">
                <RHFSubmitButton color="black" />
                <p
                  className="text-base text-black-500"
                  onClick={() =>
                    handlePush(`/${paths.auth.root}/${paths.auth.register}`)
                  }
                >
                  Hesabın yok mu?{" "}
                  <span className="font-bold cursor-pointer">Kayıt ol</span>
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-full h-0.125 bg-gray-500" />
                <p className="text-base text-gray-500 font-semibold text-nowrap mx-4">
                  Veya Şununla Giriş Yapın
                </p>
                <div className="w-full h-0.125 bg-gray-500" />
                <div />
              </div>

              <div className="flex items-center gap-4 w-full">
                {loginOptions.map((option) => (
                  <div
                    key={`${option.id}${option.name}`}
                    className="flex items-center justify-center py-4 w-full cursor-pointer border border-gray-200 rounded-lg "
                  >
                    <img
                      className="w-6 h-6 select-none"
                      src={option.icon}
                      alt={option.name}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* <RHFFormValues /> */}
          </form>
        </FormProvider>
      </div>

      <DevTool control={control} />
    </>
  );
};
