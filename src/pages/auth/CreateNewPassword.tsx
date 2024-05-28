import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { RHFTextfield } from "../../components/hook-form/RHFTextfield";
import { RHFSubmitButton } from "../../components/hook-form/RHFSubmitButton";
// import { RHFFormValues } from "../../components/hook-form/RHFFormValues";
import { AuthHeader } from "../../sections/auth/AuthHeader";
import { useRouter } from "../../hooks/useRouter";
import { paths } from "../../routes/paths";

type FormValues = {
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  password: yup.string().required("Parola zorunlu"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Paralolar eşleşmiyor")
    .required("Paraola tekrarı zorunlu"),
});

const defaultValues: FormValues = {
  password: "123456",
  confirmPassword: "123456",
};

export const CreateNewPassword: React.FC = () => {
  const router = useRouter();
  const form = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    router.push(`/${paths.auth.root}/${paths.auth.successPassword}`);
    console.log(data);
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
              title="Yeni Parola Oluştur"
              subtitle="Yeni parolanız daha önce kullandıklarınızdan farklı olmalıdır."
            />

            <div className="flex flex-col gap-6">
              <RHFTextfield name="password" label="Parola" type="password" />
              <RHFTextfield
                name="confirmPassword"
                label="Parola Tekrar"
                type="password"
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <RHFSubmitButton label="Parolayı Sıfırla" />
            </div>

            {/* <RHFFormValues /> */}
          </form>
        </FormProvider>
      </div>

      <DevTool control={control} />
    </>
  );
};
