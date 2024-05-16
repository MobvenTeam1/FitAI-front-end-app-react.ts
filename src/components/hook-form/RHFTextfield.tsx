import { FC, InputHTMLAttributes } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { ErrorMessage } from "./RHFErrorMessage";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type?: string;
}

export const RHFTextfield: FC<InputProps> = ({
  name,
  label,
  type = "text",
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error: FieldError | undefined = errors[name] as FieldError;

  return (
    <div>
      <input
        id={name}
        type={type}
        placeholder={label}
        className="border rounded-lg p-4 w-full bg-gray-200"
        {...register(name)}
        {...props}
      />
      <ErrorMessage error={error} />
    </div>
  );
};
