import { FC } from "react";
import { useFormContext } from "react-hook-form";
import CustomButton from "../customs/custom-button";

type ButtonProps = {
  label?: string;
  color?: "indigo" | "red" | "green" | "yellow" | "blue";
};

export const RHFSubmitButton: FC<ButtonProps> = ({
  label = "Submit",
  color = "indigo",
  ...props
}) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <CustomButton
      type="submit"
      variant="contained"
      color={color}
      label={isSubmitting ? "Loading..." : label}
      disabled={isSubmitting}
      {...props}
    />
  );
};
