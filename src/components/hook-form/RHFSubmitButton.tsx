import { FC, ButtonHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const RHFSubmitButton: FC<ButtonProps> = ({
  label = "Submit",
  ...props
}) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <button
      type="submit"
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:shadow-lg transition-colors duration-200"
      {...props}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Loading..." : label}
    </button>
  );
};
