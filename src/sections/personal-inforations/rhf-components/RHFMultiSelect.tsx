import { FC, useState } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { ErrorMessage } from "../../../components/hook-form/RHFErrorMessage";
import SvgColor from "../../../components/svg-color";

interface SelectProps {
  name: string;
  options: { value: string; label: string; icon?: string }[];
}

export const RHFMultiSelect: FC<SelectProps> = ({ name, options }) => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const isSelected = (optionLabel: string) =>
    selectedOptions.includes(optionLabel);

  const error: FieldError | undefined = errors[name] as FieldError;

  const handleOptionClick = (optionLabel: string) => {
    if (selectedOptions.includes(optionLabel)) {
      const newSelectedOptions = selectedOptions.filter(
        (opt) => opt !== optionLabel
      );
      setSelectedOptions(newSelectedOptions);
      setValue(name, newSelectedOptions);
    } else {
      const newSelectedOptions = [...selectedOptions, optionLabel];
      setSelectedOptions(newSelectedOptions);
      setValue(name, newSelectedOptions);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <div
            className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer ${
              isSelected(option.label) ? "border-green-500" : "border-black-50"
            }`}
            key={option.value}
            onClick={() => handleOptionClick(option.label)}
          >
            <div className="flex items-center gap-3">
              {option?.icon ? (
                <div
                  className={`${
                    isSelected(option.label) ? "bg-green-500" : "bg-black-50"
                  } rounded-full p-2.5`}
                >
                  <img
                    className="w-5 h-5"
                    src={`/icons/ic_${option.icon}.svg`}
                    alt=""
                  />
                </div>
              ) : (
                <div
                  className={`rounded-full w-9 h-9${
                    isSelected(option.label) ? " bg-green-200" : " bg-green-50"
                  }`}
                ></div>
              )}

              <div>{option.label}</div>
            </div>
            {isSelected(option.label) && (
              <div
                className={`rounded-full p-1 w-6 h-6 bg-green-500 text-white flex items-center justify-center`}
              >
                <SvgColor src="/icons/ic_check.svg" />
              </div>
            )}
          </div>
        ))}
      </div>

      <ErrorMessage error={error} />
    </div>
  );
};
