import { FC, useState } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { ErrorMessage } from "../../../components/hook-form/RHFErrorMessage";
import SvgColor from "../../../components/svg-color";

interface SelectProps {
  name: string;
  options: { value: string; label: string; icon?: string }[];
}

export const RHFSingleSelect: FC<SelectProps> = ({ name, options }) => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const error: FieldError | undefined = errors[name] as FieldError;

  // Add a state variable to track the selected value
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <div
            className={`flex items-center justify-between border ${
              selectedValue === option.value
                ? "border-green-500"
                : "border-black-50"
            } rounded-lg p-4 cursor-pointer`}
            key={option.value}
            onClick={() => {
              setValue(name, option.label);
              setSelectedValue(option.value);
            }}
          >
            <div className="flex items-center gap-3">
              {option?.icon ? (
                <div
                  className={`${
                    selectedValue === option.value
                      ? "bg-green-500"
                      : "bg-black-50"
                  } rounded-full p-2.5`}
                >
                  <img
                    className="w-5 h-5"
                    src={`/src/assets/icons/ic_${option.icon}.svg`}
                    alt=""
                  />
                </div>
              ) : (
                <div
                  className={`rounded-full w-9 h-9${
                    selectedValue === option.value
                      ? " bg-green-200"
                      : " bg-green-50"
                  }`}
                ></div>
              )}

              <div>{option.label}</div>
            </div>
            {selectedValue === option.value && (
              <div
                className={`rounded-full p-1 w-6 h-6 bg-green-500 text-white flex items-center justify-center`}
              >
                <SvgColor src="/src/assets/icons/ic_check.svg" />
              </div>
            )}
          </div>
        ))}
      </div>

      <ErrorMessage error={error} />
    </div>
  );
};
