import { useFormContext } from "react-hook-form";
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
  CustomButton,
} from "../customs/custom-button";

type RHFSubmitButtonProps = {
  label?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export const RHFSubmitButton: React.FC<RHFSubmitButtonProps> = ({
  label = "Submit",
  color = "indigo",
  size = "md",
  variant = "contained",
  ...props
}) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <CustomButton
      type="submit"
      variant={variant}
      color={color}
      size={size}
      label={isSubmitting ? "Loading..." : label}
      disabled={isSubmitting}
      {...props}
    />
  );
};
