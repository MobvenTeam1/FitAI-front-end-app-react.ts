import { FC, useState } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { ErrorMessage } from "../../../components/hook-form/RHFErrorMessage";

interface SelectProps {
  name: string;
  options: { value: string; label: string }[];
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
      <div className="flex flex-col gap-4 mt-24">
        {options.map((option) => (
          <div
            className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer hover:bg-gray-100 ${
              selectedValue === option.value ? "bg-gray-100" : ""
            }`}
            key={option.value}
            onClick={() => {
              setValue(name, option.label);
              setSelectedValue(option.value);
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className={`rounded-full w-9 h-9${
                  selectedValue ? " bg-white" : " bg-gray-100"
                }`}
              ></div>
              <div>{option.label}</div>
            </div>
            {selectedValue === option.value && (
              <div className={`w-6 h-6 rounded-full border-2 bg-black`}></div>
            )}
          </div>
        ))}
      </div>

      <ErrorMessage error={error} />
    </div>
  );
};
