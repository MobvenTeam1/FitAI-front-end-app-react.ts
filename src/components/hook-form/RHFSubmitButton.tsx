import { FC, ButtonHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import CustomButton from "../customs/custom-button";

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
    <CustomButton
      type="submit"
      variant="contained"
      label={isSubmitting ? "Loading..." : label}
      disabled={isSubmitting}
      {...props}
    />
  );
};
