import { FC, InputHTMLAttributes } from "react";
import { useFormContext, FieldError } from "react-hook-form";

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
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={label}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
        {...register(name)}
        {...props}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};
