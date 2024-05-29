import { FC } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { ErrorMessage } from "../../../components/hook-form/RHFErrorMessage";
import SvgColor from "../../../components/svg-color";

interface CheckBoxProps {
  name: string;
  label?: string;
  direction?: "left" | "right";
  content?: React.ReactNode;
}

export const RHFCheckBox: FC<CheckBoxProps> = ({
  name,
  label,
  direction = "left",
  content,
}) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const isChecked = watch(name) as boolean;

  const error: FieldError | undefined = errors[name] as FieldError;

  return (
    <>
      <div
        className={`flex gap-1 items-center ${
          direction === "right" ? "flex-row-reverse" : ""
        }`}
        onClick={() => {
          setValue(name, !isChecked);
        }}
      >
        <div className="w-5 h-5 p-1 text-sm rounded-full bg-black-500 text-white flex items-center justify-center cursor-pointer">
          {isChecked && <SvgColor src={`/icons/ic_check.svg`} />}
        </div>
        {label ? (
          <p className="text-sm text-gray-300 font-semibold cursor-pointer select-none">
            {label}
          </p>
        ) : (
          content
        )}
      </div>
      <ErrorMessage error={error} />
    </>
  );
};
