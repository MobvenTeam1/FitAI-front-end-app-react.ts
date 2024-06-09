import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { RHFTextfield } from "../../components/hook-form/RHFTextfield";
import { RHFSubmitButton } from "../../components/hook-form/RHFSubmitButton";
// import { useRouter } from "../../hooks/useRouter";
import { paths } from "../../routes/paths";
import { AuthHeader } from "../../sections/auth/AuthHeader";
import { AuthSocial } from "../../sections/auth/AuthSocial";
import { AuthLink } from "../../sections/auth/AuthLink";
import { RHFCheckBox } from "../../sections/personal-inforations/rhf-components/RHFCheckbox";
// import { RHFInputMask } from "../../components/hook-form/RHFInputMask";
import { useState } from "react";
import { CustomModal } from "../../components/customs/custom-modal";
// import { tempInstance } from "../../api/models/HttpClient";
import api from '../../old-api';
import { ApplicationJson } from "../../hooks/useData";
// import { RHFFormValues } from "../../components/hook-form/RHFFormValues";

export type FormValues = {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  // phone: string;
  password: string;
  passwordConfirm: string;
  isRead?: boolean;
};

const schema = yup.object().shape({
  userName: yup.string().required("Kullanıcı Adı zorunlu"),
  firstName: yup.string().required("Ad zorunlu"),
  lastName: yup.string().required("Soyad zorunlu"),
  email: yup
    .string()
    .email("Email format zorunlu")
    .required("Email adresi zorunlu"),
  // phone: yup.string().required("Telefon zorunlu"),
  password: yup.string().required("Parola zorunlu"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Paralolar eşleşmiyor")
    .required("Paraola tekrarı zorunlu"),
  isRead: yup
    .boolean()
    .oneOf([true], "Şartları ve gizlilik sözleşmesini kabul etmelisiniz"),
});

const defaultValues: FormValues = {
  userName: "iber_34",
  firstName: "İlber",
  lastName: "Ortaylı",
  email: "ilber@gmail.com",
  // phone: "555-555-5555",
  password: "123456",
  passwordConfirm: "123456",
  isRead: true,
};

export const Register: React.FC = () => {
  // const router = useRouter();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const form = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { control, handleSubmit } = form;

  // const postRegisterRequest = async (data: FormValues) => {
  //   try {
  //     const { data: resData } = await tempInstance.post("/User/Register", data);
  //     console.log(resData);
  //     handlePush(paths.registration);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const postRegisterRequest = async (data: FormValues) => {
    api.post(
      "/User/Register", 
      data, 
      ApplicationJson
    )
      // .then((res) => console.log(res))
      // .catch(error => console.log(error));
  }

  const onSubmit = async (data: FormValues) => {
    console.log("Gönderilen veri", data);
    postRegisterRequest(data)

    
    // api.post(
    //   "/User/Register", 
    //   data, 
    //   ApplicationJson
    // )
    //   .then((res) => console.log(res))
    //   .catch(error => console.log(error));

    // const {data} = await api.post(
    //   "/User/Register",
    //   data,
    //   ApplicationJson
    // );
    // console.log(data);
  };

  // const handlePush = (path: string) => {
  //   router.push(path);
  // };

  return (
    <>
      <div className="py-10">
        <FormProvider {...form}>
          <form
            className="w-full pr-20 pl-28 flex flex-col gap-9 max-sm:px-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <AuthHeader title="Kayıt Ol" />

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <RHFTextfield name="userName" label="Kullanıcı Adı" />
              </div>
              <div className="col-span-6">
                <RHFTextfield name="firstName" label="Ad" />
              </div>
              <div className="col-span-6">
                <RHFTextfield name="lastName" label="Soy Ad" />
              </div>
              <div className="col-span-12">
                <RHFTextfield name="email" label="Email" />
              </div>
              {/* <div className="col-span-12">
                <RHFInputMask name="phone" label="Telefon" />
              </div> */}
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
                  name="passwordConfirm"
                  label="Parola Tekrar"
                  type="password"
                />
              </div>
              <div className="col-span-12">
                <RHFCheckBox
                  name="isRead"
                  content={
                    <p className="text-sm text-gray-300">
                      <span
                        className="font-bold underline cursor-pointer"
                        onClick={handleOpenModal}
                      >
                        Şartları
                      </span>{" "}
                      ve{" "}
                      <span
                        className="font-bold underline cursor-pointer"
                        onClick={handleOpenModal}
                      >
                        gizlilik politikasını
                      </span>{" "}
                      kabul ediyorum.
                    </p>
                  }
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

      <CustomModal isOpen={isOpenModal} onClose={handleClose}>
        <p>Gizlilik Sözleşmesi ve gizlilik politikasını</p>
      </CustomModal>

      <DevTool control={control} />
    </>
  );
};
