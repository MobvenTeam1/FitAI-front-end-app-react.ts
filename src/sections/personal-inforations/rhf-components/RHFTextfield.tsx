import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { ErrorMessage } from "../../../components/hook-form/RHFErrorMessage";

interface BaseProps {
  name: string;
  helperText?: string;
  placeholder?: string;
  rowCount?: number | null;
  type?: string;
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const RHFTextfield: FC<InputProps & TextareaProps> = ({
  name,
  type = "text",
  placeholder,
  helperText,
  rowCount,
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
        {rowCount ? (
          <textarea
            id={name}
            placeholder={placeholder}
            rows={rowCount}
            className="w-full border border-gray-50 rounded-xl p-4 resize-none active:outline-none focus:placeholder-transparent focus:outline-none placeholder:font-medium"
            {...register(name)}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            className={`w-full ${
              type === "number"
                ? "text-4xl font-bold text-center py-3 px-4 border-b"
                : "border border-gray-50 rounded-xl p-4"
            } active:outline-none focus:placeholder-transparent focus:outline-none placeholder:font-medium [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]`}
            {...register(name)}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {helperText && <p className="helper-text">{helperText}</p>}
      </div>
      <ErrorMessage error={error} />
    </div>
  );
};
