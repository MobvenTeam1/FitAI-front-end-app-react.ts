import React from "react";
import { tr } from "date-fns/locale";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export const CalendarView: React.FC = () => {
  const [selected, setSelected] = React.useState<Date | undefined>(undefined);
  return (
    <div className="border border-gray-50 shadow rounded-xl p-6">
      <DayPicker
        mode="single"
        captionLayout="dropdown-buttons"
        fromYear={1980}
        toYear={2024}
        locale={tr}
        selected={selected}
        onSelect={(newValue) => {
          setSelected(newValue);
        }}
      />
    </div>
  );
};
