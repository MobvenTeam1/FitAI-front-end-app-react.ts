import { FC, InputHTMLAttributes } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { ErrorMessage } from "../../../components/hook-form/RHFErrorMessage";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type?: string;
  helperText?: string;
}

export const RHFTextfield: FC<InputProps> = ({
  name,
  label,
  type = "text",
  helperText,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error: FieldError | undefined = errors[name] as FieldError;

  return (
    <div>
      <div className="relative">
        <input
          id={name}
          type={type}
          placeholder={label}
          className={`w-full text-4xl font-bold text-center py-3 px-4 border-b active:outline-none focus:placeholder-transparent focus:outline-none placeholder:font-medium [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]
          `}
          {...register(name)}
          {...props}
        />
        {helperText && <p className="helper-text">{helperText}</p>}
      </div>
      <ErrorMessage error={error} />
    </div>
  );
};
