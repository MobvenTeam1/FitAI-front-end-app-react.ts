import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { RHFTextfield } from "../../components/hook-form/RHFTextfield";
import { RHFSubmitButton } from "../../components/hook-form/RHFSubmitButton";
import { useRouter } from "../../hooks/useRouter";
import { paths } from "../../routes/paths";
import { AuthHeader } from "../../sections/auth/AuthHeader";

export type FormValues = {
  username: string;
};

const schema = yup.object().shape({
  username: yup.string().required("Email is required"),
});

const defaultValues: FormValues = {
  username: "",
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

export const Register: React.FC = () => {
  const router = useRouter();

  const form = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log(data);

    handlePush(`/${paths.auth.root}/${paths.auth.verificationPassword}`);
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
            <AuthHeader title="Kayıt Ol" />

            <div className="flex flex-col gap-6">
              <RHFTextfield name="username" label="Email" />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <RHFSubmitButton color="black" />
              <p
                className="text-base text-black-500"
                onClick={() =>
                  handlePush(`/${paths.auth.root}/${paths.auth.login}`)
                }
              >
                Zaten hesabınız var mı?{" "}
                <span className="font-bold cursor-pointer">Giriş Yap</span>
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

            {/* <RHFFormValues /> */}
          </form>
        </FormProvider>
      </div>

      <DevTool control={control} />
    </>
  );
};
