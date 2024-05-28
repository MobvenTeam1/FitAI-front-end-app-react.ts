import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { RHFTextfield } from "../../components/hook-form/RHFTextfield";
import { RHFSubmitButton } from "../../components/hook-form/RHFSubmitButton";
import { useRouter } from "../../hooks/useRouter";
import { paths } from "../../routes/paths";
import { AuthHeader } from "../../sections/auth/AuthHeader";
import { AuthSocial } from "../../sections/auth/AuthSocial";

export type FormValues = {
  email: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email format zorunlu")
    .required("Email adresi zorunlu"),
});

const defaultValues: FormValues = {
  email: "temp@gmail.com",
};

export const ForgotPassword: React.FC = () => {
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
            <AuthHeader
              title="Şifrenizi mi unuttunuz?"
              subtitle="Endişelenmeyin!  Lütfen hesabınızla bağlantılı e-posta adresini girin."
            />

            <div className="flex flex-col gap-6">
              <RHFTextfield name="email" label="Email" />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <RHFSubmitButton label="Kod Gönder" />
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
