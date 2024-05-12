import { InputHTMLAttributes, FC } from "react";
import { FieldValues, UseFormRegister, FieldError } from "react-hook-form";

type RegisterType<TFieldValues extends FieldValues = FieldValues> =
  UseFormRegister<TFieldValues>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: RegisterType;
  label: string;
  error?: FieldError;
  type?: string;
}

export const RHFTextfield: FC<InputProps> = ({
  register,
  name,
  label,
  error,
  type = "text",
  ...props
}) => (
  <div>
    <label htmlFor={name} className="sr-only">
      {label}
    </label>
    <input
      id={name}
      type={type}
      placeholder={label}
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
      {...register(name)}
      {...props}
    />
    {error && <p className="text-red-500">{error.message}</p>}
  </div>
);
