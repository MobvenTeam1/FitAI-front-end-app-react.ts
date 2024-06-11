import { CircularProgress } from "@mui/material";
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
  isLoading?: boolean;
};

export const RHFSubmitButton: React.FC<RHFSubmitButtonProps> = ({
  label = "Submit",
  color = "green",
  size = "md",
  variant = "contained",
  isLoading = false,
  ...props
}) => {
  return (
    <CustomButton
      type="submit"
      variant={variant}
      color={color}
      size={size}
      label={
        isLoading ? (
          <CircularProgress size={28} sx={{ color: "white" }} />
        ) : (
          label
        )
      }
      disabled={isLoading}
      {...props}
    />
  );
};
