import { FC, useState } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { ErrorMessage } from "../../../components/hook-form/RHFErrorMessage";

interface SelectProps {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
}

export const RHFMultiSelect: FC<SelectProps> = ({ name, label, options }) => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const error: FieldError | undefined = errors[name] as FieldError;

  const handleOptionClick = (optionLabel: string) => {
    if (selectedOptions.includes(optionLabel)) {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== optionLabel));
    } else {
      setSelectedOptions([...selectedOptions, optionLabel]);
    }
    setValue(name, selectedOptions);
  };

  return (
    <div>
      <h1>RHF Multi Select</h1>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      <div>
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => handleOptionClick(option.label)}
          >
            {option.label}
          </div>
        ))}
      </div>

      <ErrorMessage error={error} />
    </div>
  );
};
