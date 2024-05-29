// import { RHFFormValues } from "../../components/hook-form/RHFFormValues";
import { paths } from "../../routes/paths";
import { AuthHeader } from "../../sections/auth/AuthHeader";
import { AuthLink } from "../../sections/auth/AuthLink";
import { useRouter } from "../../hooks/useRouter";
import { useEffect, useRef, useState } from "react";
import { CustomButton } from "../../components/customs/custom-button";

export const VerificationPassword: React.FC = () => {
  const router = useRouter();
  const [values, setValues] = useState(["", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isErrorFull, setIsErrorFull] = useState(false);
  const [isVerificationCodeAgain, setIsVerificationCodeAgain] = useState(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Check if all values are filled
    const allValuesFilled = Object.values(values).every(
      (value) => value !== ""
    );

    if (allValuesFilled) {
      handlePush(`/${paths.auth.root}/${paths.auth.createNewPassword}`);
    } else {
      setIsErrorFull(true);
    }
  };

  const handlePush = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    // Check if all values are filled
    const allValuesFilled = values.every(
      (value) => value !== null && value !== ""
    );

    // If all values are filled, set isErrorFull to false
    if (allValuesFilled) {
      setIsErrorFull(false);
    }
  }, [values]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (/^\d$/.test(value)) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace") {
      const newValues = [...values];
      if (newValues[index] === "" && index > 0) {
        inputRefs[index - 1].current?.focus();
      }
      newValues[index] = "";
      setValues(newValues);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <form
          className="w-full px-20 flex flex-col gap-9"
          onSubmit={onSubmit}
          noValidate
        >
          <AuthHeader
            title="Doğrulama"
            subtitle="E-posta adresinize gönderdiğimiz doğrulama kodunu girin."
          />

          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-6">
              {inputRefs.map((ref, index) => (
                <input
                  key={index}
                  ref={ref}
                  value={values[index]}
                  maxLength={1}
                  onChange={(e) => handleInputChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-full p-12 border rounded-lg text-center text-lg font-bold focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent focus:placeholder-transparent max-sm:p-1 ${
                    values[index] !== ""
                      ? "border-green-600"
                      : values[index] === "" && isSubmitting
                      ? "border-red"
                      : "border-black-300"
                  }`}
                />
              ))}
            </div>
            {isErrorFull && (
              <p className="text-red text-sm">Lütfen kodu giriniz.</p>
            )}
            {isVerificationCodeAgain && (
              <p className="text-green text-sm">Kod tekrar gönderildi.</p>
            )}
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <CustomButton label="Doğrula" type="submit" />
            <AuthLink
              title="Kod almadınız mı?"
              rootText="Tekrar gönder"
              onClick={() => {
                setIsVerificationCodeAgain(true);
              }}
            />
          </div>

          {/* <RHFFormValues /> */}
        </form>
      </div>
    </>
  );
};
