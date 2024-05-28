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
import { AuthLink } from "../../sections/auth/AuthLink";
import { RHFCheckBox } from "../../sections/personal-inforations/rhf-components/RHFCheckbox";

export type FormValues = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  isRead?: boolean;
};

const schema = yup.object().shape({
  name: yup.string().required("Ad zorunlu"),
  surname: yup.string().required("Soyad zorunlu"),
  email: yup
    .string()
    .email("Email format zorunlu")
    .required("Email adresi zorunlu"),
  phone: yup.string().required("Telefon zorunlu"),
  password: yup.string().required("Parola zorunlu"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Paralolar eşleşmiyor")
    .required("Paraola tekrarı zorunlu"),
  isRead: yup
    .boolean()
    .oneOf([true], "Şartları ve gizlilik sözleşmesini kabul etmelisiniz"),
});

const defaultValues: FormValues = {
  name: "İlber",
  surname: "Ortaylı",
  email: "ilber@gmail.com",
  phone: "5555555555",
  password: "123456",
  confirmPassword: "123456",
  isRead: true,
};

export const Register: React.FC = () => {
  const router = useRouter();

  const form = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log(data);

    handlePush(paths.registration);
  };

  const handlePush = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="py-10">
        <FormProvider {...form}>
          <form
            className="w-full px-20 flex flex-col gap-9 max-sm:px-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <AuthHeader title="Kayıt Ol" />

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-6">
                <RHFTextfield name="name" label="Ad" />
              </div>
              <div className="col-span-6">
                <RHFTextfield name="surname" label="Soyad" />
              </div>
              <div className="col-span-12">
                <RHFTextfield name="email" label="Email" />
              </div>
              <div className="col-span-12">
                <RHFTextfield name="phone" label="Telefon" />
              </div>
              <div className="col-span-12">
                <RHFTextfield
                  name="password"
                  label="Parola"
                  type="password"
                  helperText="Min 8 karakter, bir büyük, bir küçük harften oluşmalıdır."
                />
              </div>
              <div className="col-span-12">
                <RHFTextfield
                  name="confirmPassword"
                  label="Parola Tekrar"
                  type="password"
                />
              </div>
              <div className="col-span-12">
                <RHFCheckBox
                  name="isRead"
                  label="Şartları ve gizlilik politikasını kabul ediyorum."
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <RHFSubmitButton label="Kayıt Ol" />
              <AuthLink
                title="Zaten hesabınız var mı?"
                rootText="Giriş Yap"
                path={`/${paths.auth.root}/${paths.auth.login}`}
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
