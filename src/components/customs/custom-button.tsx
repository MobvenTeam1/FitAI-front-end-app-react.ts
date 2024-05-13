import React from "react";

interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
  isSubmitting?: boolean;
  label?: string;
  variant: "outlined" | "contained" | "link";
}

const baseClassName =
  "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white transition-colors duration-200";

const variantClassNames = {
  outlined:
    "bg-transparent border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white",
  contained:
    "bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:shadow-lg",
  link: "bg-transparent text-indigo-500 hover:text-indigo-600",
};

const CustomButton: React.FC<CustomButtonProps> = ({
  type = "button",
  label = "",
  variant = "contained",
  ...props
}) => {
    const className = `${baseClassName} ${variantClassNames[variant]}`;

  return (
    <button type={type} className={className} {...props}>
      {label}
    </button>
  );
};

export default CustomButton;
