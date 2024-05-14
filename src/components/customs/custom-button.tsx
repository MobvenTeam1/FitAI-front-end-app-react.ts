import { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  isSubmitting?: boolean;
  label?: string;
  variant: "outlined" | "contained" | "link";
  color?:
    | "indigo"
    | "red"
    | "green"
    | "yellow"
    | "blue"
}

// const color = "indigo";

const baseClassName =
  "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white transition-colors duration-200";

const CustomButton: React.FC<CustomButtonProps> = ({
  type = "button",
  label = "",
  variant = "contained",
  color = "indigo",
  ...props
}) => {
  const variantClassNames = {
    outlined: `bg-transparent border-${color}-500 text-${color}-500 hover:bg-${color}-500 hover:text-white`,
    contained: `bg-${color}-500 hover:bg-${color}-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 hover:shadow-lg`,
    link: `bg-transparent text-${color}-500 hover:text-${color}-600`,
  };

  const className = `${baseClassName} ${variantClassNames[variant]}`;

  return (
    <button type={type} className={className} {...props}>
      {label}
    </button>
  );
};

export default CustomButton;
