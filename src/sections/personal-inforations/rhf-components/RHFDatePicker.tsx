import { FC, useState } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { ErrorMessage } from "../../../components/hook-form/RHFErrorMessage";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DatePickerProps {
  name: string;
}

export const RHFDatePicker: FC<DatePickerProps> = ({
  name,
  //   ...props
}) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const error: FieldError | undefined = errors[name] as FieldError;

  const [selected, setSelected] = useState<Dayjs | null>(dayjs(watch(name)));

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
        <DatePicker
          sx={{
            width: 1,
            "& .MuiInputBase-root": {
              borderRadius: "12px",
              border: "1px solid #e8e8e7",
              py: 1,
              pl: 2,
              pr: 4,
            },
            // "& .MuiInputLabel-outlined.Mui-focused": {
            //   color: "rgba(73, 69, 79, 1)",
            // },

            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#b1eb04",
              },
          }}
          value={selected}
          onChange={(newValue) => {
            setValue(name, newValue);
            setSelected(newValue);
          }}
        />
      </LocalizationProvider>

      <ErrorMessage error={error} />
    </div>
  );
};
